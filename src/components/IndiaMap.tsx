import { Estate } from '../types/estate';
import indiaMapImage from './map.jpg';

interface IndiaMapProps {
  estates: Estate[];
  hoveredEstate: Estate | null;
  selectedEstate: Estate | null;
  onEstateHover: (estate: Estate | null) => void;
  onEstateClick: (estate: Estate) => void;
}

export default function IndiaMap({
  estates,
  hoveredEstate,
  selectedEstate,
  onEstateHover,
  onEstateClick,
}: IndiaMapProps) {
  return (
    <div className="relative w-full aspect-[2/3]">
      {/* India Map Background Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={indiaMapImage}
          alt="India Map"
          className="w-full h-full object-contain opacity-90"
          style={{ filter: 'drop-shadow(0 2px 8px rgba(14, 75, 90, 0.1))' }}
        />
      </div>

      {/* Estate Markers Overlay */}
      <svg
        viewBox="0 0 800 1000"
        className="relative w-full h-full"
      >
        <g>
          {estates.map((estate) => {
            const isHovered = hoveredEstate?.id === estate.id;
            const isSelected = selectedEstate?.id === estate.id;
            const isActive = isHovered || isSelected;

            return (
              <g key={estate.id}>
                {isActive && (
                  <circle
                    cx={estate.coordinates.x}
                    cy={estate.coordinates.y}
                    r="20"
                    fill="none"
                    stroke={isSelected ? '#0E4B5A' : '#C27A50'}
                    strokeWidth="2"
                    opacity="0.3"
                    className="animate-ping"
                  />
                )}

                <circle
                  cx={estate.coordinates.x}
                  cy={estate.coordinates.y}
                  r={isActive ? '12' : '10'}
                  fill={isSelected ? '#0E4B5A' : '#C27A50'}
                  className="cursor-pointer transition-all duration-300"
                  style={{
                    filter: isActive
                      ? 'drop-shadow(0 2px 6px rgba(0,0,0,0.25))'
                      : 'drop-shadow(0 1px 3px rgba(0,0,0,0.15))',
                  }}
                  onMouseEnter={() => onEstateHover(estate)}
                  onMouseLeave={() => onEstateHover(null)}
                  onClick={() => onEstateClick(estate)}
                />

                <circle
                  cx={estate.coordinates.x}
                  cy={estate.coordinates.y}
                  r="30"
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => onEstateHover(estate)}
                  onMouseLeave={() => onEstateHover(null)}
                  onClick={() => onEstateClick(estate)}
                />
              </g>
            );
          })}
        </g>
      </svg>

      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-5">
          <defs>
            <pattern
              id="coffee-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="#7C8A6E" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#coffee-pattern)" />
        </svg>
      </div>
    </div>
  );
}