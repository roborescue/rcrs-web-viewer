/*!
 * RCRS Web Viewer v0.2.1602844712031
 * https://github.com/roborescue/rcrs-web-viewer
 * 
 * Released under the BSD-3-Clause license
 * https://opensource.org/licenses/BSD-3-Clause
 *
 * Date: 2020-10-16T10:38:32.031Z (Fri, 16 Oct 2020 10:38:32 GMT)
 */

//
// Drawing Setting
//

/** @const {boolean} */
const DRAW_BORDER_LINE = true;

/** @const {number} */
const DRAW_BORDER_LINE_WIDTH = 50;

/** @const {number} */
const DRAW_AGENT_CIRCLE_RADIUS = 1500;

/** @const {number} */
const DRAW_CIVILIAN_CIRCLE_RADIUS = 1200;

/** @const {number} */
const DRAW_AGENT_CIRCLE_CUTS = 15;

//
// Commands Setting
//

/** @const {number} */
const COMMAND_EXTINGUISH_LINE_WIDTH = 50;

/** @const {number} */
const COMMAND_MOVEHISTORY_LINE_WIDTH = 50;

/** @const {number} */
const COMMAND_CLEARAREA_LINE_WIDTH = 50;

/** @const {number} */
const COMMAND_CLEARAREA_CLEARWIDTH = 2000;

/** @const {number} */
const COMMAND_CLEARAREA_CLEARLENGTH = 10000;

/** @const {number} */
const COMMAND_RESCUE_MARGIN = 300;

/** @const {number} */
const COMMAND_RESCUE_CUTS = 13;

//
// Entity Names
//

/** @const {string} */
const ENTITY_NAME_CIVILIAN = "Civilian";

/** @const {string} */
const ENTITY_NAME_AMBULANCE_TEAM = "Ambulance team";

/** @const {string} */
const ENTITY_NAME_FIRE_BRIGADE = "Fire brigade";

/** @const {string} */
const ENTITY_NAME_POLICE_FORCE = "Police force";

/** @const {string} */
const ENTITY_NAME_BLOCKADE = "Blockade";

/** @const {string} */
const ENTITY_NAME_HYDRANT = "Hydrant";

/** @const {string} */
const ENTITY_NAME_ROAD = "Road";

/** @const {string} */
const ENTITY_NAME_REFUGE = "Refuge";

/** @const {string} */
const ENTITY_NAME_BUILDING = "Building";

/** @const {string} */
const ENTITY_NAME_GAS_STATION = "Gas Station";

/** @const {string} */
const ENTITY_NAME_AMBULANCE_CENTRE = "Ambulance centre";

/** @const {string} */
const ENTITY_NAME_FIRE_STATION = "Fire station";

/** @const {string} */
const ENTITY_NAME_POLICE_OFFICE = "Police office";

//
// Entity Attributes
//

/** @const {string} */
const ENTITY_ATTR_ID = "Id";

/** @const {string} */
const ENTITY_ATTR_ENTITY_NAME = "EntityName";

/** @const {string} */
const ENTITY_ATTR_HP = "urn:rescuecore2.standard:property:hp";

/** @const {string} */
const ENTITY_ATTR_FIERYNESS = "urn:rescuecore2.standard:property:fieryness";

/** @const {string} */
const ENTITY_ATTR_APEXES = "urn:rescuecore2.standard:property:apexes";

/** @const {string} */
const ENTITY_ATTR_POSITION = "urn:rescuecore2.standard:property:position";

/** @const {string} */
const ENTITY_ATTR_POSITIONHISTORY = "urn:rescuecore2.standard:property:positionhistory";

//
// Commands
//

/** @const {string} */
const COMMAND_EXTINGUISH = "urn:rescuecore2.standard:message:extinguish";

/** @const {string} */
const COMMAND_CLEAR = "urn:rescuecore2.standard:message:clear";

/** @const {string} */ // X, Y
const COMMAND_CLEARAREA = "urn:rescuecore2.standard:message:clear_area";

/** @const {string} */ // X, Y
const COMMAND_RESCUE = "urn:rescuecore2.standard:message:rescue";

//
// Icon Setting
//

/** @const {number} */
const SETTING_ICON_RADIUS = 7000;

//
// Worker Commands
//

/** @const {string} */
const WORKER_COMMAND_LOADDATA = 'load_data';

/** @const {string} */
const WORKER_COMMAND_IMPORTSCRIPT = 'import_script';

/** @const {string} */
const WORKER_COMMAND_SETICONS = 'sync_icons';

/** @const {string} */
const WORKER_COMMAND_PROGRESSREPORT = 'progress_report';

/** @const {string} */
const WORKER_COMMAND_MAPBOUNDS = 'map_bounds';

/** @const {string} */
const WORKER_COMMAND_CYCLEDATA = 'cycle_data';

/** @const {string} */
const WORKER_COMMAND_INFO = 'info';

/** @const {string} */
const WORKER_COMMAND_BASEDATA = 'base_data';

//
// HP Setting
//

/** @const {integer} */
const HUMAN_HP_MAX = 10000;

/** @const {integer} */
const HUMAN_HP_INJURED = 7500;

/** @const {integer} */
const HUMAN_HP_CRITICAL = 1000;

//
// Humans Color
//

/** @const {float[]} */
const COLOR_HUMAN_TYPE_CIVILIAN = [0, 1, 0];

/** @const {float[]} */
const COLOR_HUMAN_TYPE_FIRE_BRIGADE = [1, 0, 0];

/** @const {float[]} */
const COLOR_HUMAN_TYPE_AMBULANCE_TEAM = [1, 1, 1];

/** @const {float[]} */
const COLOR_HUMAN_TYPE_POLICE_FORCE = [0, 0, 1];

/** @const {float[]} */
const COLOR_HUMAN_TYPE_DEAD = [0, 0, 0];

//
// Surfaces Color
//

/** @const {float[]} */
const COLOR_ROAD_DEFAULT = [0.72, 0.72, 0.72];

/** @const {float[]} */
const COLOR_BLOCKADE_DEFAULT = [0, 0, 0];

/** @const {float[]} */
const COLOR_BORDER_DEFAULT = [0, 0, 0];

//
// Commands Color
//

/** @const {float[]} */
const COLOR_COMMAND_EXTINGUISH = [0.2, 0.2, 1];

/** @const {float[]} */
const COLOR_COMMAND_MOVEHISTORY = [1, 0, 0];

/** @const {float[]} */
const COLOR_COMMAND_CLEARAREA = [0.4, 0.4, 1];

/** @const {number} */
const COLOR_COMMAND_RESCUE = [0.9, 0.9, 0.9];

//
// Buildings Color
//

/** @const {float[]} */
const COLOR_BUILDING_FIERYNESS_UNBURNT = [0.52, 0.52, 0.52];

/** @const {float[]} */
const COLOR_BUILDING_FIERYNESS_HEATING = [0.69, 0.69, 0.21];

/** @const {float[]} */
const COLOR_BUILDING_FIERYNESS_BURNING = [0.8, 0.47, 0.19];

/** @const {float[]} */
const COLOR_BUILDING_FIERYNESS_INFERNO = [0.62, 0.20, 0.20];

/** @const {float[]} */
const COLOR_BUILDING_FIERYNESS_WATER_DAMAGE = [0.19, 0.47, 0.51];

/** @const {float[]} */
const COLOR_BUILDING_FIERYNESS_MINOR_DAMAGE = [0.39, 0.54, 0.82];

/** @const {float[]} */
const COLOR_BUILDING_FIERYNESS_MODERATE_DAMAGE = [0.39, 0.27, 0.74];

/** @const {float[]} */
const COLOR_BUILDING_FIERYNESS_SEVERE_DAMAGE = [0.31, 0.23, 0.54];

/** @const {float[]} */
const COLOR_BUILDING_FIERYNESS_BURNT_OUT = [0.0, 0.0, 0.0];

/**
 * Creates Entity object.
 * 
 * @param {Object} data 
 * @example 
 * let entityObject = new Entity(entity);
 */
function Entity(data){
    Object.assign(this, data);

    if(ENTITY_ATTR_ID in data){
        this[ENTITY_ATTR_ID] = parseInt(data[ENTITY_ATTR_ID]);
    }

    if(ENTITY_ATTR_ENTITY_NAME in data){
        this[ENTITY_ATTR_ENTITY_NAME] = data[ENTITY_ATTR_ENTITY_NAME].trim();
    }

    if(ENTITY_ATTR_HP in data){
        this[ENTITY_ATTR_HP] = parseInt(data[ENTITY_ATTR_HP]);
    }

    if(ENTITY_ATTR_FIERYNESS in data){
        this[ENTITY_ATTR_FIERYNESS] = parseInt(data[ENTITY_ATTR_FIERYNESS]);
    }
}


/**
 * @namespace
 * @property {function} getDarker
 * @property {function} getBuildingColor
 * @property {function} getHumanColor
 * @property {function} getColor
 */
EntityColor = {};

/**
 * Darken the color
 * 
 * @param {float[]} color - color
 * @returns {float[]} - dark color
 */
EntityColor.getDarker = function(color){
    return [
        color[0] / 2,
        color[1] / 2,
        color[2] / 2
    ];
}

/**
 * Get building color
 * 
 * @param {integer} fieryness - fieryness value of building (0-8)
 * @returns {float[]} color
 */
EntityColor.getBuildingColor = function(fieryness){
    switch(fieryness){
        case 0: //UNBURNT
            return COLOR_BUILDING_FIERYNESS_UNBURNT;
        case 1: //HEATING
            return COLOR_BUILDING_FIERYNESS_HEATING;
        case 2: //BURNING
            return COLOR_BUILDING_FIERYNESS_BURNING;
        case 3: //INFERNO
            return COLOR_BUILDING_FIERYNESS_INFERNO;
        case 4: //WATER_DAMAGE
            return COLOR_BUILDING_FIERYNESS_WATER_DAMAGE;
        case 5: //MINOR_DAMAGE
            return COLOR_BUILDING_FIERYNESS_MINOR_DAMAGE;
        case 6: //MODERATE_DAMAGE
            return COLOR_BUILDING_FIERYNESS_MODERATE_DAMAGE;
        case 7: //SEVERE_DAMAGE
            return COLOR_BUILDING_FIERYNESS_SEVERE_DAMAGE;
        case 8: //BURNT_OUT
            return COLOR_BUILDING_FIERYNESS_BURNT_OUT;
    }
    return COLOR_BUILDING_FIERYNESS_UNBURNT;
}

/**
 * Get Human color
 * 
 * @param {string} type - human's EntityName
 * @param {integer} hp - HP value of human
 * @returns {float[]} - color
 */
EntityColor.getHumanColor = function(type, hp){
    if(hp == 0)
        return COLOR_HUMAN_TYPE_DEAD;

    let color;
    switch (type) {
        case ENTITY_NAME_CIVILIAN:
            color = COLOR_HUMAN_TYPE_CIVILIAN;
            break;
        case ENTITY_NAME_FIRE_BRIGADE:
            color = COLOR_HUMAN_TYPE_FIRE_BRIGADE;
            break;
        case ENTITY_NAME_AMBULANCE_TEAM:
            color = COLOR_HUMAN_TYPE_AMBULANCE_TEAM;
            break;
        case ENTITY_NAME_POLICE_FORCE:
            color = COLOR_HUMAN_TYPE_POLICE_FORCE;
            break;
    }

    if(hp < HUMAN_HP_CRITICAL)
        color = this.getDarker(color);
    
    if(hp < HUMAN_HP_INJURED)
        color = this.getDarker(color);

    if(hp < HUMAN_HP_MAX)
        color = this.getDarker(color);

    return color;
}

/**
 * Get color of Entity
 * 
 * @param {Object} entity - Entity object
 * @returns {float[]} - color
 */
EntityColor.getColor = function(entity){
    if(EntityHandler.isRoad(entity))
        return COLOR_ROAD_DEFAULT;
    if(EntityHandler.isBuilding(entity))
        return this.getBuildingColor(entity[ENTITY_ATTR_FIERYNESS]);
    if(EntityHandler.isBlockade(entity))
        return COLOR_BLOCKADE_DEFAULT;

    if(EntityHandler.isHuman(entity))
        return this.getHumanColor(
            EntityHandler.getType(entity),
            EntityHandler.getHP(entity)
        );

    return [0, 0, 0];
};

/**
 * @namespace
 * @property {string[]} humans
 * @property {string[]} surfaces
 * @property {string[]} buildings
 * @property {string[]} roads
 * @property {string[]} blockades
 * @property {function} getColor - Get color of entity
 * @property {function} getType - Get EntityName of Entity
 * @property {function} getHP - Get HP value of Entity
 * @property {function} getIcon - Get related icon of entity
 * @property {function} isRoad - Is Road
 * @property {function} isHuman - Is Humand
 * @property {function} isSurface - Is Surface
 * @property {function} isBlockade - Is Blockade
 * @property {function} isBuilding - Is Building
 * @property {function} getId - Get ID
 * @property {function} getCenterOfPolygon - Get center of polygon
 * @property {function} getHumanVertices - Get vertices of humans shape
 * @property {function} getVertices - Get vertices of entity
 */
var EntityHandler = {
};

/**
 * Array includes EntityName of humans 
 * 
 * @type {string[]}
 */
EntityHandler.humans = [
    ENTITY_NAME_CIVILIAN, 
    ENTITY_NAME_AMBULANCE_TEAM, 
    ENTITY_NAME_FIRE_BRIGADE,
    ENTITY_NAME_POLICE_FORCE,
];

/**
 * Array includes EntityName of surfaces 
 * 
 * @type {string[]}
 */
EntityHandler.surfaces = [
    ENTITY_NAME_ROAD, 
    ENTITY_NAME_BUILDING, 
    ENTITY_NAME_REFUGE,
    ENTITY_NAME_BLOCKADE,
    ENTITY_NAME_HYDRANT,
    ENTITY_NAME_GAS_STATION,
    ENTITY_NAME_AMBULANCE_CENTRE,
    ENTITY_NAME_FIRE_STATION,
    ENTITY_NAME_POLICE_OFFICE
];

/**
 * Array includes EntityName of buildings 
 * 
 * @type {string[]}
 */
EntityHandler.buildings = [
    ENTITY_NAME_BUILDING, 
    ENTITY_NAME_REFUGE,
    ENTITY_NAME_GAS_STATION,
    ENTITY_NAME_AMBULANCE_CENTRE,
    ENTITY_NAME_FIRE_STATION,
    ENTITY_NAME_POLICE_OFFICE
];

/**
 * Array includes EntityName of roads 
 * 
 * @type {string[]}
 */
EntityHandler.roads = [
    ENTITY_NAME_ROAD,
    ENTITY_NAME_HYDRANT
];

/**
 * Array includes EntityName of blockades 
 * 
 * @type {string[]}
 */
EntityHandler.blockades = [
    ENTITY_NAME_BLOCKADE
];

/**
 * Get color of Entity
 * 
 * @param {Object} entity entity object
 * @returns {float[]} - color
 */
EntityHandler.getColor = function(entity){
    return EntityColor.getColor(entity);
};

/**
 * Get EntityName of Entity
 * 
 * @param {Object} entity entity object
 * @returns {string} entity name
 */
EntityHandler.getType = function(entity){
    return entity[ENTITY_ATTR_ENTITY_NAME];
}

/**
 * Get HP value of Entity
 * 
 * @param {Object} entity entity object
 * @returns {integer} HP
 */
EntityHandler.getHP = function(entity){
    return entity[ENTITY_ATTR_HP];
}

/**
 * Get related icon of entity
 * @param {Object} entity entity object
 * @returns {string|boolean} returns boolean if entity hasn't any icon
 */
EntityHandler.getIcon = function(entity){
    switch(this.getType(entity)){
        case ENTITY_NAME_HYDRANT:
            return ICONS_HYDRANT;
        case ENTITY_NAME_POLICE_OFFICE:
            return ICONS_POLICE_OFFICE;
        case ENTITY_NAME_AMBULANCE_CENTRE:
            return ICONS_AMBULANCE_CENTRE;
        case ENTITY_NAME_FIRE_STATION:
            return ICONS_FIRE_STATION;
        case ENTITY_NAME_REFUGE:
            return ICONS_REFUGE;
        case ENTITY_NAME_GAS_STATION:
            return ICONS_GAS_STATION;
    }
    return false;
};

/**
 * Is Road
 * 
 * @param {Object} entity entity object
 * @returns {boolean} Is Road
 */
EntityHandler.isRoad = function(entity){
    return this.roads.includes(
        this.getType(entity)
    );
} 

/**
 * Is Human
 * 
 * @param {Object} entity entity object
 * @returns {boolean} Is Human
 */
EntityHandler.isHuman = function(entity){
    return this.humans.includes(
        this.getType(entity)
    );
}

/**
 * Is Surface
 * 
 * @param {Object} entity entity object
 * @returns {boolean} Is Surface
 */
EntityHandler.isSurface = function(entity){
    return this.surfaces.includes(
        this.getType(entity)
    );
}

/**
 * Is Blockade
 * 
 * @param {Object} entity entity object
 * @returns {boolean} Is Blockade
 */
EntityHandler.isBlockade = function(entity){
    return this.blockades.includes(
        this.getType(entity)
    );
}

/**
 * Is Building
 * 
 * @param {Object} entity entity object
 * @returns {boolean} Is Building
 */
EntityHandler.isBuilding = function(entity){
    return this.buildings.includes(
        this.getType(entity)
    );
}

/**
 * Get ID
 * 
 * @param {Object} entity entity object
 * @returns {integer} entity id
 */
EntityHandler.getId = function(entity){
    return entity[ENTITY_ATTR_ID];
}

/**
 * Get position history
 * 
 * @param {Object} entity entity object
 * @returns {float[]} line sequence
 */
EntityHandler.getPositionHistory = function(entity){
    return entity[ENTITY_ATTR_POSITIONHISTORY];
}

/**
 * Get center of polygon
 * 
 * @param {Object} entity entity object
 * @returns {float[]|boolean} coordinates (returns false when entity hasn't apexes)
 */
EntityHandler.getCenterOfPolygon = function(entity){
    let apexes = entity[ENTITY_ATTR_APEXES];
    if(apexes){
        let sum = [0, 0], vl = apexes.length;
        for(let i = 0;i < vl;i ++){
            sum[i % 2] += apexes[i];
        }
        sum[0] /= vl / 2;
        sum[1] /= vl / 2;
        return sum;
    }
    return false;
}

/**
 * Get vertices of humans shape
 * 
 * @param {float} cx - X value of humans position
 * @param {*} cy - Y value of humans position
 * @param {*} r - Radius
 * @param {*} cuts - Circle cuts
 * @returns {float[]} - apexes
 */
EntityHandler.getHumanVertices = function(cx, cy, r=DRAW_AGENT_CIRCLE_RADIUS,cuts=DRAW_AGENT_CIRCLE_CUTS){
    let x,y;
    let cut = (Math.PI*2)/cuts;
    let ox = cx + r * Math.cos(0);
    let oy = cy + r * Math.sin(0);
    let result = [ox,oy];

    for(let i = 0;i <= Math.PI * 2;i += cut){
        x = cx + r * Math.cos(i);
        y = cy + r * Math.sin(i);
        result.push(x,y);
    }

    return result;
}

/**
 * Get vertices of entity
 * 
 * @param {Object} entity entity object
 * @returns {float[]} - vertices
 */
EntityHandler.getVertices = function(entity){
    if(this.isSurface(entity)){
        return entity[ENTITY_ATTR_APEXES];
    }
    else if(this.isHuman(entity)){
        let position = entity[ENTITY_ATTR_POSITION];

        let radius;
        if(this.getType(entity) == ENTITY_NAME_CIVILIAN){
            radius = DRAW_CIVILIAN_CIRCLE_RADIUS
        }
        else{
            radius = DRAW_AGENT_CIRCLE_RADIUS;
        }

        return this.getHumanVertices(
            position[0], 
            position[1], 
            radius
        );
    }
    return [];
}


/**
 * Get histirian key of color.
 * 
 * @param {float[]} color color
 * @returns {string} key
 */
function getKeyFromColor(color){
    return "" + color[0] + " " + color[1] + " " + color[2] + " " + 1;
}

/**
 * Creates empty Historian with empty colors
 * 
 * @returns {Object} history manager
 */
function OrdinalHistorian(){
    let historian = new Historian();
    historian.addKey(getKeyFromColor(COLOR_ROAD_DEFAULT));
    historian.addKey(getKeyFromColor(COLOR_BUILDING_FIERYNESS_UNBURNT));
    historian.addKey(getKeyFromColor(COLOR_BUILDING_FIERYNESS_HEATING));
    historian.addKey(getKeyFromColor(COLOR_BUILDING_FIERYNESS_BURNING));
    historian.addKey(getKeyFromColor(COLOR_BUILDING_FIERYNESS_INFERNO));
    historian.addKey(getKeyFromColor(COLOR_BUILDING_FIERYNESS_WATER_DAMAGE));
    historian.addKey(getKeyFromColor(COLOR_BUILDING_FIERYNESS_MINOR_DAMAGE));
    historian.addKey(getKeyFromColor(COLOR_BUILDING_FIERYNESS_MODERATE_DAMAGE));
    historian.addKey(getKeyFromColor(COLOR_BUILDING_FIERYNESS_SEVERE_DAMAGE));
    historian.addKey(getKeyFromColor(COLOR_BUILDING_FIERYNESS_BURNT_OUT));
    historian.addKey(getKeyFromColor(COLOR_BLOCKADE_DEFAULT));
    historian.addKey(getKeyFromColor(COLOR_BORDER_DEFAULT));
    historian.addKey(getKeyFromColor(COLOR_COMMAND_MOVEHISTORY));
    historian.addKey(getKeyFromColor(COLOR_COMMAND_CLEARAREA));
    historian.addKey(getKeyFromColor(COLOR_COMMAND_EXTINGUISH));
    historian.addKey(getKeyFromColor(COLOR_HUMAN_TYPE_DEAD));
    historian.addKey(getKeyFromColor(COLOR_HUMAN_TYPE_CIVILIAN));
    historian.addKey(getKeyFromColor(COLOR_HUMAN_TYPE_FIRE_BRIGADE));
    historian.addKey(getKeyFromColor(COLOR_COMMAND_RESCUE));
    historian.addKey(getKeyFromColor(COLOR_HUMAN_TYPE_AMBULANCE_TEAM));
    historian.addKey(getKeyFromColor(COLOR_HUMAN_TYPE_POLICE_FORCE));
    return historian;
}

/**
 * Multiplies each point's Y value by -1
 * 
 * @param {float[]} vertexList vertex list
 * @returns {float[]} mirrored vertex list
 */
function mirrorYs(vertexList){
    return vertexList.map((value, index) => value * (index % 2 == 1 ? -1 : 1))
}

/**
 * 
 * @param {Object} data data object
 * @param {function} loadFunction load function
 */
function WorkerDataLoader(data, loadFunction=()=>{}){

    /**
     * Get cycle object.
     * 
     * @param {integer} cycle cycle number
     * @returns {Object[]} cycle object
     */
    this.getCycleObject = function(cycle){
        return this.cycles[cycle];
    }
    
    /**
     * Get cycles number.
     * 
     * @returns {integer} cycles number
     */
    this.getCyclesNumber = function(){
        return this.cycles.length;
    }

    /**
     * Remove specific cycles data from memory.
     * 
     * @param {integer} cycle cycle number
     */
    this.releaseCycleMemory = function(cycle){
        delete this.cycles[cycle];
    }

    /**
     * Get info object.
     * 
     * @returns {Object} info object
     */
    this.getInfoObject = function(){
        return this.info;
    }

    /**
     * Push given entity to ``WorkerDataLoader.entitiesWithIcon`` 
     * if entity has icon.
     * 
     * @param {Object} entity entity object
     */
    this.checkForIcon = function(entity){
        let icon = EntityHandler.getIcon(entity);
        if(icon){
            this.entitiesWithIcon.push(entity);
        }
    }

    /**
     * Post info object of given data
     * 
     * @param {Object} data data object
     * @param {function} loadFunction load function
     */
    this.fillAndPostInfo = function(data, loadFunction){
        data[0].lastCycle = data.length - 2;
        postInfo(data[0]);
    }

    /**
     * Create base cycle
     * 
     * @param {Object} data data object
     * @param {function} loadFunction load function
     */
    this.createBaseCycle = function(data, loadFunction){
        this.minX = Number.MAX_SAFE_INTEGER;
        this.minY = Number.MAX_SAFE_INTEGER;
        this.maxX = Number.MIN_SAFE_INTEGER;
        this.maxY = Number.MIN_SAFE_INTEGER;
        
        let map = data[1];
        let entities = {all: {}, building: {}, road: {}, blockade:{}, human:{}};
        for(let i = 0;i < map.Entities.length;i ++){
            let entity = new Entity(map.Entities[i]);
            this.checkForIcon(entity);
            let entityId = EntityHandler.getId(entity);
            entities.all[entityId] = entity;
            if(EntityHandler.isHuman(entity)) {
                entities.human[entityId] = entity;
            }
            else if(EntityHandler.isBlockade(entity)){
                entities.blockade[entityId] = entity;
            }
            else if(EntityHandler.isRoad(entity)){
                entities.road[entityId] = entity;
            }
            else{
                entities.building[entityId] = entity;
            }
            
            if(EntityHandler.isSurface(entity)){
                let entityVertices = EntityHandler.getVertices(entity);
                for(let j = 0;j < entityVertices.length;j = j + 2){
                    let px = entityVertices[j];
                    let py = entityVertices[j + 1];

                    if(px < this.minX){
                        this.minX = px;
                    }
                    if(py < this.minY){
                        this.minY = py;
                    }
                    if(px > this.maxX){
                        this.maxX = px;
                    }
                    if(py > this.maxY){
                        this.maxY = py;
                    }
                }
            }
        }

        postMapbounds(this.minX, this.minY, this.maxX, this.maxY);
        loadFunction("Map entities are loaded.");
        this.cycles = [entities];
        this.postCycleAfterBake(0, entities, map.Info, map.Commands);
    }

    /**
     * Fill given cycle
     * 
     * @param {Object} cycle changes of the cycle
     */
    this.fillCycle = function(cycle, data){
        let prevCycleNumber = this.cycles.length - 1;
        
        // Deep clone last cycle
        let newCycle = JSON.parse(JSON.stringify(
            this.getCycleObject(prevCycleNumber)
        ));
        // this.releaseCycleMemory(prevCycleNumber);
        newCycle.road = {};

        let thisCycle = data[cycle + 1];

        // Remove deleted entities
        for(let j in thisCycle.DeletedEntities){
            let entityId = thisCycle.DeletedEntities[j];
            let entityObject = newCycle.all[entityId];

            if(EntityHandler.isHuman(entityObject)) {
                delete newCycle.human[entityId];
            }
            else if(EntityHandler.isBlockade(entityObject)){
                delete newCycle.blockade[entityId];
            }
            else if(EntityHandler.isRoad(entityObject)) {
                delete newCycle.road[entityId];
            }
            else{
                delete newCycle.building[entityId];
            }

            delete newCycle.all[entityId];
        }

        // Fill new or changed entities
        for(let j in thisCycle.Entities){
            let entityObject = thisCycle.Entities[j];
            let id = EntityHandler.getId(entityObject);
            let entity, entityId;

            if(id in newCycle.all){
                Object.assign(newCycle.all[id], new Entity(entityObject));
                entity = newCycle.all[id];
                entityId = EntityHandler.getId(entity);
            }
            else{
                entity = new Entity(entityObject);
                entityId = EntityHandler.getId(entity);
                newCycle.all[entityId] = entity;
            }

            if(EntityHandler.isHuman(entity)) {
                newCycle.human[entityId] = entity;
            }
            else if(EntityHandler.isBlockade(entity)){
                newCycle.blockade[entityId] = entity;
            }
            else if(EntityHandler.isRoad(entity)) {
                newCycle.road[entityId] = entity;
            }
            else{
                newCycle.building[entityId] = entity;
            }
        }

        this.cycles.push(newCycle);
        this.postCycleAfterBake(cycle, newCycle, thisCycle.Info, thisCycle.Commands);
    }

    /**
     * Fill cycles
     * 
     * @param {Object} data data object
     * @param {function} loadFunction load function
     */
    this.fillCycles = function(data, loadFunction){
        for(let cycle = 1;cycle < data.length - 1;cycle ++){
            this.fillCycle(cycle, data);
        }
        loadFunction("Game cycle entities are loaded.");
    }

    /**
     * Post given cycles Historian. (Create Historian object from entities)
     * 
     * @param {integer} cycle cycle number
     * @param {Object} data cycle data
     * @param {Object} info info object
     * @param {Object[]} commands array of command objects
     */
    this.postCycleAfterBake = function(cycle, data, info, commands){
        let historyManager = new HistoryManager([
            this.baseHistorian.clone()
        ]);
        historyManager = this.fillHistoryWithCycleObject(
            historyManager, 
            data,
            cycle
        );
        historyManager = this.fillHistoryWithCycleCommands(
            historyManager, 
            commands,
            data
        );
        postCycleData(cycle, historyManager.getActiveHistorian(), info);
    }

    /**
     * Fill history with cycle commands.
     * 
     * @param {Object} historyManager object of ``HistoryManager``
     * @param {Object[]} commands array of command objects
     * @param {Object} cycleData cycle data
     */
    this.fillHistoryWithCycleCommands = function(historyManager, commands=[], cycleData){
        for (const command of commands) {
            this.fillHistoryWithCycleCommand(historyManager, command, cycleData);
        }
        return historyManager;
    }

    /**
     * Fill history with cycle command.
     * 
     * @param {Object} historyManager object of ``HistoryManager``
     * @param {Object} command command object
     * @param {Object} data cycle data
     */
    this.fillHistoryWithCycleCommand = function(historyManager, command, data){
        let agentId, agentPosition;
        switch (command.Name) {
            case COMMAND_EXTINGUISH:
                agentId = parseInt(command.AgentId);
                let targetId = parseInt(command.Target);
                agentPosition = data.all[agentId][ENTITY_ATTR_POSITION];
                let targetPosition = EntityHandler.getCenterOfPolygon(
                    data.all[targetId]
                );

                historyManager.setColor(
                    COLOR_COMMAND_EXTINGUISH[0],
                    COLOR_COMMAND_EXTINGUISH[1],
                    COLOR_COMMAND_EXTINGUISH[2],
                    1
                );

                this.positionMaker.reset();
                this.positionMaker.addLine(
                    agentPosition[0],
                    -agentPosition[1],
                    targetPosition[0],
                    -targetPosition[1],
                    COMMAND_EXTINGUISH_LINE_WIDTH
                );
                historyManager.submitVanilla(
                    this.positionMaker.getPositionsList()
                );
                break;

            case COMMAND_CLEARAREA:
                agentId = parseInt(command.AgentId);
                agentPosition = data.all[agentId][ENTITY_ATTR_POSITION];
                let location_x = parseFloat(command.X);
                let location_y = parseFloat(command.Y);

                let A = [agentPosition[0], agentPosition[1]];
                let B = [location_x, location_y];
                let a = B[0] - A[0], 
                    b = B[1] - A[1];
                let vectorLen = Math.sqrt(a*a + b*b);

                let allowedLength = COMMAND_CLEARAREA_CLEARLENGTH;
                let lengthIsOK = allowedLength > vectorLen;
                
                if(! lengthIsOK){
                    let unitVector = [
                        a / vectorLen,
                        b / vectorLen
                    ];

                    B = [
                        A[0] + unitVector[0] * allowedLength,
                        A[1] + unitVector[1] * allowedLength
                    ];

                    a = B[0] - A[0], 
                    b = B[1] - A[1];

                    vectorLen = allowedLength;
                }

                let width = COMMAND_CLEARAREA_CLEARWIDTH;
                let U = [-b/vectorLen, a/vectorLen];
                
                let tmp1 = [A[0] + U[0] * width, A[1] + U[1] * width];
                let tmp2 = [A[0] - U[0] * width, A[1] - U[1] * width];
                let tmp3 = [B[0] - U[0] * width, B[1] - U[1] * width];
                let tmp4 = [B[0] + U[0] * width, B[1] + U[1] * width];
                
                historyManager.setColor(
                    COLOR_COMMAND_CLEARAREA[0],
                    COLOR_COMMAND_CLEARAREA[1],
                    COLOR_COMMAND_CLEARAREA[2],
                    1
                );
                this.positionMaker.reset();
                this.positionMaker.addClosedSequenceLine(
                    mirrorYs([
                        tmp1[0], tmp1[1],
                        tmp4[0], tmp4[1],
                        tmp3[0], tmp3[1],
                        tmp2[0], tmp2[1]
                    ]),
                    COMMAND_CLEARAREA_LINE_WIDTH
                );
                historyManager.submitVanilla(
                    this.positionMaker.getPositionsList()
                );
                break;

            case COMMAND_RESCUE:
                agentId = parseInt(command.AgentId);
                let entity = data.all[agentId];
                agentPosition = entity[ENTITY_ATTR_POSITION];
                
                this.positionMaker.reset();
                let mirroredVertices = mirrorYs(
                    EntityHandler.getHumanVertices(
                        agentPosition[0], 
                        agentPosition[1],
                        DRAW_AGENT_CIRCLE_RADIUS + COMMAND_RESCUE_MARGIN,
                        COMMAND_RESCUE_CUTS
                    )
                );
                this.positionMaker.addPolygon(
                    mirroredVertices
                );

                // let color = EntityHandler.getColor(entity);
                // historyManager.setColor(color[0], color[1], color[2], 1);
                historyManager.setColor(
                    COLOR_COMMAND_RESCUE[0], 
                    COLOR_COMMAND_RESCUE[1], 
                    COLOR_COMMAND_RESCUE[2], 
                    1
                );

                historyManager.submitVanilla(
                    this.positionMaker.getPositionsList()
                );
                break;
        }
    }

    /**
     * Fill history with cycle object.
     * 
     * @param {Object} historyManager object of ``HistoryManager``
     * @param {Object} cycleObject cycle object
     * @param {integer} cycle cycle number
     * @returns {Object} object of ``HistoryManager``
     */
    this.fillHistoryWithCycleObject = function(historyManager, cycleObject, cycle){
        if(cycle == 0){
            let h = new HistoryManager([OrdinalHistorian()]);
           
            let baseLineList = [];
            this.createLinesList(cycleObject.road, baseLineList);
            this.createLinesList(cycleObject.building, baseLineList);

            this.fillHistoryWithObject(h, cycleObject.road);
            this.fillBorderLines(h, baseLineList);
            postBaseData(h.getActiveHistorian());
        }

        this.fillHistoryWithObject(historyManager, cycleObject.building);
        this.fillHistoryWithObject(historyManager, cycleObject.blockade);
        this.fillHistoryWithObject(historyManager, cycleObject.human);
        this.fillHistoryWithHumanObjects(historyManager, cycleObject.human);
        this.fillHistoryWithObjectIcons(historyManager, this.entitiesWithIcon);

        return historyManager;
    }

    /**
     * Fill history with object of humans.
     * 
     * @param {Object} historyManager object of ``HistoryManager``
     * @param {Object} objectList object of objects
     * @returns {Object} object of ``HistoryManager``
     */
    this.fillHistoryWithHumanObjects = function(historyManager, objectList){
        for(let id in objectList){
            let entity = objectList[id];
            let positionHistory = EntityHandler.getPositionHistory(entity);
            if(positionHistory){
                this.positionMaker.reset();
                let mirroredHistory = mirrorYs(
                    positionHistory
                );
                this.positionMaker.addSequenceLine(
                    mirroredHistory,
                    COMMAND_MOVEHISTORY_LINE_WIDTH
                );

                let color = COLOR_COMMAND_MOVEHISTORY;
                historyManager.setColor(color[0], color[1], color[2], 1);

                historyManager.submitVanilla(
                    this.positionMaker.getPositionsList()
                );
            }
        }

        return historyManager;
    }

    /**
     * Fill history with object.
     * 
     * @param {Object} historyManager object of ``HistoryManager``
     * @param {Object} objectList object of objects
     * @returns {Object} object of ``HistoryManager``
     */
    this.fillHistoryWithObject = function(historyManager, objectList){
        for(let id in objectList){
            let entity = objectList[id];
            
            this.positionMaker.reset();
            let mirroredVertices = mirrorYs(
                EntityHandler.getVertices(entity)
            );
            this.positionMaker.addPolygon(
                mirroredVertices
            );

            // Draw Polygon
            let color = EntityHandler.getColor(entity);
            historyManager.setColor(color[0], color[1], color[2], 1);
            
            // let positionsList = this.positionMaker.getPositionsList();
            historyManager.submitVanilla(
                this.positionMaker.getPositionsList()
            );
        }
        
        return historyManager;
    }

    /**
     * Fill history with object icons.
     * 
     * @param {Object} historyManager object of ``HistoryManager``
     * @param {Object[]} entities array of entity objects
     */
    this.fillHistoryWithObjectIcons = function(historyManager, entities){
        for (const entity of entities) {
            let icon = EntityHandler.getIcon(entity);
            let point = EntityHandler.getCenterOfPolygon(entity);
            historyManager.setTextureSlut(textures[icon]);
            historyManager.setTextureResolution(SETTING_ICON_RADIUS*4, SETTING_ICON_RADIUS*4);
            historyManager.setTextureTranslation(
                point[0] - SETTING_ICON_RADIUS,
                SETTING_ICON_RADIUS - point[1]
            );

            let x1 = point[0] - SETTING_ICON_RADIUS;
            let y1 = point[1] - SETTING_ICON_RADIUS;
            let x2 = point[0] + SETTING_ICON_RADIUS;
            let y2 = point[1] + SETTING_ICON_RADIUS;

            historyManager.submitVanilla([
                x1, -y1,
                x1, -y2,
                x2, -y1,
                x2, -y1,
                x1, -y2,
                x2, -y2
            ]);
        }
        return historyManager;
    }

    /**
     * Create and add border lines to the specific array.
     * 
     * @param {Object} objectList object of objects
     * @param {float[]} list array that lines added to
     */
    this.createLinesList = function(objectList, list){
        for(let id in objectList){
            let entity = objectList[id];
            
            let mirroredVertices = mirrorYs(
                EntityHandler.getVertices(entity)
            );

            if(DRAW_BORDER_LINE){ // Add Lines
                this.positionMaker.reset();
                this.positionMaker.addClosedSequenceLine(
                    mirroredVertices,
                    DRAW_BORDER_LINE_WIDTH
                );
                Array.prototype.push.apply(
                    list,
                    this.positionMaker.getPositionsList()
                );
            }
        }
    }

    /**
     * Fill history with border lines.
     * 
     * @param {Object} historyManager object of ``HistoryManager``
     * @param {float[]} lines apexes
     */
    this.fillBorderLines = function(historyManager, lines) {
        historyManager.setColor(
            COLOR_BORDER_DEFAULT[0], 
            COLOR_BORDER_DEFAULT[1], 
            COLOR_BORDER_DEFAULT[2],
            1
        );
        historyManager.submitVanilla(
            lines
        );
        return historyManager;
    }

    /**
     * 
     * @param {Object} data data
     * @param {function} loadFunction load function
     */
    this.consturctor = function(data, loadFunction){
        this.positionMaker = new PositionMaker();
        this.baseHistorian = OrdinalHistorian();

        this.entitiesWithIcon = [];
        this.fillAndPostInfo(data, loadFunction);
        this.createBaseCycle(data, loadFunction);
        this.fillCycles(data, loadFunction, 2);
    }
    
    // Run
    this.consturctor(data, loadFunction);
}

module = {};

// Global Variables
var dataLoader = {};
var textures;
var ICONS_POLICE_OFFICE, 
    ICONS_AMBULANCE_CENTRE, 
    ICONS_FIRE_STATION,
    ICONS_REFUGE,
    ICONS_GAS_STATION,
    ICONS_HYDRANT;


/**
 * Submit log for Worker.
 * 
 * @param {string} log log content
 */
function wl(log){
    console.log("WorkerLog: " + log);
}

/**
 * Load function.
 * 
 * @param {string} text status content
 * @param {integer} progress percentage of progress
 * @param {boolean} end is end of progress
 */
function loadFunction(text, progress=-1, end=false){
    progressReport(text, progress, end);
    wl(text);
}

/**
 * Progress report.
 * 
 * @param {string} text status content
 * @param {integer} progress percentage of progress
 * @param {boolean} end is end of progress
 */
function progressReport(text, percent = -1, end=false){
    postMessage({
        command: WORKER_COMMAND_PROGRESSREPORT,
        percent: percent,
        text: text,
        end: end
    });
}

/**
 * Post map bounds.
 * 
 * @param {number} minX Minimum X
 * @param {number} minY Minimum Y
 * @param {number} maxX Maximum X
 * @param {number} maxY Maximum Y
 */
function postMapbounds(minX, minY, maxX, maxY){
    wl("map bounds sent");
    postMessage({
        command: WORKER_COMMAND_MAPBOUNDS,
        minX: minX,
        minY: minY,
        maxX: maxX, 
        maxY: maxY
    });
}

/**
 * Post cycle data object.
 * 
 * @param {integer} cycle cycle number
 * @param {Object} data data object
 */
function postCycleData(cycle, data, info={}){
    wl("cycle " + cycle + " sent");
    postMessage({
        command: WORKER_COMMAND_CYCLEDATA,
        cycle: cycle,
        data: data.getDataCopy(),
        info: info
    });
}

/**
 * Post cycle data object.
 * 
 * @param {integer} cycle cycle number
 * @param {Object} data data object
 */
function postBaseData(data){
    wl("Base data sent");
    postMessage({
        command: WORKER_COMMAND_BASEDATA,
        data: data.getDataCopy()
    });
}

/**
 * Post info object.
 * 
 * @param {Object} info info object
 */
function postInfo(info){
    wl("map info sent");
    postMessage({
        command: WORKER_COMMAND_INFO,
        info: info
    });
}

/**
 * handle incoming massage
 * 
 * @param {Object} e massage object
 */
function handleIncomingMassage(e){
    let command = e.data.command;
    switch(command){
        case WORKER_COMMAND_IMPORTSCRIPT:
            let scriptUrl = e.data.script;
            importScripts(scriptUrl);
            break;

        case WORKER_COMMAND_LOADDATA:
            textures = e.data.textures;
            dataLoader = new WorkerDataLoader(e.data.data, loadFunction);
            break;

        case WORKER_COMMAND_SETICONS:
            ICONS_POLICE_OFFICE = e.data.icons.po;
            ICONS_AMBULANCE_CENTRE = e.data.icons.ac;
            ICONS_FIRE_STATION = e.data.icons.fs;
            ICONS_REFUGE = e.data.icons.rf;
            ICONS_GAS_STATION = e.data.icons.gs;
            ICONS_HYDRANT = e.data.icons.hy;
            break;
    }
}

onmessage = (e) => handleIncomingMassage(e);

