"use strict";

/**
 * 
 * @param {Object} canvasDrawer
 * @param {function} loadFunction
 */
function GameMaker(canvasDrawer, loadFunction=()=>{}){
    
    /**
     * Array of cycles history
     * 
     * @type {Object[]}
     */
    this.histories = [];

    /**
     * Array of cycles info object
     * 
     * @type {Object[]}
     */
    this.infos = [];

    /**
     * Current cycle
     * 
     * @type {integer}
     */
    this.currentCycle = 0;

    /**
     * Last loaded cycle
     * 
     * @type {integer}
     */
    this.lastLoadedCycle = -1;

    /**
     * Base historian
     */
    this.baseHistorian = new Historian();

    /**
     * Set base historian.
     * 
     * @param {Object} historian historian
     */
    this.setBaseHistorian = function(historian){
        this.baseHistorian = historian;
    }

    /**
     * 
     * @param {integer} cycle 
     */
    this.drawCycle = function(cycle = this.currentCycle){
        this.canvasDrawer.drawer.historyManager.historians = [
            this.baseHistorian,
            this.histories[cycle]
        ];
        this.canvasDrawer.drawer.redraw();
    }

    /**
     * Get score at given cycle
     * 
     * @param {integer} cycle 
     */
    this.getScore = function(cycle){
        return this.infos[cycle].Score;
    }

    /**
     * Get last cycle number
     * 
     * @returns {integer} last cycle number
     */
    this.getLastCycleNumber = function(){
        return this.getInfo().lastCycle;
    }

    /**
     * Get last loaded cycle
     * 
     * @returns {integer} last loaded cycle
     */
    this.getLastLoadedCycleNumber = function(){
        return this.lastLoadedCycle;
    }

    /**
     * Set map position on screen.
     * 
     * @param {number} minX Minimum X
     * @param {number} minY Minimum Y
     * @param {number} maxX Maximum X
     * @param {number} maxY Maximum Y
     */
    this.setCorrectScaleAndTranslation = function(minX, minY, maxX, maxY){

        let x = Math.abs(maxX - minX);
        let y = Math.abs(maxY - minY);

        let canvas = this.canvasDrawer.drawer.gl.canvas;
        let canvasWidth = canvas.width;
        let canvasHeight = canvas.height;

        let xFitScale = canvasWidth / x;
        let yFitScale = canvasHeight / y;
        let scale = xFitScale < yFitScale ? xFitScale : yFitScale;
        scale = scale * 0.9;
        
        this.canvasDrawer.drawer.setScale(scale);
        this.canvasDrawer.drawer.setTextureScale(scale);
        
        let newX = scale * x;
        let newY = scale * y;
        let xTranslation = (canvasWidth - newX) / 2;
        let yTranslation = (canvasHeight - newY) / 2;

        this.canvasDrawer.drawer.setTextureTranslation(xTranslation, yTranslation + y * scale);
        this.canvasDrawer.drawer.updateTranslation(xTranslation, yTranslation + y * scale);
    }

    this.loadCycle = function(cycle, data, info={}){
        this.histories[cycle] = data;
        this.infos[cycle] = info;
        if(cycle > this.lastLoadedCycle)
            this.lastLoadedCycle = cycle;
    }

    /**
     * Get info object
     * 
     * @returns {Object}
     */
    this.getInfo = function(){
        return this.infoObject;
    }

    /**
     * Set info object
     * 
     * @param {Object} info info object
     */
    this.setInfo = function(info){
        this.infoObject = info;
        this.allCycles = info.lastCycle;
    }

    /**
     * 
     * @param {Object} dataLoader 
     * @param {Object} canvasDrawer 
     */
    this.constructor = function(canvasDrawer, loadFunction){
        this.canvasDrawer = canvasDrawer;
        this.allCycles = 0; //TODO
        this.infoObject = {};
        this.positionMaker = new PositionMaker();

        this.canvasDrawer.drawer.enableBlending();
        loadFunction("Loading game entities ...", 90, false);
    }
    
    // calc
    this.constructor(canvasDrawer, loadFunction);
}
