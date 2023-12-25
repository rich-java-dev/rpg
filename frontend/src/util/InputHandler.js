const MOVE = "MV";
const JUMP = "JMP";
const ATTACK = "ATK";
const BLOCK = "BLK";

const UP = "U";
const DOWN = "D";
const LEFT = "L";
const RIGHT = "R";

const keyCodeActionMap = {
  38: MOVE, // ArrowUp
  40: MOVE, // ArrowDown
  37: MOVE, // ArrowLeft
  39: MOVE, // ArrowRight
  87: MOVE, // w
  83: MOVE, // s
  65: MOVE, // a
  68: MOVE, // d
};

const keyCodeActionInputMap = {
  38: UP, // ArrowUp
  40: DOWN, // ArrowDown
  37: LEFT, // ArrowLeft
  39: RIGHT, // ArrowRight
  87: UP, // w
  83: DOWN, // s
  65: LEFT, // a
  68: RIGHT, // d
};

export const getKeyAction = (evt) => {
  if (evt.keyCode in keyCodeActionMap) {
    return keyCodeActionMap[evt.keyCode];
  } else return "";
};

export const getKeyActionInput = (evt) => {
  if (evt.keyCode in keyCodeActionInputMap) {
    return keyCodeActionInputMap[evt.keyCode];
  } else return "";
};

export const getMouseAction = (evt) => {
  
};

export const getMouseActionInput = (evt) => {};
