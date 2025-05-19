import React from 'react'

const tabs = [
  'Event Details',
  'Assign Coordinator/Coordinator',
  'Session Management',
  'Generate SOW'
]

const EventTabs = () => {
  return (
    <div className="flex flex-wrap gap-2 text-sm md:text-base border-b border-pink-500 pb-2">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          className="px-4 py-2 rounded-md text-white bg-pink-600 hover:bg-pink-500 transition-colors"
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default EventTabs