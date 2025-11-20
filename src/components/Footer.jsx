export default function Footer(){
  return (
    <footer className="bg-slate-950/70 border-t border-white/10 mt-16 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold text-white mb-3">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li>Camping</li>
            <li>Hiking</li>
            <li>Mountaineering</li>
            <li>Brands</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Learn</h4>
          <ul className="space-y-2 text-sm">
            <li>Trail Academy</li>
            <li>Sustainability Reports</li>
            <li>Care Guides</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">About</h4>
          <ul className="space-y-2 text-sm">
            <li>Our Story</li>
            <li>Certifications</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>Size Guides</li>
            <li>Repair Services</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} EcoTrail Gear. All rights reserved.</p>
          <p>Built with sustainability at the core.</p>
        </div>
      </div>
    </footer>
  )
}
