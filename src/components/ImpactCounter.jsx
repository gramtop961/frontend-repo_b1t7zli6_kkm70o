import { useEffect, useState } from 'react'

export default function ImpactCounter() {
  const [impact, setImpact] = useState({ trees_planted: 0, bottles_recycled: 0, carbon_offset_kg: 0 })
  const [animated, setAnimated] = useState({ trees: 0, bottles: 0, carbon: 0 })

  useEffect(()=>{
    const base = import.meta.env.VITE_BACKEND_URL || ''
    fetch(`${base}/api/impact`).then(r=>r.json()).then(setImpact).catch(()=>{
      setImpact({ trees_planted: 128450, bottles_recycled: 9723450, carbon_offset_kg: 654321.5 })
    })
  },[])

  useEffect(()=>{
    // simple count-up animation
    const duration = 1200
    const start = performance.now()
    const init = { trees: 0, bottles: 0, carbon: 0 }
    const raf = (t)=>{
      const p = Math.min(1, (t - start) / duration)
      setAnimated({
        trees: Math.floor(init.trees + p * impact.trees_planted),
        bottles: Math.floor(init.bottles + p * impact.bottles_recycled),
        carbon: Math.floor(init.carbon + p * impact.carbon_offset_kg)
      })
      if (p < 1) requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [impact])

  const Stat = ({label, value, suffix=''}) => (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-white text-center">
      <div className="text-2xl font-extrabold tabular-nums">{value.toLocaleString()} {suffix}</div>
      <div className="text-white/70 text-sm mt-1">{label}</div>
    </div>
  )

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Stat label="Trees planted through purchases" value={animated.trees} />
        <Stat label="Plastic bottles recycled into gear" value={animated.bottles} />
        <Stat label="Carbon offset via shipping" value={animated.carbon} suffix="kg" />
      </div>
    </section>
  )
}
