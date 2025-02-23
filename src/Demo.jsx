import React ,{useState}from 'react'
import {  Menu, User, Activity, BarChart2,  LineChart, PieChart, List,Grid,Package,Zap,Tv,AtSign,Move,FileText,Table,Lock ,UserX,UserCheck,Bug, Wifi} from "lucide-react";
import Chart from "react-apexcharts";
const chartOptions = {
  chart: {
    type: "line",
    height: 350,
  },
  stroke: {
    width: [3, 3],
    curve: "smooth",
  },
  colors: ["#000000", "#60A5FA"],
  markers: {
    size: 5,
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  legend: {
    position: "top",
  },
};

const chartSeries = [
  {
    name: "Current Week",
    data: [1, 3, 6, 9, 7, 11, 15],
  },
  {
    name: "Previous Week",
    data: [2, 4, 7, 10, 8, 12, 16],
  },
];

const Demo = () => {
  // const [isSidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex h-screen bg-gray-100">
    
    <aside className={`bg-white w-72 p-4  md:block shadow-lg border-r border-gray-200`}>
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

    <main className="flex-1 p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <button className="md:hidden" >
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold">Today</h1>
       
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 bg-blue-200 rounded-lg shadow-md text-center">
          <h3 className="text-black-300 me-48 font-bold" >Views</h3>
          <div className='flex mt-4'>
          <p className="text-3xl font-bold">721K</p>
          <p className="text-sm text-green-500 mt-4 ms-20">+11.01%</p>

          </div>
          
        </div>
        <div className="p-6 bg-blue-100 rounded-lg shadow-md text-center">
          <h3 className="text-black-300 me-48 font-bold">Visits</h3>
          <div className='flex mt-4'>
          <p className="text-3xl font-bold">367K</p>
          <p className="text-sm text-green-500 mt-4 ms-20">+9.15%</p>

          </div>
          
        </div>
        <div className="p-6 bg-blue-200 rounded-lg shadow-md text-center">
          <h3 className="text-black-300 me-40 font-bold">New Users</h3>
          <div className='flex mt-4'> 
          <p className="text-3xl font-bold">1,156</p>
          <p className="text-sm text-red-500 mt-4 ms-20">-0.56%</p>

          </div>
         
        </div>
        <div className="p-6  rounded-lg shadow-md text-center h-36 bg-blue-100">
          <h3 className="text-black-300 me-40 font-bold">ActiveUsers</h3>
          <div className='flex mt-4'>
          <p className="text-3xl font-bold">239K</p>
          <p className="text-sm text-red-500 mt-4 ms-20">-1.48%</p>

          </div>
          
        </div>
      </div>

     
      <div className="flex gap-6 mt-6">
          <div className="bg-white p-6 w-[1000px] h-[450px] rounded-lg shadow-md">
          
          <div className="flex space-x-8 mb-4">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <span>Total Projects</span>
            <span>Operating Status</span>
            <span>|</span>
            <span className="text-black font-bold">● Current Week</span>
            <span className="text-blue-500 font-bold">● Previous Week</span>
          </div>
          <div className="h-[350px] flex justify-center items-center rounded-md">
            <Chart options={chartOptions} series={chartSeries} type="line" height={350} width="800px" />
          </div>
        
            
            <div className="h-[350px]  flex justify-center items-center rounded-md">
              <LineChart size={100} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-[400px]">
          <h3 className="text-lg font-semibold mb-4">Traffic by Website</h3>
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <span>Google</span>
              <div className="w-2/3 h-2 bg-gray-300 rounded-md"></div>
            </div>
            <div className="flex justify-between items-center">
              <span>Youtube</span>
              <div className="w-2/3 h-2 bg-black rounded-md"></div>
            </div>
            <div className="flex justify-between items-center">
              <span>Instagram</span>
              <div className="w-2/3 h-2 bg-gray-300 rounded-md"></div>
            </div>
            <div className="flex justify-between items-center">
              <span>Pinterest</span>
              <div className="w-2/3 h-2 bg-gray-300 rounded-md"></div>
            </div>
            <div className="flex justify-between items-center">
              <span>Facebook</span>
              <div className="w-2/3 h-2 bg-gray-300 rounded-md"></div>
            </div>
            <div className="flex justify-between items-center">
              <span>Twitter</span>
              <div className="w-2/3 h-2 bg-gray-300 rounded-md"></div>
            </div>
            <div className="flex justify-between items-center">
              <span>Tumblr</span>
              <div className="w-2/3 h-2 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        </div>
        </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Traffic by Device</h3>
          <div className="h-40 bg-gray-100 flex justify-center items-center rounded-md">
            <BarChart2 size={100} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Traffic by Location</h3>
          <div className="h-40 bg-gray-100 flex justify-center items-center rounded-md">
            <PieChart size={100} />
          </div>
        </div>
      </div>
    </main>

   
    <aside className="bg-white w-72 p-4 shadow-lg border-l border-gray-200 hidden md:block">
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
  </div>
  )
}

export default Demo
