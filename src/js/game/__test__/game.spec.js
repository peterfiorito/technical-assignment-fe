import Game from '../game';

describe('Game', () => {
	it('Should create a game', () => {
    // set up
    const game = new Game();
    // assert
    expect(game).toHaveProperty('choicePlayer1');
    expect(game).toHaveProperty('choicePlayer2');
    expect(game).toHaveProperty('winner');
	});
	it('Can return a winner if a playerId is provided', () => {
    // set up
    let game = new Game();
    // execute
    game.setWinner({ playerId: 1 });
    // assert
    expect(game.winner).toBe(1);
    // set up
    game = new Game();
    // execute
    game.setWinner(false);
    // assert
    expect(game.winner).toBe('');
  });
  it('Can set a player choice if playerId is valid', () => {
    // set up
    let game = new Game();
    // execute
    game.setPlayerChoice(1, 'r');
    // assert
    expect(game.choicePlayer1).toBe('r');
    // set up
    game = new Game();
    // execute
    game.setPlayerChoice(3, 'r');
    // assert
    expect(game.choicePlayer1).toBe(null);
  });
	it('Can compare choices and determine a winning one', () => {
    // set up
    let game = new Game();
    game.setPlayerChoice(1, 'r');
    game.setPlayerChoice(2, 's');
    // execute
    game.compareChoices();
    // assert
    expect(game.winner).toBe(1);
    // set up
    game = new Game();
    game.setPlayerChoice(1, 's');
    game.setPlayerChoice(2, 'r');
    // execute
    game.compareChoices();
    // assert
    expect(game.winner).toBe(2);
	});
	it('Can compare choices and determine a draw', () => {
    // set up
    const game = new Game();
    game.setPlayerChoice(1, 'r');
    game.setPlayerChoice(2, 'r');
    // execute
    game.compareChoices();
    // assert
    expect(game.winner).toBe(null);
	});
});