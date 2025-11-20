import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, ShoppingCart, Heart, User, MessageCircle } from 'lucide-react'
import { useRef } from 'react'

export default function Hero({ onSearch }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section ref={ref} className="relative h-[80vh] md:h-[90vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.coverr.co/videos/coverr-mountain-lake-views-4455/1080p.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Scenic outdoor landscapes video background"
      />
      <motion.div style={{ y }} className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        <header className="flex items-center justify-between py-4">
          <div className="text-white font-bold text-xl tracking-wide">EcoTrail Gear</div>
          <div className="flex items-center gap-4 text-white">
            <button aria-label="Wishlist" className="relative p-2 rounded-full hover:bg-white/10"><Heart size={20} /></button>
            <button aria-label="Customer service chat" className="relative p-2 rounded-full hover:bg-white/10"><MessageCircle size={20} /></button>
            <button aria-label="Account" className="relative p-2 rounded-full hover:bg-white/10"><User size={20} /></button>
            <button aria-label="Cart" className="relative p-2 rounded-full hover:bg-white/10"><ShoppingCart size={20} /><span className="sr-only">Cart</span><span aria-hidden className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[10px] font-semibold rounded-full px-1.5">2</span></button>
          </div>
        </header>

        <div className="flex-1 flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Premium sustainable gear for every trail</h1>
            <p className="mt-4 text-lg md:text-xl text-white/85">From carbon‑neutral camping to recycled hiking essentials and renewable energy accessories.</p>

            <div className="mt-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={20} />
                <input
                  type="search"
                  aria-label="Search products"
                  placeholder="Search products, categories, articles, trails…"
                  className="w-full md:w-[560px] pl-12 pr-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/70 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  onChange={(e)=>onSearch?.(e.target.value)}
                />
              </div>
              <p className="mt-2 text-white/70 text-sm">Try: ultralight tent, recycled fleece, solar charger</p>
            </div>
          </div>
        </div>

        <div className="pb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {title:'Carbon‑Neutral Camping Equipment', color:'from-emerald-500 to-emerald-700'},
            {title:'Recycled Material Hiking Gear', color:'from-sky-500 to-sky-700'},
            {title:'Renewable Energy Accessories', color:'from-amber-500 to-amber-700'},
          ].map((c, i)=> (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${c.color} p-6 text-white`}
            >
              <div className="absolute -right-16 -bottom-16 w-52 h-52 bg-white/20 rounded-full blur-2xl" />
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-white/85">Explore best‑sellers and new arrivals</p>
              <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold group-hover:underline">Shop now</button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute left-4 bottom-4 flex items-center gap-2 text-white/80">
        <img src="https://images.unsplash.com/photo-1611106385852-7c3350224a09?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCJUUyJTgwJTkxQ29ycCUyMGNlcnRpZmllZHxlbnwwfDB8fHwxNzYzNjQ3MjYwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="h-6 bg-white rounded" alt="B‑Corp certified" />
        <img src="https://images.unsplash.com/photo-1640386355103-83ebf7c6c83e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwxJTI1JTIwZm9yJTIwdGhlJTIwUGxhbmV0fGVufDB8MHx8fDE3NjM2NDcyNjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="h-6 bg-white rounded" alt="1% for the Planet" />
        <img src="https://images.unsplash.com/photo-1662542997180-ffaaeede39f3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGltYXRlJTIwTmV1dHJhbHxlbnwwfDB8fHwxNzYzNjQ3MjYyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="h-6 bg-white rounded" alt="Climate Neutral" />
      </div>
    </section>
  )
}
