import {problem6Data} from "../adventData/problem6";


class Problem6Service{
    
    getData = () => {
        return problem6Data;
    }

    solvePart1 = () => {
       const startOfMessageMarker = this.solveProblem(false);
        return startOfMessageMarker;

    }

    solvePart2 = () => {
        const data = this.getData();
        
        return 0;
    }

    solveProblem(findMessage :boolean){
        const data = this.getData().split('');
        for(const index in data){
            const idxNum = Number(index);
            const chunk = data.slice(idxNum, idxNum + 14);
            const hasDupChar = this.doesStringHaveDuplicateChar(chunk.join(''));
            if(hasDupChar === false){
                return idxNum + 14;
            }
        }
        return 0;
    }

    doesStringHaveDuplicateChar = (strToTest : string) => {
        const charArray = strToTest.split('');
        for(const charForDup of charArray){
            const dupChars = charArray.filter(arrayChar => charForDup === arrayChar);
            
            if(dupChars.length > 1){
                return true;
            }
        }
        return false
    }
    
}

const problem6Service = new Problem6Service();
export default problem6Service;