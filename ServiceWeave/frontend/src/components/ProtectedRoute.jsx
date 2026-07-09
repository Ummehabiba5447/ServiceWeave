import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.auth)

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
          <p className="mt-4 text-slate-600">Checking your access...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (requiredRole && user?.role && user.role !== requiredRole) {
    return <Navigate to="/" replace />
  }

  if (requiredRole && !user?.role) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
