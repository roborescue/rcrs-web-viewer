var EntityHandler = {
};

EntityHandler.humans = [
    "Civilian", 
    "Ambulance team", 
    "Fire brigade",
    "Police force",
];

EntityHandler.surfaces = [
    "Road", 
    "Building", 
    "Refuge",
    "Blockade",
    "Hydrant",
    "Gas Station",
    "Ambulance centre",
    "Fire station",
    "Police office"
];

EntityHandler.buildings = [
    "Building", 
    "Refuge",
    "Gas Station",
    "Ambulance centre",
    "Fire station",
    "Police office"
];

EntityHandler.roads = [
    "Road",
    "Hydrant"
];

EntityHandler.blockades = [
    "Blockade"
];


/**
 * @param {Object} entity
 * @returns {float[3]}
 */
EntityHandler.getColor = function(entity){
    if(this.isRoad(entity))
        return [0.72, 0.72, 0.72];
    if(this.isBuilding(entity))
        return [0.52, 0.52, 0.52];
    if(this.isBlockade(entity))
        return [0, 0, 0];

    switch (this.getType(entity)) {

        case "Civilian":
            return [0, 1, 0];

        case "Fire brigade":
            return [1, 0, 0];
            
        case "Ambulance team":
            return [1, 1, 1];

        case "Police force":
            return [0, 0, 1];
    }
    return [0, 0, 0];
};

EntityHandler.getType = function(entity){
    return entity.EntityName;
}

/**
 * @param {Object} entity
 * @returns {boolean}
 */
EntityHandler.isRoad = function(entity){
    return this.roads.includes(
        this.getType(entity)
    );
} 

/**
 * @param {Object} entity
 * @returns {boolean}
 */
EntityHandler.isHuman = function(entity){
    return this.humans.includes(
        this.getType(entity)
    );
}

/**
 * @param {Object} entity
 * @returns {boolean}
 */
EntityHandler.isSurface = function(entity){
    return this.surfaces.includes(
        this.getType(entity)
    );
}

/**
 * @param {Object} entity
 * @returns {boolean}
 */
EntityHandler.isBlockade = function(entity){
    return this.blockades.includes(
        this.getType(entity)
    );
}

/**
 * @param {Object} entity
 * @returns {boolean}
 */
EntityHandler.isBuilding = function(entity){
    return this.buildings.includes(
        this.getType(entity)
    );
}

EntityHandler.getId = function(entity){
    return entity.Id;
}

EntityHandler.getHumanVertices = function(cx, cy, r=1500,cuts=15){
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

EntityHandler.getVertices = function(entity){
    if(this.isSurface(entity)){
        return entity.Apexes;
    }
    else if(this.isHuman(entity)){
        let position = entity.Pos;
        return this.getHumanVertices(position[0], position[1]);
    }
    return [];
}