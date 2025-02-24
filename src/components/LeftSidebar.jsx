import React from 'react';
import { User, Activity, BarChart2, Grid, Package, Zap, Tv, AtSign, Move, Table, FileText, Lock } from "lucide-react";

const LeftSidebar = ({ isOpen }) => {
  return (
    <aside className={`bg-white w-72 p-4 shadow-lg border-r border-gray-200 ${isOpen ? 'block' : 'hidden'} md:block`}>
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-3">
        <li className="flex items-center space-x-2 p-2 bg-gray-200 rounded"><User size={20} /> <span>Default</span></li>
        <li className="flex items-center space-x-2 p-2"><Activity size={20} /> <span>Projects</span></li>
        <li className="flex items-center space-x-2 p-2"><BarChart2 size={20} /> <span>eCommerce</span></li>
        <li className="flex items-center space-x-2 p-2"><Grid size={20} /> <span>Apps</span></li>
      </ul>
      <h3 className="text-gray-500 mt-6 mb-2">User Interface</h3>
      <ul className="space-y-3">
        <li className="flex items-center space-x-2 p-2"><Package size={20} /> <span>Components</span></li>
        <li className="flex items-center space-x-2 p-2"><Zap size={20} /> <span>Elements</span></li>
        <li className="flex items-center space-x-2 p-2"><BarChart2 size={20} /> <span>Charts</span></li>
        <li className="flex items-center space-x-2 p-2"><Tv size={20} /> <span>Widgets</span></li>
        <li className="flex items-center space-x-2 p-2"><AtSign size={20} /> <span>Font Icons</span></li>
        <li className="flex items-center space-x-2 p-2"><Move size={20} /> <span>Drag & Drop</span></li>
      </ul>
      <h3 className="text-gray-500 mt-6 mb-2">Tables and Forms</h3>
      <ul className="space-y-3">
        <li className="flex items-center space-x-2 p-2"><Table size={20} /> <span>Tables</span></li>
        <li className="flex items-center space-x-2 p-2"><FileText size={20} /> <span>DataTables</span></li>
        <li className="flex items-center space-x-2 p-2"><FileText size={20} /> <span>Forms</span></li>
      </ul>
      <h3 className="text-gray-500 mt-6 mb-2">User and Pages</h3>
      <ul className="space-y-3">
        <li className="flex items-center space-x-2 p-2"><User size={20} /> <span>Users</span></li>
        <li className="flex items-center space-x-2 p-2"><FileText size={20} /> <span>Pages</span></li>
        <li className="flex items-center space-x-2 p-2"><Lock size={20} /> <span>Authentication</span></li>
      </ul>
    </aside>
  );
};

export default LeftSidebar;
