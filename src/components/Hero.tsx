export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 opacity-5">
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-[#4A2C1A]">
          <path
            d="M100 20 L120 60 L140 40 L150 80 L130 100 L150 120 L140 160 L120 140 L100 180 L80 140 L60 160 L50 120 L70 100 L50 80 L60 40 L80 60 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="absolute bottom-20 right-10 opacity-5">
        <svg width="150" height="150" viewBox="0 0 150 150" className="text-[#7C3A6E]">
          <circle cx="75" cy="75" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="75" cy="75" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="75" cy="75" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 
            className="text-6xl md:text-8xl font-normal text-[#0E4B5A] mb-4" 
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Blue Tokai
          </h1>
          <div className="w-24 h-0.5 bg-[#C27A50] mx-auto"></div>
        </div>

        {/* Main Heading */}
        <h2 
          className="text-4xl md:text-6xl font-light text-[#4A2C1A] mb-6 leading-tight" 
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Discover Where Your<br />Brew Begins
        </h2>

        {/* Subheading */}
        <p 
          className="text-lg md:text-xl text-[#4A2C1A]/80 mb-12 max-w-2xl mx-auto leading-relaxed" 
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Journey through India's finest coffee estates, where every bean tells a story
          of tradition, terrain, and taste.
        </p>

        {/* CTA Button */}
        <button 
          onClick={() => {
            document.querySelector('#estate-map')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#0E4B5A] text-white rounded-full hover:bg-[#0E4B5A]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <span className="text-base font-medium">Explore Estates</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transition-transform group-hover:translate-y-1"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>

        {/* Decorative Coffee Bean Icons */}
        <div className="mt-16 flex justify-center items-center gap-4 text-[#C27A50]/30">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <ellipse cx="12" cy="12" rx="8" ry="10" />
              <path d="M12 2 Q8 12 12 22" stroke="#F5EFE7" strokeWidth="1.5" fill="none" />
            </svg>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#0E4B5A]/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#0E4B5A]/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}