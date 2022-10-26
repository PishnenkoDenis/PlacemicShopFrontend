import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Page2 from './pages/Page2';
import Header from './components/Header/Header';

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
