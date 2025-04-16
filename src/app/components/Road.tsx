import React from "react";

const DepartmentOfRoads = () => {
  return (
    <div className="min-h-screen  bg-gray-100">
      {/* Main Banner */}
      <div className="relative bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden w-full max-w-3xl">
        {/* Top Section */}
        <div className="p-9">
          <h1 className="text-red-600 text-2xl font-bold">सडक विभाग</h1>
          <p className="text-red-700 text-sm">Government of Nepal</p>
          <p className="text-red-600 text-sm">
            Ministry of Physical Planning and Works
          </p>
          <h2 className="text-xl font-bold text-red-600">
            DEPARTMENT OF ROADS
          </h2>
        </div>

        <div className="bg-gray-700 h-[200px]"></div>
      </div>
    </div>
  );
};

export default DepartmentOfRoads;
