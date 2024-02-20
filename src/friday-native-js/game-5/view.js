export class GameComponent {
  #tableElement;
  #resultElement;
  #game;

  constructor(game) {
    this.#tableElement = document.querySelector("#gameField");
    this.#resultElement = document.querySelector("#resultDiv");
    this.#game = game;
  }

  render() {
    this.#tableElement.innerHTML = "";
    this.#resultElement.innerHTML = "";

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
