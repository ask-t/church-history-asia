// src/pages/HomePage.jsx

import { useState } from 'react'
import AsiaMap from '../components/AsiaMap'
import CountryInfo from '../components/CountryInfo'
import { countries } from '../data/countries'

function HomePage() {
  const [selectedId, setSelectedId] = useState(null)

  const selectedCountry = countries.find((c) => c.id === selectedId)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-8 lg:gap-10">
          <div className="order-2 lg:order-1">
            <AsiaMap
              countries={countries}
              selectedId={selectedId}
              onSelect={setSelectedId}
            />
          </div>
          <div className="order-1 lg:order-2">
            <CountryInfo country={selectedCountry} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

