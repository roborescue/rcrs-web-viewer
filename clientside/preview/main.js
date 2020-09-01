"use strict";

// Constants
const CANVAS_ID = 'canv';
const JLOG_FILE = "data/cycles.jlog";
const PLAYING_DELAY = 100;
const WORKER_FILE = '../src/Worker.js';
const ERROR_MODAL = '#errorModal';
const LOADING_MODAL = '#loadingModal';

// Global Variables
var gameMaker;
var uiController;
var canvasDrawer;

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
        lastCycle: gameMaker.getLastCycleNumber(),
        playingDelay: PLAYING_DELAY
    });
}

function setProgressBarSize(x,y=100){
    let valeur = 100 * x / y;
    $('.progress-bar').css('width', valeur+'%').attr('aria-valuenow', valeur); 
}

function loadFunction(text, progress=-1, end=false){
    document.getElementById("status").innerText = text;

    if(progress > 0){
        setProgressBarSize(progress);
    }

    if(end){
        $(LOADING_MODAL).modal('hide');
        setTimeout(function(){ $(LOADING_MODAL).modal('hide'); }, 1000);
    }
}

// Main
$(() => {
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

    let worker = new Worker(WORKER_FILE);
    
    worker.onmessage = function(e){
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
            
            case WORKER_COMMAND_CYCLEDATA:
                let historian = new Historian();
                historian.memo = e.data.data.memo;
                historian.keys = e.data.data.keys;
                let cycleNumber = e.data.cycle;

                gameMaker.loadCycle(
                    cycleNumber, 
                    historian
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

    loadFunction("Downloading cycles data ...", 5);
    $.get(JLOG_FILE, function(data) {
        loadFunction("Map file downloaded ...",50);
        data = data.split("\n");
        data = data.filter(x => x.trim().length > 0);
        data = data.map(x => JSON.parse(x));

        loadFunction("Map file loaded ...",60);

        let textures = [
            ICONS_POLICE_OFFICE,
            ICONS_AMBULANCE_CENTRE,
            ICONS_FIRE_STATION,
            ICONS_REFUGE,
            ICONS_GAS_STATION,
            ICONS_HYDRANT
        ];

        canvasDrawer.loadTextures(textures, (texturesData) => {
            loadFunction("Texture files loaded ...",70);
    
            gameMaker = new GameMaker(canvasDrawer, loadFunction);
            worker.postMessage({
                command: WORKER_COMMAND_LOADDATA,
                data: data,
                textures: texturesData
            });
        });

    });
})