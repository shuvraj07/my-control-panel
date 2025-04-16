import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">MyApp</div>
          <button onClick={toggleMenu} className="text-white">
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>
        </div>

        {/* Menu (only shown if isMenuOpen is true) */}
        {isMenuOpen && (
          <div className="mt-4 space-y-2">
            <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Option 1
            </div>
            <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Option 2
            </div>
            <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
              Option 3
            </div>
          </div>
        )}
      </div>

      {/* Main content area */}
      <div className="flex-grow p-6">
        {/* Your main content goes here */}
        <h1 className="text-3xl font-bold">Welcome to My App</h1>
        <p>This is the main content section.</p>
      </div>
    </div>
  );
};

export default Sidebar;
