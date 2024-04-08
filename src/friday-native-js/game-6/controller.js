import { DIRECTION } from "./game.js";

export class Controller {
  #game;
  // #wsAdapter;
  constructor(game, wsAdapter) {
    this.#game = game;
    // this.#wsAdapter = wsAdapter;
  }

  movePlayer(direction, playerId) {
    switch (direction) {
      case DIRECTION.UP:
        this.#game[`movePlayer${playerId}Up`]();
        // this.#wsAdapter({ direction, playerId });
        break;
      case DIRECTION.DOWN:
        this.#game[`movePlayer${playerId}Down`]();
        break;
      case DIRECTION.LEFT:
        this.#game[`movePlayer${playerId}Left`]();
        break;
      case DIRECTION.RIGHT:
        this.#game[`movePlayer${playerId}Right`]();
        break;
    }
  }
}
