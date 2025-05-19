import React, { useState, useEffect } from 'react';

export default function Sidebar({ isMobile = false, isOpen = true, onClose, onMenuSelect }) {
  const [expandedSubmenus, setExpandedSubmenus] = useState({
    'Events': true,
    'Users': true
  });
  
  
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleMenuClick = (menu) => {
    setExpandedSubmenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const handleSubMenuClick = (subMenu) => {
    if (onMenuSelect) {
      onMenuSelect(subMenu); 
    }
    if (isMobile && onClose) {
      onClose(); 
    }
  };

  
  if (isMobile && !isOpen) return null;

  
  const sidebarHeight = isMobile ? "h-screen" : "h-[calc(100vh-64px)]";
  
  return (
    <>
      
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      <div className={`
        bg-black bg-opacity-90 border border-pink-700 rounded-xl 
        ${isMobile ? 'fixed top-0 left-0 h-full z-50 rounded-r-xl rounded-l-none w-64' : `${sidebarHeight} w-56`}
        flex flex-col justify-between py-3 px-2 relative overflow-hidden
      `}>
        
        <div className="absolute inset-0 border-2 border-pink-600 rounded-xl opacity-20 pointer-events-none"></div>
        
       
        {isMobile && (
          <div className="flex justify-end mb-2">
            <button 
              onClick={onClose}
              className="text-pink-500 hover:text-pink-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        
       
        <div className="flex flex-col space-y-1 overflow-y-auto flex-grow">
          <div className="mb-1">
            <button 
              onClick={() => handleMenuClick('Events')}
              className="flex items-center justify-between w-full text-pink-500 rounded-md p-3 bg-opacity-20 bg-pink-900"
            >
              <span className="font-medium">Events</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transition-transform ${expandedSubmenus['Events'] ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
           
            {expandedSubmenus['Events'] && (
              <div className="ml-4 mt-1 border-l border-gray-700 pl-4 space-y-2">
                <button 
                  onClick={() => handleSubMenuClick('New Requests')}
                  className="text-white text-sm py-1 hover:bg-pink-900 hover:bg-opacity-30 rounded-md px-2 w-full text-left"
                >
                  <span>New Requests</span>
                </button>
                <button 
                  onClick={() => handleSubMenuClick('Estimate')}
                  className="text-white text-sm py-1 flex justify-between items-center px-2 hover:bg-pink-900 hover:bg-opacity-30 rounded-md w-full text-left"
                >
                  <span>Estimate</span>
                  <span className="bg-white text-purple-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">1</span>
                </button>
                <button 
                  onClick={() => handleSubMenuClick('Events')}
                  className="text-white text-sm py-1 px-2 hover:bg-pink-900 hover:bg-opacity-30 rounded-md w-full text-left"
                >
                  <span>Events</span>
                </button>
                <div className="text-white text-sm py-1 px-2">
                  <span>Partial Requests</span>
                </div>
              </div>
            )}
          </div>

       
          <button className="flex items-center justify-between w-full text-white rounded-md p-2 hover:bg-pink-900 hover:bg-opacity-20">
            <span>Positions</span>
          </button>

         
          <button className="flex items-center justify-between w-full text-white rounded-md p-2 hover:bg-pink-900 hover:bg-opacity-20">
            <span>Contractors</span>
          </button>

         
          <div className="mb-1">
            <button 
              onClick={() => handleMenuClick('Users')}
              className="flex items-center justify-between w-full text-white rounded-md p-2 hover:bg-pink-900 hover:bg-opacity-20"
            >
              <span>Users</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transition-transform ${expandedSubmenus['Users'] ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
          
            {expandedSubmenus['Users'] && (
              <div className="ml-4 mt-1 border-l border-gray-700 pl-4 space-y-2">
                <div className="text-white text-sm py-1 px-2">
                  <span>Admins</span>
                </div>
                <div className="text-white text-sm py-1 px-2">
                  <span>Clients</span>
                </div>
                <div className="text-white text-sm py-1 px-2">
                  <span>Coordinators</span>
                </div>
              </div>
            )}
          </div>

         
          <button className="flex items-center justify-between w-full text-white rounded-md p-2 hover:bg-pink-900 hover:bg-opacity-20">
            <span>Profile</span>
          </button>
        </div>

        <div className="mt-2">
          <button className="flex items-center justify-center gap-2 text-white bg-black w-full rounded-md p-3 hover:bg-gray-900 transition-all border border-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}