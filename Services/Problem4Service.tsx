import { problem4Data } from "../adventData/problem4";

class Problem4Service {
    getData = () => {
        return problem4Data;
    }

    solvePart1 = () =>{
        const data = this.getData().split(('\n'));

        let countOfOverlappingAssignments = 0;
        for(const line of data){
            const assignments = line.split(',');
            const assignment1 = assignments[0].split('-');
            const assignment2 = assignments[1].split('-');

            const assignment1Start = Number(assignment1[0]);
            const assignment1End = Number(assignment1[1]);

            const assignment2Start = Number(assignment2[0]);
            const assignment2End = Number(assignment2[1]);

            if(assignment1Start >= assignment2Start && assignment1End <= assignment2End){
                countOfOverlappingAssignments++;
            }
            else if(assignment2Start >= assignment1Start && assignment2End <= assignment1End){
                countOfOverlappingAssignments++;
            }
        } 
        //console.log(`Count of overlapping assignments ${countOfOverlappingAssignments}`);
        return countOfOverlappingAssignments;
    }

    solvePart2 = () =>{
        const data = this.getData().split(('\n'));

        let countOfOverlappingAssignments = 0;
        
        for(const line of data){
            const assignments = line.split(',');
            const assignment1 = assignments[0].split('-');
            const assignment2 = assignments[1].split('-');

            const assignment1Start = Number(assignment1[0]);
            const assignment1End = Number(assignment1[1]);

            const assignment2Start = Number(assignment2[0]);
            const assignment2End = Number(assignment2[1]);
            
            if(assignment1End >= assignment2Start && assignment1End <= assignment2End){
                countOfOverlappingAssignments++;
            }
            else if(assignment2End >= assignment1Start && assignment2End <= assignment1End){
                countOfOverlappingAssignments++;
            }
            
        } 
        
        console.log(`Count of overlapping assignments ${countOfOverlappingAssignments}`);
        return countOfOverlappingAssignments;
    }

}

const problem4Service = new Problem4Service();
export default problem4Service;