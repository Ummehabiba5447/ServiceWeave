// HomePage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu, X, ArrowRight, Search, CalendarCheck, Sparkles,
  Camera, Dumbbell, Hammer, PaintRoller, Plug, UtensilsCrossed, Wrench,
  Star, Quote, ShieldCheck, BadgeCheck, Clock, CreditCard, Users, Heart,
  Store, MapPin, Link as LinkIcon,
} from "lucide-react";

/* ---------------- NAVBAR ---------------- */
const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Categories", href: "#categories" },
  { label: "Featured", href: "#featured" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Why Us", href: "#why-us" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/40">
            <LinkIcon className="h-5 w-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-semibold text-gray-900">Service<span className="text-blue-600">Weave</span></span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/login" className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">Log In</Link>
          <Link to="/register" className="rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:opacity-90">
            Sign Up Free
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 bg-white lg:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100">
                {l.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-gray-200 pt-4">
              <Link to="/login" className="rounded-lg border border-gray-200 px-4 py-2 text-center text-sm font-medium">Log In</Link>
              <Link to="/register" className="rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 text-center text-sm font-semibold text-white">Sign Up Free</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-16 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs font-semibold text-blue-700 backdrop-blur">
            <BadgeCheck className="h-3.5 w-3.5" /> 12,000+ verified pros
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Hire trusted local <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">professionals</span> in minutes.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gray-600">
            From cleaning to catering, book verified vendors near you. Chat securely, pay safely, get it done.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center gap-2 rounded-xl border border-gray-200 bg-white p-2 shadow-sm">
              <Search className="ml-2 h-5 w-5 text-gray-400" />
              <input className="flex-1 bg-transparent px-2 py-2 text-sm outline-none" placeholder="What service do you need?" />
              <div className="hidden items-center gap-1 border-l border-gray-200 pl-3 pr-2 text-sm text-gray-500 sm:flex">
                <MapPin className="h-4 w-4" /> New York
              </div>
              <button className="rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30">
                Search
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-500" /> $1M protection</div>
            <div className="flex items-center gap-2"><Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.9 average rating</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-blue-500" /> Same-day booking</div>
          </div>
        </div>

        {/* Illustration card stack */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-400/30 to-violet-400/30 blur-2xl" />
          <div className="relative grid gap-4 rounded-3xl border border-white/60 bg-white/60 p-6 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-100 text-blue-600"><Sparkles className="h-5 w-5" /></span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Home Cleaning</p>
                <p className="text-xs text-gray-500">Booked in 2 min • Sarah M.</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">Confirmed</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-100 text-violet-600"><Camera className="h-5 w-5" /></span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Event Photographer</p>
                <p className="text-xs text-gray-500">Chat active • David O.</p>
              </div>
              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">In chat</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-100 text-amber-600"><Wrench className="h-5 w-5" /></span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Emergency Plumber</p>
                <p className="text-xs text-gray-500">Arriving 30 min • James C.</p>
              </div>
              <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">En route</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
const steps = [
  { icon: Search, step: "01", title: "Search & Discover", desc: "Browse verified local pros by category, rating, price, and availability." },
  { icon: CalendarCheck, step: "02", title: "Book & Chat", desc: "Book instantly and chat with your pro to share details before the job." },
  { icon: Sparkles, step: "03", title: "Relax & Review", desc: "Your pro handles the rest. Pay securely, then leave a review." },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">How It Works</span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">Three Simple Steps to Get Things Done</h2>
          <p className="mt-4 text-gray-600">From finding the right pro to leaving a review — effortless.</p>
        </div>
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div aria-hidden className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-blue-200 md:block" />
          {steps.map((s) => (
            <div key={s.step} className="relative rounded-3xl border border-white/60 bg-white/70 p-8 text-center shadow-lg shadow-blue-500/5 backdrop-blur-xl">
              <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/30">
                <s.icon className="h-8 w-8 text-white" />
                <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-white text-xs font-bold text-blue-600 shadow">{s.step}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CATEGORIES ---------------- */
const categories = [
  { icon: Sparkles, name: "Home Cleaning", count: "2,340 pros", tint: "bg-blue-100 text-blue-600" },
  { icon: Wrench, name: "Plumbing", count: "1,180 pros", tint: "bg-violet-100 text-violet-600" },
  { icon: Plug, name: "Electrical", count: "960 pros", tint: "bg-amber-100 text-amber-600" },
  { icon: Camera, name: "Photography", count: "1,540 pros", tint: "bg-emerald-100 text-emerald-600" },
  { icon: Dumbbell, name: "Fitness & Wellness", count: "870 pros", tint: "bg-rose-100 text-rose-600" },
  { icon: UtensilsCrossed, name: "Catering & Events", count: "1,020 pros", tint: "bg-blue-100 text-blue-600" },
  { icon: Hammer, name: "Handyman", count: "1,760 pros", tint: "bg-violet-100 text-violet-600" },
  { icon: PaintRoller, name: "Painting & Decor", count: "690 pros", tint: "bg-emerald-100 text-emerald-600" },
];

function Categories() {
  return (
    <section id="categories" className="scroll-mt-24 bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Categories</span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">Explore Popular Services</h2>
          <p className="mt-4 text-gray-600">Whatever you need, there's a verified local pro ready to help.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {categories.map((c) => (
            <a key={c.name} href="#featured" className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
              <span className={`grid h-12 w-12 place-items-center rounded-xl transition-transform group-hover:scale-110 ${c.tint}`}>
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{c.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{c.count}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURED LISTINGS ---------------- */
const listings = [
  { title: "Sparkle Home Cleaning", pro: "Sarah Mitchell", price: "$45/hr", rating: 4.9, reviews: 312, tag: "Top Rated", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800" },
  { title: "David O. Photography", pro: "David Okafor", price: "$180/session", rating: 5.0, reviews: 214, tag: "Featured", img: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800" },
  { title: "24/7 Emergency Plumbing", pro: "James Chen", price: "$85/hr", rating: 4.8, reviews: 458, tag: "24/7", img: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800" },
  { title: "Amara's Catering Co.", pro: "Amara Diallo", price: "From $25/pp", rating: 4.9, reviews: 189, tag: "Popular", img: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800" },
  { title: "BrightSpark Electrical", pro: "Emma Rodriguez", price: "$95/hr", rating: 4.9, reviews: 267, tag: "Verified", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800" },
  { title: "Peak Fitness Coaching", pro: "Marcus Lee", price: "$60/session", rating: 4.8, reviews: 143, tag: "New", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800" },
];

function Featured() {
  return (
    <section id="featured" className="scroll-mt-24 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Featured</span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">Top-Rated Pros Near You</h2>
          </div>
          <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700">Browse all →</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((l) => (
            <article key={l.title} className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={l.img} alt={l.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-blue-700 backdrop-blur">{l.tag}</span>
                <button aria-label="Save" className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-gray-600 backdrop-blur hover:text-rose-500">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{l.title}</h3>
                  <span className="flex items-center gap-1 text-sm font-semibold text-gray-900">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />{l.rating}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500">by {l.pro} • {l.reviews} reviews</p>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-lg font-bold text-gray-900">{l.price}</span>
                  <Link to="/login" className="rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/20">Book</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const testimonials = [
  { quote: "Found an amazing cleaner within minutes. Booking was seamless.", name: "Sarah Mitchell", role: "Homeowner", initials: "SM", tint: "bg-blue-100 text-blue-700" },
  { quote: "ServiceWeave doubled my bookings in three months. Life-changing.", name: "David Okafor", role: "Photographer", initials: "DO", tint: "bg-violet-100 text-violet-700" },
  { quote: "Emergency plumber at my door within the hour. A lifesaver.", name: "Emma Rodriguez", role: "Small Business Owner", initials: "ER", tint: "bg-emerald-100 text-emerald-700" },
];

function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Testimonials</span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">Loved by Customers & Vendors</h2>
          <p className="mt-4 text-gray-600">Real stories from the ServiceWeave community.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex h-full flex-col rounded-3xl border border-white/60 bg-white/70 p-7 shadow-lg shadow-blue-500/5 backdrop-blur-xl">
              <Quote className="h-7 w-7 text-blue-400/60" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm text-gray-700">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                <span className={`grid h-10 w-10 place-items-center rounded-full text-sm font-bold ${t.tint}`}>{t.initials}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE ---------------- */
const perks = [
  { icon: ShieldCheck, title: "$1M Protection", desc: "Every booking is covered by our protection policy." },
  { icon: BadgeCheck, title: "Verified Pros", desc: "Background-checked professionals only." },
  { icon: CreditCard, title: "Secure Payments", desc: "Pay safely — funds held until job is done." },
  { icon: Users, title: "Real Reviews", desc: "Honest ratings from verified customers." },
];

function WhyChoose() {
  return (
    <section id="why-us" className="scroll-mt-24 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Why ServiceWeave</span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">The Marketplace You Can Trust</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <div key={p.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/30">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-violet-600 px-6 py-16 text-center shadow-2xl shadow-blue-500/30 sm:px-12 lg:py-20">
          <div aria-hidden className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden className="absolute -bottom-28 -right-12 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
              <Store className="h-3.5 w-3.5" /> Join 12,000+ pros already on ServiceWeave
            </span>
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Ready to Get Started?</h2>
            <p className="mt-4 text-white/85 sm:text-lg">Hire a pro or grow your business — faster, safer, smarter.</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link to="/login" className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 text-base font-semibold text-blue-700 shadow-lg transition hover:scale-[1.03]">
                Find a Pro <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/login" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur hover:bg-white/20">
                Become a Vendor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
const columns = [
  { heading: "Marketplace", links: ["Browse Services", "Featured Pros", "Categories", "Gift Cards", "Mobile App"] },
  { heading: "For Vendors", links: ["Become a Vendor", "Vendor Dashboard", "Pricing & Fees", "Success Stories", "Resources"] },
  { heading: "Company", links: ["About Us", "Careers", "Press", "Blog", "Contact"] },
  { heading: "Support", links: ["Help Center", "Trust & Safety", "Privacy Policy", "Terms", "Cookies"] },
];
const socials = [Store, ShieldCheck, Users, Heart];

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="max-w-sm">
            <a href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/40">
                <LinkIcon className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-semibold text-gray-900">Service<span className="text-blue-600">Weave</span></span>
            </a>
            <p className="mt-4 text-sm text-gray-600">The trusted marketplace connecting you with verified local professionals.</p>
            <div className="mt-6 flex gap-2">
              {socials.map((Icon, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-lg border border-gray-200 text-gray-500 hover:border-blue-300 hover:text-blue-600">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-sm font-semibold text-gray-900">{col.heading}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}><a href="#" className="text-sm text-gray-600 hover:text-blue-600">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} ServiceWeave. All rights reserved.</p>
          <Link to="/login" className="text-xs font-medium text-blue-600 hover:text-blue-700">Sign in to your account →</Link>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- PAGE ---------------- */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Categories />
        <Featured />
        <Testimonials />
        <WhyChoose />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

