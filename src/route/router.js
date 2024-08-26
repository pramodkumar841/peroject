import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../home/home";


const RouterFile = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />  
    </Routes>   
  </Router>
);

export default RouterFile;
