import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import Rectangle from '../assets/Rectangle.svg';
import Search from '../assets/search.svg';
import Filter from '../assets/filter.svg';
import Add from '../assets/add.svg';
import Threepoints from '../assets/threepoints.svg';
import { useState } from 'react';
import AddPatientPopup from './AddPatientPopup';
import mriid from "../assets/mrid.svg"
const Patients = ({patient}) => {
 
    const search =()=>{console.log(val)}
   
    const [showPopup, setShowPopup] = useState(false);
const [val,setVal]=useState("");
  const [mrid,setMrid]=useState(
    {
        firstN:"",
        lastN:"",
          gender:"",
          number:"",
          social:"",
          patient:"",
          adress:"",
          speciality:"",
          age:"",
          email:"",
          diagn:[],
      nexta:[],
        
    lasta:[],
    }
  )
    return (
        <div className='h-[75vh] border flex flex-col rounded-lg bg-white p-6 mx-6 text-sm break-words' >
<AddPatientPopup show={showPopup} handleClose={()=>setShowPopup(false)} />
            <div className='flex flex-row justify-between '><p className='text-primary text-2xl font-bold'>List</p>
            <div><input type="text"  onChange={(e)=>setVal(e.target.value)} value={val} placeholder="patient name" className='bg-gray-200 h-10 w-[40vw] py-2.5 px-8 rounded-lg font-semibold text-sm '/></div>
            <div className='flex flex-row justify-center items-center gap-5'><img src={Add} className='w-4 h-4' onClick={()=>setShowPopup(true)}/><img onClick={search} src={Filter} className='w-6 h-6 cursor-pointer' /></div>
            </div>
        <div className='grid grid-cols-5 m-5 gap-5  text-gray-500 text-center'>
        <div>name</div>
        <div>age</div>
        <div>last Appointment</div>
        <div>next Appointment</div>
        <div></div>
     
        </div>
<div className=' overflow overflow-y-scroll scrollBar'>
        {patient.map((pa,index)=>(<Link to="/patient"  onClick={()=>setMrid(pa)} key={index} className='grid grid-cols-5 gap-5 m-5 text-center items-center'>
            <div className='flex flex-row text-sm gap-2 items-center gap-2 pl-3'> <img src={mriid} className='rounded-full w-10'/><p>{pa.firstN} {pa.lastN}</p></div>
        <div>{pa.age}</div>
        <div>{pa.lasta[0].date}</div>
        <div> {pa.nexta[0].date }  </div>
        <div>...</div>
        </Link>
))}
</div>
        </div>
    );
};
 
export default Patients;