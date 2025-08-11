import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../assets/logo.svg';
import Homelogo from '../assets/homelogo.svg';
import Patient from '../assets/patient.svg';
import History from '../assets/history.svg';
import Calendarlogo from '../assets/calendar.svg';
import Edit from '../assets/editC.svg';
import Logout from '../assets/logout.svg';
import { useState } from 'react';
import MiniNav from './MiniNav';
import editPro from './edit';
const SideBar = () => {
    const [hover, setHover]= useState(false);

    return ( 
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={'bg-primary shadow-xl text-white transition duration-3000 w-20 hover:w-40 hover:duration-3000 hover:transition flex flex-col items-center justify-between '}>
                <div className=' flex flex-row items-center justify-center mt-10'>
                    <img src={Logo} alt="Logo" className='w-8 h-8 rounded-xl mx-2'/>
                    <h2 className={`text-xl font-semibold  ${hover ? 'block ' : 'hidden'}`}>DoctiFy</h2>
                </div>
                <div className='flex flex-col items-center gap-3 '>
              
                       
                            <Link to="/home" className='flex py-2 px-4 items-center  justify-center'>
                                <img src={Homelogo} alt="Homelogo" className='h-8 w-8 '/> 
                                <p className={`ml-4 font-bold ${hover ? 'block  ' : 'hidden'}  w-14`}>Home</p>                               
                            </Link>
                        
                       
                            <Link to="/patients" className='flex py-2 px-4 items-center  justify-center'>
                                <img src={Patient} alt="Patient" className='h-8 w-8'/> 
                                <p className={`ml-4 font-bold ${hover ? 'block ' : 'hidden'} w-14`}>Patients</p>                               
                            </Link>
                       
                       
                            <Link to="/calendar" className='flex py-2 px-4 items-center  justify-center'>
                                <img src={Calendarlogo} alt="Calendar" className='h-7 w-7'/> 
                                <p className={`ml-4 font-bold ${hover ? 'block ' : 'hidden'} w-14`}>Calendar</p> 
                            </Link>
                     
                            <Link to="/History" className='flex py-2 px-4 items-center  justify-center'>
                                <img src={History} alt="History" className='h-8 w-8' />
                                <p className={`ml-4 font-bold ${hover ? 'block ' : 'hidden'} w-14`}>History</p> 
                            </Link>
                 
                </div>
                <div className='flex flex-col gap-5 py-5 items-center'>
                    <Link to="/edit" className='flex py-2 px-4 items-center  '><img src={Edit} alt="Edit" className='h-8 w-8'/> <p className={`ml-4 font-bold ${hover ? 'block ' : 'hidden'} w-14`}>edit</p></Link> 
                      <Link to="/" className='flex py-2 px-4 items-center '> <img src={Logout} alt="Logout" className='h-8 w-8'/><p className={`ml-4 font-bold ${hover ? 'block ' : 'hidden'} w-14`}>logout</p></Link> 
              
                </div>
            </div>
     );
}
 
export default SideBar;
