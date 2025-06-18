import React from 'react';
import './Helloworld.css';
function Helloworld() {
    // introducing variables
    let name="John";
    let age = 30;
    const country = "USA";
    let college={
      name: "KMIT",
      city: "Narayanaguda"
    }
    // displaying an array
    const numbers = [65, 44, 12, 4];
    // displaying arrays of strings
    const courses = [
      "Full Stack Developement Program",
      "Python Automation Testing Program",
      "UI/UX Program",
    ];
  
    /* Mapping the courses into a new array of JSX nodes as arrayDataItems */
    const arrayDataItems = courses.map((course) => <li>{course}</li>);
  
    return (
      <div className="Hello">
          <p> Edit <code>src/App.js</code> and save to reload. </p>
          <h1> Welcome to react</h1>
          <h2> {name}</h2>
          <p>You are {age} years old and live in {country}.</p>
          <p> CollegeName: {college.name}</p>
          <p> CollegeLocation: {college.city}</p>
          {/* returning array of numbers  */}
          const newArr = {numbers.map((num) => ( <h4> {num*10} </h4> ))}
          {/* returning arrayDataItems wrapped in <ul> */}
          <ul>{arrayDataItems}</ul>
       </div>
    );
  }
  
export default Helloworld;
