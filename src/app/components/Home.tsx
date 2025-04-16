import { useState } from "react";
//import { FaSearch } from "react-icons/fa";

const HeroSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="bg-[#f2f2f4] text-white justify-center h-[900px] ">
      <div className="bg-gray-900 h-[500px]">
        {/* Navbar */}
        <nav className="w-full max-w-6xl flex items-center justify-between py-4 px-6">
          <div className="flex items-center">
            <img src="././logo.png" alt="" className="h-8 mr-2" />
            <span className="text-lg font-semibold">EKCAMP</span>
          </div>
          <div className="hidden md:flex space-x-6 text-sm">
            <a href="#" className="hover:text-blue-500">
              Home
            </a>
            <a href="#" className="hover:text-blue-500">
              Internships
            </a>
            <a href="#" className="hover:text-blue-500">
              Jobs
            </a>
            <a href="#" className="hover:text-blue-500">
              Events
            </a>
          </div>
          <div className="space-x-4">
            <button className="text-sm">Login</button>
            <button className="bg-red-600 px-4 py-2 rounded text-sm">
              Register
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="text-center mt-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            Join the most popular internship <br /> and companies.
          </h1>
          <p className="mt-4 text-gray-300">
            We've helped over <span className="font-semibold">2,500</span>{" "}
            freshers get into the most popular internships.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-1 flex items-center justify-center w-full">
          <div className="flex items-center w-full max-w-xl bg-white rounded-full shadow-md overflow-hidden">
            <div className="bg-red-100 text-red-600 px-4 py-3 rounded-l-full justify-end">
              <span>All Opportunities</span>
            </div>
            <input
              type="text"
              className="flex-1 px-4 py-3 outline-none text-black"
              placeholder="Enter the title, keywords or phrase"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-red-600 text-white p-3 rounded-full mr-2"></button>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="mt-6 flex items-center justify-center">
          <span className="text-gray-300">Popular Searches: </span>
          <a href="#" className="text-white hover:underline mx-2">
            Business Development
          </a>
          <a href="#" className="text-white hover:underline mx-2">
            UI/UX Design
          </a>
          <a href="#" className="text-white hover:underline mx-2">
            Frontend
          </a>
          <a href="#" className="text-white hover:underline mx-2">
            Backend
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center gap-9 mt-9 mb-16 ">
        {/* First Card */}
        <div className="bg-gray-200 shadow-lg rounded-2xl overflow-hidden flex items-center p-6 w-[600px] h-[300px]">
          {/* Left Section - Text */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-black mb-2">
              For Candidate
            </h2>
            <p className="text-gray-600 mb-4">
              Unlock endless opportunities and connect with top employers. Let
              your skills shine and land your dream job.
            </p>
            <button className="bg-white text-red-500 px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition">
              Upload your CV
            </button>
          </div>

          {/* Right Section - Image */}
          <div className="w-1/2 h-full flex items-center">
            <img
              src="https://img.freepik.com/premium-photo/young-man-with-emotion-vibrant-solid-background-youtube-thumbnail_1198884-39128.jpg"
              alt="Candidate working on a laptop"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-blue-600 shadow-lg rounded-2xl overflow-hidden flex items-center p-6 w-[600px] h-[300px]">
          {/* Left Section - Text */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white mb-2">
              For Candidate
            </h2>
            <p className="text-white mb-4">
              Unlock endless opportunities and connect with top employers. Let
              your skills shine and land your dream job.
            </p>
            <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition">
              Start Hiring
            </button>
          </div>

          {/* Right Section - Image */}
          <div className="w-1/2 h-full flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-tNwIvoQSIAa8G-haE9uvL-yJgLgrh90gFQ&s"
              alt="Candidate working on a laptop"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="h-[900px] bg-gray-900">
        <div className="flex justify-between">
          <div className="ml-10 mt-10">broswer the</div>
          <div className="mr-10 mt-10">broswer internship</div>
        </div>

        <nav className="w-full max-w-6xl flex items-center justify-end py-4 px-6">
          <div className="hidden md:flex space-x-6 text-sm justify-end">
            <a href="#" className="hover:text-blue-500">
              Home
            </a>
            <a href="#" className="hover:text-blue-500">
              Internships
            </a>
            <a href="#" className="hover:text-blue-500">
              Jobs
            </a>
            <a href="#" className="hover:text-blue-500">
              Events
            </a>
          </div>
          <div className="space-x-4">
            <button className="text-sm">Login</button>
            <button className="bg-red-600 px-4 py-2 rounded text-sm">
              Register
            </button>
          </div>
        </nav>
      </div>
      <div className="mr-10 mt-10">broswer internship</div>
      <div className="">
        <div>
          <p className="text-gray-900">
            Search your career opportunity through the available positions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
