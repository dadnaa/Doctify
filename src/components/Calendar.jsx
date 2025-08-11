import SideBar from './SideBar';
import MiniNav from './MiniNav';
import { useState } from 'react';


const Calendar = () => {
    const [dateS,setDateS]=useState("");
    const [app,setApp]=useState({name:"",date:"",time:"",description:""});
    const add=()=>{console.log(app)}
    const handleChange = (e) => {
        const { name, value } = e.target;
        setApp((prevApp) => ({
          ...prevApp,
          [name]: value,
        }));
      };
    const search =()=>{console.log(dateS)}
    const Appointments=[{date:"22-6-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"},{date:"25-3-2022",time:"11:22",description:"i donnu"}, {date:"22-6-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"}]
    return (
        <div className='flex flex-row justify-evenly break-words'>
            <div className='flex flex-col bg-white  w-[45vw] p-6 h-[75vh] rounded-lg gap-5'>
                <p className='font-bold  text-2xl'>Appointements</p>
                <div className='flex flex-row  items-end gap-28 '><label className='flex flex-col gap-2 font-semibold  '>Date<input type="date" value={dateS} onChange={(e)=>setDateS(e.target.value)} placeholder='choose date' className='border border-gray-300 w-[20vw] py-1 px-2 rounded-md text-gray-500' /></label><div onClick={search} className='border cursor-pointer border-primary text-primary px-2 py-1 rounded-lg font-semibold'>filter</div> </div>
                <div className='overflow-y-scroll scrollBar'>{Appointments.map((app,index)=>(<div key={index} className='grid grid-cols-3 mx-6 py-2 text-sm'>
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

            </div>))}</div>
            </div>
            <form className='flex flex-col text-sm bg-white font-semibold w-[35vw] p-6  items-center justify-between h-[75vh] rounded-lg'>
            <p className='font-bold text-2xl text-center '>Add appointement</p>
               <label className='flex flex-col '>name <input type="text"  name="name" value={app.name} onChange={handleChange} placeholder='patient name' className='border border-gray-300 px-2 py-1 w-[25vw] rounded-md placeholder-gray-500' /></label>
               <label className='flex flex-col'>Date<input type="date" placeholder='choose date' name="date" value={app.date} onChange={handleChange} className='border border-gray-300 px-2 py-1 w-[25vw] rounded-md placeholder-gray-500' /></label>
               <label className='flex flex-col'>Time <input type="time" placeholder='time' value={app.time} name="time" onChange={handleChange} className='border border-gray-300 px-2 py-1 w-[25vw] rounded-md placeholder-gray-500' /></label>
               <label className='flex flex-col' >description <textarea type="text" value={app.description} name="description" onChange={handleChange} className='border border-gray-300 px-2 py-1 w-[25vw] h-[15vh] rounded-md ' /></label>
              <button onClick={add} type="submit" className='bg-primary text-white px-2 py-1 w-[10vw] rounded-md'>Submit</button>
                </form>             


        </div>
    );
};
 
export default Calendar;