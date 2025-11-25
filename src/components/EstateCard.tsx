import { ArrowRight, Mountain, MapPin, Droplet } from 'lucide-react';
import { Estate } from '../types/estate';

interface EstateCardProps {
  estate: Estate;
}

export default function EstateCard({ estate }: EstateCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#0E4B5A]/10 transition-all duration-500 animate-fadeIn">
      <div className="relative h-48 bg-gradient-to-br from-[#7C8A6E]/20 to-[#0E4B5A]/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-[#0E4B5A] opacity-20">
            <circle cx="60" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
            <ellipse cx="60" cy="50" rx="12" ry="6" fill="none" stroke="currentColor" strokeWidth="1" />
            <path
              d="M 48 56 Q 48 70, 60 80 Q 72 70, 72 56"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path d="M 45 62 L 35 85 Q 35 90, 40 90 L 80 90 Q 85 90, 85 85 L 75 62" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="40" y1="75" x2="80" y2="75" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          </svg>
        </div>

        <div className="absolute top-4 right-4">
          <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs text-[#0E4B5A] font-medium">
            {estate.region}
          </div>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-light text-[#0E4B5A] mb-2">{estate.name}</h3>

        <div className="flex items-center gap-2 text-sm text-[#4A2C1A]/70 mb-6">
          <MapPin className="w-4 h-4" />
          <span>{estate.location}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#F5EFE7] rounded-lg p-4">
            <div className="flex items-center gap-2 text-[#C27A50] mb-1">
              <Mountain className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wide">Altitude</span>
            </div>
            <p className="text-sm text-[#4A2C1A] font-medium">{estate.altitude}</p>
          </div>

          <div className="bg-[#F5EFE7] rounded-lg p-4">
            <div className="flex items-center gap-2 text-[#C27A50] mb-1">
              <Droplet className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wide">Process</span>
            </div>
            <p className="text-sm text-[#4A2C1A] font-medium">{estate.processing}</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wide text-[#C27A50] mb-3">Flavor Notes</h4>
          <div className="flex flex-wrap gap-2">
            {estate.flavorNotes.map((note) => (
              <span
                key={note}
                className="px-3 py-1 bg-gradient-to-r from-[#0E4B5A]/5 to-[#7C8A6E]/5 text-[#4A2C1A] text-sm rounded-full border border-[#0E4B5A]/10"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6 pb-6 border-b border-[#0E4B5A]/10">
          <h4 className="text-xs uppercase tracking-wide text-[#C27A50] mb-3">Signature Brews</h4>
          <ul className="space-y-2">
            {estate.signatureBrews.map((brew) => (
              <li key={brew} className="flex items-center gap-2 text-sm text-[#4A2C1A]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C27A50]"></div>
                {brew}
              </li>
            ))}
          </ul>
        </div>

        <button className="w-full bg-gradient-to-r from-[#0E4B5A] to-[#0E4B5A]/90 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:from-[#0E4B5A]/90 hover:to-[#0E4B5A] transition-all duration-300 group">
          <span className="font-light">Explore this Estate</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}
