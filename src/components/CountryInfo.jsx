// src/components/CountryInfo.jsx

import { useNavigate } from 'react-router-dom'

function CountryInfo({ country }) {
  const navigate = useNavigate()

  if (!country) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 h-full flex flex-col justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-3">
            Select a Location
          </h2>
          <p className="text-base text-slate-600 mb-4 leading-relaxed">
            Select a location from the map to learn more about the history of
            the LDS Church in that country.
          </p>
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm font-medium text-slate-700 mb-3">
              Available countries:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Japan (日本)', 'Korea (韓国)', 'Taiwan (台湾)', 'Hong Kong (香港)'].map(
                (item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          {country.name}
          {country.label && (
            <span className="text-xl font-normal text-slate-500 ml-2">
              ({country.label})
            </span>
          )}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
      </div>
      <p className="text-base text-slate-700 mb-8 leading-relaxed flex-grow">
        {country.shortDescription}
      </p>
      <button
        onClick={() => navigate(`/countries/${country.id}`)}
        className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        View full history for {country.name} →
      </button>
    </div>
  )
}

export default CountryInfo

