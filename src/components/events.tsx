import React from 'react'
import EventHeader from './EventHeader'
import EventTabs from './EventTabs'
import AssignCoordinator from './AssignCoordinator'
import AssignContractor from './AssignContractor'
import PositionTable from './PositionTable'

const EventPage = () => {
  return (
    <div className="max-h-[90vh] overflow-y-auto  bg-gradient-to-b from-[#0B0B1D] to-[#1B1C3C] text-white p-4 md:p-10">
      <EventHeader />
      <EventTabs />

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <div className="lg:w-1/2 space-y-6">
          <AssignCoordinator />
          <AssignContractor />
        </div>

        <div className="lg:w-1/2 overflow-x-auto">
          <PositionTable />
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button className="bg-pink-600 hover:bg-pink-500 transition-colors text-white py-2 px-6 rounded-lg">
          Save Edits
        </button>
      </div>
    </div>
  )
}

export default EventPage
