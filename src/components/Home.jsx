
import Avatar from '../assets/avatar.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowDown from '../assets/arrowdown.svg';
import mriid from '../assets/mrid.svg';
const Home = ({patient}) => {
   
   const Appointments=[{date:"22-6-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"},{date:"25-3-2022",time:"11:22",description:"i donnu"}, {date:"22-6-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"}]

const Notification=[{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''}]    
return (
        <div className='flex flex-col mx-4  gap-5'>

        <div className='flex flex-col justify-between md:flex-row '>
            <div className='w-[50vw]  border flex flex-col h-[40vh] gap-3 bg-white rounded-xl  p-4  mb-2 '><p className='font-bold text-xl ml-10'>Upcoming Appointments</p>
            <div className='overflow-y-scroll scrollBar break-words'>{Appointments.map((app,index)=>(<div key={index} className='grid grid-cols-3 mx-6 py-2 text-sm'>
                <div  >
                    <div className='text-gray-500 my-1 '>date</div>
                    <div>{app.date}</div>
                </div>
                <div>
                    <div className='text-gray-500 my-1 '>time</div>
                    <div >{app.time}</div>
                </div>
                <div>
                    <div className='text-gray-500 my-1 '>description</div>
                    <div>{app.description}</div>
                </div>

            </div>))}</div></div>
            <div className='w-[30vw] border bg-white h-[40vh] gap-3 flex flex-col rounded-xl p-4 '><p className='font-bold text-xl ml-10'>Recent Patients</p>
            <div className='overflow-y-scroll scrollBar'>  {patient.map((pa,index)=>(<div key={index} className='flex items-center flex-row m-2 gap-5'><img src={mriid} className='rounded-full  w-12'/><span>{pa.firstN} {pa.lastN}</span></div>))}</div>
            </div></div>
        <div className='flex flex-col md:flex-row justify-between '>
        <div className=' w-[40vw] border  h-[32vh] flex flex-col  gap-3 bg-white rounded-xl p-4 '><p className='font-bold text-xl ml-10'>Recent notifications</p><div className='overflow-y-scroll scrollBar'>{Notification.map((notif,index)=>(<div key={index} className='h-6 mx-6 my-4 bg-white px-2 flex flex-row justify-between'><div className='font-semibold'>{notif.title}</div><img src={ArrowDown}/></div>))}</div></div>
        <div className='w-[40vw] border  h-[32vh] flex flex-col gap-3 bg-white rounded-xl p-4 '><div className='flex flex-row justify-between'><p  className='font-bold text-xl ml-10'>Last modifications</p><Link to="/history" className="px-2 py-1 border-primary border rounded-md text-primary text-sm">see all</Link></div><div className='overflow-y-scroll scrollBar'>{Notification.map((notif,index)=>(<div key={index} className='h-6 mx-6 my-4 bg-white px-2 flex flex-row justify-between'><div className='font-semibold'>{notif.title}</div><img src={ArrowDown}/></div>))}</div> </div>
        </div>
            </div>
        
    );
};

export default Home;
