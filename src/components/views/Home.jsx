// import React, { useState, useEffect } from "react";
// import { fetchPeopleData } from "../../api/api";
import { useEffect, useState } from "react";
import { fetchPeopleByPage } from "../../api/api";
import Sidebar from "../../components/layouts/Sidebar";
import InfoComp from "../../components/layouts/InfoComp";
import './Home.css'



function Home() {
  const [page, setPage] = useState(1);
  const [peopleData, setPeopleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async (page) => {
    try{
      const results= await fetchPeopleByPage(page)
      setPeopleData(prevPeople => [...prevPeople, ...results, ...results]);
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false)
    }
  }

  const getMore=()=>{
    setPage(p=>p+1)
    
  }

  useEffect(() => {
    getData(page || 1)    
  }, [page]);
  return (
    <div className="home">

      <header>Ravn Star Wars Register</header>
      <div className="container-content ">
        <Sidebar isLoading={isLoading} peopleData={peopleData} getMore={getMore} />
        <InfoComp className="border" />
      </div>
    </div>
    
  )
}

export default Home;
