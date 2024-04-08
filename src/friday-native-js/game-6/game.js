export const DIRECTION = {
  UP: "up",
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right",
};

export const GAME_MODES = {
  CLIENT: "client",
  ONLY_CLIENT: "only-client",
  SERVER: "server",
};

export class EventFactory {
  playerMoved(delta, id) {
    let direction;

    if (delta.x > 0) {
      direction = DIRECTION.RIGHT;
    } else if (delta.x < 0) {
      direction = DIRECTION.LEFT;
    } else if (delta.y > 0) {
      direction = DIRECTION.DOWN;
    } else if (delta.y < 0) {
      direction = DIRECTION.UP;
    }

    return { type: `PLAYER${id}/MOVED`, payload: { direction } };
  }
  // player2Moved(direction) {
  //   return { type: "PLAYER2/MOVED", payload: { direction } };
  // }
  googleJumped(x, y) {
    return { type: "GOOGLE/JUMPED", payload: { x, y } };
  }
}

export class Game {
  #settings = {
    scoreToWin: 10,
    gridSize: {
      columns: 4,
      rows: 4,
    },
    googleJumpInterval: 2000,
    mode: "client",
  };
  #status = "pending";
  #player1;
  #player2;
  #google;
  #googleSetIntervalId;
  #score = {
    1: { points: 0 },
    2: { points: 0 },
  };
  #eventFactory;

  eventEmiter;

  constructor(eventEmiter, eventFactory) {
    this.eventEmiter = eventEmiter;
    this.#eventFactory = eventFactory;
  }

  getRandomPosition(coordinates) {
    let x, y;

    // Generate random coordinates until a unique pair is found
    do {
      x = NumberUtil.getRandomNumber(this.#settings.gridSize.columns);
      y = NumberUtil.getRandomNumber(this.#settings.gridSize.rows);
    } while (coordinates.some((coord) => coord.x === x && coord.y === y));
    return new Position({ x, y });
  }

  set settings(settings) {
    this.#settings = {
      ...this.#settings,
      ...settings,
    };

    this.#settings.gridSize = settings.gridSize
      ? {
          ...this.#settings.gridSize,
          ...settings.gridSize,
        }
      : this.#settings.gridSize;
  }

  get settings() {
    return this.#settings;
  }

  get player1() {
    return this.#player1.clone();
  }
  get player2() {
    return this.#player2.clone();
  }
  get google() {
    return this.#google.clone();
  }
  get status() {
    return this.#status;
  }
  get score() {
    return this.#score;
  }

  #createdUnitsPosition() {
    this.#player1 = new Player(this.getRandomPosition([]), 1);
    this.#player2 = new Player(
      this.getRandomPosition([this.#player1.position]),
      2
    );
    this.#moveGoogleToRandomPosition(true);
  }

  async start() {
    if (this.#status === "pending") {
      this.#status = "in-progress";
      this.#createdUnitsPosition();

      // this.#runGoogleJumpInterval();
    }
    if (this.#settings.mode !== GAME_MODES.CLIENT) {
      this.#runGoogleJumpInterval();
    }
  }

  #runGoogleJumpInterval() {
    this.#googleSetIntervalId = setInterval(() => {
      this.#moveGoogleToRandomPosition();
    }, this.#settings.googleJumpInterval);
  }

  async stop() {
    clearInterval(this.#googleSetIntervalId);
    this.#status = "stoped";
  }

  async #finishGame() {
    clearInterval(this.#googleSetIntervalId);
    this.#status = "finished";
    this.#google.position = new Position({
      x: this.#settings.gridSize.columns + 1,
      y: this.#settings.gridSize.rows + 1,
    });
    // console.log("this.#status", this.#status);
  }

  #moveGoogleToRandomPosition(excludeGoogle) {
    let notCrossedPosition = [this.#player1.position, this.#player2.position];

    if (!excludeGoogle) {
      notCrossedPosition.push(this.#google.position);
    }
    const newGooglePosition = this.getRandomPosition(notCrossedPosition);
    this.#google = new Google(newGooglePosition);
    this.eventEmiter.emit(
      "change",
      this.#eventFactory.googleJumped(newGooglePosition.x, newGooglePosition.y)
    );
  }

  // 1,1  1,2
  // 2,1  2,2

  #checkBorder(player, delta) {
    const newPosition = player.position.clone();
    if (delta.x) newPosition.x += delta.x;
    if (delta.y) newPosition.y += delta.y;

    if (newPosition.x < 1 || newPosition.x > this.#settings.gridSize.columns) {
      return true;
    }
    if (newPosition.y < 1 || newPosition.y > this.#settings.gridSize.rows) {
      return true;
    }

    return false;
  }

  #checkOtherPlayer(movingPlayer, anotherPlayer, delta) {
    const newPosition = movingPlayer.position.clone();
    if (delta.x) newPosition.x += delta.x;
    if (delta.y) newPosition.y += delta.y;

    return anotherPlayer.position.equal(newPosition);
  }

  #checkGoogleCatching(player) {
    // console.log("player.position", player.position);
    // console.log("this.#google.position", this.#google.position);
    if (player.position.equal(this.#google.position)) {
      this.#score[player.id].points++;

      // console.log("this.#score[player.id]", this.#score[player.id]);
      // console.log("this.#settings.scoreToWin", this.#settings.scoreToWin);

      if (this.#score[player.id].points === this.#settings.scoreToWin) {
        this.#finishGame();
      } else {
        clearInterval(this.#googleSetIntervalId);
        this.#moveGoogleToRandomPosition();
        this.#runGoogleJumpInterval();
      }
    }
  }

  #movePlayer(movingPlayer, anotherPlayer, delta) {
    const isBorder = this.#checkBorder(movingPlayer, delta);
    const isAnotherPlayer = this.#checkOtherPlayer(
      movingPlayer,
      anotherPlayer,
      delta
    );

    if (isBorder || isAnotherPlayer) {
      return;
    }

    if (delta.x) {
      movingPlayer.position = new Position({
        x: movingPlayer.position.x + delta.x,
        y: movingPlayer.position.y,
      });
    } else {
      movingPlayer.position = new Position({
        x: movingPlayer.position.x,
        y: movingPlayer.position.y + delta.y,
      });
    }
    this.#checkGoogleCatching(movingPlayer);
    this.eventEmiter.emit(
      "change",
      this.#eventFactory.playerMoved(delta, movingPlayer.id)
    );
  }

  movePlayer1Right() {
    const delta = { x: 1 };
    this.#movePlayer(this.#player1, this.#player2, delta);
  }

  movePlayer1Left() {
    const delta = { x: -1 };
    this.#movePlayer(this.#player1, this.#player2, delta);
  }

  movePlayer1Up() {
    const delta = { y: -1 };
    this.#movePlayer(this.#player1, this.#player2, delta);
  }

  movePlayer1Down() {
    const delta = { y: 1 };
    this.#movePlayer(this.#player1, this.#player2, delta);
  }

  movePlayer2Right() {
    const delta = { x: 1 };
    this.#movePlayer(this.#player2, this.#player1, delta);
  }

  movePlayer2Left() {
    const delta = { x: -1 };
    this.#movePlayer(this.#player2, this.#player1, delta);
  }

  movePlayer2Up() {
    const delta = { y: -1 };
    this.#movePlayer(this.#player2, this.#player1, delta);
  }

  movePlayer2Down() {
    const delta = { y: 1 };
    this.#movePlayer(this.#player2, this.#player1, delta);
  }

  pause() {
    if (this.#status === "in-progress") {
      this.#status = "paused";
    }
  }
  resume() {
    if (this.#status === "paused") {
      this.#status = "in-progress";
    }
  }
}

class NumberUtil {
  static getRandomNumber(max) {
    return Math.floor(Math.random() * max + 1);
  }
}

class Unit {
  #position;
  constructor(position) {
    this.#position = position;
  }
  get position() {
    return new Position(this.#position);
  }
  set position(position) {
    this.#position = position;
  }

  clone() {
    return Object.assign(new this.constructor(), this, {
      position: this.#position,
    });
  }
}

class Player extends Unit {
  constructor(position, id) {
    super(position);
    this.id = id;
  }
}

class Google extends Unit {
  constructor(position) {
    super(position);
  }
}

class Position {
  constructor(obj) {
    this.x = obj.x;
    this.y = obj.y;
  }
  clone() {
    return new Position({ x: this.x, y: this.y });
  }
  equal(positionToCompare) {
    return this.x === positionToCompare.x && this.y === positionToCompare.y;
  }
}

// module.exports = {
//   Game,
//   Position,
// };
