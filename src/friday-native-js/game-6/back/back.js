import { WebSocketServer } from "ws";
import { EventEmiter } from "../utils/observer/observable.js";
import { EventFactory, GAME_MODES, Game } from "../game.js";

const wss = new WebSocketServer({ port: 3030 });

const eventEmiter = new EventEmiter();
const eventFactory = new EventFactory();

const game = new Game(eventEmiter, eventFactory);

game.settings = { gridSize: { columns: 5, rows: 5 }, mode: GAME_MODES.SERVER };

const connections = [];

wss.on("connection", async function connection(ws) {
  connections.push(ws);

  if (connections.length === 2) {
    console.log("game is started");
    await game.start();
  }

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  game.eventEmiter.addEventListener("change", (e) => {
    // console.log(e);
    connections.forEach((ws) => {
      ws.send(JSON.stringify(e));
    });
  });
});
