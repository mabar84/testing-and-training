class Game {
  #settings = {
    gridSize: {
      columns: 4,
      rows: 4,
    },
  };
  #status = "pending";
  #player1;
  #player2;
  #google;

  constructor() {}

  getRandomPosition(coordinates) {
    let x, y;

    // Generate random coordinates until a unique pair is found
    do {
      x = NumberUtil.getRandomNumber(this.#settings.gridSize.columns);
      y = NumberUtil.getRandomNumber(this.#settings.gridSize.rows);
    } while (
      coordinates.some(
        (coord) => coord.position.x === x && coord.position.y === y
      )
    );

    return { x, y };
  }

  set settings(settings) {
    this.#settings = settings;
  }
  get settings() {
    return this.#settings;
  }

  get player1() {
    return this.#player1;
  }
  get player2() {
    return this.#player2;
  }
  get google() {
    return this.#google;
  }

  get status() {
    return this.#status;
  }
  start() {
    if (this.#status === "pending") {
      this.#player1 = new Player({
        x: NumberUtil.getRandomNumber(this.#settings.gridSize.columns),
        y: NumberUtil.getRandomNumber(this.#settings.gridSize.rows),
      });
      this.#player2 = new Player(this.getRandomPosition([this.#player1]));
      this.#google = new Google(
        this.getRandomPosition([this.#player1, this.#player2])
      );
      this.#status = "in-progress";
    }
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
    return Math.floor(Math.random() * (max - 1 + 1) + 1);
  }
}

class Unit {
  constructor(position) {
    this.position = position;
  }
}

class Player extends Unit {
  constructor(position) {
    super(position);
  }
}

class Google extends Unit {
  constructor(position) {
    super(position);
  }
}

class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

module.exports = {
  Game,
};
