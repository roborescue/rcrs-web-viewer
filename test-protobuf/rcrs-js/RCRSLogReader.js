var lzma = new LZMA("js/lzma2_worker-min.js");
function read_int32(byte_array) {
	value = ((byte_array[0]) << 24) + ((byte_array[1]) << 16) + ((byte_array[2]) << 8) + (byte_array[3])
	return value
}
function readRCRSLog(data, onready, progress_update) {
	console.log("decompressing ", data);
	lzma.decompress(data, function on_decompress_complete(result) {
		result = new Uint8Array(result)
		let simulation = new Simulation();
		var i = 0;
		while (result.length > 0) {
			size = read_int32(result)
			content = result.slice(4, 4 + size)
			log = proto.LogProto.deserializeBinary(content);
			i++;
			switch (log.getLogCase()) {
				case proto.LogProto.LogCase.START:
					console.log("Start Record is Find", log.getStart());
					break;
				case proto.LogProto.LogCase.COMMAND:
					simulation.processCommand(log.getCommand());
					console.log("Command Record is Find", log.getCommand());
					break;
				case proto.LogProto.LogCase.CONFIG:
					simulation.processConfig(log.getConfig());
					console.log("Config Record is Find", log.getConfig());
					break;
				case proto.LogProto.LogCase.INITIALCONDITION:
					simulation.processInitCondition(log.getInitialcondition());
					progress_update(0);
					console.log("Initialcondition Record is Find", log.getInitialcondition());
					break;
				case proto.LogProto.LogCase.UPDATE:
					simulation.processUpdate(log.getUpdate());
					progress_update(log.getUpdate().getTime());
					console.log("Update Record is Find", log.getUpdate());
					break;
				case proto.LogProto.LogCase.PERCEPTION:
					simulation.processPerception(log.getPerception());
					console.log("Perception Record is Find", log.getPerception());
					break;
				case proto.LogProto.LogCase.END:
					// progress_update(100);
					console.log("End Record is Find", log.getEnd());
					break;
			}

			result = result.slice(4 + size)
		}
		onready(simulation);
	});
}

class Simulation {
	worldmodels = {}
	constructor() {
	}
	getTotalTimeSteps() {
		return Object.keys(simulation.worldmodels).length - 1;
	}
	getWorld(time) {
		if (!this.worldmodels[time]) {
			if (time == 0)
				this.worldmodels[time] = new WorldModel(0);
			else if (this.worldmodels[time - 1])
				this.worldmodels[time] = this.worldmodels[time - 1].cloneForNextCycle();
			else {
				alert(`No information exist for cycle ${time - 1} but requested for ${time}`)
			}
		}
		return this.worldmodels[time];
	}

	processCommand(command) {
		let time = command.getTime();
		this.getWorld(time).addCommands(command.getCommandsList());
	}
	processConfig(configlog) {
		this.config = configlog.getConfig().getDataMap().map_;
		//let keys = Object.keys(config);
		// get a specific value: 
		//timesteps = config['kernel.timesteps'].value
	}

	processInitCondition(init) {
		let entities = init.getEntitiesList();
		this.getWorld(0).processEntities(entities);
	}

	processPerception(perception) {
		let time = perception.getTime()
		this.getWorld(time).addPerception(perception)
	}
	processUpdate(update) {
		let time = update.getTime()
		this.getWorld(time).update(update.getChanges())
	}

	getConfig() {
		return this.config;
	}
}

class WorldModel {
	commands = []
	changeset = null;
	perceptions = {}
	entities = {};
	entitiesByUrn = {};

	constructor(time) {
		this.time = time;
	}
	cloneForNextCycle() {
		let newWorld = new WorldModel(this.time + 1);
		Object.keys(this.entities).forEach(eid => {
			newWorld.entities[eid] = this.entities[eid].clone();
		});
		newWorld.refresh();
		return newWorld;
	}
	update(changeset) {
		this.changeset=changeset;
		let changes = changeset.getChangesList()
		changes.forEach(c => {
			let entity = this.entities[c.getEntityid()];
			if (!entity) {
				entity = new Entity(c)
				this.entities[entity.id] = entity;
			} else
				entity.update(c.getPropertiesList())
		});
		let deletedIds = changeset.getDeletesList()
		deletedIds.forEach(id => delete this.entities[id])
		this.refresh()
	}
	refresh() {
		this.entitiesByUrn = {}
		Object.keys(this.entities).forEach(eid => {
			let e = this.entities[eid];
			if (!this.entitiesByUrn[e.urn])
				this.entitiesByUrn[e.urn] = []
			this.entitiesByUrn[e.urn].push(e)
		});
	}
	addCommands(commandLists) {
		commandLists.forEach(c => {
			this.commands.push(c);
			// urn = command.getUrn();
			// components = command.getComponentsMap().map_;
			// componentKeys = Object.keys(components);
		});
	}
	processEntities(entities) {
		entities.forEach(entityProto => {
			let e = new Entity(entityProto)
			this.entities[e.id] = e;
		});
		this.refresh();
	}
	addPerception(perception) {
		let entityId = perception.getEntityid()
		// let Communications = perception.getCommunicationsList()
		// let changeset = perception.getVisible()
		this.perceptions[entityId] = perception;
	}


}



class Entity {

	properties = {}

	constructor(entityProto) {
		if (!entityProto) return;
		this.id = entityProto.getEntityid();
		this.urn = entityProto.getUrn();
		let props = entityProto.getPropertiesList();
		this.update(props)
	}
	update(props) {
		props.forEach(prop => {
			let p = new Property(prop)
			this.properties[p.urn] = p;
		});
	}
	clone() {
		let newE = new Entity()
		newE.id = this.id;
		newE.urn = this.urn;
		Object.keys(this.properties).forEach(u => {
			newE.properties[u] = this.properties[u].clone()
		});
		return newE;
	}
	toString() {
		return `${URN.MAP[this.urn]}(${this.id})`
	}
}

class Property {
	constructor(propertyProto) {
		this.urn = propertyProto.getUrn();
		this.isDefined = propertyProto.getDefined();
		this.value = null;
		this.type = propertyProto.getValueCase();
		switch (propertyProto.getValueCase()) {
			case proto.PropertyProto.ValueCase.BOOLVALUE:
				this.value = propertyProto.getBoolvalue();
				break;
			case proto.PropertyProto.ValueCase.BYTELIST:
				this.value = propertyProto.getBytelist();
				break;
			case proto.PropertyProto.ValueCase.DOUBLEVALUE:
				this.value = propertyProto.getDoublevalue();
				break;
			case proto.PropertyProto.ValueCase.EDGELIST:
				this.value = propertyProto.getEdgelist().getEdgesList();
				// Example Usage
				//edges.forEach(e=>{
				// 	  let startX=e.getStartx();
				//       let startY=e.getStarty();
				//       let endX=e.getEndx();
				//       let endY=e.getEndy();
				//       let neighbour=e.getNeighbour();
				//});
				break;
			case proto.PropertyProto.ValueCase.INTLIST:
				this.value = propertyProto.getIntlist();
				break;
			case proto.PropertyProto.ValueCase.INTMATRIX:
				this.value = propertyProto.getIntmatrix();
				break;
			case proto.PropertyProto.ValueCase.INTVALUE:
				this.value = propertyProto.getIntvalue();
				break;
			case proto.PropertyProto.ValueCase.POINT2D:
				this.value = propertyProto.getPoint2d();
				// Example Usage
				//let x=  value.getX();
				//let y=  value.getY();
				break;
		}
	}
	clone() {
		// not needed to clone with new Entity for saving memory
		return this;
	}
	toString() {
		return URN.MAP[this.urn] + ": " + (this.isDefined ? this.value : "undefined");
	}
}





proto.MessageProto.prototype.toString = function () {
	let components = this.getComponentsMap().map_;
	let res = `${URN.MAP[this.getUrn()]}: `;
	Object.keys(components).forEach(c => {
		res += URN.MAP[c] + "=" + components[c].value.toString() + " "
	});
	return res;
};



proto.PerceptionLogProto.prototype.toString = function () {
	let entityId = this.getEntityid()
	let communications=this.getCommunicationsList()
	let time = this.getTime()
	let changeset = this.getVisible()
	return `time=${time} entityId=${entityId} changeset=${changeset.toString()} communications=${communications.toString()} `; 
};


proto.ChangeSetProto.prototype.toString = function () {
	deletedIds=this.getDeletesList()
	let res=`deleted=${deletedIds} updated=`;
    changes=this.getChangesList()
    changes.forEach(c=>{
		res+=c.getEntityid()+",";
        // c.getUrn()
        // c.getPropertiesList()
	});
	return res;
};
