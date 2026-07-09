import { useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  Package,
  Bell,
  CalendarCheck,
  DollarSign,
  Star,
  Settings,
  LogOut,
  Menu,
  X,
  Sparkles,
} from 'lucide-react'

export default function Sidebar({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate()
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/seller/dashboard' },
    { id: 'listings', label: 'My Listings', icon: Package, badge: 24, path: '/seller/listings' },
    { id: 'requests', label: 'Service Requests', icon: Bell, badge: 7, badgeColor: 'bg-red-500', path: '/seller/requests' },
    { id: 'bookings', label: 'My Bookings', icon: CalendarCheck, badge: 12, path: '/seller/bookings' },
    { id: 'earnings', label: 'Earnings', icon: DollarSign, path: '/seller/earnings' },
    { id: 'reviews', label: 'Reviews', icon: Star, path: '/seller/reviews' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/seller/settings' },
  ]

  return (
    <>
      {sidebarOpen && <div className="fixed inset-0 z-30 bg-slate-950/50 backdrop-blur-sm lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <aside className={`fixed left-0 top-0 z-40 h-screen w-72 transform transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="relative flex h-full flex-col overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-violet-600" />
          <div aria-hidden className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div aria-hidden className="absolute bottom-0 -right-16 h-72 w-72 rounded-full bg-violet-400/30 blur-3xl" />

          <div className="relative z-10 flex items-center justify-between border-b border-white/15 px-5 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md ring-1 ring-white/25">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="font-[Poppins,ui-sans-serif] text-lg font-semibold tracking-tight text-white">Seller Panel</h2>
                <p className="text-xs text-white/70">ServiceWeave</p>
              </div>
            </div>
            <button className="rounded-lg p-1.5 text-white/80 hover:bg-white/10 lg:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
              <X size={20} />
            </button>
          </div>

          <nav className="relative z-10 flex-1 space-y-1.5 px-3 py-6">
            {menuItems.map((item) => {
              const Icon = item.icon
              const active = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id)
                    setSidebarOpen(false)
                    if (item.path) navigate(item.path)
                  }}
                  className={`group flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${active ? 'bg-white/20 text-white shadow-lg ring-1 ring-white/30 backdrop-blur-md' : 'text-white/75 hover:bg-white/10 hover:text-white'}`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className={active ? 'text-white' : 'text-white/70 group-hover:text-white'} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && <span className={`rounded-full px-2 py-1 text-[10px] font-semibold text-white ${item.badgeColor || 'bg-white/20'}`}>{item.badge}</span>}
                </button>
              )
            })}
          </nav>

          <div className="relative z-10 border-t border-white/15 p-4">
            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/85 transition-all hover:bg-red-500/80 hover:text-white">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      <button onClick={() => setSidebarOpen(true)} className="fixed bottom-5 left-5 z-20 rounded-full bg-white p-3 text-blue-600 shadow-xl ring-1 ring-blue-100 lg:hidden">
        <Menu size={22} />
      </button>
    </>
  )
}