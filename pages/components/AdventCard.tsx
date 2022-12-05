import { FC } from 'react';
import {AdventProblemInfo} from "../../types/AdventProblemInfo"


interface Props {
  problemNumber: number,
  adventResult : AdventProblemInfo
}

const AdventCard: FC<Props> = ({problemNumber, adventResult}): JSX.Element => {
  return <div className=' max-w-3xl mx-auto p-5'>
    <h1 className='text-gray-900'>Day {problemNumber}</h1>
    <h4>Part 1: {adventResult.part1Result}</h4>
    <h4>Part 2: {adventResult.part2Result}</h4>
  </div>;
};

export default AdventCard;