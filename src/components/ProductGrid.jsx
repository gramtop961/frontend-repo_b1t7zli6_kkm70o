import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

function ProductCard({ item }){
  return (
    <div className="group bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={item.images?.[0]} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {item.images?.[1] && (
          <img src={item.images?.[1]} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
        <div className="absolute top-2 left-2 bg-emerald-600 text-white text-xs font-semibold px-2 py-1 rounded">
          {item.eco_badge || 'Sustainable'}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 line-clamp-2">{item.title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }, (_, i)=> (
              <Star key={i} size={16} className={i < Math.round(item.rating || 0) ? 'fill-amber-400 text-amber-400' : ''} />
            ))}
            <span className="text-xs text-slate-500 ml-1">({item.review_count || 0})</span>
          </div>
          <div className="text-right">
            {item.sale_price ? (
              <>
                <div className="text-emerald-700 font-bold">${item.sale_price.toFixed(2)}</div>
                <div className="text-slate-400 line-through text-sm">${item.price.toFixed(2)}</div>
              </>
            ) : (
              <div className="text-slate-900 font-bold">${item.price.toFixed(2)}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductGrid({ query }){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const base = import.meta.env.VITE_BACKEND_URL || ''
    setLoading(true)
    const url = new URL(`${base}/api/products`)
    if (query) url.searchParams.set('q', query)
    url.searchParams.set('page_size', '9')
    fetch(url.toString()).then(r=>r.json()).then(data=>{
      setItems(data.items || [])
    }).catch(()=>{
      setItems([])
    }).finally(()=> setLoading(false))
  },[query])

  if (loading) return <div className="text-white/80 text-center py-10">Loading products…</div>

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-white">Featured Gear</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => <ProductCard key={item.id || item.title} item={item} />)}
      </div>
    </section>
  )
}
