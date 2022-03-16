import React from "react";
import Dashbored from "./Components/Dashbored";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
   
        <Routes>
    
           <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashbored />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
