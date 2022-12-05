import { problem1data } from "../adventData/problem1";


class Problem1Service{
    
    getData = () => {
        return problem1data;
    }

    solvePart1 = () => {
        const data = this.getData();
        const calorieTotals = this.getCalorieTotals(data);
        
        const mostCalories = calorieTotals.sort((a,b)=>a-b).reverse()[0];
        
        return mostCalories;
    }

    solvePart2 = () => {
        const data = this.getData();
        const calorieTotals = this.getCalorieTotals(data);
        
        
        const mostCalories = calorieTotals.sort((a,b)=>a-b).reverse()[0];
        const secondMostCalories = calorieTotals.sort((a,b)=>a-b).reverse()[1];
        const threeMostCalories = calorieTotals.sort((a,b)=>a-b).reverse()[2];
        
        return mostCalories + secondMostCalories + threeMostCalories;
    }

    getCalorieTotals = (data : String) : number[] => {
        const calories = data?.split('\n');
        const calorieTotals = [];
        let runningTotal : number = 0;

        for(let calorie of calories){
            if(!calorie){
                calorieTotals.push(runningTotal);
                runningTotal = 0;
                continue;
            }
            runningTotal += Number(calorie);
        }

        return calorieTotals;
    }
}

const problem1Service = new Problem1Service();
export default problem1Service;