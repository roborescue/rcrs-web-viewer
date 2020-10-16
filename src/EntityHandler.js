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
