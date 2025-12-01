// src/App.jsx

import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CountryPage from './pages/CountryPage'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            The Spread of the LDS Church in Asia
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Explore the history and growth of the Church across Asian countries
          </p>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/countries/:countryId" element={<CountryPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
