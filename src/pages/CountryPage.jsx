// src/pages/CountryPage.jsx

import { useParams, useNavigate } from 'react-router-dom'
import { countryHistory } from '../data/countryHistory'
import TimelineItem from '../components/TimelineItem'

function CountryPage() {
  const { countryId } = useParams()
  const navigate = useNavigate()

  const countryData = countryHistory.find((c) => c.id === countryId)

  if (!countryData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
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
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700 font-medium mb-4 flex items-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to map
          </button>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            {countryData.name}
            {countryData.label && (
              <span className="text-2xl font-normal text-slate-500 ml-3">
                ({countryData.label})
              </span>
            )}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Historical Timeline
          </h2>
          <div className="space-y-0">
            {countryData.history.map((event, index) => (
              <TimelineItem
                key={index}
                event={event}
                isLast={index === countryData.history.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryPage
