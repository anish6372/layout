import React from 'react';
import { Bug, UserCheck, Wifi, User, List, UserX } from "lucide-react";

const RightSidebar = ({ isOpen }) => {
  return (
    <aside className={`bg-white w-72 p-4 shadow-lg border-l border-gray-200 ${isOpen ? 'block' : 'hidden'} md:block`}>
      <h2 className="text-lg font-semibold mb-4">Notifications</h2>
      <ul className="space-y-3 text-sm">
        <li className="flex items-center space-x-2 p-2 bg-gray-100 rounded"><Bug size={16} /> <span>You have a bug that needs fixing</span> <span className="text-gray-400">5m ago</span></li>
        <li className="flex items-center space-x-2 p-2"><UserCheck size={16} /> <span>New user registered</span> <span className="text-gray-400">1:23 AM</span></li>
        <li className="flex items-center space-x-2 p-2"><Bug size={16} /> <span>You have a bug that needs fixing</span> <span className="text-gray-400">12:39 AM</span></li>
        <li className="flex items-center space-x-2 p-2"><Wifi size={16} /> <span>Andi Lane subscribed to you</span> <span className="text-gray-400">Yesterday 12:39 AM</span></li>
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-4">Activities</h2>
      <ul className="space-y-3 text-sm">
        <li className="flex items-center space-x-2 p-2"><User size={16} /> <span>Edited the details of Project X</span> <span className="text-gray-400">5m ago</span></li>
        <li className="flex items-center space-x-2 p-2"><List size={16} /> <span>Released a new version</span> <span className="text-gray-400">1:23 AM</span></li>
        <li className="flex items-center space-x-2 p-2"><Bug size={16} /> <span>Submitted a bug</span> <span className="text-gray-400">Yesterday 12:39 AM</span></li>
        <li className="flex items-center space-x-2 p-2"><User size={16} /> <span>Modified A data in Page X</span> <span className="text-gray-400">Last Thursday 3:34 AM</span></li>
        <li className="flex items-center space-x-2 p-2"><UserX size={16} /> <span>Deleted a page in Project X</span> <span className="text-gray-400">Aug 11</span></li>
      </ul>
      <h2 className="text-lg font-semibold mt-6 mb-4">Contacts</h2>
      <ul className="space-y-3 text-sm">
        <li className="flex items-center space-x-2 p-2"><User size={16} className="text-gray-700" /> <span>Natali Craig</span></li>
        <li className="flex items-center space-x-2 p-2"><User size={16} className="text-red-500" /> <span>Drew Cano</span></li>
        <li className="flex items-center space-x-2 p-2"><User size={16} className="text-yellow-500" /> <span>Orlando Diggs</span></li>
      </ul>
    </aside>
  );
};

export default RightSidebar;
