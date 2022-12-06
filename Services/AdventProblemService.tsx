import problem1Service from "./Problem1Service";
import problem2Service from "./Problem2Service";
import problem3Service from "./Problem3Service";
import problem4Service from "./Problem4Service";
import {AdventProblemInfo} from "../types/AdventProblemInfo"
import problem5Service from "./Problem5Service";

class AdventProblemService{
    
    getAdventProblemResults = () : AdventProblemInfo[] => {
        const results = [];
        
        results.push({ part1Result: problem1Service.solvePart1(), part2Result :problem1Service.solvePart2() });
        
        results.push({ part1Result: problem2Service.solvePart1(), part2Result :problem2Service.solvePart2() });

        results.push({ part1Result: problem3Service.solvePart1(), part2Result :problem3Service.solvePart2() });

        results.push({ part1Result: problem4Service.solvePart1(), part2Result :problem4Service.solvePart2() });

        results.push({ part1Result: problem5Service.solvePart1(), part2Result :problem5Service.solvePart2() });

        return results;
    }
    

    
}

const adventProblemService = new AdventProblemService();
export default adventProblemService;