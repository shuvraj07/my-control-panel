import React from "react";

interface IndicatorRowProps {
  colors: string[];
}

export const IndicatorRow: React.FC<IndicatorRowProps> = ({ colors }) => {
  return (
    <div className="flex justify-between px-4 bg-gray-500">
      {colors.map((color, i) => (
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
  );
};
