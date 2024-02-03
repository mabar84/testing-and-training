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

  it("player1 and player2 should have unique coordinates", () => {
    const game = new Game();

    game.settings = {
      gridSize: {
        columns: 2,
        rows: 3,
      },
    };

    game.start();

    console.log("game.player1", game.player1);
    console.log("game.player2", game.player2);
    console.log("game.google", game.google);

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
  });
});
