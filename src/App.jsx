import Signup from "./components/Signup"
import {Routes, Route } from 'react-router-dom';
import SignIn from './components/Signin'
import Home from "./components/Home";
import Patients from "./components/Patients";
import Calendar from "./components/Calendar";
import History from "./components/History";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/home" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/history" element={<History />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    </>
  )
}

export default App
