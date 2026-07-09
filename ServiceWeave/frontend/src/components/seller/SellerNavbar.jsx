import { Bell, Search, Menu, ChevronDown, User, Settings, LogOut } from 'lucide-react'
import { useState } from 'react'

export default function SellerNavbar({ seller, sidebarOpen, setSidebarOpen }) {
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-white/40 bg-white/70 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden" aria-label="Open sidebar">
            <Menu size={24} />
          </button>

          <div>
            <h1 className="font-[Poppins,ui-sans-serif] text-xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">ServiceWeave</h1>
            <p className="text-xs text-slate-500">Seller Dashboard</p>
          </div>
        </div>

        <div className="hidden flex-1 max-w-xl mx-8 md:flex">
          <div className="relative w-full">
            <Search size={18} className="absolute left-4 top-3 text-slate-400" />
            <input type="text" placeholder="Search listings, requests..." className="w-full rounded-xl border border-slate-200 bg-white/80 py-2.5 pl-11 pr-4 text-sm outline-none ring-0 transition focus:border-blue-400 focus:bg-white" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative rounded-full p-2 text-slate-600 hover:bg-slate-100">
            <Bell size={20} />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">7</span>
          </button>

          <div className="hidden items-center gap-3 md:flex">
            <div className="text-right">
              <h3 className="font-semibold text-slate-800">{seller?.name}</h3>
              <span className="mt-1 inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">{seller?.role}</span>
            </div>

            <div className="relative">
              <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-2">
                <img src={seller?.avatar} alt="Seller" className="h-11 w-11 rounded-full border border-slate-200 object-cover" />
                <ChevronDown size={18} className="text-slate-500" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                  <button className="flex w-full items-center gap-3 px-5 py-3 text-left text-sm text-slate-700 hover:bg-slate-100">
                    <User size={18} /> My Profile
                  </button>
                  <button className="flex w-full items-center gap-3 px-5 py-3 text-left text-sm text-slate-700 hover:bg-slate-100">
                    <Settings size={18} /> Settings
                  </button>
                  <hr />
                  <button className="flex w-full items-center gap-3 px-5 py-3 text-left text-sm text-red-600 hover:bg-red-50">
                    <LogOut size={18} /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          <img src={seller?.avatar} alt="Seller" className="h-10 w-10 rounded-full border border-slate-200 object-cover md:hidden" />
        </div>
      </div>
    </header>
  )
}