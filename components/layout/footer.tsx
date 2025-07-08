import { Heart, Globe, Shield } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl">🏥</div>
              <div>
                <h3 className="text-xl font-bold">Stellar Uzima</h3>
                <p className="text-emerald-200 text-sm">Healthcare • Ubuntu • Innovation</p>
              </div>
            </div>
            <p className="text-emerald-200 mb-4">
              Bridging traditional African healing with modern medicine through blockchain technology.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-emerald-800 rounded-full flex items-center justify-center">
                <span className="text-sm">🐦</span>
              </div>
              <div className="w-8 h-8 bg-emerald-800 rounded-full flex items-center justify-center">
                <span className="text-sm">📘</span>
              </div>
              <div className="w-8 h-8 bg-emerald-800 rounded-full flex items-center justify-center">
                <span className="text-sm">📸</span>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <div className="space-y-2 text-emerald-200">
              <Link href="/telemedicine" className="block hover:text-white transition-colors">
                Telemedicine
              </Link>
              <Link href="/traditional-medicine" className="block hover:text-white transition-colors">
                Traditional Medicine
              </Link>
              <Link href="/medical-records" className="block hover:text-white transition-colors">
                Medical Records
              </Link>
              <Link href="/education" className="block hover:text-white transition-colors">
                Health Education
              </Link>
            </div>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <div className="space-y-2 text-emerald-200">
              <Link href="/community" className="block hover:text-white transition-colors">
                Join Community
              </Link>
              <Link href="/healers" className="block hover:text-white transition-colors">
                Find Healers
              </Link>
              <Link href="/support" className="block hover:text-white transition-colors">
                Get Support
              </Link>
              <Link href="/contribute" className="block hover:text-white transition-colors">
                Contribute
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2 text-emerald-200">
              <Link href="/about" className="block hover:text-white transition-colors">
                About Ubuntu Health
              </Link>
              <Link href="/privacy" className="block hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="block hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-emerald-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 text-emerald-200">
                <Heart className="w-4 h-4" />
                <span className="text-sm">Built with Ubuntu spirit</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-200">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Culturally respectful</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-200">
                <Globe className="w-4 h-4" />
                <span className="text-sm">Offline-first</span>
              </div>
            </div>
            <div className="text-emerald-200 text-sm">
              © 2024 Stellar Uzima. Empowering African healthcare through technology and tradition.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
