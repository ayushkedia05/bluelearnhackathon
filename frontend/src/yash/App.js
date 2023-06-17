import React from 'react';
import AppointmentForm from './AppointmentForm';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Mob from './Mob';
import TreatmentForm from './TreatmentForm';
import DiagnosticApp from './Diagnosticapp';
import AboutSection from './AboutSection';
const App = () => {
  return (
    <>
   <Routes>
   <Route path="/about" element={<><Navbar/><AboutSection/></>}/>
   <Route path="/diagnostic" element={<><DiagnosticApp/></>}/>
   <Route path="/treatmentform" element={<><Navbar/><TreatmentForm/></>}/>
   <Route path="/mob" element={<><Mob/></>}/>
    <Route path="/book" element={<><Navbar/><AppointmentForm/></>}/> 
    <Route path="/" element={<><Home/></>}/>
   </Routes>
    </>
  );
};

export default App;
