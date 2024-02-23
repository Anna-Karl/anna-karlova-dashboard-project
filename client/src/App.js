import './App.scss';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ReviewsPage from './pages/ReviewsPage';
import DashboardPage from './pages/DashboardPage';
import DashboardProductPage from './pages/DashboardProductPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
  <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route path="/products/:productId/reviews" element={<ReviewsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/:productId" element={<DashboardProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  </>
  );
};
