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


/**
 * 
 * @param {Object} info info object
 */
function UIController(info){

    /**
     * 
     * @param {string} name 
     * @param {*} defaultValue 
     * @returns {*}
     */
    this.loadDataFromInfo = function(name, defaultValue) {
        return (name in this.info) ? this.info[name] : defaultValue;
    };

    /**
     * Play logs
     */
    this.start = function(){
        if(this.isPlaying !== false){
            return;
        }

        this.isPlaying = setInterval(() => {
            let next = this.nextCycle();
            if(! next){
                this.pause();
            }
        }, this.playingDelay);

        this.reloadControllPanel();
    }

    /**
     * Pause logs
     */
    this.pause = function(){
        if(this.isPlaying !== false){
            clearInterval(this.isPlaying);
        }

        this.isPlaying = false;
        this.reloadControllPanel();
    }

    /**
     * Reset player to #0 cycle
     */
    this.reset = function(){
        this.pause();
        this.setCycle(0);
    }

    /**
     * Set cycle as loaded and controller updated.
     * 
     * @param {integer} cycle cycle number
     */
    this.setLoadedCycle = function(cycle){
        if(this.lastLoadedCycle < cycle){
            this.lastLoadedCycle = cycle;
            this.reloadControllPanel();
        }
    }

    /**
     * Update controll buttons status
     */
    this.reloadControllPanel = function(){
        if(this.isPlaying !== false || this.currentCycle >= this.lastLoadedCycle){
            this.buttons.start.prop("disabled", true);
        }
        else{
            this.buttons.start.prop("disabled", false);
        }

        if(this.currentCycle == 0){
            this.buttons.back.prop("disabled", true);
        }
        else{
            this.buttons.back.prop("disabled", false);
        }

        if(this.currentCycle >= this.lastLoadedCycle){
            this.buttons.next.prop("disabled", true);
        }
        else{
            this.buttons.next.prop("disabled", false);
        }
    }

    /**
     * Show cycle
     * 
     * @param {integer} cycle 
     */
    this.setCycle = function(cycle){
        $("#cycle-number").html(cycle + " / " + this.lastCycle);
        $("#team-score-field").html( this.getScore(cycle) );

        this.currentCycle = cycle;
        this.showCycle(cycle);
        this.reloadControllPanel();
    }

    /**
     * Show next cycle
     */
    this.nextCycle = function(){
        if(this.currentCycle >= this.lastLoadedCycle){
            return false;
        }

        this.setCycle(this.currentCycle + 1);
        return true;
    }

    /**
     * Show previous cycle
     */
    this.prevCycle = function(){
        if(this.currentCycle <= 0){
            return false;
        }

        this.setCycle(this.currentCycle - 1);
        return true;
    }

    // Buttons
    this.buttons = {
        next: $("#controll-next"),
        back: $("#controll-back"),
        start: $("#controll-start"),
        pause: $("#controll-pause"),
        reset: $("#controll-reset")
    };

    
    //
    // Setup
    //
    
    /**
     * Info object
     * 
     * @type {Object}
     */
    this.info = info;

    /**
     * Current showing cycle
     * 
     * @type {integer}
     */
    this.currentCycle = 0;

    /**
     * Is playing
     * 
     * @type {boolean}
     */
    this.isPlaying = false;

    /**
     * Last loaded cycle
     * 
     * @type {integer}
     */
    this.lastLoadedCycle = -1;

    /**
     * @param {integer} cycle
     */
    this.getScore = this.loadDataFromInfo("getScore", (cycle) => {return -1;});
    
    /**
     * @param {integer} cycle
     */
    this.showCycle = this.loadDataFromInfo("showCycle", (cycle) => {});
    
    /**
     * Last cycle number.
     */
    this.lastCycle = this.loadDataFromInfo("lastCycle", 0);
    
    /**
     * Playing delay.
     */
    this.playingDelay = this.loadDataFromInfo("playingDelay", 1500);
    
    /**
     * Team name
     */
    let teamName = this.loadDataFromInfo("teamName", "Unknown");

    /**
     * Map name
     */
    let mapName = this.loadDataFromInfo("mapName", "Unknown");


    $("#team-name-field").html(teamName);
    $("#map-name-field").html(mapName);

    this.buttons.next.click(() => {
        uiController.nextCycle();
    });

    this.buttons.back.click(() => {
        uiController.prevCycle();
    });

    this.buttons.start.click(() => {
        uiController.start();
    });

    this.buttons.pause.click(() => {
        uiController.pause();
    });

    this.buttons.reset.click(() => {
        uiController.reset();
    });
}


// Global Variables
var gameMaker;
var uiController;
var canvasDrawer;
var worker;

// Functions
function resizeCanvasToFit(){
    let canvas = document.getElementById(CANVAS_ID);
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
}

function showError(content){
    $(".modal").not(ERROR_MODAL).modal('hide');
    let error = "<li>" + content + "</li>";
    $("#error-message").append(error);
    $(ERROR_MODAL).modal('show');
}

function showLoadingModal(){
    if(!$(ERROR_MODAL).data()['bs.modal'] || !$(ERROR_MODAL).data()['bs.modal']._isShown){
        $(LOADING_MODAL).modal('show');
    }
}

function UISetup(gameMaker){
    let info = gameMaker.getInfo();

    uiController = new UIController({
        teamName: info.TeamName,
        mapName: info.MapName,
        showCycle: (cycle) => {gameMaker.drawCycle(cycle);}, 
        getScore: (cycle) => {return gameMaker.getScore(cycle);},
        lastCycle: gameMaker.getLastCycleNumber(),
        playingDelay: PLAYING_DELAY
    });
}

function setProgressBarSize(x,y=100){
    let valeur = 100 * x / y;
    $('.progress-bar').css('width', valeur+'%').attr('aria-valuenow', valeur); 
}

function loadFunction(text, progress=-1, end=false){
    console.log(text);
    document.getElementById("status").innerText = text;

    if(progress > 0){
        setProgressBarSize(progress);
    }

    if(end){
        $(LOADING_MODAL).modal('hide');
        setTimeout(function(){ $(LOADING_MODAL).modal('hide'); }, 1000);
    }
}

function workerMassageParser(e){
    let command = e.data.command;
    switch(command){
        case WORKER_COMMAND_PROGRESSREPORT:
            loadFunction(e.data.text, e.data.percent);
            break;

        case WORKER_COMMAND_MAPBOUNDS:
            gameMaker.setCorrectScaleAndTranslation(
                e.data.minX,
                e.data.minY,
                e.data.maxX,
                e.data.maxY,
            );
            break;

        case WORKER_COMMAND_BASEDATA:
            let h = new Historian();
            h.memo = e.data.data.memo;
            h.keys = e.data.data.keys;
            gameMaker.setBaseHistorian(h);
            break;

        case WORKER_COMMAND_CYCLEDATA:
            let historian = new Historian();
            historian.memo = e.data.data.memo;
            historian.keys = e.data.data.keys;
            let cycleNumber = e.data.cycle;
            let info = e.data.info;

            gameMaker.loadCycle(
                cycleNumber, 
                historian,
                info
            );
            uiController.setLoadedCycle(cycleNumber);
            if(cycleNumber == 0){
                uiController.setCycle(0);
            }
            if(cycleNumber == 2){
                loadFunction("Completed.", 100, true);
            }
            break;
        
        case WORKER_COMMAND_INFO:
            gameMaker.setInfo(e.data.info);
            UISetup(gameMaker);
            break;
    }
}

function parseShowJLOGFile(data){
    loadFunction("Map file downloaded ...",80);
    data = data.split("\n");
    data = data.filter(x => x.trim().length > 0);
    data = data.map(x => JSON.parse(x));

    loadFunction("Map file loaded ...",82);

    let textures = [
        ICONS_POLICE_OFFICE,
        ICONS_AMBULANCE_CENTRE,
        ICONS_FIRE_STATION,
        ICONS_REFUGE,
        ICONS_GAS_STATION,
        ICONS_HYDRANT
    ];

    canvasDrawer.loadTextures(textures, (texturesData) => {
        loadFunction("Texture files loaded ...",90);

        gameMaker = new GameMaker(canvasDrawer, loadFunction);
        worker.postMessage({
            command: WORKER_COMMAND_LOADDATA,
            data: data,
            textures: texturesData
        });
    });
}

// Main
function main(){
    resizeCanvasToFit();

    // Check WebWorker Support
    if(window.Worker){
        showLoadingModal();
    }
    else{
        showError("WebWorker is not supported.");
        return;
    }

    canvasDrawer = new CanvasDrawer({
        'id': CANVAS_ID,
        'errorFunction': ()=>showError("WebGL is not supported."),
        'cartographer': true,
        'zoominrate': 1.15,
        'zoomoutrate': 0.85
    });

    window.onresize = function() {
        resizeCanvasToFit();
        canvasDrawer.drawer.refitWebglToCanvas();
    }

    worker = new Worker(WORKER_FILE);
    worker.onmessage = workerMassageParser;

    // Import Scripts Im Worker
    let scriptsToImportInWorker = [
        SCRIPT_EARCUT,
        SCRIPT_CANVASDRAWER
    ];
    for(let script in scriptsToImportInWorker){
        worker.postMessage({
            command: WORKER_COMMAND_IMPORTSCRIPT,
            script: scriptsToImportInWorker[script]
        })
    }

    worker.postMessage({
        command: WORKER_COMMAND_SETICONS,
        icons: {
            po: ICONS_POLICE_OFFICE,
            ac: ICONS_AMBULANCE_CENTRE,
            fs: ICONS_FIRE_STATION,
            rf: ICONS_REFUGE,
            gs: ICONS_GAS_STATION,
            hy: ICONS_HYDRANT
        }
    });

    loadFunction("Downloading cycles data ...", 0);
    var xhrOverride = new XMLHttpRequest();
    xhrOverride.responseType = 'arraybuffer';
    
    $.ajax(JLOG_ZIP_FILE, {
        xhr: function() {
            return xhrOverride;
        },
        progress: function(e) {
            if(e.lengthComputable){
                let percent = Math.round(80 * e.loaded / e.total);
                loadFunction("Downloading cycles data ... (" + percent + "%)", percent);
            }
        }
    }).done((msg) => {
        console.log(msg);
        let z = new JSZip();

        z.loadAsync(msg).then(function(zip) {
            zip.file(JLOG_INNER_FILE).async("string").then(function(msg){
                parseShowJLOGFile(msg);
            });
        });
    });
}

