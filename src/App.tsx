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
import SellerPage from './pages/SellerPage';
import ProductsPage from './pages/ProductsPage';
import SettingsPage from './pages/SettingsPage';
import OrderPage from './pages/OrderPage';
import MessagesPage from './pages/MessagesPage';
import CommentsPage from './pages/CommentsPage';
import ProductListPage from './pages/ProductListPage';
import ProductsLoadingPage from './pages/ProductsLoadingPage';
import CharacteristicsPage from './pages/CharacteristicsPage';
import DiscountsPage from './pages/DiscountsPage';

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
          <Route path="sellerpage/:id" element={<SellerPage />}>
            <Route path="products" element={<ProductsPage />}>
              <Route path="product_list" element={<ProductListPage />} />
              <Route
                path="products_loading"
                element={<ProductsLoadingPage />}
              />
              <Route path="characteristics" element={<CharacteristicsPage />} />
              <Route path="discounts" element={<DiscountsPage />} />
            </Route>
            <Route path="settings" element={<SettingsPage />} />
            <Route path="orders" element={<OrderPage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="comments" element={<CommentsPage />} />
          </Route>
        </Routes>
      </div>
      <AdditionalFooter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
