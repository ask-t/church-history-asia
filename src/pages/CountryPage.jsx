// src/pages/CountryPage.jsx

import { useParams, useNavigate } from 'react-router-dom'
import { countries } from '../data/countries'

function CountryPage() {
  const { countryId } = useParams()
  const navigate = useNavigate()

  const country = countries.find((c) => c.id === countryId)

  if (!country) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-2xl font-semibold text-slate-800 mb-4">
            Country Not Found
          </h1>
          <p className="text-base text-slate-600 mb-6">
            The country you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Back to map
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-2xl font-semibold text-slate-800 mb-2">
          {country.name}
          {country.label && (
            <span className="text-lg font-normal text-slate-500 ml-2">
              ({country.label})
            </span>
          )}
        </h1>
        <p className="text-base text-slate-600 mb-6 leading-relaxed">
          This is where the full history of the LDS Church in {country.name}{' '}
          will go.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Back to map
        </button>
      </div>
    </div>
  )
}

export default CountryPage

