import { useState } from "react";

const AddPatientPopup = ({ show, handleClose }) => {
  const showHideClassName = show ? 'block' : 'hidden';

  const initialPatientState = {
    first: "",
    last: "",
    age: "",
    gender: "",
    address: "",
    phone: "",
    social: "",
    email: ""
  };

  const [patient, setPatient] = useState(initialPatientState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPatient((prevPatient) => ({
      ...prevPatient,
      [id]: value,
    }));
  };

  const submit = () => {
    console.log(patient);
    // Add logic to submit patient data
  };

  return (
    <div className={`${showHideClassName} fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 justify-center items-center`}>
      <div className="bg-white h-[80vh] w-[50vw] p-8 absolute right-56 top-20 rounded-lg ">
        <h2 className="text-xl font-semibold">Add Patient</h2>
        <form className="grid grid-cols-2">
          <div className="flex flex-col m-2">
            <label htmlFor="first" className="mb-1">First Name</label>
            <input type="text" id="first" value={patient.first} onChange={handleChange} name="firstName" placeholder="Enter first name" className="border border-gray-300 rounded-md p-2" />
          </div>
          <div className="flex flex-col m-2">
            <label htmlFor="last" className="mb-1">Last Name</label>
            <input type="text" id="last" name="lastName" value={patient.last} onChange={handleChange} placeholder="Enter last name" className="border border-gray-300 rounded-md p-2" />
          </div>
          <div className="flex flex-col m-2">
            <label htmlFor="age" className="mb-1">Age</label>
            <input type="number" id="age" name="age" value={patient.age} onChange={handleChange} placeholder="Enter age" className="border border-gray-300 rounded-md p-2" />
          </div>
          <div className="flex flex-col m-2">
            <label htmlFor="gender" className="mb-1">Gender</label>
            <select id="gender" name="gender" value={patient.gender} onChange={handleChange} className="border border-gray-300 rounded-md p-2">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex flex-col m-2">
            <label htmlFor="address" className="mb-1">Address</label>
            <input type="text" id="address" name="address" value={patient.address} onChange={handleChange} placeholder="Enter address" className="border border-gray-300 rounded-md p-2" />
          </div>
          <div className="flex flex-col m-2">
            <label htmlFor="phone" className="mb-1">Phone Number</label>
            <input type="tel" id="phone" name="phoneNumber" value={patient.phone} onChange={handleChange} placeholder="Enter phone number" className="border border-gray-300 rounded-md p-2" />
          </div>
          <div className="flex flex-col m-2">
            <label htmlFor="email" className="mb-1">Email</label>
            <input type="email" id="email" name="email" value={patient.email} onChange={handleChange} placeholder="Enter email" className="border border-gray-300 rounded-md p-2" />
          </div>
          <div className="flex flex-col m-2">
            <label htmlFor="social" className="mb-1">Social Number</label>
            <input type="text" id="social" name="socialNumber" value={patient.social} onChange={handleChange} placeholder="Enter social number" className="border border-gray-300 rounded-md p-2" />
          </div>
          <div></div>
          <div className="flex justify-end gap-5 my-4">
            <button type="button" onClick={handleClose} className="bg-white border border-primary text-primary w-24 font-bold py-2 px-4 rounded">
              Cancel
            </button>
            <button onClick={submit} className="bg-primary text-white font-bold py-2 px-4 rounded w-24">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatientPopup;


