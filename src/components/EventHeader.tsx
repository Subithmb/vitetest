import React from 'react'

const EventHeader = () => {
  return (
    <div className="flex items-center justify-between mb-4 text-white">
      <h1 className="text-2xl md:text-3xl font-bold">
        <span className="text-white">Event Name</span> <span className="text-gray-400">(Venue Here)</span>
      </h1>
    </div>
  )
}

export default EventHeader