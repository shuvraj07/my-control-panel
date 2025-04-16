"use client";
// pages/index.tsx
import Button from "./components/Button";
import ArrowControlPanel from "./components/Display";
import GeneratorManagementRelay from "./components/Display";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
//import Navbar from "./components/Navbar";

const ControlPanl: React.FC = () => {
  const handleButtonClick = () => {
    console.log("Button is clicked!");
    alert("Button is clicked!"); // Optional: Display an alert
  };

  return (
    <>
      <div className="p-6 grid grid-cols-3 gap-4">
        <div className="space-y-4">
          {/* Text Inside Black Box, Box Wraps Around Text */}
          <div className="bg-black text-white text-center py-2 px-4 inline-block rounded-md">
            TG CONTROL METERING & PROTECTION CUM GOVPANEL
          </div>

          {/* Indicator Buttons */}
          <div className="flex justify-between px-4">
            {["red", "green", "red", "blue", "green"].map((color, i) => (
              <div
                key={i}
                className={`w-6 h-6 rounded-full ${
                  color === "red"
                    ? "bg-red-500 shadow-red-500/50"
                    : color === "green"
                    ? "bg-green-500 shadow-green-500/50"
                    : "bg-blue-500 shadow-blue-500/50"
                } shadow-lg`}
              />
            ))}
          </div>
        </div>
        <ArrowControlPanel />
        <Navbar />
        <Sidebar />
      </div>
    </>
  );
};

export default ControlPanl;
