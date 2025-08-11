import Bell from '../assets/bell.svg';
import Avatar from '../assets/avatar.svg';
import ArrowDown from '../assets/arrowdown.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import edit from"../assets/edit.svg";
const MiniNav = ({dr}) => {

    
   
const name="mriiid";
    const [opeN,setOpeN]=useState(false);
    const [open,setOpen]=useState(false);
    const Notification=[{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},{title:"welcome!",content:''},]
    const pages=[{title:"/edit",text:"edit your profile"},{title:"/patients",text:"Your Patients"},{title:"/calendar",text:"Your Calendar"},{title:"/History",text:"Your History"},{title:"/patient" ,text:"patients>"+name}]
    return ( 

        <div className='relative break-words'>
           {pages.map((page, index) => (
        location.pathname === page.title ? <div key={index} className='font-bold top-6 p-1 left-8 absolute  text-2xl text-primary'>{page.text}</div> : null
      ))}
      {location.pathname==="/home" && <div className=' top-4 absolute font-bold left-8'><p className='text-xl'>Welcome</p><p className=' text-3xl text-primary'>Dr.{dr.firstN} {dr.lastN}!</p><p className='text-gray-500 text-sm font-semibold'>Here are your recent Tasks. updates and Appointments</p></div>}
<div className='flex gap-4 mt-6 justify-end'>
    <img src={Bell} alt="Bell" onClick={()=>setOpeN(!opeN)} className={opeN ? ` cursor-pointer rounded-t-lg rounded-bl-0 z-20 bg-background p-1`:`p-1 cursor-pointer`} />
    <div className='flex gap-3'>
        <img src={dr.image} className='w-8 h-8 rounded-full m-2 z-0' />
        <p className='font-semibold py-3'>Dr.{dr.firstN}</p>
        <img src={ArrowDown} alt="arrowdown" onClick={()=>setOpen(true)} className='p-2 cursor-pointer'/>
        {open && ( <div className='fixed inset-0 z-10 flex flex-col justify-center items-center bg-popUp bg-opacity-30'>
         
            <div className='w-3/5 relative p-6 h-45  bg-white z-10 rounded-lg flex flex-col  '>
            <p className='text-xl  absolute right-2 top-0  cursor-pointer' onClick={()=>setOpen(false)}>x</p>
            <div className='flex flex-row  justify-between items-center'><div className='flex flex-row gap-3 items-center'><img src={dr.image} alt="image" className='rounded-full w-14 h-14'/><p className='font-bold text-xl'>Dr.{dr.firstN} {dr.lastN}</p></div>
            <Link to="/edit"><img src={edit} onClick={()=>{setOpen(false)}} alt="edit" className='w-8 h-8'/></Link>  </div>
           <div className='grid grid-cols-4 mt-4 mx-2 gap-2 '>
            <div className='flex flex-col font-semibold'>
                <div className='text-gray-500 text-sm'>age</div>
                <div className='text-sm'>{dr.age} years</div>
            </div>
            <div className='flex flex-col font-semibold'>
                <div className='text-gray-500 text-sm'>gender</div>
                <div className='text-sm'>{dr.gender}</div>
            </div>
            <div className='flex flex-col font-semibold'>
                <div className='text-gray-500 text-sm'>adress</div>
                <div className='text-sm'>{dr.adress}</div>
            </div>
            <div className='flex flex-col font-semibold'>
                <div className='text-gray-500 text-sm'>Phone number</div>
                <div className='text-sm'>{dr.number}</div>
            </div>
            <div className='flex flex-col font-semibold'>
                <div className='text-gray-500 text-sm'>social number</div>
                <div className='text-sm'>{dr.social}</div>
            </div>
            <div className='flex flex-col font-semibold'>
                <div className='text-gray-500 text-sm'>specialty</div>
                <div className='text-sm'>{dr.speciality}</div>
            </div>
            <div className='flex flex-col font-semibold'>
                <div className='text-gray-500 text-sm'>email adress</div>
                <div className='text-sm'>{dr.email}</div>
            </div>
            <div className='flex flex-col font-semibold'>
                <div className='text-gray-500 text-sm'>Number of patients</div>
                <div className='text-sm'>{dr.patient}</div>
            </div>
           </div>
            </div>
           </div>)}
           {opeN && ( <div className='fixed inset-0  z-10 flex flex-row justify-end bg-popUp bg-opacity-30'>
         
         <div className='w-80  mt-16  -mb-4 mr-56  h-40 p-2  bg-background z-20  flex flex-col  rounded-lg rounded-l-0'>
         <p className='font-bold text-xl px-4 py-2'>Notification</p>
         <div className='flex flex-col p-2 ml-4 overflow-y-scroll scrollBar gap-2 items-center'>
            {Notification.map((notif,index)=>(<div key={index} className='h-6 w-60 bg-white px-2 flex flex-row justify-between'><div className='font-semibold'>{notif.title}</div><img src={ArrowDown}/></div>))}
         </div>
         </div></div>)}
    </div>
</div>

</div>

     );
}
 
export default MiniNav;
