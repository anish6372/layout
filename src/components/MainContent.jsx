import React from "react";
import Chart from "react-apexcharts";
import { BarChart2, LineChart, PieChart, Menu } from "lucide-react";

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

const MainContent = ({ toggleLeftSidebar, toggleRightSidebar }) => {
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <button className="md:hidden" onClick={toggleLeftSidebar}>
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold">Today</h1>
        <button className="md:hidden ms-8" onClick={toggleRightSidebar}>
          <Menu size={24} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-4 sm:p-6 bg-blue-200 rounded-lg shadow-md text-center">
          <h3 className="text-black-300 font-bold">Views</h3>
          <div className="flex mt-4  items-center">
            <p className="text-3xl font-bold">721K</p>
            <p className="text-sm text-green-500 ms-8">+11.01%</p>
          </div>
        </div>
        <div className="p-4 sm:p-6 bg-blue-100 rounded-lg shadow-md text-center">
          <h3 className="text-black-300 font-bold">Visits</h3>
          <div className="flex mt-4  items-center">
            <p className="text-3xl font-bold">367K</p>
            <p className="text-sm text-green-500 ms-8">+9.15%</p>
          </div>
        </div>
        <div className="p-4 sm:p-6 bg-blue-200 rounded-lg shadow-md text-center">
          <h3 className="text-black-300 font-bold">New Users</h3>
          <div className="flex mt-4  items-center">
            <p className="text-3xl font-bold">1,156</p>
            <p className="text-sm text-red-500 ms-8">-0.56%</p>
          </div>
        </div>
        <div className="p-4 sm:p-6 bg-blue-100 rounded-lg shadow-md text-center">
          <h3 className="text-black-300 font-bold">Active Users</h3>
          <div className="flex mt-4  items-center">
            <p className="text-3xl font-bold">239K</p>
            <p className="text-sm text-red-500 ms-8">-1.48%</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
  <div className="bg-white p-6 w-[800px]  h-[400px] rounded-lg shadow-md overflow-x-auto">
    <div className="flex space-x-8 mb-4">
      <h3 className="text-lg font-semibold">Total Users</h3>
      <span>Total Projects</span>
      <span>Operating Status</span>
      <span>|</span>
      <span className="text-black font-bold">● Current Week</span>
      <span className="text-blue-500 font-bold">● Previous Week</span>
    </div>
    <div className="h-[300px] flex justify-center items-center rounded-md">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={300}
        width="700px"
      />
    </div>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-[300px]">
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
  );
};

export default MainContent;
