import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import BuyerDashboard from '../../pages/BuyerDashboard'
import BuyerBookingsPage from '../buyerBookings/BuyerBookingsPage'
import PurchaseHistoryPage from '../purchaseHistory/PurchaseHistoryPage'
import FavoritesPage from '../favorites/FavoritesPage'
import BuyerReviewsPage from '../buyerReviews/BuyerReviewsPage'
import BuyerSettingsPage from '../buyerSettings/BuyerSettingsPage'
import BuyerLayout from './BuyerLayout'
import { logoutUser } from '../../store/slices/authSlice'

export default function BuyerContent() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  if (location.pathname === '/buyer') {
    navigate('/buyer/dashboard', { replace: true })
    return null
  }

  const handleLogout = async () => {
    dispatch(logoutUser())
    navigate('/login')
  }

  const renderPage = () => {
    switch (location.pathname) {
      case '/buyer/dashboard':
        return <BuyerDashboard />
      case '/buyer/products':
        return <div className="rounded-xl bg-white p-8 shadow"><h2 className="text-xl font-bold">Browse Products</h2><p className="mt-2 text-gray-500">Products marketplace will appear here.</p></div>
      case '/buyer/services':
        return <div className="rounded-xl bg-white p-8 shadow"><h2 className="text-xl font-bold">Browse Services</h2><p className="mt-2 text-gray-500">Services marketplace will appear here.</p></div>
      case '/buyer/bookings':
        return <BuyerBookingsPage />
      case '/buyer/purchases':
        return <PurchaseHistoryPage />
      case '/buyer/favorites':
        return <FavoritesPage />
      case '/buyer/reviews':
        return <BuyerReviewsPage />
      case '/buyer/settings':
        return <BuyerSettingsPage />
      case '/buyer/messages':
        return <div className="rounded-xl bg-white p-8 shadow"><h2 className="text-xl font-bold">Messages</h2><p className="mt-2 text-gray-500">Your conversations with sellers will appear here.</p></div>
      default:
        return <BuyerDashboard />
    }
  }

  return <BuyerLayout user={user} onLogout={handleLogout}>{renderPage()}</BuyerLayout>
}
