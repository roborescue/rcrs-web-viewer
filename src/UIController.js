
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
