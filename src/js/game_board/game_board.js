
class GameBoard {
  constructor(){
    this.score = {
      player_1: 0,
      player_2: 0,
      draw: 0
    };
    this.mode = 0;
  }

  setGameMode (mode) {
    if(mode == 0 || mode == 1){
      this.mode = parseInt(mode);
    }
  }

  restartGame (){
    this.score = {};
  }

  setScore(playerId){
    if(playerId) {
      return this.score[`player_${playerId}`] += 1;
    }
    return this.score.draw += 1;
  }

}

export default GameBoard;