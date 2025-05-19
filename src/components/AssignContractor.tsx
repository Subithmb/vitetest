import React from 'react'

const rooms = [1, 2, 3, 4, 5]

const AssignContractor = () => {
  return (
    <div className="bg-[#1f1d38] rounded-lg p-4 space-y-3">
      <h2 className="text-xl font-semibold">Assign Contractor</h2>
      {rooms.map(room => (
        <div
          key={room}
          className={`rounded-lg border border-pink-600 p-3 ${room === 1 ? 'bg-pink-600' : 'bg-[#2c294a]'} text-white`}
        >
          <div className="flex justify-between items-center">
            <span className="font-semibold">Meeting Room {room}</span>
            <span className="text-sm">12 Positions</span>
          </div>
          <p className="text-xs mt-1 text-gray-300">
            Start from 12 Jan, 2023 - Ends at 15 Jan, 2023
          </p>
        </div>
      ))}
    </div>
  )
}

export default AssignContractor