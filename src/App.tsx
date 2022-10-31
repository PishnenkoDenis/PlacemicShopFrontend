import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdditionalFooter from './components/AdditionalFooter/AdditionalFooter';
import MainPage from './pages/MainPage';
import Page2 from './pages/Page2';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="page2" element={<Page2 />} />
        </Routes>
      </div>
      <AdditionalFooter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
