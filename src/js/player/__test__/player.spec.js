import Player from '../player';
import gameChoices from '../../helpers/game_choices/game_choices';

describe('Player', () => {
	it('Should create a player', () => {
    // set up
    const player = new Player();
    // assert
    expect(player).toHaveProperty('type');
    expect(player).toHaveProperty('choice');
    expect(player).toHaveProperty('allChoices');
	});
  it('Sets game choices to the general dictionary', () => {
    // set up
    const player = new Player();
    // assert
    expect(player.allChoices).toMatchObject(gameChoices.validChoices());
  });
  it('Can return a random choice', () => {
    // set up
    const player = new Player();
    // execute
    const choice = player.generateRandomChoice();
    // assert
    expect(gameChoices.validChoices().indexOf(choice)).not.toBe(-1);
  });
  it('Can set player type', () => {
    // set up
    const player = new Player();
    // execute
    player.setPlayerType('human');
    // assert
    expect(player.type).toBe('human');
  });
  it('Can set player choice', () => {
    // set up
    const player = new Player();
    // execute
    const choice = player.setPlayerChoice('r');
    // assert
    expect(gameChoices.validChoices().indexOf(choice)).not.toBe(-1);
    expect(player.choice).toBe('r');
  });
});