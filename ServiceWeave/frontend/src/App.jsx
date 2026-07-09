import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentUser } from './store/slices/authSlice'

// Pages
import HomePage from './components/home.jsx'
import LoginPage from './auth/Login'
import RegisterPage from './auth/Register'
import SellerDashboard from './pages/SellerDashboard'
import BuyerDashboard from './pages/BuyerDashboard'
import AdminDashboard from './pages/AdminDashboard'
import SellerContent from './components/seller/SellerContent'
import BuyerContent from './components/buyer/BuyerContent'
import AdminContent from './components/admin/AdminContent'

// Components
import ProtectedRoute from './components/ProtectedRoute'

// Styles
import './App.css'

function App() {
  const dispatch = useDispatch()
  const { isAuthenticated, loading, user } = useSelector((state) => state.auth)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token && !isAuthenticated) {
      dispatch(fetchCurrentUser())
    }
  }, [dispatch, isAuthenticated])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-slate-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            isAuthenticated && user ? (
              <Navigate to={user.role === 'admin' ? '/admin/dashboard' : user.role === 'seller' ? '/seller/dashboard' : '/buyer/dashboard'} replace />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated && user ? (
              <Navigate to={user.role === 'admin' ? '/admin/dashboard' : user.role === 'seller' ? '/seller/dashboard' : '/buyer/dashboard'} replace />
            ) : (
              <RegisterPage />
            )
          }
        />

        {/* Seller Routes */}
        <Route
          path="/seller/dashboard"
          element={
            <ProtectedRoute requiredRole="seller">
              <SellerContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/seller"
          element={
            <ProtectedRoute requiredRole="seller">
              <SellerContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/seller/listings"
          element={
            <ProtectedRoute requiredRole="seller">
              <SellerContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/seller/requests"
          element={
            <ProtectedRoute requiredRole="seller">
              <SellerContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/seller/bookings"
          element={
            <ProtectedRoute requiredRole="seller">
              <SellerContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/seller/earnings"
          element={
            <ProtectedRoute requiredRole="seller">
              <SellerContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/seller/reviews"
          element={
            <ProtectedRoute requiredRole="seller">
              <SellerContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/seller/settings"
          element={
            <ProtectedRoute requiredRole="seller">
              <SellerContent />
            </ProtectedRoute>
          }
        />

        {/* Buyer Routes */}
        <Route
          path="/buyer/dashboard"
          element={
            <ProtectedRoute requiredRole="buyer">
              <BuyerContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buyer"
          element={
            <ProtectedRoute requiredRole="buyer">
              <BuyerContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buyer/products"
          element={
            <ProtectedRoute requiredRole="buyer">
              <BuyerContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buyer/services"
          element={
            <ProtectedRoute requiredRole="buyer">
              <BuyerContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buyer/bookings"
          element={
            <ProtectedRoute requiredRole="buyer">
              <BuyerContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buyer/purchases"
          element={
            <ProtectedRoute requiredRole="buyer">
              <BuyerContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buyer/favorites"
          element={
            <ProtectedRoute requiredRole="buyer">
              <BuyerContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buyer/reviews"
          element={
            <ProtectedRoute requiredRole="buyer">
              <BuyerContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buyer/settings"
          element={
            <ProtectedRoute requiredRole="buyer">
              <BuyerContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buyer/messages"
          element={
            <ProtectedRoute requiredRole="buyer">
              <BuyerContent />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/listings"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/logs"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/revenue"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminContent />
            </ProtectedRoute>
          }
        />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
