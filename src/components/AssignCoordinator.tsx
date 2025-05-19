import React from 'react';

const AssignCoordinator = () => {
  return (
    <div className="bg-[#1f1d38] rounded-lg p-4 flex flex-row items-center gap-4">
      <div className="flex flex-col min-w-[150px]">
        <h2 className="text-xl font-semibold text-white">Assign Coordinator</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Coordinator"
            className="w-full p-2 rounded bg-[#2c294a] text-white placeholder:text-gray-400"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">▼</span>
        </div>
        <p className="text-sm text-pink-400 cursor-pointer mt-1">Add New Coordinator</p>
      </div>

      <div className="flex flex-col flex-1">
        <h2 className="text-xl font-semibold text-white">
          Event Name <span className="text-blue-400">(Venue Here)</span>
        </h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Start: 12-12-2023"
            className="w-1/2 p-2 rounded bg-[#2c294a] text-white"
          />
          <input
            type="text"
            placeholder="Ends: 15-12-2023"
            className="w-1/2 p-2 rounded bg-[#2c294a] text-white"
          />
        </div>
        <input
          type="text"
          placeholder="Venue Address: Some Location 12, Name Here, City, State."
          className="w-full p-2 rounded bg-[#2c294a] text-white mt-2"
        />
      </div>
    </div>
  );
};

export default AssignCoordinator;