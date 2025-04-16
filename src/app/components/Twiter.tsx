import React from "react";

const NewsTweetCard: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto bg-white text-black border border-gray-200 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex items-center p-4 gap-3">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-sm">America</h3>
          <p className="text-xs text-gray-500">@america</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-5 h-5 text-yellow-500"
          viewBox="0 0 16 16"
        >
          <path d="M8 12.146L3.292 15l.958-4.14L.583 7.146l4.292-.396L8 3l1.125 3.75 4.292.396-3.667 3.714.958 4.14z" />
        </svg>
      </div>

      {/* Content */}
      <div className="px-4 pb-4">
        <p className="text-sm mb-4">
          California is spending $2.6 billion per year on healthcare for illegal
          aliens.
        </p>
        <div className="relative">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Video thumbnail"
            className="w-full rounded-lg"
          />
          <div className="absolute bottom-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
            Fox Business
          </div>
          <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded-md">
            New York City
          </div>
          <div className="absolute bottom-2 right-2 text-white text-xs px-2 py-1 bg-black bg-opacity-70 rounded-md">
            0:29
          </div>
        </div>
        <p className="mt-4 text-xs text-gray-500">
          Loophole Exploited: Migrant buses bypass NYC rules by arriving in NJ.
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 text-xs text-gray-500">
        <p>Biden Border Crisis</p>
        <div className="flex items-center gap-4">
          <p className="text-green-500">$37,730.50</p>
          <p className="text-green-500">+40.96</p>
        </div>
      </div>
    </div>
  );
};

export default NewsTweetCard;
