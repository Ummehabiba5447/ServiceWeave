import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import SellerNavbar from './SellerNavbar'

export default function SellerLayout({ children, seller }) {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 1024)
  const [activeTab, setActiveTab] = useState('dashboard')

  useEffect(() => {
    const routeMap = {
      '/seller/dashboard': 'dashboard',
      '/seller/listings': 'listings',
      '/seller/requests': 'requests',
      '/seller/bookings': 'bookings',
      '/seller/earnings': 'earnings',
      '/seller/reviews': 'reviews',
      '/seller/settings': 'settings',
    }

    setActiveTab(routeMap[location.pathname] || 'dashboard')
  }, [location.pathname])

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 font-[Inter,ui-sans-serif,system-ui]">
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-blue-500/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-violet-500/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/3 h-[28rem] w-[28rem] rounded-full bg-sky-400/15 blur-3xl" />

      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative z-10 lg:pl-72">
        <SellerNavbar seller={seller} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
