const Block_Size = 65;

let COLM;
let ROWS;

let world = [];

let selectedTool = null;
let selectedBlock = null;

let inventory = {};
let isBreaking = false;

let mapScale = 1;
const MAX_SCALE = 3;

const toolRules = {
    axe: ["wood", "leaves"],
    shovel: ["dirt", "grass", "flower-red", "flower-yellow", "flower-blue", "flower-white", "flower-purple"],
    pickaxe: ["rock", "diamond-red", "diamond-blue", "diamond-yellow", "diamond-green"]
};
