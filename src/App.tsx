import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Page1 from "../src/pages/Page1";
import Page2 from "../src/pages/Page2";

import './App.css';

const App = () => {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
     <Route path="/" element={ <Page1 />} />
     <Route path="page2" element={ <Page2 />} />
   </Routes>
   
   </BrowserRouter>
    </div>
  );
}

export default App;
