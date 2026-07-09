import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Eye,
  EyeOff,
  Link as LinkIcon,
  Loader2,
  Lock,
  Mail,
  CalendarCheck,
  ShoppingBag,
  BadgeCheck,
  MessageCircle,
  Star,
  AlertCircle,
} from 'lucide-react'
import heroImg from '../assets/55932dd6-3a7d-487e-946c-68c86f38a07b.jpg'
import { loginUser, clearError } from '../store/slices/authSlice'

const HERO_IMG = heroImg

const FLOATING = [
  { icon: CalendarCheck, label: 'Service Booking', pos: 'left-[-2%] top-[4%]', delay: '0s' },
  { icon: ShoppingBag, label: 'Local Marketplace', pos: 'right-[-2%] top-[16%]', delay: '0.9s' },
  {
    icon: BadgeCheck,
    label: 'Verified Professionals',
    pos: 'left-[-4%] bottom-[26%]',
    delay: '1.8s',
  },
  { icon: MessageCircle, label: 'Real-Time Chat', pos: 'right-[-3%] bottom-[14%]', delay: '2.7s' },
  { icon: Star, label: 'Reviews', pos: 'left-[32%] bottom-[-5%]', delay: '3.6s' },
]

function GoogleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.57 5.57 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29A7.19 7.19 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.62H1.29a11.97 11.97 0 0 0 0 10.76l3.98-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75Z"
      />
    </svg>
  )
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '' })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, error, isAuthenticated, user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isAuthenticated && user) {
      const target = user.role === 'admin' ? '/admin/dashboard' : user.role === 'seller' ? '/seller/dashboard' : '/buyer/dashboard'
      navigate(target)
    }
  }, [isAuthenticated, user, navigate])

  useEffect(() => {
    return () => {
      dispatch(clearError())
    }
  }, [dispatch])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(loginUser(formData))
  }

  return (
    <main className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Local keyframes for drift + float + fade-up */}
      <style>{`
        @keyframes drift {
          0%,100% { transform: translate(0,0) scale(1); }
          50%     { transform: translate(30px,-20px) scale(1.05); }
        }
        @keyframes floaty {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-8px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-drift  { animation: drift 14s ease-in-out infinite; }
        .animate-float  { animation: floaty 4s ease-in-out infinite; }
        .animate-fadeup { animation: fadeUp .6s ease-out both; }
        .glass-card {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 10px 40px -12px rgba(37,99,235,0.25);
        }
        .glass-chip {
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.28);
        }
      `}</style>

      {/* LEFT — hero panel with illustration + floating service chips */}
      <aside className="relative hidden overflow-hidden lg:flex lg:w-1/2 xl:w-[54%]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500" />
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-cyan-300/40 blur-3xl animate-drift" />
        <div
          className="absolute bottom-[-10%] right-[-8%] h-[30rem] w-[30rem] rounded-full bg-violet-400/30 blur-3xl animate-drift"
          style={{ animationDelay: '-6s' }}
        />
        <div
          className="absolute top-[38%] left-[55%] h-64 w-64 rounded-full bg-white/10 blur-2xl animate-drift"
          style={{ animationDelay: '-12s' }}
        />

        <div className="relative z-10 flex w-full flex-col justify-center px-12 py-16 xl:px-20">
          <div className="animate-fadeup">
            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white xl:text-5xl">
              Connecting Communities with Trusted Services
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 xl:text-lg">
              Hire local professionals, discover products, manage bookings, and grow your business — all in one secure
              platform.
            </p>
          </div>

          {/* Illustration + floating chips */}
          <div className="relative mx-auto mt-12 w-full max-w-sm animate-fadeup xl:max-w-md" style={{ animationDelay: '.2s' }}>
            <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
              <img
                src={HERO_IMG}
                alt="People hiring professionals, shopping locally, chatting, and booking services on ServiceWeave"
                className="h-auto w-full object-cover"
                loading="eager"
              />
            </div>

            {FLOATING.map(({ icon: Icon, label, pos, delay }) => (
              <div
                key={label}
                className={`glass-chip absolute ${pos} flex items-center gap-2 rounded-xl px-3.5 py-2.5 shadow-lg animate-float`}
                style={{ animationDelay: delay }}
              >
                <Icon aria-hidden="true" className="h-4 w-4 text-white" />
                <span className="whitespace-nowrap text-xs font-medium text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* RIGHT — glass login card */}
      <section className="relative flex w-full flex-1 items-center justify-center overflow-hidden px-4 py-10 sm:px-8">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-drift" />
        <div
          className="pointer-events-none absolute -bottom-32 -left-16 h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-3xl animate-drift"
          style={{ animationDelay: '-8s' }}
        />

        <div className="relative z-10 w-full max-w-md">
          <div className="glass-card animate-fadeup rounded-3xl p-8 sm:p-10">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/40">
                <LinkIcon className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-semibold">
                Service<span className="text-blue-600">Weave</span>
              </span>
            </div>

            <h1 className="mt-8 text-2xl font-semibold tracking-tight">Welcome Back</h1>
            <p className="mt-1.5 text-sm text-slate-500">Sign in to continue to ServiceWeave</p>

            {error && (
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                <AlertCircle className="h-4 w-4" />
                <span>{typeof error === 'string' ? error : 'Login failed. Please try again.'}</span>
              </div>
            )}

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white/70 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white/70 pl-10 pr-11 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 hover:text-slate-700"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-500">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  Remember me
                </label>
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-base font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:brightness-105 active:scale-[.99] disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in…
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Don&apos;t have an account?{' '}
              <Link to="/register" className="font-semibold text-blue-600 hover:text-blue-800">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
