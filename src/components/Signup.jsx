import Doctors from '../assets/doctors.svg';
import Logo from '../assets/logo.svg';
import GoogleLogo from "../assets/googlelogo.svg";
import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const url="http://localhost:3030/api/authRoutes/register"

    const navigate = useNavigate();
    const formData = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        gender: "",
        age: "",
        speciality: "",
      };
      
      const handleInput = (event) => {
        // Directly modify the formData object
        formData[event.target.name] = event.target.value;
      };
      
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => alert('Error:', error.message));
          navigate("/signin")
        };
       
    return (
        <div className='w-full flex flex-col  p-4'>
              <div className='flex flex-row items-center '><img src={Logo} className='w-16 h-16'/><p className='font-bold text-2xl'>DoctiFy</p></div>
            <div className=' md:flex-row w-full  flex flex-row  md:items-center md:justify-around '><img className='w-full hidden basis-3/5 p-6 md:block md:w-5/12 h-auto md:h-full' src={Doctors} alt="doctorsImage"/>
            <div className='flex flex-col  justify-center basis-2/5  md:w-5/12 p-5 md:p-0 md:self-center'> {/* Adjusted width and added max-width */}
                <div className='flex items-center mb-5 '>
                    <img className='w-10 h-14 mr-3' src={Logo} alt="logo"/> {/* Adjusted logo size */}
                    <div>
                        <h1 className='text-xl md:text-2xl font-semibold'>DoctiFy</h1> {/* Smaller title */}
                        <p className='text-zinc-600 text-xs md:text-sm'>Keep Track of your patients!</p> {/* Smaller text */}
                    </div>
                </div>
                <h2 className='text-xl md:text-2xl font-semibold'>Welcome Doctor!</h2> {/* Smaller title */}
                <form onSubmit={(e)=>handleSubmit(e)} action="" className='flex flex-col mt-3 gap-3'>
                    <div className='flex flex-col  md:flex-row md:gap-3'>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            onChange={(e)=>handleInput(e)}
                            placeholder="First Name"
                            required
                            className='bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-2 pl-3 mb-3 md:mb-0 md:w-1/2'
                        />
                        <input
                            required
                            type="text"
                            id="lastname"
                            name="lastname"
                            onChange={(e)=>handleInput(e)}
                            placeholder="Last Name"
                            className='bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-2 pl-3 md:ml-3 md:w-1/2'
                        />
                    </div>
                    <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        onChange={(e)=>handleInput(e)}
                        placeholder="Email"
                        className='bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-2 pl-3'
                    />
                    <input
                        type="password"
                        required
                        id="password"
                        name="password"
                        onChange={(e)=>handleInput(e)}
                        placeholder="Password"
                        className='bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-2 pl-3'
                    />
                    <div className='flex flex-col md:flex-row md:gap-3'>
                        <select name="gender" onChange={(e)=>handleInput(e)} id="gender" className='bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-2 pl-3 md:w-1/2 md:mr-3 mb-2 md:mb-0'>
                            <option value="" >
                                 Gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <input
                            type="age"
                            required
                            onChange={(e)=>handleInput(e)}
                            id="age"
                            name="age"
                            placeholder="Age"
                            className='bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-2 pl-3 md:w-1/2'
                        />
                    </div>
                    <input
                        type="speciality"
                        id="speciality"
                        required
                        name="speciality"
                        onChange={(e)=>handleInput(e)}
                        placeholder="speciality"
                        className='bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-2 pl-3'
                    />

                    <button type='submit'  className='bg-indigo-800 rounded-md text-white h-10 md:h-12 text-base md:text-md font-medium mt-4'>
                        Sign Up 
                    </button>
                </form>
                {/* Adjusted styling for Google Register button */}
                <div className='flex flex-col gap-2'>
                <button className='bg-white rounded-md border border-gray-400 text-gray-600 text-xs md:text-sm py-2 md:py-3 pl-2 mt-4 flex items-center gap-2 justify-center'>
                    <img src={GoogleLogo} alt="Google Logo" className="w-5 h-5 md:w-6 md:h-6" /> {/* Adjusted Google logo size */}
                    <span>Register with Google</span>
                </button>
                <p className='text-sm text-center'>already a member? <Link to="/SignIn" className='text-primary'>signIn</Link></p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Signup;
