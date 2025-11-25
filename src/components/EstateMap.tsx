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
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-[#0E4B5A] text-center mb-4">
          Our Estate Collection
        </h2>
        <p className="text-center text-[#4A2C1A]/70 mb-16 max-w-2xl mx-auto">
          Each pin represents a carefully selected estate where our coffee journey begins
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#0E4B5A]/10">
              <IndiaMap
                estates={estates}
                hoveredEstate={hoveredEstate}
                selectedEstate={selectedEstate}
                onEstateHover={setHoveredEstate}
                onEstateClick={onEstateSelect}
              />
            </div>

            <div className="mt-6 flex justify-center">
              <div className="inline-flex items-center gap-6 px-6 py-3 bg-white/80 rounded-full border border-[#0E4B5A]/10">
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
              <div className="bg-gradient-to-br from-[#0E4B5A]/5 to-[#7C8A6E]/5 rounded-2xl p-12 border border-[#0E4B5A]/10 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C27A50]/20 flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
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
                <p className="text-lg font-light text-[#4A2C1A] mb-2">
                  Select an Estate
                </p>
                <p className="text-sm text-[#4A2C1A]/60">
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
