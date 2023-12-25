import { gameState } from "./GameState";

const MOVE = "MV";
const JUMP = "JMP";
const ATTACK = "ATK";
const BLOCK = "BLK";

const UP = "U";
const DOWN = "D";
const LEFT = "L";
const RIGHT = "R";

interface PlayerState {
  id: String;
  posX: number;
  posY: number;
  color: String;
}

interface action {
  action: string;
  actionInput: string;
}

const getRandomColor = () => {
  return `rgb(${255 * Math.random()}, ${255 * Math.random()},${
    255 * Math.random()
  })`;
};

// Sanitize input here prior to passing to updateEntity...
export const processInput = (id: string, msg: string): PlayerState => {
  let playerState: PlayerState;
  try {
    const input: action = JSON.parse(msg);

    if (!(id in gameState)) {
      gameState[id] = { id: id, posX: 0, posY: 0, color: getRandomColor() };
    }
    playerState = gameState[id];

    if (input.action === MOVE) handleMove(input.actionInput, playerState);
    //if (input.action === JUMP) //implJump(input, playerState);
    return playerState;
  } catch (err) {
    console.log(err);
  }
  return { id: id, posX: 0, posY: 0, color: getRandomColor() };
};

const handleMove = (input: string, playerState: PlayerState) => {
  let dX = 0;
  let dY = 0;

  switch (input) {
    case UP:
      dY = -5;
      break;
    case DOWN:
      dY = 5;
      break;
    case LEFT:
      dX = -5;
      break;
    case RIGHT:
      dX = 5;
      break;
  }

  playerState.posX = playerState.posX + dX;
  playerState.posY = playerState.posY + dY;
};
