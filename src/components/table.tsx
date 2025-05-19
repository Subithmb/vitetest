
export default function EventTable() {
  const events = Array(7).fill().map((_, index) => ({
    id: index + 1,
    name: 'Filled Name',
    startDate: 'Jan 12, 2024',
    endDate: 'Jan 14, 2024',
    clientName: 'Muhammad Asad',
    contactInfo: '+1 234 566 7890',
    venue: 'Lorem Ipsum Dolor Sit Amet'
  }));

  return (
    <div className=" bg-black bg-opacity-90 border border-pink-700 rounded-xl 
        flex flex-col justify-between py-3 px-2 relative overflow-hidden">
     
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-white text-2xl font-semibold">Event Requests</h1>
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search here"
              className="pl-10 pr-4 py-2 bg-purple-950 bg-opacity-50 text-white rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

     
      <div className="flex-1 overflow-hidden">
        <div className="overflow-x-auto md:overflow-x-hidden">
          <div className="bg-purple-950 bg-opacity-40 rounded-md overflow-hidden min-w-[800px] md:min-w-0">
           
            <div className="grid grid-cols-6 md:grid-cols-[minmax(150px,1fr)_repeat(5,minmax(100px,1fr))] gap-4 p-3 bg-pink-500 bg-opacity-70 text-white">
              <div className="flex items-center gap-1">
                <span>Event Name</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
              <div>Event Start</div>
              <div className="flex items-center gap-1">
                <span>Event End</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
              <div className="flex items-center gap-1">
                <span>Client Name</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
              <div>Contact Info</div>
              <div>Venue</div>
            </div>

            
            <div className="overflow-y-auto max-h-[65vh]">
              {events.map((event) => (
                <div 
                  key={event.id} 
                  className="grid grid-cols-6 md:grid-cols-[minmax(150px,1fr)_repeat(5,minmax(100px,1fr))] gap-4 p-3 text-white border-b border-purple-800 hover:bg-purple-800 hover:bg-opacity-30"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    {event.name}
                  </div>
                  <div>{event.startDate}</div>
                  <div>{event.endDate}</div>
                  <div>{event.clientName}</div>
                  <div>{event.contactInfo}</div>
                  <div>{event.venue}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     
      <div className="flex justify-center items-center mt-4 text-white gap-2">
        <button className="px-2 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="w-6 h-6 rounded-full flex items-center justify-center bg-pink-500">1</button>
        <button className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-purple-700">2</button>
        <button className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-purple-700">3</button>
        <button className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-purple-700">4</button>
        <button className="px-2 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}