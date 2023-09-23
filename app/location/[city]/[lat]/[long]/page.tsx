import React from 'react'
import { getClient } from '@/apollo-client'
import fetchWeatherQuery from '@/graphql/queries/fetchWeatherQueries';

type Props = {
  params:{
    city:string;
    lat:string;
    long:string;
  }
}


async function WeatherPage({params:{city,lat,long}}:Props) {
  
  const Client = getClient();

  const {data} = await Client.query({
    query:fetchWeatherQuery,
    variables:{
      current_weather:"true",
      longitude:long,
      latitude:lat,
      timezone:'EST',
    }
   
  })

//   const results:Root = data.myQuery;
//  console.log(results);
  
  return (
    <div>Welcome: </div>
  )
}

export default WeatherPage 