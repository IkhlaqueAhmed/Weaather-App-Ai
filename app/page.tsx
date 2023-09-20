"use client";

import CityPicker from "@/components/CityPicker";
import {Card,Divider,Subtitle,Metric,Text} from "@tremor/react";


export default function Home() {
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F69] to-[#183B7E] p-10 flex flex-col justify-center items-center">
        <Card className="bg-gradient-to-br from-[#fff] to-[#fff] max-w-4xl mx-auto p-5">
          <Text className="text-6xl font-bold text-center mb-10">Weather Ai</Text>
          <Subtitle className="text-xl text-center">Powered by Ikhlaque, NExt .js , Tailwind CSS, Tremor 2.0 + More!</Subtitle>
          
          <Divider className="my-10 text-cyan-300 "/>
          
          <Card className="bg-gradient-to-br from-[#225f80] to-[#0691d6] p-3">
              <CityPicker/>
            </Card>
          </Card>   
  </div> 
  )
}
