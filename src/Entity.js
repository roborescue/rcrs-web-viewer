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
