// src/components/AsiaMap.jsx

function AsiaMap({ countries, selectedId, onSelect }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 lg:p-6 border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-800 mb-3 lg:mb-4">Interactive Map</h3>
      <div className="relative bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
        <div className="relative" style={{ paddingTop: '65%' }}>
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/asia-map-light.png)',
              backgroundColor: '#fafafa',
            }}
          >
            {countries.map((country) => {
              const isSelected = country.id === selectedId
              return (
                <button
                  key={country.id}
                  onClick={() => onSelect(country.id)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
                  style={{
                    left: `${country.position.x}%`,
                    top: `${country.position.y}%`,
                  }}
                  aria-label={`Select ${country.name}`}
                >
                  {/* Pin marker */}
                  <div className="relative">
                    {/* Shadow */}
                    <div
                      className={`absolute inset-0 rounded-full blur-sm transition-all duration-200 ${
                        isSelected
                          ? 'bg-blue-600 opacity-50 scale-150'
                          : 'bg-blue-500 opacity-30 scale-100 group-hover:opacity-40 group-hover:scale-125'
                      }`}
                      style={{
                        width: '20px',
                        height: '20px',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                    {/* Pin circle */}
                    <div
                      className={`rounded-full border transition-all duration-200 flex items-center justify-center ${
                        isSelected
                          ? 'bg-blue-600 border-blue-700 scale-125 shadow-lg'
                          : 'bg-blue-500 border-blue-600 hover:scale-110 hover:shadow-md'
                      }`}
                      style={{
                        width: isSelected ? '20px' : '16px',
                        height: isSelected ? '20px' : '16px',
                        borderWidth: '3px',
                        boxShadow: isSelected
                          ? '0 4px 12px rgba(37, 99, 235, 0.4)'
                          : '0 2px 6px rgba(37, 99, 235, 0.3)',
                      }}
                    >
                      {/* Inner dot */}
                      <div
                        className="rounded-full bg-white"
                        style={{
                          width: isSelected ? '8px' : '6px',
                          height: isSelected ? '8px' : '6px',
                        }}
                      />
                    </div>
                    {/* Country label on hover */}
                    <div className="absolute left-1/2 top-full mt-3 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                      <div className="bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
                        {country.name}
                        {country.label && (
                          <span className="ml-1.5 text-slate-300">
                            ({country.label})
                          </span>
                        )}
                      </div>
                      {/* Arrow */}
                      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-full">
                        <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-slate-900" />
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-3 text-center">
        Click on a marker to learn more about the LDS Church history
      </p>
    </div>
  )
}

export default AsiaMap

