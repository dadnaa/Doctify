
import upload from "../assets/upload.svg";
import { useState } from "react";
import Edit from"../assets/edit.svg";
import { Link } from "react-router-dom";
import mrid from "../assets/mrid.svg"
const patient =({}) => {
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
      
  lasta:[{date:"22-6-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"},{date:"25-3-2022",time:"11:22",description:"i donnu"}, {date:"22-6-2024",time:"22:30",description:"emargency"},{date:"11-06-2024",time:"22:22",description:"needs time"}]}
    
    const [last,setLast]=useState(false);
    const [edit,setEdit]=useState(false);
    const [diag,setDiag]=useState(false);
    const [app,setApp]=useState(false);
    
    
    return(
      
    <div className="flex flex-row justify-evenly  break-words">
       <div className="flex flex-col gap-5"> 
        <div className="w-[50vw] h-[35vh] bg-white rounded-lg p-4  ">
            <div className='flex flex-row  justify-between items-center '><div className='flex flex-row gap-3 items-center'><img src={mrid} alt="image" className='rounded-full w-14 h-14 border-2 border-black'/><p className='font-bold text-xl'>{Patient.firstN} {Patient.lastN}</p></div>
        <img src={Edit} onClick={()=>setEdit(true)} alt="edit" className='w-8 h-8 cursor-pointer'/>  </div>
           <div className='grid grid-cols-4 mt-4 mx-2 gap-2 text-sm items-center '>
            <div className='flex flex-col font-semibold'>
                <div className='text-gray-500 '>age</div>
                <div className=''>{Patient.age} years</div>
            </div>
            <div className='flex flex-col font-semibold'>
                <div className='text-gray-500 '>gender</div>
                <div className=''>{Patient.gender}</div>
            </div>
            <div className='flex flex-col font-semibold'>
                <div className='text-gray-500 '>adress</div>
                <div className=''>{Patient.adress}</div>
            </div>
            <div className='flex flex-col font-semibold'>
                <div className='text-gray-500 '>Phone number</div>
                <div className=''>{Patient.number}</div>
            </div>
            <div className='flex flex-col font-semibold'>
                <div className='text-gray-500 '>social number</div>
                <div className=''>{Patient.social}</div>
            </div>
            <div className='flex flex-col font-semibold'>
                <div className='text-gray-500 '>registered</div>
                <div className=''>{Patient.speciality}</div>
            </div>
            <div className='flex flex-col font-semibold '>
                <div className='text-gray-500 '>email adress</div>
                <div className=''>{Patient.email}</div>
            </div>
            <div className='flex flex-col font-semibold'>
                <div className='text-gray-500 '>Number of appointements</div>
                <div className=''>{Patient.patient}</div>
            </div>
           </div>
        </div>
        <div className="w-[50vw] h-[40vh] bg-white rounded-lg flex flex-col p-6">
            <div className="flex flex-row justify-evenly items-center">
                <div className="flew flex-row bg-gray-200  rounded-lg p-1">
                <button onClick={()=>setLast(true)} className={` w-40 rounded-lg  p-2  text-xs font-bold text-center ${last?"text-white bg-primary":"text-primary"}`} >upcoming appointement</button>
                <button onClick={()=>setLast(false)} className={` w-40 rounded-lg  p-2  text-xs font-bold text-center ${!last?"text-white bg-primary":"text-primary"}`}>last appointement</button>
                
            </div>
            <button onClick={()=>setApp(true)} className="bg-primary w-40 rounded-lg cursor-pointer px-2 py-2 text-white text-xs font-bold text-center">+ add appointement</button>
            </div>
       {last ? <div className='overflow-y-scroll scrollBar '>{Patient.nexta.map((app,index)=>(<div key={index} className='grid grid-cols-3 mx-6 py-2 text-sm'>
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

            </div>))}</div>:<div className='overflow-y-scroll scrollBar'>{Patient.lasta.map((app,index)=>(<div key={index} className='grid grid-cols-3 mx-6 py-2 text-sm'>
                <div  >
                    <div className='text-gray-500 my-1 '>date</div>
                    <div>{app.date}</div>
                </div>
                <div>
                    <div className='text-gray-500 my-1 '>ime</div>
                    <div >{app.time}</div>
                </div>
                <div>
                    <div className='text-gray-500 my-1 '>description</div>
                    <div>{app.description}</div>
                </div>

            </div>))}</div>}
        </div>
        </div>
        <div className="flex flex-col gap-5"> 
        <div className="w-[30vw] h-[45vh] bg-white flex flex-col items-center rounded-lg p-4">
            <div className="flex flex-col gap-2 ">
                <div className="flex flex-row justify-between items-center">
                    <div className="font-bold text-2xl">AI diagnostic</div>
            <div className="border border-primary px-3 py-1 cursor-pointer rounded-lg font-bold text-primary">select model</div>
            </div>
            <div className="text-[10px] font-bold text-gray-400 ">AI models designed to assist Doctors in diagnosing illnesses.</div>
            <div > 
                  <label htmlFor="photoInput">
                    <img  src={upload}  alt="Upload"  className="cursor-pointer w-5/6 ml-5" />
      </label>
      <input
        type="file"
        accept="image/*"
        id="photoInput"
        name="photo"
        className="hidden"
      /></div>
            <button className="bg-primary text-sm text-white p-2 rounded-lg  w-40 font-semibold place-self-center">see results</button>
            </div>

        </div>
        <div className="w-[30vw] h-[30vh] bg-white flex flex-col p-4 rounded-lg">
        <div className="flex flex-row justify-between items-center">
                    <div className="font-bold text-2xl">Diagnostics</div>
            <div onClick={()=>setDiag(true)} className="border cursor-pointer border-primary px-3 py-1 rounded-lg font-bold text-primary text-sm">+ New</div>
            </div>
            <div className='overflow-y-scroll scrollBar'>{Patient.diagn.map((app,index)=>(<div key={index} className='grid grid-cols-3 items-center gap-2 py-2 text-sm'>
                <div  >
                    <div className='text-gray-500 my-1 '>date</div>
                    <div>{app.date}</div>
                </div>
                <div>
                    <div className='text-gray-500 my-1 '>illness</div>
                    <div >{app.time}</div>
                </div>
                <div>
                    <div className='text-gray-500 my-1 '>description</div>
                    <div>{app.description}</div>
                </div>
               

            </div>))}</div>
        </div>
        {edit && (<div className='fixed inset-0  z-10 flex flex-row justify-end bg-popUp bg-opacity-30'>
         
            <div className="bg-white h-[80vh] w-[50vw] p-8 absolute left-96 top-20 rounded-lg ">
       
       <h2 className="text-xl font-semibold ">Edit Patient profile</h2>
       <form className="grid grid-cols-2  ">
         <div className="flex flex-col m-2">
           <label htmlFor="firstName" className="mb-1">First Name</label>
           <input type="text" id="firstName" name="firstName" placeholder="Enter first name" className="border border-gray-300 rounded-md p-2" />
         </div>
         <div className="flex flex-col m-2">
           <label htmlFor="lastName" className="mb-1">Last Name</label>
           <input type="text" id="lastName" name="lastName" placeholder="Enter last name" className="border border-gray-300 rounded-md p-2" />
         </div>
         <div className="flex flex-col m-2">
           <label htmlFor="age" className="mb-1">Age</label>
           <input type="number" id="age" name="age" placeholder="Enter age" className="border border-gray-300 rounded-md p-2" />
         </div>
         <div className="flex flex-col m-2">
           <label htmlFor="gender" className="mb-1">Gender</label>
           <select id="gender" name="gender" className="border border-gray-300 rounded-md p-2">
             <option value="male">Male</option>
             <option value="female">Female</option>
           </select>
         </div>
         <div className="flex flex-col m-2">
           <label htmlFor="address" className="mb-1">Address</label>
           <input type="text" id="address" name="address" placeholder="Enter address" className="border border-gray-300 rounded-md p-2" />
         </div>
         <div className="flex flex-col m-2">
           <label htmlFor="phoneNumber" className="mb-1">Phone Number</label>
           <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter phone number" className="border border-gray-300 rounded-md p-2" />
         </div>
         <div className="flex flex-col m-2">
           <label htmlFor="email" className="mb-1">Email</label>
           <input type="email" id="email" name="email" placeholder="Enter email" className="border border-gray-300 rounded-md p-2" />
         </div>
         <div className="flex flex-col m-2">
           <label htmlFor="socialNumber" className="mb-1">Social Number</label>
           <input type="text" id="socialNumber" name="socialNumber" placeholder="Enter social number" className="border border-gray-300 rounded-md p-2" />
         </div>
         <div></div>
         <div className="flex justify-end gap-5 my-4">
         <button onClick={()=>setEdit(false)} className="bg-white border border-primary text-primary w-24  font-bold py-2 px-4 rounded">
           cancel
         </button>
         <button type="submit" className="bg-primary  text-white font-bold py-2 px-4 rounded w-24">
           edit
         </button>
         </div>

       </form>
     </div></div>)}
     {app && (<div className='fixed inset-0  z-10 flex flex-row justify-end bg-popUp bg-opacity-30'>
        <div className="bg-white h-[55vh] text-sm w-[40vw] p-6 absolute left-96 top-40 rounded-lg  flex flex-col items-center gap-2">
<div className="font-bold text-2xl place-self-start ">Add appointement</div>
<div className="flex flex-row gap-3"><label>date<input type="date"  className='border border-gray-300 px-2 py-1 w-[16vw] rounded-md text-gray-500' /></label><label>time<input type="time"  className='border border-gray-300 px-2 py-1 w-[16vw] rounded-md text-gray-500'/></label></div>
<label >description<textarea  className='border border-gray-300 px-2 py-1 w-[36vw] h-[20vh] rounded-md placeholder-gray-500'/></label>
      <div className="flex flex-row  gap-3 place-self-end"><button onClick={()=>setApp(false)} className="p-2 border border-primary text-primary rounded-md font-semibold w-20">cancel</button><button className="bg-primary text-white font-semibold p-2 rounded-lg w-20 ">add</button></div>  
      </div>
       
     </div>)}
     {diag && (<div className='fixed inset-0  z-10 flex flex-row justify-end bg-popUp bg-opacity-30'>
        <div className="bg-white h-[55vh] text-sm w-[40vw] p-6 absolute left-96 top-40 rounded-lg  flex flex-col items-center gap-2">
<div className="font-bold text-2xl place-self-start ">Add appointement</div>
<div className="flex flex-row gap-3"><label>date<input type="date"  className='border border-gray-300 px-2 py-1 w-[16vw] rounded-md text-gray-500' /></label><label>illness<input type="text"  placeholder="illness" className='border border-gray-300 px-2 py-1 w-[16vw] rounded-md placeolder-gray-500'/></label></div>
<label >description<textarea  className='border border-gray-300 px-2 py-1 w-[36vw] h-[20vh] rounded-md placeholder-gray-500'/></label>
      <div className="flex flex-row  gap-3 place-self-end"><button onClick={()=>setDiag(false)} className="p-2 border border-primary text-primary rounded-md font-semibold w-20">cancel</button><button className="bg-primary text-white font-semibold p-2 rounded-lg w-20 ">add</button></div>  
      </div>
     </div>)}
   
       
        </div>
    </div>);}; export default patient;