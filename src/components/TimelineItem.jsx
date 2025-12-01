// src/components/TimelineItem.jsx

function TimelineItem({ event, isLast }) {
  return (
    <div className="relative flex gap-6 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-blue-200" />
      )}
      
      {/* Year badge */}
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg z-10 relative">
          <span className="text-white font-bold text-sm text-center leading-tight">
            {event.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {event.title}
        </h3>
        <p className="text-base text-slate-700 mb-4 leading-relaxed">
          {event.description}
        </p>
        
        {/* People */}
        {event.people && event.people.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-sm font-semibold text-slate-600 mb-2">Key People:</p>
            <div className="space-y-2">
              {event.people.map((person, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                  <span className="font-semibold text-slate-800 text-sm">
                    {person.name}
                  </span>
                  <span className="text-slate-600 text-sm">
                    — {person.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TimelineItem;

