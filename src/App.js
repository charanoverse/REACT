import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Helloworld from "./Helloworld";
import './App.css'
import Props from './Props.js'
import Details from './Details.jsx';
import LoginComponent from './LoginComponent.js'
import StudentMarks from "./StudentMarks.js";
import DynamicInputForm from "./DynamicInput.js";

function App() {
  return (
    <div>
      {/* <First></First>
      <Second></Second> */}
    <Router>
      <Routes>
        <Route path="/hello" element={<Helloworld/>}/>
        <Route path="/props" element={<Props/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/login" element={<LoginComponent/>}/>
        <Route path="/students" element={<StudentMarks/>}/>
        <Route path="/dynamic" element={<DynamicInputForm/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
