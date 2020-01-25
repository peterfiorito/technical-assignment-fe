import gameChoices from '../helpers/game_choices/game_choices';

class Player{
  constructor(){
    this.type = null;
    this.choice = null;
    this.allChoices = gameChoices.validChoices();
  }

  generateRandomChoice(){
    return this.allChoices[Math.floor(Math.random() * this.allChoices.length)];
  }

  setPlayerType(type){
    return this.type = type;
  }

  setPlayerChoice(choice){
    return this.choice = choice;
  }

}

export default Player;