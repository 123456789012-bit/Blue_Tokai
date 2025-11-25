import { Estate } from '../types/estate';

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
      <svg
        viewBox="0 0 800 1000"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(14, 75, 90, 0.1))' }}
      >
        <path
          d="M 350 120 L 380 130 L 410 135 L 440 140 L 460 145 L 480 150 L 500 160 L 520 165 L 540 170 L 560 175 L 580 180 L 600 190 L 620 200 L 640 210 L 650 230 L 660 250 L 665 270 L 670 290 L 672 310 L 673 330 L 672 350 L 670 370 L 668 390 L 665 410 L 662 430 L 660 450 L 658 470 L 656 490 L 654 510 L 652 530 L 650 550 L 648 570 L 646 590 L 644 610 L 642 630 L 640 650 L 638 670 L 636 690 L 634 710 L 632 730 L 630 750 L 628 770 L 626 790 L 624 810 L 622 830 L 620 850 L 618 870 L 616 890 L 614 910 L 612 930 L 610 950 L 600 960 L 580 965 L 560 968 L 540 970 L 520 972 L 500 973 L 480 972 L 460 970 L 440 968 L 420 970 L 400 972 L 380 970 L 360 968 L 340 970 L 320 975 L 300 978 L 280 975 L 260 970 L 240 965 L 220 960 L 200 958 L 180 960 L 160 965 L 140 970 L 120 968 L 100 960 L 90 940 L 85 920 L 82 900 L 80 880 L 79 860 L 78 840 L 77 820 L 76 800 L 75 780 L 74 760 L 73 740 L 72 720 L 71 700 L 70 680 L 69 660 L 68 640 L 67 620 L 66 600 L 65 580 L 64 560 L 63 540 L 62 520 L 61 500 L 60 480 L 59 460 L 58 440 L 57 420 L 56 400 L 55 380 L 54 360 L 53 340 L 52 320 L 51 300 L 50 280 L 49 260 L 48 240 L 47 220 L 46 200 L 45 180 L 44 160 L 43 140 L 42 120 L 45 110 L 50 105 L 70 102 L 90 100 L 110 101 L 130 103 L 150 105 L 170 106 L 190 105 L 210 103 L 230 102 L 250 103 L 270 105 L 290 108 L 310 112 L 330 115 L 350 118 Z M 200 980 L 210 990 L 220 995 L 230 998 L 240 1000 L 250 998 L 260 995 L 265 985 L 260 980 L 240 978 L 220 979 L 200 980 Z M 300 990 L 320 995 L 340 998 L 360 1000 L 380 998 L 395 990 L 390 985 L 370 983 L 350 984 L 330 985 L 310 987 Z"
          fill="#F5EFE7"
          stroke="#0E4B5A"
          strokeWidth="2"
          className="transition-all duration-300"
        />

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
