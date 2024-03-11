"use client"

import { useState, useEffect } from "react";

export default function Home() {

  const [coins, setCoins] = useState({})

  const [filteredCoin, setFilteredCoin] = useState([]);

  //fetch all the available coins through api...
  useEffect(()=>{
    const fetchGetCoins = async() =>{
      const response = await fetch('/api/getCoins');
      const data = await response.json();
      // console.log("data",data);
      setCoins(data);
    }
    fetchGetCoins();
  },[])
// console.log("coins",coins)

//have to make an array since map/filter function is not applicable on objects {}
let coinsArray = coins?.data?.coins;
// console.log("arra",coinsArray)

//filter out the id of coins containing q in it...
useEffect(()=>{
  let uuidArray = [];
  coinsArray && coinsArray.map((uuid)=>{
    uuidArray.push(uuid.uuid);
  })
  // console.log(uuidArray,"ar")
  const filteredData = uuidArray.filter((coin)=>coin.toLowerCase().includes('q'.toLowerCase()))
  setFilteredCoin(filteredData);
},[coinsArray])

  return (
    <>
      <h1>Home</h1>
      {/* only show the coins with id containing q in it. */}
      {filteredCoin && filteredCoin.map((coin)=>(
        <>
        <p>{coin}</p>
        </>
      ))}
    </>
    );
}
