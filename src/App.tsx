import { useState } from 'react';
import Hero from './components/Hero';
import EstateMap from './components/EstateMap';
import { Estate } from './types/estate';

function App() {
  const [selectedEstate, setSelectedEstate] = useState<Estate | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5EFE7] to-white">
      <Hero />
      <EstateMap
        selectedEstate={selectedEstate}
        onEstateSelect={setSelectedEstate}
      />
    </div>
  );
}

export default App;
