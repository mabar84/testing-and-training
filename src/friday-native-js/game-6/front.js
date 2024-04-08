import { Controller } from "./controller.js";
import { EventFactory, GAME_MODES, Game } from "./game.js";
import { EventEmiter } from "./utils/observer/observable.js";
import { GameComponent } from "./view.js";
import { socket } from "./adapter/ws.js";
import { WSAdapter } from "./adapter/wsAdapter.js";

const eventEmiter = new EventEmiter();
const eventFactory = new EventFactory();
const wsAdapter = new WSAdapter();

const game = new Game(eventEmiter, eventFactory);

game.settings = { gridSize: { columns: 5, rows: 5 }, mode: GAME_MODES.CLIENT };

await game.start();

const controller = new Controller(game, wsAdapter);
const view = new GameComponent(controller, game);

// game.eventEmiter.addEventListener("change", (e) => {
//   console.log(e);
// });

view.render();
