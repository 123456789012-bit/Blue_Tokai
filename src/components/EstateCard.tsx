import { Mountain, MapPin, Droplet } from 'lucide-react';
import { Estate } from '../types/estate';

interface EstateCardProps {
  estate: Estate;
}

export default function EstateCard({ estate }: EstateCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#0E4B5A]/5 transform transition-all duration-500 animate-fadeIn">
      {/* Header with gradient */}
      <div className="relative bg-gradient-to-br from-[#0E4B5A] to-[#0E4B5A]/80 p-8 text-white overflow-hidden">
        {/* Decorative coffee cup */}
        <div className="absolute top-4 right-4 opacity-10">
          <svg width="100" height="100" viewBox="0 0 120 120" className="text-white">
            <circle cx="60" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <ellipse cx="60" cy="50" rx="12" ry="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M 48 56 Q 48 70, 60 80 Q 72 70, 72 56" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M 45 62 L 35 85 Q 35 90, 40 90 L 80 90 Q 85 90, 85 85 L 75 62" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        <h3 
          className="text-4xl font-light mb-2 relative z-10" 
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          {estate.name}
        </h3>
        <p 
          className="text-[#F5EFE7]/90 text-base flex items-center gap-2 relative z-10" 
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <MapPin className="w-4 h-4" />
          {estate.location}
        </p>
        
        <div className="absolute top-4 left-4">
          <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
            {estate.region}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-6">
        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-[#F5EFE7] to-[#C27A50]/10 rounded-xl p-4 border border-[#C27A50]/10">
            <div className="flex items-center gap-2 text-[#C27A50] mb-2">
              <Mountain className="w-4 h-4" />
              <span 
                className="text-xs uppercase tracking-wider font-medium" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Altitude
              </span>
            </div>
            <p 
              className="text-base text-[#4A2C1A] font-medium" 
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {estate.altitude}
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#F5EFE7] to-[#7C3A6E]/10 rounded-xl p-4 border border-[#7C3A6E]/10">
            <div className="flex items-center gap-2 text-[#7C3A6E] mb-2">
              <Droplet className="w-4 h-4" />
              <span 
                className="text-xs uppercase tracking-wider font-medium" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Process
              </span>
            </div>
            <p 
              className="text-base text-[#4A2C1A] font-medium" 
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {estate.processing}
            </p>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#C27A50]/30 to-transparent"></div>

        {/* Flavor Notes */}
        <div>
          <h4 
            className="text-sm text-[#C27A50] mb-3 uppercase tracking-wider font-semibold" 
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Flavor Profile
          </h4>
          <div className="flex flex-wrap gap-2">
            {estate.flavorNotes.map((note) => (
              <span
                key={note}
                className="px-4 py-2 bg-gradient-to-r from-[#C27A50]/10 to-[#7C3A6E]/10 text-[#4A2C1A] rounded-full text-sm border border-[#C27A50]/20 font-medium"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#C27A50]/30 to-transparent"></div>

        {/* Signature Brews */}
        <div>
          <h4 
            className="text-sm text-[#C27A50] mb-3 uppercase tracking-wider font-semibold" 
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Signature Brews
          </h4>
          <ul className="space-y-2">
            {estate.signatureBrews.map((brew) => (
              <li 
                key={brew} 
                className="flex items-center gap-3 text-[#4A2C1A]" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <div className="w-2 h-2 rounded-full bg-[#C27A50]"></div>
                <span className="text-base">{brew}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}