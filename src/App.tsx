
import { useState } from 'react';
import './app.css'; 
import Header from './components/header';
import Sidebar from './components/sideBar';
import EventTable from './components/table';
import Events from './components/events';

function App() {
  const [selectedMenu, setSelectedMenu] = useState('New Requests');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const routes = {
    'New Requests': EventTable,
    'Events': Events,
  };

  const SelectedComponent = routes[selectedMenu] || null;

  return (
  
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col">
<Header onMenuSelect={setSelectedMenu} onMenuToggle={() => setIsMobileSidebarOpen(true)} /> {/* You can trigger sidebar here */}

<Sidebar
  isMobile={true}
  isOpen={isMobileSidebarOpen}
  onClose={() => setIsMobileSidebarOpen(false)}
  onMenuSelect={(menu:any) => {
    setSelectedMenu(menu);
    setIsMobileSidebarOpen(false);
  }}
/>

<div className="flex flex-1 relative">
  <div className="hidden md:block">
    <Sidebar
      onMenuSelect={setSelectedMenu}
    />
  </div>

  <div className="flex-1 md:pl-2 overflow-x-auto w-full">
    {SelectedComponent ? <SelectedComponent /> : <div className="text-white">Select a menu item</div>}
  </div>
</div>
  <div className="absolute top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 
                  w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-50">
  </div>
  <div className="absolute top-2/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 
                  w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-50">
  </div>
</div>
    
    )
}

export default App
