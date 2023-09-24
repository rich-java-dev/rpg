import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/styles";

const serverAddr = process.env.SERVER_ADDR || "gaming.richwhite.net";
const wsEndPoint = process.env.WEBSOCKET_ENDPOINT || "websocketgame";

let wsClient = null;

const init = () => {

  const websockConnStr = `wss://${serverAddr}/${wsEndPoint}`;
  console.log(`Attempting to connect to websocket on: ${websockConnStr}`);
  wsClient = new WebSocket(websockConnStr);

  wsClient.onopen = () => {
    console.log("WebSocket Client Connected");
  };

  // wsClient.onmessage = (msg) => {
  //   const data = JSON.parse(msg.data);
  //   const msgTopic = data.topic;
  //   if (msgTopic !== roomId) return;

  //   if (data?.type !== undefined) diffState.add(data);
  //   else if (data?.action === "CLEAR") {
  //     canvasState.clear();
  //     clearFlag = true;
  //     console.log("Clear called");
  //   }
  // };
};

export const MainView = () => {
  useEffect(async () => {
    init();
  });

  return <div>Hello World!</div>;
};
