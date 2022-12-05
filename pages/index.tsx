import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import adventProblemSvc from '../Services/AdventProblemService'
import AdventCard from './components/AdventCard';
import { AdventProblemInfo } from '../types/AdventProblemInfo';


export default function Home() {
  const [adventData, setAdventData] = useState<AdventProblemInfo[]>();

    const fetchAdventData = async () => {
        const results = adventProblemSvc.getAdventProblemResults();
        setAdventData(results);    
    };

    
    useEffect(() =>{
        fetchAdventData();
        
    },[])

  return <>
    <h1>Advent 2022 Results</h1>
    
    {
        adventData?.map((result, index) => {
            return (<AdventCard key={index} problemNumber={index +1} adventResult={result} ></AdventCard>);
        })
    }
    
    </>;
}
