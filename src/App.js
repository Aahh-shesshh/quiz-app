import React from "react";
import Intro from "./components/IntroPage";
import "./index.css";
import "./animation.css";
import Body from "./components/Body";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  // const [index, setIndex] = React.useState(0);
  // const [buttonText, setButtonText] = React.useState("Start Quiz");
  // const navigate = useNavigate();

  

  //   const navigateToBody = () => {
  //     // 👇️ navigate to /contacts
  //     navigate('/Body');
  //   };
  

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Intro />} />   
        <Route path="/Body" element={ <Body />} />
      </Routes>
    </BrowserRouter>
  );
}
