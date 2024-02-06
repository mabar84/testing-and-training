class Game {
    #settings = {
        gridSize: {
            columns: 4,
            rows: 4,
        },
        googleJumpInterval: 2000,
    };
    #status = "pending";
    #player1;
    #player2;
    #google;
    #score = {
        1: 0,
        2: 0,
    };

    constructor() {
    }

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

        return {x, y};
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

    #createdUnitsPosition() {
        this.#player1 = new Player(
            new Position({
                x: NumberUtil.getRandomNumber(this.#settings.gridSize.columns),
                y: NumberUtil.getRandomNumber(this.#settings.gridSize.rows),
            }),
            1
        );
        this.#player2 = new Player(
            new Position(this.getRandomPosition([this.#player1])),
            2
        );
        this.#google = new Google(
            new Position(this.getRandomPosition([this.#player1, this.#player2]))
        );
    }

    async start() {
        if (this.#status === "pending") {
            this.#createdUnitsPosition();
            this.#status = "in-progress";
            setInterval(() => {
                this.#jumpGoogleToAnotherPosition();
            }, this.#settings.googleJumpInterval);
        }
    }

    #jumpGoogleToAnotherPosition() {
        this.#google = new Google(
            new Position(
                this.getRandomPosition([this.#player1, this.#player2, this.#google])
            )
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

        return newPosition.position.equal(anotherPlayer);
    }

    #checkGoogleCatching(player) {
        if (player.position.equal(this.#google.position)) {
            this.#score[player.id]++;
            jumpGoogleToAnotherPosition();
        }
    }

    // TODO зарефакторить передвижения игроков

    movePlayer1Right() {
        const delta = {x: 1};

        const isBorder = this.#checkBorder(this.player1, delta);
        const isAnotherPlayer = this.#checkOtherPlayer(
            this.player1,
            this.player2,
            delta
        );

        if (isBorder || isAnotherPlayer) {
            return;
        }

        this.#player1.position.x++;

        this.#checkGoogleCatching(this.player1);
    }

    movePlayer1Left() {
        const delta = {x: -1};

        const isBorder = this.#checkBorder(this.player1, delta);
        const isAnotherPlayer = this.#checkOtherPlayer(
            this.player1,
            this.player2,
            delta
        );

        if (isBorder || isAnotherPlayer) {
            return;
        }

        this.#player1.position.x++;

        this.#checkGoogleCatching(this.player1);
    }

    movePlayer2Right() {
    }

    movePlayer2Left() {
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
    constructor(position) {
        this.position = position;
    }
}

class Player extends Unit {
    constructor(position, id) {
        super(position);
        id: id;
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
        return new Position({x: this.x, y: this.y});
    }

    equal(positionToCompare) {
        return this.x === positionToCompare.x && this.y === positionToCompare.y;
    }
}

module.exports = {
    Game,
};
