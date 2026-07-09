import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import AdminDashboard from '../../pages/AdminDashboard'
import ManageUsersPage from './users/ManageUsersPage'
import ApproveListingsPage from './listings/ApproveListingsPage'
import ManageReportsPage from './reports/ManageReportsPage'
import SystemLogsPage from './logs/SystemLogsPage'
import RevenueAnalyticsPage from './revenue/RevenueAnalyticsPage'
import AdminSettingsPage from './settings/AdminSettingsPage'
import AdminLayout from './AdminLayout'
import { logoutUser } from '../../store/slices/authSlice'

export default function AdminContent() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  if (location.pathname === '/admin') {
    navigate('/admin/dashboard', { replace: true })
    return null
  }

  const handleLogout = async () => {
    dispatch(logoutUser())
    navigate('/login')
  }

  const renderPage = () => {
    switch (location.pathname) {
      case '/admin/dashboard':
        return <AdminDashboard />
      case '/admin/users':
        return <ManageUsersPage />
      case '/admin/listings':
        return <ApproveListingsPage />
      case '/admin/reports':
        return <ManageReportsPage />
      case '/admin/logs':
        return <SystemLogsPage />
      case '/admin/revenue':
        return <RevenueAnalyticsPage />
      case '/admin/settings':
        return <AdminSettingsPage />
      default:
        return <AdminDashboard />
    }
  }

  return <AdminLayout user={user} onLogout={handleLogout}>{renderPage()}</AdminLayout>
}
