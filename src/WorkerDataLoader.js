
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
