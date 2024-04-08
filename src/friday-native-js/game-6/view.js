import { DIRECTION } from "./game.js";

export class GameComponent {
  #tableElement;
  #resultElement;
  #game;
  #controller;
  #unsubscribeEventListeners = null;

  constructor(controller, game) {
    this.#tableElement = document.querySelector("#gameField");
    this.#resultElement = document.querySelector("#resultDiv");
    this.#game = game;
    this.#controller = controller;

    this.#game.eventEmiter.addEventListener("change", () => {
      this.render();
    });
  }

  #bindEventListeners() {
    if (this.#unsubscribeEventListeners !== null) {
      this.#unsubscribeEventListeners();
    }

    const handlers = {
      ArrowUp: () => this.#controller.movePlayer(DIRECTION.UP, 1),
      ArrowDown: () => this.#controller.movePlayer(DIRECTION.DOWN, 1),
      ArrowLeft: () => this.#controller.movePlayer(DIRECTION.LEFT, 1),
      ArrowRight: () => this.#controller.movePlayer(DIRECTION.RIGHT, 1),
      KeyW: () => this.#controller.movePlayer(DIRECTION.UP, 2),
      KeyS: () => this.#controller.movePlayer(DIRECTION.DOWN, 2),
      KeyA: () => this.#controller.movePlayer(DIRECTION.LEFT, 2),
      KeyD: () => this.#controller.movePlayer(DIRECTION.RIGHT, 2),
    };

    let bindPlayersControls = (e) => {
      const handler = handlers[e.code];
      handler && handler();
    };

    window.addEventListener("keydown", bindPlayersControls);

    this.#unsubscribeEventListeners = () => {
      window.removeEventListener("keydown", bindPlayersControls);
    };
  }

  render() {
    this.#tableElement.innerHTML = "";
    this.#resultElement.innerHTML = "";

    this.#bindEventListeners();

    this.#resultElement.append(
      `player1: ${this.#game.score[1].points} --- player2: ${
        this.#game.score[2].points
      }`
    );

    for (let y = 1; y <= this.#game.settings.gridSize.rows; y++) {
      const trElements = document.createElement("tr");

      for (let x = 1; x <= this.#game.settings.gridSize.columns; x++) {
        const tdElements = document.createElement("td");

        if (
          this.#game.player1.position.x === x &&
          this.#game.player1.position.y === y
        ) {
          const imgElement = document.createElement("img");
          imgElement.src = "./assets/player1.png";
          tdElements.append(imgElement);
        }

        if (
          this.#game.player2.position.x === x &&
          this.#game.player2.position.y === y
        ) {
          const imgElement = document.createElement("img");
          imgElement.src = "./assets/player2.png";
          tdElements.append(imgElement);
        }

        if (
          this.#game.google.position.x === x &&
          this.#game.google.position.y === y
        ) {
          const imgElement = document.createElement("img");
          imgElement.src = "./assets/google.webp";
          tdElements.append(imgElement);
        }

        trElements.append(tdElements);
      }
      this.#tableElement.append(trElements);
    }
  }
}
