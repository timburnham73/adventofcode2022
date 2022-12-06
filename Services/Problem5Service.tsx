import { create } from "domain";
import { createTextSpanFromBounds } from "typescript";
import { problem5Data } from "../adventData/problem5";


class Problem5Service{
    
    getData = () => {
        return problem5Data;
    }

    solvePart1 = () => {
        return this.solveProblem(true);
    }

    solvePart2 = () => {
        return this.solveProblem(false);
    }

    solveProblem(moveIndividually : boolean){
        const data = this.getData().split(('\n'));
        const cargo = this.getCargo();
        
        for(const index in data){
            const commandLogic = data[index].replace('move ','').replace('from ','').replace('to ', '').split(' ');
            const cratesToMove = Number(commandLogic[0]);
            const from = Number(commandLogic[1]) - 1;
            const to = Number(commandLogic[2]) - 1;
            
            const crateFrom = cargo[from];
            const crateTo   = cargo[to];
            
            if(moveIndividually){
                for(let i = 0; i < cratesToMove; i++){
                    crateTo.push(crateFrom.pop() || '');
                }
            }
            else{
                const indexOfStartingCrateToMove = crateFrom.length - cratesToMove;
                
                //Get the crates to move and 
                const movingCrates = crateFrom.slice(indexOfStartingCrateToMove);
                movingCrates.forEach(create => crateTo.push(create));

                //remove the crates from createFrom
                crateFrom.splice(indexOfStartingCrateToMove)
                
            }
        }
        const cratesOnTop = cargo.map(x => x[x.length -1]).join('');
        return cratesOnTop;
    }

    //     [V] [G]             [H]        
    // [Z] [H] [Z]         [T] [S]        
    // [P] [D] [F]         [B] [V] [Q]    
    // [B] [M] [V] [N]     [F] [D] [N]    
    // [Q] [Q] [D] [F]     [Z] [Z] [P] [M]
    // [M] [Z] [R] [D] [Q] [V] [T] [F] [R]
    // [D] [L] [H] [G] [F] [Q] [M] [G] [W]
    // [N] [C] [Q] [H] [N] [D] [Q] [M] [B]
    //  1   2   3   4   5   6   7   8   9 
    getCargo = () => {
        const cargo : string[][] = [];
        cargo.push(['N','D','M','Q','B','P','Z']);
        cargo.push(['C','L','Z','Q','M','D','H','V']);
        cargo.push(['Q','H','R','D','V','F','Z','G']);
        cargo.push(['H','G','D','F','N']);
        cargo.push(['N','F','Q']);
        cargo.push(['D','Q','V','Z','F','B','T']);
        cargo.push(['Q','M','T','Z','D','V','S','H']);
        cargo.push(['M','G','F','P','N','Q']);
        cargo.push(['B','W','R','M']);
    
        //cargo.push(['Z','N']);
        //cargo.push(['M','C','D']);
        //cargo.push(['P']);

        //Not these answers
        
        return cargo;
    }
}

const problem5Service = new Problem5Service();
export default problem5Service;