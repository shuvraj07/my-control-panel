import React, { useState } from "react";
import Button from "./Button";
import Card from "./Card";

const ArrowControlPanel: React.FC = () => {
  const [screenText, setScreenText] = useState("Screen");

  // Function to handle the reset action
  const handleReset = () => {
    console.log("the button is cicked ");
    setScreenText("Screen");
  };

  return (
    <div className="bg-gray-500 rounded-lg">
      <div className=" py-2 px-2 mt-3 bg-gray-300 relative text-right mr-2 ml-2 border-black ">
        <div className="flex justify-between w-full">
          <div className="text-red-800">ABB</div>
          <div className="text-black">REG54356</div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col ">
          <Button onClick={handleReset} />
          <Button onClick={handleReset} />
          <Button onClick={handleReset} />
          <Button onClick={handleReset} />
          <Button onClick={handleReset} />
        </div>

        <div className="bg-black w-[350px] h-[215px] m-4 rounded-lg"></div>
        <div className="flex flex-col ">
          <Button onClick={handleReset} bgColor="bg-gray-300" />
          <Button onClick={handleReset} bgColor="bg-gray-300" />
          <Button onClick={handleReset} bgColor="bg-gray-300" />
          <Button onClick={handleReset} bgColor="bg-gray-300" />
          <Button onClick={handleReset} bgColor="bg-gray-300" />
        </div>
      </div>

      {/* Reset button */}
    </div>
  );
};

export default ArrowControlPanel;
