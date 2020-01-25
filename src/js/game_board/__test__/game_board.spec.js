import GameBoard from '../game_board';

describe('Gameboard', () => {
  it('Should create a gameboard', () => {
    // set up
    const gameBoard = new GameBoard();
    // assert
    expect(gameBoard).toHaveProperty('score');
    expect(gameBoard).toHaveProperty('mode');
  });
  it('Can set a game mode if valid', () => {
    // set up
    let gameBoard = new GameBoard();
    // assert
    expect(gameBoard.mode).toBe(0);
    // execute
    gameBoard.setGameMode(1);
    // assert
    expect(gameBoard.mode).toBe(1)
    // setup
    gameBoard = new GameBoard();
    // assert
    expect(gameBoard.mode).toBe(0);
    // execute
    gameBoard.setGameMode(3);
    // assert
    expect(gameBoard.mode).toBe(0)
  });
  it('Can reset a game', () => {
    // set up
    const gameBoard = new GameBoard();
    gameBoard.score = { player_1: 2, player_2: 1 };
    // execute
    gameBoard.restartGame()
    // assert
    expect(gameBoard.score).toMatchObject({});
  });
  it('Can set a winning score or a draw', () => {
    // set up
    const gameBoard = new GameBoard();
    // execute
    gameBoard.setScore(1)
    // assert
    expect(gameBoard.score.player_1).toBe(1);
    expect(gameBoard.score).toMatchObject({ player_1: 1, player_2: 0, draw: 0 });
    // execute
    gameBoard.setScore(2)
    //assert
    expect(gameBoard.score).toMatchObject({ player_1: 1, player_2: 1, draw: 0 });
    // execute
    gameBoard.setScore(null);
    expect(gameBoard.score).toMatchObject({ player_1: 1, player_2: 1, draw: 1 });
    gameBoard.setScore(null);
    expect(gameBoard.score).toMatchObject({ player_1: 1, player_2: 1, draw: 2 });
  });
});