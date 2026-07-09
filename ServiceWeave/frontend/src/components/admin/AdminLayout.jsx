import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, Users, Briefcase, AlertTriangle,
  Settings, LogOut, Menu, X, Sparkles,
} from 'lucide-react'
import {
FileText,
TrendingUp
} from "lucide-react";
const menuItems = [

{
id:"dashboard",
label:"Dashboard",
icon:LayoutDashboard,
path:"/admin/dashboard"
},


{
id:"users",
label:"Manage Users",
icon:Users,
path:"/admin/users"
},



{
id:"listings",
label:"Approve Listings",
icon:Briefcase,
path:"/admin/listings"
},




{
id:"reports",
label:"Manage Reports",
icon:AlertTriangle,
path:"/admin/reports"
},





{
id:"logs",
label:"System Logs",
icon:FileText,
path:"/admin/logs"
},





{
id:"revenue",
label:"Revenue Analytics",
icon:TrendingUp,
path:"/admin/revenue"
},





{
id:"settings",
label:"Settings",
icon:Settings,
path:"/admin/settings"
}

];
export default function AdminLayout({ children, user, onLogout }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 1024)

  const isActive = (path) => location.pathname.startsWith(path)

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 font-[Inter,ui-sans-serif,system-ui]">
      {/* Ambient drifting blobs (match login/home) */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-blue-500/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-violet-500/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/3 h-[28rem] w-[28rem] rounded-full bg-sky-400/15 blur-3xl" />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-72 transform transition-transform duration-300 lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="relative flex h-full flex-col overflow-hidden">
          {/* Gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-violet-600" />
          <div aria-hidden className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div aria-hidden className="absolute bottom-0 -right-16 h-72 w-72 rounded-full bg-violet-400/30 blur-3xl" />

          <div className="relative z-10 flex items-center justify-between border-b border-white/15 px-5 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md ring-1 ring-white/25">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="font-[Poppins,ui-sans-serif] text-lg font-semibold tracking-tight text-white">
                  Admin Panel
                </h2>
                <p className="text-xs text-white/70">ServiceWeave</p>
              </div>
            </div>
            <button
              className="rounded-lg p-1.5 text-white/80 hover:bg-white/10 lg:hidden"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="relative z-10 flex-1 space-y-1.5 px-3 py-6">
            {menuItems.map(({ id, label, icon: Icon, path }) => {
              const active = isActive(path)
              return (
                <button
                  key={id}
                  onClick={() => {
                    setSidebarOpen(false)
                    navigate(path)
                  }}
                  className={`group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all
                    ${active
                      ? 'bg-white/20 text-white shadow-lg ring-1 ring-white/30 backdrop-blur-md'
                      : 'text-white/75 hover:bg-white/10 hover:text-white'}`}
                >
                  <Icon size={18} className={active ? 'text-white' : 'text-white/70 group-hover:text-white'} />
                  <span>{label}</span>
                  {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />}
                </button>
              )
            })}
          </nav>

          <div className="relative z-10 border-t border-white/15 p-4">
            <button
              onClick={onLogout}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/85 transition-all hover:bg-red-500/80 hover:text-white"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-slate-950/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="relative z-10 lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-white/40 bg-white/60 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
              >
                <Menu size={22} />
              </button>
              <div>
                <h1 className="font-[Poppins,ui-sans-serif] text-lg font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                  ServiceWeave
                </h1>
                <p className="text-xs text-slate-500">Admin Dashboard</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-medium text-slate-800">{user?.name}</p>
                <p className="text-xs text-slate-500">Administrator</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-sm font-semibold text-white shadow-md ring-2 ring-white">
                {user?.name?.[0]?.toUpperCase() ?? 'A'}
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
