import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  Car,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Container,
  FileCheck2,
  Gauge,
  Globe2,
  Headphones,
  LandPlot,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Ship,
  Sparkles,
  Star,
  Truck,
  Zap,
} from 'lucide-react'

const whatsappUrl = 'https://wa.me/2348057020989'
const officeAddress = '3 Oroku Street, Off Park Road, Ebute Metta, Lagos'

const services = [
  ['Global Vehicle Sourcing', Globe2, 'Premium access to international suppliers, dealers, auctions, and market-specific inventory.'],
  ['Copart Assistance', Car, 'Consultation for Copart listings, title checks, bid strategy, purchase guidance, and next steps.'],
  ['IAA Assistance', ShieldCheck, 'End-to-end support for IAA auction research, valuation, bidding, and vehicle documentation.'],
  ['China Vehicle Procurement', Zap, 'Guided sourcing for EVs, commercial units, economy cars, and emerging-market models from China.'],
  ['Auction Bidding Support', Gauge, 'Confident bidding guidance built around budget, condition, market value, and landed cost.'],
  ['Vehicle Inspection', ClipboardCheck, 'Inspection assistance to help verify condition, photos, reports, and seller disclosures.'],
  ['Shipping & Freight', Ship, 'Coordinated global freight routes for single vehicles, containers, fleets, and dealer shipments.'],
  ['Import Documentation', FileCheck2, 'Consultation on export documents, invoices, titles, shipping papers, and import records.'],
  ['Customs Clearance Support', LandPlot, 'Guidance through customs processes, duty estimates, and destination requirements.'],
  ['Dealer Procurement Services', Building2, 'Dealer-to-dealer procurement for bulk orders, resale inventory, and fleet replenishment.'],
] as const

const reasons = [
  ['Global Network of Suppliers', Globe2],
  ['Transparent Transactions', BadgeCheck],
  ['Competitive Pricing', CircleDollarSign],
  ['Expert Industry Knowledge', Award],
  ['End-to-End Logistics Support', Container],
  ['Fast Response Time', Clock3],
  ['Trusted Customer Service', Headphones],
] as const

const steps = [
  'Tell Us Your Vehicle Requirements',
  'We Source the Best Options Globally',
  'Vehicle Verification & Inspection',
  'Purchase & Documentation',
  'Shipping & Logistics',
  'Delivery To Your Destination',
]

const markets = ['United States', 'China', 'Canada', 'Germany', 'United Kingdom'] as const

const categories = [
  ['SUVs', Truck, 'Family, executive, off-road, and premium sport utility vehicles.'],
  ['Electric Vehicles', Zap, 'Modern EVs from China, Europe, North America, and the UAE.'],
  ['Luxury Cars', Sparkles, 'Executive sedans, coupes, high-end SUVs, and prestige marques.'],
  ['Commercial Vehicles', Container, 'Vans, trucks, fleet units, buses, and work-ready vehicles.'],
  ['Salvage Vehicles', Gauge, 'Auction opportunities for rebuilders, resellers, and parts buyers.'],
  ['Clean Title Vehicles', ShieldCheck, 'Verified clean title vehicles for private buyers and dealerships.'],
] as const

const showcaseVehicles = [
  {
    title: 'Luxury Performance',
    market: 'Europe & UAE',
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1600&q=85',
  },
  {
    title: 'Premium SUVs',
    market: 'USA & Canada',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=85',
  },
  {
    title: 'Electric Vehicles',
    market: 'China & Europe',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1600&q=85',
  },
  {
    title: 'Commercial Units',
    market: 'Global Fleet Supply',
    image: 'https://images.unsplash.com/photo-1532635042-a6f6ad4745f9?auto=format&fit=crop&w=1600&q=85',
  },
] as const

const testimonials = [
  {
    name: 'Daniel A.',
    role: 'Auto Reseller',
    quote:
      'Erolds Auto Limited helped us compare auction options, confirm documents, and ship two vehicles without guesswork.',
  },
  {
    name: 'Mariam K.',
    role: 'Individual Buyer',
    quote:
      'The team explained every step clearly, from inspection support to import documentation. The process felt premium and transparent.',
  },
  {
    name: 'Bright Motors',
    role: 'Dealership Client',
    quote:
      'Their sourcing network gives us stronger options across markets. Fast responses, clean communication, and reliable logistics support.',
  },
]

function App() {
  const [activeVehicle, setActiveVehicle] = useState(0)

  useEffect(() => {
    const slider = window.setInterval(() => {
      setActiveVehicle((current) => (current + 1) % showcaseVehicles.length)
    }, 4500)

    return () => window.clearInterval(slider)
  }, [])

  const showPreviousVehicle = () => {
    setActiveVehicle((current) => (current - 1 + showcaseVehicles.length) % showcaseVehicles.length)
  }

  const showNextVehicle = () => {
    setActiveVehicle((current) => (current + 1) % showcaseVehicles.length)
  }

  return (
    <main className="overflow-hidden bg-[#050505] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="Erolds Auto Limited home">
            <span className="grid size-11 place-items-center rounded bg-[#d9b46f] text-black shadow-lg shadow-[#d9b46f]/20">
              <Car className="size-6" />
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.24em] text-white">Erolds</span>
              <span className="block text-xs uppercase tracking-[0.18em] text-zinc-400">Auto Limited</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-zinc-300 lg:flex">
            <a className="transition hover:text-[#d9b46f]" href="#services">Services</a>
            <a className="transition hover:text-[#d9b46f]" href="#process">Process</a>
            <a className="transition hover:text-[#d9b46f]" href="#markets">Markets</a>
            <a className="transition hover:text-[#d9b46f]" href="#testimonials">Reviews</a>
          </div>
          <a
            href={whatsappUrl}
            className="inline-flex items-center gap-2 rounded bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-[#d9b46f]"
          >
            <MessageCircle className="size-4" />
            WhatsApp
          </a>
        </nav>
      </header>

      <section className="hero-media relative min-h-svh pt-24">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(217,180,111,0.12),transparent_34%,rgba(148,163,184,0.11))]" />
        <div className="relative mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl content-center px-5 py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 border border-[#d9b46f]/40 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d9b46f] backdrop-blur">
              <Globe2 className="size-4" />
              Global Vehicle Sourcing & Logistics
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Source Vehicles From Anywhere in the World With Confidence
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
              Erolds Auto Limited helps you find, purchase, inspect, import, and deliver quality vehicles from global
              markets including the USA, China, UAE, Europe, and beyond.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center gap-2 rounded bg-[#d9b46f] px-6 py-4 font-semibold text-black shadow-2xl shadow-[#d9b46f]/25 transition hover:bg-white"
              >
                <MessageCircle className="size-5" />
                Chat on WhatsApp
              </a>
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 rounded border border-white/20 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur transition hover:border-[#d9b46f]/70 hover:text-[#d9b46f]"
              >
                Get Free Consultation
                <ArrowRight className="size-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-14 grid gap-3 sm:grid-cols-3"
          >
            {['USA Auctions', 'China EVs', 'Europe Luxury'].map((item) => (
              <div key={item} className="border border-white/10 bg-black/40 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Market Desk</p>
                <p className="mt-1 font-semibold text-white">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 px-5 sm:grid-cols-4 lg:px-8">
          {[
            ['Global', 'Sourcing Coverage'],
            ['Auction', 'Consultation'],
            ['End-to-End', 'Import Support'],
            ['Fast', 'WhatsApp Response'],
          ].map(([value, label]) => (
            <div key={label} className="bg-zinc-950 py-8 text-center">
              <p className="text-2xl font-semibold text-[#d9b46f]">{value}</p>
              <p className="mt-1 text-sm text-zinc-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="vehicle-showcase group relative min-h-[380px] overflow-hidden border border-white/10"
        >
          {showcaseVehicles.map((vehicle, index) => (
            <motion.img
              key={vehicle.title}
              src={vehicle.image}
              alt={`${vehicle.title} sourced by Erolds Auto Limited`}
              initial={false}
              animate={{
                opacity: index === activeVehicle ? 1 : 0,
                scale: index === activeVehicle ? 1 : 1.05,
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-0 size-full object-cover"
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
          <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
            <span className="border border-[#d9b46f]/40 bg-black/55 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9b46f] backdrop-blur">
              Global Showcase
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={showPreviousVehicle}
                aria-label="Show previous vehicle"
                className="grid size-10 place-items-center border border-white/15 bg-black/55 text-white backdrop-blur transition hover:border-[#d9b46f] hover:text-[#d9b46f]"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={showNextVehicle}
                aria-label="Show next vehicle"
                className="grid size-10 place-items-center border border-white/15 bg-black/55 text-white backdrop-blur transition hover:border-[#d9b46f] hover:text-[#d9b46f]"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-sm uppercase tracking-[0.22em] text-zinc-300">
              {showcaseVehicles[activeVehicle].market}
            </p>
            <h3 className="mt-2 text-3xl font-semibold text-white">{showcaseVehicles[activeVehicle].title}</h3>
            <div className="mt-5 flex gap-2">
              {showcaseVehicles.map((vehicle, index) => (
                <button
                  key={vehicle.title}
                  type="button"
                  onClick={() => setActiveVehicle(index)}
                  aria-label={`Show ${vehicle.title}`}
                  className={`h-1.5 flex-1 transition ${
                    index === activeVehicle ? 'bg-[#d9b46f]' : 'bg-white/25 hover:bg-white/45'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d9b46f]">About Erolds Auto Limited</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-normal text-white lg:text-5xl">
            Your Trusted Global Automotive Partner
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            We simplify international vehicle sourcing and importation by handling everything from vehicle search and
            auction consultation to logistics and delivery. Whether you're importing a single vehicle or managing bulk
            purchases, our team ensures a transparent and hassle-free experience.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {['Individuals', 'Dealerships', 'Fleet Operators', 'Auto Resellers'].map((audience) => (
              <div key={audience} className="flex items-center gap-3 border border-white/10 bg-white/[0.03] p-4">
                <CheckCircle2 className="size-5 text-[#d9b46f]" />
                <span className="font-medium text-zinc-100">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#0a0a0a] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d9b46f]">Services</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-white lg:text-5xl">
              Everything You Need To Buy and Move Vehicles Globally
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map(([title, Icon, description], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.035, 0.24) }}
                className="group min-h-64 border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-[#d9b46f]/50 hover:bg-white/[0.06]"
              >
                <Icon className="size-8 text-[#d9b46f]" />
                <h3 className="mt-8 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d9b46f]">Why Choose Us</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-normal text-white lg:text-5xl">
            Premium Guidance Without the Import Guesswork
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {reasons.map(([reason, Icon]) => (
              <div key={reason} className="flex items-center gap-4 border border-white/10 bg-zinc-950 p-4">
                <span className="grid size-11 shrink-0 place-items-center bg-[#d9b46f]/10 text-[#d9b46f]">
                  <Icon className="size-5" />
                </span>
                <span className="font-medium text-zinc-100">{reason}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="logistics-showcase min-h-[520px] border border-white/10 p-6">
          <div className="mt-auto max-w-sm border border-white/10 bg-black/60 p-5 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.2em] text-[#d9b46f]">Logistics Desk</p>
            <p className="mt-3 text-2xl font-semibold">Inspection, documentation, freight, and customs support in one flow.</p>
          </div>
        </div>
      </section>

      <section id="process" className="border-y border-white/10 bg-zinc-950 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d9b46f]">How It Works</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-white lg:text-5xl">
                A Clear Path From Requirement To Destination
              </h2>
            </div>
            <a href={whatsappUrl} className="inline-flex items-center gap-2 font-semibold text-[#d9b46f]">
              Start on WhatsApp
              <ChevronRight className="size-5" />
            </a>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="relative border border-white/10 bg-black/30 p-6">
                <span className="text-sm font-semibold text-[#d9b46f]">0{index + 1}</span>
                <h3 className="mt-6 text-xl font-semibold text-white">{step}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  We keep communication direct, costs visible, and each milestone documented before moving forward.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="markets" className="mx-auto grid max-w-7xl gap-8 px-5 py-24 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d9b46f]">Global Markets</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-normal text-white lg:text-5xl">
            Connected To the World's Automotive Hubs
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {markets.map((market) => (
              <div key={market} className="flex items-center gap-3 border border-white/10 bg-white/[0.03] p-4">
                <MapPin className="size-5 text-[#d9b46f]" />
                <span className="font-medium">{market}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="map-grid relative min-h-[420px] overflow-hidden border border-white/10 bg-zinc-950">
          <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-[#d9b46f]/70 to-transparent" />
          <div className="absolute left-[18%] top-[32%] size-4 rounded-full border-2 border-[#d9b46f] bg-black shadow-[0_0_40px_rgba(217,180,111,0.55)]" />
          <div className="absolute left-[50%] top-[30%] size-4 rounded-full border-2 border-[#d9b46f] bg-black shadow-[0_0_40px_rgba(217,180,111,0.55)]" />
          <div className="absolute left-[66%] top-[42%] size-4 rounded-full border-2 border-[#d9b46f] bg-black shadow-[0_0_40px_rgba(217,180,111,0.55)]" />
          <div className="absolute left-[77%] top-[56%] size-4 rounded-full border-2 border-[#d9b46f] bg-black shadow-[0_0_40px_rgba(217,180,111,0.55)]" />
          <div className="absolute bottom-6 left-6 right-6 border border-white/10 bg-black/60 p-5 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Coverage</p>
            <p className="mt-2 text-2xl font-semibold">USA, China, UAE, Canada, Europe, and additional global sourcing corridors.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d9b46f]">Vehicle Categories</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-white lg:text-5xl">
                From Luxury Imports To Work-Ready Commercial Units
              </h2>
            </div>
            <div className="electric-showcase min-h-72 border border-white/10" />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(([title, Icon, description]) => (
              <article key={title} className="border border-white/10 bg-white/[0.035] p-6">
                <Icon className="size-7 text-[#d9b46f]" />
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d9b46f]">Testimonials</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-normal text-white lg:text-5xl">
            Professional Success Stories From Global Buyers
          </h2>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="border border-white/10 bg-zinc-950 p-6">
              <div className="flex gap-1 text-[#d9b46f]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-5 fill-current" />
                ))}
              </div>
              <p className="mt-6 leading-7 text-zinc-300">"{testimonial.quote}"</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-zinc-500">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="consultation" className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl border border-[#d9b46f]/30 bg-[#d9b46f] p-8 text-black sm:p-12 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-semibold tracking-normal lg:text-5xl">Ready To Import Your Next Vehicle?</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-black/75">
                Let Erolds Auto Limited help you source, purchase, and deliver quality vehicles from anywhere in the world.
              </p>
              <p className="mt-5 inline-flex max-w-2xl items-start gap-3 text-sm font-semibold text-black/80">
                <MapPin className="mt-0.5 size-5 shrink-0" />
                {officeAddress}
              </p>
            </div>
            <a
              href={whatsappUrl}
              className="inline-flex items-center justify-center gap-2 rounded bg-black px-6 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              <MessageCircle className="size-5" />
              Contact Us On WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-semibold">Erolds Auto Limited</p>
            <p className="mt-2 text-sm text-zinc-500">Global Vehicle Sourcing & Logistics</p>
            <a href={whatsappUrl} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#d9b46f]">
              <MessageCircle className="size-4" />
              +2348057020989
            </a>
            <p className="mt-3 flex max-w-sm items-start gap-2 text-sm leading-6 text-zinc-500">
              <MapPin className="mt-1 size-4 shrink-0 text-[#d9b46f]" />
              {officeAddress}
            </p>
          </div>
          
          <p className="text-sm text-zinc-600">Copyright 2026 Erolds Auto Limited. All rights reserved.</p>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        aria-label="Chat with Erolds Auto Limited on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/40 transition hover:scale-105"
      >
        <MessageCircle className="size-7" />
      </a>
    </main>
  )
}

export default App
