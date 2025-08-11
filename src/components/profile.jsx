import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './SideBar';
import Patients from './Patients';
import Home from './Home';
import History from './History';
import Calendar from './Calendar';
import MiniNav from './MiniNav';
import Edit from './edit'; 
import Patient from './Patient'; 
import avatar from '../assets/avatar.svg';
import { useState } from 'react';
const wrapNav = (Component) => {
    const doctor = {
        firstN:"dounia",
        lastN:"mdh",
        image: avatar, 
        gender: "female",
        number: "0665433212",
        social: "11223344",
        patient: "22",
        adress: "alger",
        speciality: "dermatologue",
        age: "23",
        email: "dounia@gmail.com"
      };
      const [pa,setPa]=useState({
        firstN:"mrid",
        lastN:"ben mrid",
        gender:"female",
        number:"0799750495",
        social:"11",
        patient:"22",
        adress:"sidMou",
        speciality:"11",
        age:"19",
        email:"haha@gmail.com",
        diagn:[{date:"22-6-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"},{date:"25-3-2022",time:"11:22",description:"i donnu"}, {date:"22-6-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"}],
    nexta:[{date:"22-6-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"},{date:"25-3-2022",time:"11:22",description:"i donnu"}, {date:"22-6-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"}],
      
  lasta:[{date:"12-1-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"},{date:"25-3-2022",time:"11:22",description:"i donnu"}, {date:"22-6-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"}]})
    const Patient={
        firstN:"mrid",
        lastN:"ben mrid",
        gender:"female",
        number:"0799750495",
        social:"11",
        patient:"22",
        adress:"sidMou",
        speciality:"11",
        age:"19",
        email:"haha@gmail.com",
        diagn:[{date:"22-6-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"},{date:"25-3-2022",time:"11:22",description:"i donnu"}, {date:"22-6-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"}],
    nexta:[{date:"22-6-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"},{date:"25-3-2022",time:"11:22",description:"i donnu"}, {date:"22-6-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"}],
      
  lasta:[{date:"12-1-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"},{date:"25-3-2022",time:"11:22",description:"i donnu"}, {date:"22-6-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"}]}
    const patients=[Patient,Patient,Patient,Patient,Patient]
  return () => (
    <div className="flex flex-row h-screen w-screen">
      <SideBar />
      <div className="w-full flex flex-col px-6 bg-background gap-10">
        <MiniNav  dr={doctor}/>
        <Component patient={patients} dr={doctor}  />
      </div>
    </div>
  );
};

export default function Profile() {
  return (
    <Router>
      <Routes>
        <Route path="/patients" element={wrapNav(Patients)()} />
        <Route path="/home" element={wrapNav(Home)()} />
        <Route path="/calendar" element={wrapNav(Calendar)()} />
        <Route path="/history" element={wrapNav(History)()} />
        <Route path="/edit" element={wrapNav(Edit)()} />
        <Route path="/patient" element={wrapNav(Patient)()} />
      </Routes>
    </Router>
  );
}
