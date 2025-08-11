import { useState } from "react";


const History = (patient,mrid,dr,pat) => {
    const [tag,setTag]=useState("");
    
    const filter =()=>{ console.log(tag);}
    const Appointments=[{date:"22-6-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"},{date:"25-3-2022",time:"11:22",description:"i donnu"}, {date:"22-6-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"}]
    return (
        <div className='w-2/3 bg-white rounded-lg h-3/4 py-6 px-10 gap-5 flex flex-col break-words'>
            <p className='font-bold  text-2xl'>Modifications</p>
            <div className='flex flex-row  items-end gap-[15vw] '><label className='flex flex-col gap-2 font-semibold  '>Date<input type="text" placeholder='add tag' value={tag} onChange={(e)=>setTag(e.target.value)} className='border border-gray-300 w-[20vw] py-1 px-2 rounded-md text-gray-500' /></label><div onClick={filter} className='border cursor-pointer border-primary text-primary px-2 py-1 rounded-lg font-semibold'>filter</div> </div>
            <div className='overflow-y-scroll scrollBar'>{Appointments.map((app,index)=>(<div className='grid grid-cols-3 mx-6 py-2 text-sm ' key={index}>
                <div  className=" text-sm">
                    <div className='text-gray-500 my-1 '>Date</div>
                    <div>{app.date}</div>
                </div>
                <div>
                    <div className='text-gray-500 my-1 '>tags</div>
                    <div >{app.time}</div>
                </div>
                <div>
                    <div className='text-gray-500 my-1 '>description</div>
                    <div>{app.description}</div>
                </div>

            </div>))}</div>
            </div>
        
    );
};
 
export default History;