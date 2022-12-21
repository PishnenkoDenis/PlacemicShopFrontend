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
import APP_ROUTE_PATHS from './appRoutePaths';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path={APP_ROUTE_PATHS.main_page} element={<MainPage />} />
          <Route path={APP_ROUTE_PATHS.page_2} element={<Page2 />} />
          <Route path={APP_ROUTE_PATHS.user_page} element={<UserPage />} />
          <Route path={APP_ROUTE_PATHS.news} element={<NewsPage />} />
          <Route path={APP_ROUTE_PATHS.faq} element={<FAQPage />} />
          <Route path={APP_ROUTE_PATHS.company} element={<Company />} />
          <Route path={APP_ROUTE_PATHS.support} element={<SupportPage />} />
          <Route path={APP_ROUTE_PATHS.feedback} element={<FeedbackPage />} />
          <Route
            path={`${APP_ROUTE_PATHS.sellerpage}/:id`}
            element={<SellerPage />}
          >
            <Route path={APP_ROUTE_PATHS.products} element={<ProductsPage />}>
              <Route
                path={APP_ROUTE_PATHS.product_list}
                element={<ProductListPage />}
              />
              <Route
                path={APP_ROUTE_PATHS.products_loading}
                element={<ProductsLoadingPage />}
              />
              <Route
                path={APP_ROUTE_PATHS.characteristics}
                element={<CharacteristicsPage />}
              />
              <Route
                path={APP_ROUTE_PATHS.discounts}
                element={<DiscountsPage />}
              />
            </Route>
            <Route path={APP_ROUTE_PATHS.settings} element={<SettingsPage />} />
            <Route path={APP_ROUTE_PATHS.orders} element={<OrderPage />} />
            <Route path={APP_ROUTE_PATHS.messages} element={<MessagesPage />} />
            <Route path={APP_ROUTE_PATHS.comments} element={<CommentsPage />} />
          </Route>
        </Routes>
      </div>
      <AdditionalFooter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
