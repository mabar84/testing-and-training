const { Game } = require("./game.js");

describe("game tests", () => {
  it("init settings", () => {
    const game = new Game();

    game.settings = {
      gridSize: {
        columns: 4,
        rows: 5,
      },
    };

    expect(game.settings.gridSize.columns).toBe(4);
    expect(game.settings.gridSize.rows).toBe(5);
  });

  it("start game", () => {
    const game = new Game();

    game.settings = {
      gridSize: {
        columns: 4,
        rows: 5,
      },
    };

    expect(game.status).toBe("pending");
    game.start();
    expect(game.status).toBe("in-progress");
    game.pause();
    expect(game.status).toBe("paused");
    game.resume();
    expect(game.status).toBe("in-progress");
  });

  it("player1, player2 and google should have unique coordinates", () => {
    for (let i = 0; i < 10; i++) {
      const game = new Game();
      game.settings = {
        gridSize: {
          columns: 2,
          rows: 3,
        },
      };

      (async () => {
        await game.start();
      })();

      console.log("game.player1", game.player1);
      console.log("game.player2", game.player2);
      // console.log("game.google", game.google);

      expect([1, 2]).toContain(game.player1.position.x);
      expect([1, 2, 3]).toContain(game.player1.position.y);

      expect([1, 2]).toContain(game.player2.position.x);
      expect([1, 2, 3]).toContain(game.player2.position.y);

      expect([1, 2]).toContain(game.google.position.x);
      expect([1, 2, 3]).toContain(game.google.position.y);

      expect(
        game.google.position.x !== game.player1.position.x ||
          (game.google.position.y !== game.player1.position.y &&
            game.google.position.x !== game.player2.position.x) ||
          game.google.position.y !== game.player2.position.y
      );
    }
  });

  it("check google position after jump", async () => {
    const game = new Game();
    game.settings = {
      gridSize: {
        columns: 1,
        rows: 4,
      },
      googleJumpInterval: 100,
    };

    await game.start();

    const prevPosition = game.google.position.clone();
    // console.log("prevPosition", prevPosition);
    await sleep(150);
    // console.log("game.google.position", game.google.position);
    expect(game.google.position.equal(prevPosition)).toBe(false);
  });

  it("catch google by player1 or player2", async () => {
    const game = new Game();
    game.settings = {
      gridSize: {
        columns: 3,
        rows: 1,
      },
      // googleJumpInterval: 100,
    };
    // p1 p2 g || p1 g p2 || p2 p1 g || p2 g p1 || g p1 p2 || g p2 p1

    const deltaForPlayer1 = game.google.position.x - game.player1.position.x;

    if (Math.abs(deltaForPlayer1) === 2) {
      const deltaForPlayer2 = game.google.position.x - game.player2.position.x;
      if (deltaForPlayer2 > 0) {
        game.movePlayer2Right();
      } else {
        game.movePlayer2Left();
      }
    }

    expect();
  });
});

function sleep(ms) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}
