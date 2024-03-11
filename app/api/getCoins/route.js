import { NextResponse } from "next/server"

export const GET = async() =>{
const options = {
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
      },
      headers: {
        'X-RapidAPI-Key': 'ea9a695fcbmshb68f36843fb162fp1f11aajsn722aa738fd24',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
}
    try{
        const response = await fetch('https://coinranking1.p.rapidapi.com/coins',options);
        const data = await response.json();
        return NextResponse.json(data);
    } catch(error){
        return NextResponse.json(error)
    }
}