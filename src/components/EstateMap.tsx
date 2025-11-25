import { useState } from 'react';
import { Estate } from '../types/estate';
import { estates } from '../data/estates';
import EstateCard from './EstateCard';
import IndiaMap from './IndiaMap';

interface EstateMapProps {
  selectedEstate: Estate | null;
  onEstateSelect: (estate: Estate | null) => void;
}

export default function EstateMap({ selectedEstate, onEstateSelect }: EstateMapProps) {
  const [hoveredEstate, setHoveredEstate] = useState<Estate | null>(null);

  return (
    <section id="estate-map" className="py-20 px-6 bg-gradient-to-b from-white to-[#F5EFE7]">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-5xl md:text-6xl font-light text-[#0E4B5A] text-center mb-4" 
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Our Estate Collection
        </h2>
        <p 
          className="text-center text-[#4A2C1A]/70 mb-16 max-w-2xl mx-auto text-lg" 
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Each pin represents a carefully selected estate where our coffee journey begins
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-[#0E4B5A]/5">
              <IndiaMap
                estates={estates}
                hoveredEstate={hoveredEstate}
                selectedEstate={selectedEstate}
                onEstateHover={setHoveredEstate}
                onEstateClick={onEstateSelect}
              />
            </div>

            <div className="mt-6 flex justify-center">
              <div 
                className="inline-flex items-center gap-6 px-6 py-3 bg-white/90 rounded-full border border-[#0E4B5A]/10 shadow-md backdrop-blur-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#C27A50]"></div>
                  <span className="text-sm text-[#4A2C1A]">Estate Location</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0E4B5A]"></div>
                  <span className="text-sm text-[#4A2C1A]">Selected</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            {(selectedEstate || hoveredEstate) ? (
              <EstateCard estate={selectedEstate || hoveredEstate!} />
            ) : (
              <div className="bg-gradient-to-br from-[#7C3A6E]/5 via-[#F5EFE7] to-[#C27A50]/5 rounded-3xl p-12 border border-[#0E4B5A]/10 text-center shadow-lg">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#C27A50]/20 flex items-center justify-center">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[#C27A50]"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p 
                  className="text-2xl font-light text-[#4A2C1A] mb-3" 
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Select an Estate
                </p>
                <p 
                  className="text-base text-[#4A2C1A]/60" 
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Hover or tap on a pin to explore our coffee estates
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}