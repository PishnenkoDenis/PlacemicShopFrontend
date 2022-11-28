import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdditionalFooter from './components/AdditionalFooter';
import MainPage from './pages/MainPage';
import Page2 from './pages/Page2';
import Header from './components/Header';
import Footer from './components/Footer';
import UserPage from './pages/UserPage';
import NewsPage from './pages/NewsPage';
import FAQPage from './pages/FAQ/FAQPage';
import Company from './pages/Company';
import SupportPage from './pages/SupportPage';
import FeedbackPage from './pages/FeedbackPage';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="userpage" element={<UserPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="company" element={<Company />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="feedback" element={<FeedbackPage />} />
        </Routes>
      </div>
      <AdditionalFooter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
