import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/styles";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

import { Button, Checkbox, Box, TextField } from "@material-ui/core";

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
let roomId = "";
let CLEAR_CANVAS_CMD = JSON.stringify({ action: "CLEAR", topic: roomId });

let width = window.innerWidth - 15;
let height = window.innerHeight - 200;

let wsClient = null;
let canvas;

let canvasState = new Set();

let clearFlag = false;

const init = () => {
  fetchCanvasState();

  const websockConnStr = `wss://${serverAddr}/${wsEndPoint}`;
  console.log(`Attempting to connect to websocket on: ${websockConnStr}`);
  wsClient = new WebSocket(websockConnStr);

  wsClient.onopen = () => {
    console.log("WebSocket Client Connected");
  };

  wsClient.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    console.log(data);
  };
};

const postAction = async (canvas, event) => {
  let msg = { message: "Test!" };
  wsClient.send(JSON.stringify(msg));
};

const draw = (ctx) => {
  clearLocalCanvas(ctx);
};

const clearLocalCanvas = (ctx) => {
  console.log("Clear Canvas called");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

//
//
const fetchCanvasState = () => {
  const url = `https://gaming.richwhite.net/api/game-state`;
  fetch(url, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((json) => {
      //json.map((a) => diffState.add(a));
      // diffState = json;
    });
};

//
//
const handleCanvasUp = (canvas, evt) => {};

//
//
const resizeCanvas = (canvas, newWidth, newHeight) => {
  canvas.width = newWidth;
  canvas.height = newHeight;
  width = newWidth;
  height = newHeight;
};

//
//
export const Canvas = ({ match, location }) => {
  const classes = useStyles();
  const canvasRef = useRef();

  CLEAR_CANVAS_CMD = JSON.stringify({ action: "CLEAR", topic: roomId });

  disableBodyScroll(canvasRef);
  window.addEventListener("resize", resizeCanvas, false);

  //
  const handleCanvasDown = async (canvas, evt) => {
    postAction(canvas, evt);
  };

  //
  const handleCanvasMove = async (canvas, evt) => {
    postAction(canvas, evt);
  };

  //
  useEffect(async () => {
    init(roomId);

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
        ref={canvasRef}
        width={width}
        height={height}
        onMouseDown={(evt) => handleCanvasDown(canvas, evt)}
        onMouseMove={(evt) => handleCanvasMove(canvas, evt)}
        onMouseUp={(evt) => handleCanvasUp(canvas, evt)}
        onMouseLeave={(evt) => handleCanvasUp(canvas, evt)}
        onTouchStart={(evt) => handleCanvasDown(canvas, evt)}
        onTouchMove={(evt) => handleCanvasMove(canvas, evt)}
        onTouchEnd={(evt) => handleCanvasUp(canvas, evt)}
      />
    </div>
  );
};
