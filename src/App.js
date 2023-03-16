import React from "react";
import Intro from "./components/IntroPage";
import "./index.css";
import "./animation.css";
import Body from "./components/Body";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {


  return (
    <BrowserRouter  basename="">
      <Routes> 
        <Route path="/" element={<Intro />} />   
        <Route path="/Body" element={ <Body />} />
      </Routes>
    </BrowserRouter>
  );
}
