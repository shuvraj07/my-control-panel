import React from "react";

interface DigitalMeterProps {
  value: number;
}

export const DigitalMeter: React.FC<DigitalMeterProps> = ({ value }) => {
  return (
    <div className="bg-black p-2 rounded flex justify-center">
      <div className="font-mono text-red-500 text-2xl tabular-nums">{value}</div>
    </div>
  );
};
