import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SellerLayout from './SellerLayout'
import SellerDashboard from '../../pages/SellerDashboard'
import MyListings from '../listings/MyListings'
import ServiceRequests from '../requests/ServiceRequests'
import { default as EarningsPage } from '../earnings/EarningsPage'
import ReviewsPage from '../reviews/ReviewsPage'

export default function SellerContent() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (location.pathname === '/seller') {
      navigate('/seller/dashboard', { replace: true })
    }
  }, [location.pathname, navigate])

  const renderPage = () => {
    switch (location.pathname) {
      case '/seller/listings':
        return <MyListings />
      case '/seller/requests':
        return <ServiceRequests />
      case '/seller/bookings':
        return <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"><h2 className="text-xl font-semibold text-slate-900">My Bookings</h2><p className="mt-2 text-sm text-slate-600">Your booking management view will appear here.</p></div>
      case '/seller/earnings':
        return <EarningsPage />
      case '/seller/reviews':
        return <ReviewsPage />
      case '/seller/settings':
        return <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"><h2 className="text-xl font-semibold text-slate-900">Settings</h2><p className="mt-2 text-sm text-slate-600">Your account settings will appear here.</p></div>
      case '/seller/dashboard':
      default:
        return <SellerDashboard />
    }
  }

  const seller = {
    name: user?.name || 'Seller',
    role: user?.role || 'seller',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  }

  return <SellerLayout seller={seller}>{renderPage()}</SellerLayout>
}
