import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/styles";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { Button, Checkbox, Box, TextField } from "@material-ui/core";
import {
  getKeyAction,
  getKeyActionInput,
  getMouseAction,
  getMouseActionInput,
} from "../util/InputHandler";

import { gameState } from "../util/GameState";
import { drawCircle } from "../util/Drawing";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  paintBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  cursorSize: {
    width: "60px",
  },
});

const serverAddr = process.env.SERVER_ADDR || "gaming.richwhite.net";
const wsEndPoint = process.env.WEBSOCKET_ENDPOINT || "websocketgame";

let width = window.innerWidth - 15;
let height = window.innerHeight - 200;

let wsClient = null;
let canvas;

const init = () => {
  fetchGameState();
  const websockConnStr = `wss://${serverAddr}/${wsEndPoint}`;
  console.log(`Attempting to connect to websocket on: ${websockConnStr}`);
  wsClient = new WebSocket(websockConnStr);

  wsClient.onopen = () => {
    console.log("WebSocket Client Connected");
  };

  wsClient.onmessage = (msg) => {
    console.log("RECVD:");
    const data = JSON.parse(msg.data);
    console.log(data);

    gameState[data.id] = data;
  };
};

const postAction = async (action, actionInput) => {
  let msg = { action: action, actionInput: actionInput };
  // console.log("POSTING ACTION:");
  // console.log(msg);
  wsClient.send(JSON.stringify(msg));
};

const draw = (ctx) => {

  clearLocalCanvas(ctx);

  for (let key in gameState) {
    if (gameState.hasOwnProperty(key)) {
      let ps = gameState[key];
      const props = {
        ctx: ctx,
        posX: ps.posX,
        posY: ps.posY,
        radius: 5,
        color: ps.color,
      };
      drawCircle(props);
    }
  }
};

const clearLocalCanvas = (ctx) => {
  //console.log("Clear Canvas called");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

//
//
const fetchGameState = () => {
  // const url = `https://gaming.richwhite.net/api/game-state`;
  // fetch(url, {
  //   method: "GET",
  // })
  //   .then((res) => res.json())
  //   .then((json) => {
  //     //json.map((a) => diffState.add(a));
  //     // diffState = json;
  //   });
};

//
const resizeCanvas = (canvas, newWidth, newHeight) => {
  canvas.width = newWidth;
  canvas.height = newHeight;
  width = newWidth;
  height = newHeight;
};

//
export const Canvas = () => {
  const classes = useStyles();
  const canvasRef = useRef();

  disableBodyScroll(canvasRef);
  window.addEventListener("resize", resizeCanvas, false);

  //
  const handleCanvasDown = async (canvas, evt) => {};

  //
  const handleCanvasUp = (canvas, evt) => {};

  //
  const handleCanvasMove = async (canvas, evt) => {};

  //
  const handleCanvasKeyDown = (canvas, evt) => {
    const action = getKeyAction(evt);
    if (action.length > 0) {
      const actionInput = getKeyActionInput(evt);
      postAction(action, actionInput);
    }
  };

  const handleCanvasMouseDown = (canvas, evt) => {
    //console.log(evt);

    const action = getMouseAction(evt);
    if (action.length > 0) {
      const actionInput = getMouseActionInput(evt);
      postAction(action, actionInput);
    }
  };

  //
  useEffect(async () => {
    init();

    canvas = canvasRef.current;

    let requestId;

    //render/update method, called on each key frame
    const render = async () => {
      const width = window.innerWidth - 15;
      const height = window.innerHeight - 160;
      // resizeCanvas(canvas, width, height);

      const ctx = canvas.getContext("2d");
      draw(ctx);
      requestId = requestAnimationFrame(render);
    };

    await render();
    return () => {
      cancelAnimationFrame(requestId);
    };
  });

  //
  return (
    <div>
      <canvas
        tabindex="1"
        ref={canvasRef}
        width={width}
        height={height}
        onKeyDown={(evt) => handleCanvasKeyDown(canvas, evt)}
        onMouseDown={(evt) => handleCanvasMouseDown(canvas, evt)}
      />
    </div>
  );
};
