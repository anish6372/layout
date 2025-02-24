import React, { useState } from 'react';
import { Menu } from "lucide-react";
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import MainContent from './components/MainContent';

const Demo = () => {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const toggleLeftSidebar = () => setIsLeftSidebarOpen(!isLeftSidebarOpen);
  const toggleRightSidebar = () => setIsRightSidebarOpen(!isRightSidebarOpen);

  return (
    <div className="flex h-screen w-full bg-gray-100">
    
      <LeftSidebar isOpen={isLeftSidebarOpen} toggleSidebar={toggleLeftSidebar} />
      <MainContent toggleLeftSidebar={toggleLeftSidebar} toggleRightSidebar={toggleRightSidebar} />
      <button className="md:hidden" onClick={toggleRightSidebar}>
        <Menu size={24} />
      </button>
      <RightSidebar isOpen={isRightSidebarOpen} toggleSidebar={toggleRightSidebar} />
    </div>
  );
};

export default Demo;
