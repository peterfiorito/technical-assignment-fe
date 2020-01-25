import gameChoices from '../game_choices';

describe('Game Choices', () => {
	it('Should return all available choices', () => {
    // set up
    const choices = gameChoices.validChoices();
    // assert
    expect(choices.length).toBe(3);
	});
	it('Should have current game rules mapped', () => {
    // set up
    const curentRules = gameChoices.rules;
    // assert
    expect(curentRules).toHaveProperty('r');
    expect(curentRules).toHaveProperty('s');
    expect(curentRules).toHaveProperty('p');
	});
});