import { group } from "console";
import { problem3Data } from "../adventData/problem3";

const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

class Problem3Service{
    
    getData = () => {
        return problem3Data;
    }

    solvePart1 = () => {
        const data = this.getData();
        
        const ruckSacks = data.split('\n');
        let priorityTotal = 0;
        for(let ruckSack of ruckSacks){
            priorityTotal += this.findDuplicateRuckSackItemPriority(ruckSack);
        }

        return priorityTotal;
    }

    solvePart2 = () => {
        const data = this.getData();
        const ruckSacks = data.split('\n');
        let priorityTotal = 0;

        let group1 = [];
        let group2 = [];
        for(let ruckSack of ruckSacks){
            if(group1.length < 3){
                group1.push(ruckSack);
            }
            else if(group2.length < 3){
                group2.push(ruckSack);
            }

            if(group1.length === 3 && group2.length === 3){
                //find the badge function   
                const badge1 = this.findGroupBadge(group1);
                const badge2 = this.findGroupBadge(group2);
                const sumOfPrioritiesGroup1 = badge1.length > 0 ? badge1.map(n => priorities.split('').findIndex(x => x === n) + 1)
                                                                        .reduce((accumulator, curVal) => accumulator + curVal)      : 0;
                const sumOfPrioritiesGroup2 = badge2.length > 0 ? badge2.map(n => priorities.split('').findIndex(x => x === n) + 1)
                                                                        .reduce((accumulator, curVal) => accumulator + curVal)      : 0;

                
                priorityTotal += sumOfPrioritiesGroup1 + sumOfPrioritiesGroup2;
                group1 = [];
                group2 = [];
            }
        }
        //console.log(`Total: ${priorityTotal}`)
        return priorityTotal;
    }

    findGroupBadge = (groupRuckSacks : string[]) => {
        const sack1 = groupRuckSacks[0].split('');
        const sack2 = groupRuckSacks[1].split('');
        const sack3 = groupRuckSacks[2].split('');

        const badges = sack1.filter(ruckSack => {return sack2.find(x1 => ruckSack === x1) && sack3.find(x2 => ruckSack === x2)})
        const uniqueBadges = badges.filter((x, index) => badges.indexOf(x) === index );

        return uniqueBadges;
    }

    findDuplicateRuckSackItemPriority = (ruckSackIems : string) => {
        const sackSize = ruckSackIems.length / 2;
        const compartment1 = ruckSackIems.split('').slice(0, sackSize);
        const compartment2 = ruckSackIems.split('').slice(sackSize);

        //Filter may find multiple items of the same type
        const duplicateItems = compartment1.filter(item => compartment2.find(item2 => item2 === item));
        const duplicateItem = duplicateItems[0];
        
        const priority = priorities.split('').findIndex(x => x === duplicateItem) + 1;//+1 to account for the index
        //console.log(`Priority: ${duplicateItem} = ${priority}, Compartment 1: ${compartment1.join('')} , Compartment 2: ${compartment2.join('')}`)
        return priority;
        
        

    }

    
}

const problem3Service = new Problem3Service();
export default problem3Service;