import gameChoices from '../helpers/game_choices/game_choices';

class Game{
  constructor(){
    this.choicePlayer1 = null;
    this.choicePlayer2 = null;
    this.winner = '';
  }

  compareChoices() {
    let playerId = null;
    const choiceMap = gameChoices.rules;
    if(this.choicePlayer1 != this.choicePlayer2) {
      choiceMap[this.choicePlayer1].winsOver.indexOf(this.choicePlayer2) != -1 ? playerId = 1 : playerId = 2;
    }
    this.setWinner({ playerId: playerId});
  }

  setPlayerChoice(playerNumber, choice){
    if (playerNumber == 1 || playerNumber == 2){
      playerNumber == 1 ? this.choicePlayer1 = choice : this.choicePlayer2 = choice;
    }
  }

  setWinner(winner) {
    if(winner){
      this.winner= winner.playerId;
    }
  }

}

export default Game;