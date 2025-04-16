import React from "react";
import { Button, Box } from "@mui/material";

const Light = ({ color }: { color: string }) => (
  <Box
    sx={{
      width: 24,
      height: 24,
      borderRadius: "50%",
      backgroundColor: color,
      boxShadow: "0 0 8px rgba(0,0,0,0.2)",
    }}
  />
);

const RoundButton = ({ color }: { color: string }) => (
  <Button
    variant="contained"
    sx={{
      backgroundColor: color,
      minWidth: 32,
      height: 32,

      boxShadow: 1,
      "&:hover": { backgroundColor: color },
    }}
  />
);

const ControlPanel = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[320px]">
        {/* Top Indicator Lights */}
        <div className="flex justify-between mb-4">
          <Light color="red" />
          <Light color="green" />
          <Light color="black" />
          <Light color="blue" />
          <Light color="orange" />
        </div>

        {/* Display Unit */}
        <div className="bg-gray-200 p-4 mb-4 text-center text-sm rounded">
          [ ABB Display ]
        </div>

        {/* Digital Meter */}
        <div className="bg-red-600 text-white text-center p-2 rounded mb-4 font-mono">
          9896
          <br />
          8176
        </div>

        {/* Light Indicators */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <Light color="white" />
          <Light color="green" />
          <Light color="white" />
          <Light color="green" />
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <RoundButton color="red" />
          <RoundButton color="black" />
          <RoundButton color="green" />
          <RoundButton color="red" />
          <RoundButton color="black" />
          <RoundButton color="green" />
          <RoundButton color="green" />
          <RoundButton color="green" />
        </div>

        {/* Handle Switch */}
        <div className="flex justify-center mt-6">
          <div className="w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded rotate-45">
            |
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
