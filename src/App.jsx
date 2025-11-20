import { useState } from 'react'
import Hero from './components/Hero'
import ImpactCounter from './components/ImpactCounter'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  const [query, setQuery] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <Hero onSearch={setQuery} />
      <ImpactCounter />
      <ProductGrid query={query} />
      <Footer />
    </div>
  )
}

export default App
