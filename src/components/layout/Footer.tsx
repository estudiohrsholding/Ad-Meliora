import Link from 'next/link';
import propertyData from '@/data/properties.json';

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Ad Meliora Real Estate
            </h3>
            <p className="text-gray-500">
              Long-term rentals, short-term rentals and sales on Costa Blanca. Reliable service—contact us!
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/properties" className="hover:text-purple-400 transition-colors">Properties</Link></li>
              <li><Link href="/about" className="hover:text-purple-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="text-gray-400">Theo: {propertyData.client_details.contact.theo}</div>
              <div className="text-gray-400">Marco: {propertyData.client_details.contact.marco}</div>
              <div className="text-gray-400">Costa Blanca, Spain</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 text-center text-gray-500">
          <p>© 2024 Ad Meliora Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
