import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {
  ShieldCheck
} from 'lucide-react'

import { logoutUser } from '../store/slices/authSlice'
import AdminLayout from '../components/admin/AdminLayout'
import AdminOverview from "../components/admin/overview/AdminOverview"



export default function AdminDashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user || user.role !== 'admin') navigate('/login')
  }, [user, navigate])

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate('/login')
  }

  return (
    <AdminLayout user={user} onLogout={handleLogout}>
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Welcome card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-blue-600 via-blue-500 to-violet-600 p-6 text-white shadow-[0_24px_64px_-24px_rgba(59,130,246,0.45)] sm:p-8">
          <div aria-hidden className="absolute -top-16 -right-10 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
          <div aria-hidden className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-violet-300/30 blur-3xl" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/30 backdrop-blur-md">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h2 className="font-[Poppins,ui-sans-serif] text-2xl font-semibold tracking-tight">
                Welcome back, {user?.name}
              </h2>
              <p className="mt-1 text-sm text-white/80">
                You are signed in as an administrator. Here is what needs your attention today.
              </p>
            </div>
          </div>
        </div>

         <AdminOverview />
      </div>
    </AdminLayout>
  )
}
