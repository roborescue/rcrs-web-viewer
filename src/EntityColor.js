
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
