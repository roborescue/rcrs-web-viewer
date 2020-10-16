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
