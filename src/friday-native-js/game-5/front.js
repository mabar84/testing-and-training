import { Game } from "./game.js";
import { EventEmiter } from "./utils/observer/observable.js";
import { GameComponent } from "./view.js";

const eventEmiter = new EventEmiter();

const game = new Game(eventEmiter);

await game.start();

const view = new GameComponent(game);

game.eventEmiter.addEventListener("change", () => {
  view.render();
});

window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      game.movePlayer1Up();
      break;
    case "ArrowDown":
      game.movePlayer1Down();
      break;
    case "ArrowLeft":
      game.movePlayer1Left();
      break;
    case "ArrowRight":
      game.movePlayer1Right();
      break;
    case "KeyW":
      game.movePlayer2Up();
      break;
    case "KeyS":
      game.movePlayer2Down();
      break;
    case "KeyA":
      game.movePlayer2Left();
      break;
    case "KeyD":
      game.movePlayer2Right();
      break;
  }
});

view.render();
