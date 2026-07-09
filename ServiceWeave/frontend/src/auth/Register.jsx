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
  User,
  Briefcase,
  ShoppingBag,
  AlertCircle,
} from 'lucide-react'

import heroImg from '../assets/55932dd6-3a7d-487e-946c-68c86f38a07b.jpg'
import { registerUser, clearError } from '../store/slices/authSlice'

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

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [role, setRole] = useState('buyer')
  const [password, setPassword] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })
  const [agreed, setAgreed] = useState(false)
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

  // simple strength meter
  const strength =
    (password.length >= 8 ? 1 : 0) +
    (/[A-Z]/.test(password) ? 1 : 0) +
    (/\d/.test(password) ? 1 : 0) +
    (/[^A-Za-z0-9]/.test(password) ? 1 : 0)
  const strengthLabel = ['Too weak', 'Weak', 'Fair', 'Good', 'Strong'][strength]
  const strengthColor = ['bg-slate-200', 'bg-red-400', 'bg-amber-400', 'bg-blue-500', 'bg-emerald-500'][strength]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (name === 'password') {
      setPassword(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!agreed) {
      alert('Please agree to the terms and privacy policy')
      return
    }

    if (formData.password !== formData.password_confirmation) {
      dispatch(clearError())
      alert('Passwords do not match')
      return
    }

    dispatch(
      registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
        role: role,
      })
    )
  }

  return (
    <main className="flex min-h-screen bg-slate-50 font-sans">
      {/* Left — brand panel */}
      <aside className="relative hidden overflow-hidden lg:flex lg:w-1/2 xl:w-[54%]">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500" />

        {/* Blurred circles */}
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-cyan-300/40 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-8%] h-[30rem] w-[30rem] rounded-full bg-violet-400/30 blur-3xl" />
        <div className="absolute top-[38%] left-[55%] h-64 w-64 rounded-full bg-white/10 blur-2xl" />

        <div className="relative z-10 flex w-full flex-col justify-center px-12 py-16 xl:px-20">
          <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white xl:text-5xl">
            Join ServiceWeave Today
          </h2>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 xl:text-lg">
            Register as a buyer or seller and start booking, selling, chatting, and growing your business on one
            trusted platform.
          </p>

          <div className="mx-auto mt-12 w-full max-w-sm xl:max-w-md">
            <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
              <img src={heroImg} alt="ServiceWeave Hero" className="h-auto w-full object-cover" />
            </div>
          </div>
        </div>
      </aside>

      {/* Right — register card */}
      <section className="relative flex w-full flex-1 items-center justify-center overflow-hidden px-4 py-10 sm:px-8">
        <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-400/25 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-16 h-[28rem] w-[28rem] rounded-full bg-violet-400/25 blur-3xl" />

        <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/60 bg-white/70 p-8 shadow-xl backdrop-blur-xl sm:p-10">
          <div className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/30">
              <LinkIcon className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-semibold text-slate-800">
              Service<span className="text-blue-600">Weave</span>
            </span>
          </div>

          <h1 className="mt-8 text-2xl font-semibold tracking-tight text-slate-900">Create your account</h1>
          <p className="mt-1.5 text-sm text-slate-500">Get started free — no credit card required</p>

          {error && (
            <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
              <AlertCircle className="h-4 w-4" />
              <span>{typeof error === 'string' ? error : 'Registration failed. Please try again.'}</span>
            </div>
          )}

          {/* Role toggle */}
          <div className="mt-6 grid grid-cols-2 gap-2 rounded-xl border border-slate-200 bg-white/60 p-1">
            {[
              { id: 'buyer', label: 'I need a service', icon: ShoppingBag },
              { id: 'seller', label: 'I provide service', icon: Briefcase },
            ].map((opt) => {
              const Icon = opt.icon
              const active = role === opt.id
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setRole(opt.id)}
                  className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
                    active ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="h-4 w-4" /> {opt.label}
                </button>
              )
            })}
          </div>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700">
                Full Name
              </label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Cooper"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white/70 pl-10 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white/70 pl-10 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="At least 8 characters"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white/70 pl-10 pr-11 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
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

              {/* Strength meter */}
              <div className="mt-2 flex items-center gap-2">
                <div className="flex flex-1 gap-1">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-colors ${i < strength ? strengthColor : 'bg-slate-200'}`}
                    />
                  ))}
                </div>
                <span className="w-16 text-right text-xs text-slate-500">{strengthLabel}</span>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password_confirmation" className="text-sm font-medium text-slate-700">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white/70 pl-10 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                />
              </div>
            </div>

            <label className="flex items-start gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span>
                I agree to the <a href="#" className="font-medium text-blue-600 hover:text-blue-700">
                  Terms
                </a>{' '}
                and <a href="#" className="font-medium text-blue-600 hover:text-blue-700">
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-105 active:scale-[0.99] disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account…
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700">
              Sign In
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
