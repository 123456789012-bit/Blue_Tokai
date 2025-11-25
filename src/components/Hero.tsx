import { Coffee } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 px-6">
      <div className="absolute top-10 left-10 opacity-5">
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-[#0E4B5A]">
          <path
            d="M100 20 L120 60 L140 40 L150 80 L130 100 L150 120 L140 160 L120 140 L100 180 L80 140 L60 160 L50 120 L70 100 L50 80 L60 40 L80 60 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="absolute bottom-10 right-10 opacity-5">
        <svg width="150" height="150" viewBox="0 0 150 150" className="text-[#7C8A6E]">
          <circle cx="75" cy="75" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="75" cy="75" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="75" cy="75" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center mb-6">
          <Coffee className="w-12 h-12 text-[#0E4B5A]" strokeWidth={1.5} />
        </div>

        <h1 className="text-5xl md:text-7xl font-light text-[#0E4B5A] mb-4 tracking-tight">
          Blue Tokai Coffee
        </h1>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C27A50] to-transparent mx-auto mb-6"></div>

        <p className="text-2xl md:text-3xl font-light text-[#4A2C1A] mb-4">
          Discover Where Your Brew Begins
        </p>

        <p className="text-base md:text-lg text-[#4A2C1A]/70 max-w-2xl mx-auto leading-relaxed">
          Journey through the lush estates of India where we source our finest beans,
          each with its own unique story and character.
        </p>
      </div>
    </section>
  );
}
