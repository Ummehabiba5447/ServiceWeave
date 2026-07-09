import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { LogOut } from 'lucide-react'
import { logoutUser } from '../store/slices/authSlice'
import BuyerLayout from '../components/buyer/BuyerLayout'

export default function BuyerDashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user || user.role !== 'buyer') {
      navigate('/login')
      return
    }
  }, [user, navigate])

  const handleLogout = async () => {
    dispatch(logoutUser())
    navigate('/login')
  }

  return (
    <BuyerLayout user={user}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Buyer Dashboard</h1>
              <p className="text-sm text-slate-600">Explore services, manage your bookings, and connect with service providers.</p>
            </div>
            <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>

          <h2 className="text-lg font-semibold text-slate-900 mb-4">Welcome, {user?.name}!</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button
              onClick={() => navigate('/')}
              className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition text-center"
            >
              <p className="font-medium text-slate-900">Browse Services</p>
            </button>
            <button
              onClick={() => navigate('/buyer/bookings')}
              className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition text-center"
            >
              <p className="font-medium text-slate-900">My Bookings</p>
            </button>
            <button
              onClick={() => navigate('/buyer/messages')}
              className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition text-center"
            >
              <p className="font-medium text-slate-900">Messages</p>
            </button>
          </div>
        </div>
      </div>
    </BuyerLayout>
  )
}
