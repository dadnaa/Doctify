import { Link } from 'react-router-dom';
import Doctors from '../assets/doctors.svg';
import Logo from '../assets/logo.svg';
import GoogleLogo from "../assets/googlelogo.svg";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const SignIn = () => {
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState("");

    const url="http://localhost:3030/api/authRoutes/login"

    const loginData = {
       
        email: "",
        password: ""
      };

    const handleInput = (event) => {
        // Directly modify the formData object
        loginData[event.target.name] = event.target.value;
      };
    

      const handleSubmit=(event)=>{
        
        event.preventDefault();
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
          })
          .then(response => response.json())
          .then(res => {
            if(!res.error){
                console.log(res)
            navigate("/home")}
            

            else if(res.status==404){
                console.log("Doctor not Found");
                setErrMsg("Doctor not found");

            }
            else if(res.status==401){
                console.log("Invalid password");
                setErrMsg("Invalid email or password, please try again");

            }
            else if(res.status==402){
                console.log("email not verefied");
                setErrMsg("Email not verified,please verify your email then try logging in again");
            }

        })
          .catch(error => console.log('Error:', error.message));
        };  

    return (
        <div className='w-full flex flex-col p-6'>
            <div className='flex flex-row items-center sm:'><img src={Logo} className='w-16 h-16'/><p className='font-bold text-2xl'>DoctiFy</p></div>
         <div className='flex flex-row w-full md:flex-row  md:items-center md:justify-around'>   <img className='  w-full hidden md:block md:w-5/12 h-auto md:h-full' src={Doctors} alt="doctorsImage"/>
            <div className='flex flex-col  justify-center md:w-1/3 p-5  sm:w-full md:p-0 md:self-place-center sm:self-place-center'> 
                <div className='flex justify-center mb-5 '>
                    <img className='w-10 h-14 mr-3' src={Logo} alt="logo"/> 
                    <div className=''>
                        <h1 className='text-xl md:text-2xl font-bold'>DoctiFy</h1> 
                        <p className='text-zinc-600 text-xs md:text-sm'>Keep Track of your patients!</p> 
                    </div>
                </div>
                <h2 className='text-xl md:text-2xl font-semibold'>Welcome back, Doctor!</h2> 
                <form onSubmit={(e)=>handleSubmit(e)}  action="" className='flex flex-col mt-3 gap-3'>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={(e)=>handleInput(e)}
                        placeholder="Email"
                        className='bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-1 pl-3'
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={(e)=>handleInput(e)}
                        placeholder="Password"
                        className='bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-1 pl-3'
                    />
                    <div className="flex justify-between sm:text-sm">
                        <label className=" flex flex-row gap-2 ">
                        <input type="checkbox" className='mt-1'/><p>remember me</p></label>
                    <p className="text-gray-500">forgot password?</p></div>
                    <button type='submit' className='bg-indigo-800 rounded-md text-white h-10 md:h-12 text-base md:text-md font-medium mt-4'>
                        Sign In
                    </button>
                </form>
                {/* Google ida kteb reby */}
                    <h1 className='text-red-700 text-center mt-2 te'>{errMsg}</h1>
                <button className='bg-white rounded-md border border-gray-400 text-gray-600 text-xs md:text-sm py-2 md:py-3 pl-2 mt-4 flex items-center gap-2 justify-center'>
                    <img src={GoogleLogo} alt="Google Logo" className="w-5 h-5 md:w-6 md:h-6" /> 
                    <span>Sign In with Google
                    </span>
                </button>


                <p className='text-sm text-center mt-4'>
                    Dont have an account? <Link to="/" className='text-indigo-800'>Sign Up</Link>
                </p>
            </div>
            </div>
        </div>
    );
};

export default SignIn;
