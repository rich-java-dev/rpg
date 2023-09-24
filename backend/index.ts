import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { World } from "./game-classes/World";
import { Player } from "./game-classes/Player";
import { PlayerRouter } from "./routes/PlayerRouter";

dotenv.config();
const port = process.env.PORT;

const app: Express = express();

// enable cors (cross-origin request from React server running on diff port (testing))
const cors = require("cors");
app.use(
  cors({
    origin: "*", //`http://localhost:${process.env.REACT_PORT || 9001}`,
    optionsSuccessStatus: 200,
  })
);

//
// LOGGING
//

const log = require("log4js");
// set up basic debug logging middleware against all requests
log.level = "debug";
log.configure({
  appenders: { logInfo: { type: "file", filename: "default.log" } },
  categories: { default: { appenders: ["logInfo"], level: "info" } },
});
var logInfo = log.getLogger("logInfo"); // initialize the var to use.

// IP & resource request logging middle ware
app.use((req, res, next) => {
  var fwdIPStr = req.header("x-forwarded-for");
  var IP = "";

  if (fwdIPStr) IP = fwdIPStr = fwdIPStr.split(",")[0];

  logInfo.info(IP + ":" + req.path);

  next();
});

app.use((req, res, next) => {
  try {
    decodeURIComponent(req.path);
  } catch (e) {
    return res.redirect(["https://", req.get("Host"), "/"].join(""));
  }
  next();
});

//
// MONGODB / DB Layer
//
// TODO

//
// json payload/API handling for body
//

var session = require("express-session");
var bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// parse encoded/json
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//
// REACT FRONT-END
//

// use static file server of compiled/webpack React app
app.use(express.static("./react-build/"));

//
// Routers
//
app.use("/player", PlayerRouter);

// // root end-point
// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello World!");
// });

const server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// Initialize Game World
export let world: World;

const init = () => {
  world = new World();

  let player: Player = new Player();
  player.id = "RW";
  player.name = "Rich";
  world.players.push(player);
};
init();

//
// Web Socket Server Registry
//

// Set up a headless websocket server that prints any
// events that come in.
const WebSocketServer = require("ws").Server;

var wss = new WebSocketServer({
  server: server,
  path: process.env.WEBSOCKET_ENDPOINT || "/websocketgame",
});

// behavior of websocket once first connecting.

wss.on("connection", (socket: any, req: any) => {
  const remoteIp = req.socket.remoteAddress;
  logInfo.info("new connection:" + remoteIp);
});
