import { useState } from "react";
import avatar from "../assets/avatar.svg";

const Edit = ({dr}) => {
  

  const [pass, setPass] = useState("");
  const [info, setInfo] = useState({
    first: dr.firstN,
    last: dr.lastN,
    age: dr.age,
    adress: dr.adress,
    phone: dr.number,
    specia: dr.speciality,
    social: dr.social,
    img: dr.image,
    pass: "",
    email: dr.email
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pass === info.pass) {
      submit();
    } else {
      alert("Passwords do not match. Please confirm your password.");
    }
  };

  const submit = () => {
    console.log(info);
    // Add logic here to save/update doctor information
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    
    if (type === 'file') {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setInfo((prevInfo) => ({
            ...prevInfo,
            [name]: reader.result,
          }));
        };
      }
    } else {
      setInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    }
  };

  return (
    <form className='relative h-[75vh] rounded-lg bg-white p-6 mx-6 flex flex-col gap-2' onSubmit={handleSubmit}>
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col justify-between w-[40vw]">
          <p className="text-xl font-bold text-primary mb-4 mx-10">Change your information</p>
          <input type="text" name="first" value={info.first} onChange={handleChange} placeholder="First Name" className="border py-1 px-2 rounded-md w-[30vw]" />
          <input type="text" name="last" value={info.last} onChange={handleChange} className="border py-1 px-2 rounded-md w-[30vw]" placeholder="Last Name" />
          <input type="text" name="age" value={info.age} onChange={handleChange} className="border py-1 px-2 rounded-md w-[30vw]" placeholder="Age" />
          <input type="text" name="adress" value={info.adress} onChange={handleChange} className="border py-1 px-2 rounded-md w-[30vw]" placeholder="Address" />
          <input type="text" name="phone" value={info.phone} onChange={handleChange} className="border py-1 px-2 rounded-md w-[30vw]" placeholder="Phone Number" />
          <input type="text" name="social" value={info.social} onChange={handleChange} className="border py-1 px-2 rounded-md w-[30vw]" placeholder="Social Number" />
          <input type="text" name="specia" value={info.specia} onChange={handleChange} className="border py-1 px-2 rounded-md w-[30vw]" placeholder="Speciality" />
        </div>
        <div className="flex flex-col items-center w-[35vw] gap-2">
          <img src={info.img || avatar} alt="Doctor Avatar" className="w-36 h-36 rounded-full border mt-10" />
          <label htmlFor="photoInput" className="cursor-pointer bg-primary w-40 text-center text-white text-sm p-2 rounded-md m-2">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="photoInput"
            name="img"
            onChange={handleChange}
            className="hidden"
          />
          <input type="email" name="email" value={info.email} onChange={handleChange} className="border py-1 px-2 rounded-md w-[30vw]" placeholder="Email" />
          <input type="password" name="pass" value={info.pass} onChange={handleChange} className="border py-1 px-2 rounded-md w-[30vw]" placeholder="Password" />
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} className="border py-1 px-2 rounded-md w-[30vw]" placeholder="Confirm Password" />
        </div>
      </div>
      <button type="submit" className="bg-primary w-28 text-center text-white text-sm p-2 rounded-md right-12 bottom-2 absolute">Save</button>
      <button type="button" className="border-primary border w-28 text-center text-primary text-sm p-2 rounded-md right-44 bottom-2 absolute" onClick={() => alert("Canceled")}>Cancel</button>
    </form>
  );
};

export default Edit;
