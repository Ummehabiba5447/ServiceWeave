import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axiosClient from '../services/axiosClient'
import { LogOut } from 'lucide-react'
import { logoutUser } from '../store/slices/authSlice'

export default function SellerDashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [dashboard, setDashboard] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!user || user.role !== 'seller') {
      navigate('/login')
      return
    }

    fetchDashboard()
  }, [user, navigate])

  const fetchDashboard = async () => {
    try {
      const { data } = await axiosClient.get('/seller/dashboard')
      setDashboard(data)
      setError(null)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load dashboard')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    dispatch(logoutUser())
    navigate('/login')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Seller Dashboard</h1>
            <p className="text-sm text-slate-600">Manage your business from one place.</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">{user?.name}</span>
            <button onClick={handleLogout} className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl">
        {error && <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">{error}</div>}

        {dashboard && (
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-medium text-slate-600">Total Services</h3>
              <p className="mt-2 text-3xl font-bold text-slate-900">{dashboard.totalServices}</p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-medium text-slate-600">Total Bookings</h3>
              <p className="mt-2 text-3xl font-bold text-slate-900">{dashboard.totalBookings}</p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-medium text-slate-600">Pending Bookings</h3>
              <p className="mt-2 text-3xl font-bold text-slate-900">{dashboard.pendingBookings}</p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-medium text-slate-600">Total Earnings</h3>
              <p className="mt-2 text-3xl font-bold text-slate-900">${dashboard.totalEarnings?.toFixed(2) || '0.00'}</p>
            </div>
          </div>
        )}

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <button onClick={() => navigate('/seller/services')} className="rounded-lg border border-slate-200 p-4 text-center transition hover:bg-slate-50">
              <p className="font-medium text-slate-900">Manage Services</p>
            </button>
            <button onClick={() => navigate('/seller/bookings')} className="rounded-lg border border-slate-200 p-4 text-center transition hover:bg-slate-50">
              <p className="font-medium text-slate-900">View Bookings</p>
            </button>
            <button onClick={() => navigate('/seller/earnings')} className="rounded-lg border border-slate-200 p-4 text-center transition hover:bg-slate-50">
              <p className="font-medium text-slate-900">Earnings</p>
            </button>
            <button onClick={() => navigate('/seller/messages')} className="rounded-lg border border-slate-200 p-4 text-center transition hover:bg-slate-50">
              <p className="font-medium text-slate-900">Messages</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
