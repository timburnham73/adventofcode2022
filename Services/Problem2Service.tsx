import { problem2data } from "../adventData/problem2";


const Scissors = 'Scissors';
const Rock = 'Rock';
const Paper = 'Paper';

//Score of the outcome of the round
const lost = 0;
const draw = 3;
const won  = 6; 

class Problem2Service{
    
    getData = () => {
        return problem2data;
    }
    
    solvePart1 = () => {
        const data = this.getData();
        const rockPaperScissors = [
            {name : 'A',    value : Rock},
            {name : 'B',    value : Paper},
            {name : 'C',    value  : Scissors},
            {name : 'X',    value  : Rock},
            {name : 'Y',    value  : Paper},
            {name : 'Z',    value  : Scissors}
        ]

        const score = [
            {name : Rock      , value : 1},
            {name : Paper     , value : 2},
            {name : Scissors  , value : 3}
        ]

        //Score of the players move
        const playScore = [
            {name: Rock,      value: 1},
            {name: Paper,     value: 2},
            {name: Scissors,  value: 3}
        ]

        let oppTotalScore : number = 0;
        let myTotalScore : number = 0;

        const rpsRounds = data.split('\n');

        for(let  rpsRound of rpsRounds){
            let roundResult = rpsRound;
            let results = roundResult.split(' ');

            let myResult    = rockPaperScissors.find(x => x.name === results[1]);
            let oppResult   = rockPaperScissors.find(x => x.name === results[0]);
            
            let myResultValue : string  = myResult?.value || '';
            let oppResultValue : string  = oppResult?.value || '';
            let myScore  = this.calculateRPSRoundScore(myResultValue, oppResultValue);
            let oppScore  = this.calculateRPSRoundScore(oppResultValue, myResultValue);

            
            //First score what the player played.
            myScore  += playScore.find(x => x.name === myResult?.value)?.value || 0;
            oppScore += playScore.find(x => x.name === oppResult?.value)?.value || 0;    
        

            myTotalScore += myScore;
            oppTotalScore += oppScore;
            //console.log(`MyScore: ${myResult?.value} = ${myScore}, Opponent Score:${oppResult?.value} = ${oppScore}`);
        }
        //console.log(`MyScore: ${myTotalScore}, Opponent Score: ${oppTotalScore}`);
        return myTotalScore;
    }

    solvePart2 = () => {
        const data = this.getData();
        const rockPaperScissors = [
            {name : 'A',    value : Rock},
            {name : 'B',    value : Paper},
            {name : 'C',    value  : Scissors}
        ]

        const gameResult = [
            {name : 'X',    value  : 'lose'},
            {name : 'Y',    value  : 'draw'},
            {name : 'Z',    value  : 'win'}
        ]

        const score = [
            {name : Rock      , value : 1},
            {name : Paper     , value : 2},
            {name : Scissors  , value : 3}
        ]

        //Score of the players move
        const playScore = [
            {name: Rock,      value: 1},
            {name: Paper,     value: 2},
            {name: Scissors,  value: 3}
        ]

        let oppTotalScore : number = 0;
        let myTotalScore : number = 0;

        const rpsRounds = data.split('\n');

        for(let  index in rpsRounds){
            let roundResult = rpsRounds[index];
            let results = roundResult.split(' ');

            
            let oppResult   = rockPaperScissors.find(x => x.name === results[0]);
            let oppResultValue =oppResult?.value || '';

            let myGameOutcome    = gameResult.find(x => x.name === results[1]);
            let myGameOutcomeValue : string  = myGameOutcome?.value || '';

            let myResultValue = this.getMyMove(myGameOutcomeValue, oppResultValue);

            let myScore  = this.calculateRPSRoundScore(myResultValue, oppResultValue);
            let oppScore  = this.calculateRPSRoundScore(oppResultValue, myResultValue);

            
            //First score what the player played.
            myScore  += playScore.find(x => x.name === myResultValue)?.value || 0;
            oppScore += playScore.find(x => x.name === oppResultValue)?.value || 0;    
        

            myTotalScore += myScore;
            oppTotalScore += oppScore;
            //console.log(`MyScore: ${myResult?.value} = ${myScore}, Opponent Score:${oppResult?.value} = ${oppScore}`);
        }
        //console.log(`MyScore: ${myTotalScore}, Opponent Score: ${oppTotalScore}`);
        return myTotalScore;
    }

    /////////////////////////
    //Helper functions

    //Caculate the scrore of the player
    calculateRPSRoundScore  = (playerMove : string , opponentMove : string ) : number => {
        let rtnScore = 0;
        rtnScore  += playerMove === opponentMove ? draw : lost; //Draw
        rtnScore  += playerMove === Paper && opponentMove === Rock ? won : lost; //Rock won
        rtnScore  += playerMove === Rock && opponentMove === Scissors ? won : lost; //Rock won
        rtnScore  += playerMove === Scissors && opponentMove === Paper ? won : lost; //Scissors won
        return rtnScore;
    }

    //The gameOutcomeValue is the outcome (win, lose, draw) of my value. 
    //The opponentMove is the move of the oppenent.
    //This function returns the my move based on the values above.
    getMyMove = (gameOutcomeValue : string, opponentMove : string) : string => {
        if(gameOutcomeValue === 'win'){
            if(opponentMove === Rock){
                return Paper;
            }
            else if(opponentMove === Paper){
                return Scissors;
            }
            else if(opponentMove === Scissors){
                return Rock;
            }
        }
        else if(gameOutcomeValue === 'lose'){
            if(opponentMove === Rock){
                return Scissors;
            }
            else if(opponentMove === Paper){
                return Rock;
            }
            else if(opponentMove === Scissors){
                return Paper;
            }
        }

        //By default return draw.
        //Need to return the same move as opponent
        return opponentMove; 
        
    }
}

const problem2Service = new Problem2Service();
export default problem2Service;