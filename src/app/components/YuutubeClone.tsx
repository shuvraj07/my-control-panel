import React, { useState } from "react";
import {
  Search,
  Menu,
  Home,
  Compass,
  PlaySquare,
  Clock,
  ThumbsUp,
  Settings,
  HelpCircle,
  MoreVertical,
} from "lucide-react";

const YouTubeClone = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  // Sample video data
  const videos = [
    {
      id: "1",
      thumbnail:
        "https://opendatanepal.com/uploads/group/2018-03-17-051618.955213Department-of-Roads.png",
      title: "सडक विभाग",
      channelName: "बबरमहल , काठमाडौँ ",
      views: "",
      uploadedAt: "",
      duration: "Open",
      description: "",
    },
    {
      id: "2",
      thumbnail:
        "https://bishalbazar.com.np/wp-content/uploads/2022/02/news-image-01.jpg",
      title: "Trisara",
      channelName: "CSS Masters",
      views: 89000,
      uploadedAt: "5 days ago",
      duration: "closed",
      description:
        "Master the basics of Tailwind CSS with this beginner-friendly crash course.",
    },
    {
      id: "3",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWr71uTEBMIOAokuZivvXgcnuwHJzZPbPmqw&s",
      title: "The Future of Web Development - 2025 Trends",
      channelName: "Future Tech",
      views: 250000,
      uploadedAt: "1 week ago",
      duration: "18:45",
      description:
        "Discover the upcoming trends and technologies that will shape web development in 2025.",
    },
  ];

  const sidebarItems = [
    { icon: <Home size={20} />, text: "Home" },
    { icon: <Compass size={20} />, text: "Explore" },
    { icon: <PlaySquare size={20} />, text: "Subscriptions" },
    { icon: <Clock size={20} />, text: "History" },
    { icon: <ThumbsUp size={20} />, text: "Liked Videos" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const formatViews = (views: number): string => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M views`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K views`;
    }
    return `${views} views`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm h-14 flex items-center px-4 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-blue-50 rounded-full"
        >
          <Menu size={24} />
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="flex items-center">
            <div className="flex flex-1 items-center border rounded-l-full border-blue-200">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full px-4 py-2 rounded-l-full focus:outline-none focus:border-blue-300"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-50 border border-l-0 border-blue-200 rounded-r-full hover:bg-blue-100"
            >
              <Search size={20} className="text-blue-600" />
            </button>
          </form>
        </div>

        {/* Three Dot Menu */}
        <div className="relative">
          <button
            onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
            className="p-2 hover:bg-blue-50 rounded-full ml-4"
          >
            <MoreVertical size={24} />
          </button>

          {isMoreMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
              <button className="w-full px-4 py-2 text-left hover:bg-blue-50 flex items-center gap-3">
                <Settings size={18} className="text-blue-600" />
                Settings
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-blue-50 flex items-center gap-3">
                <HelpCircle size={18} className="text-blue-600" />
                Help
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-14 h-full bg-white transition-all duration-300 ${
          isMenuOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="py-2">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center px-4 py-2 hover:bg-blue-50 text-blue-900"
            >
              <span className="flex items-center justify-center w-10">
                {item.icon}
              </span>
              {isMenuOpen && <span className="ml-4 text-sm">{item.text}</span>}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main
        className={`pt-14 transition-all duration-300 ${
          isMenuOpen ? "ml-64" : "ml-20"
        }`}
      >
        <div className="p-6">
          {/* Page Title */}

          {/* Video Grid */}
          <div className="grid grid-cols-1 gap-6 w-[700px] ml-[100px] ">
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex flex-col bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                {/* Video Info */}
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    {/* Profile Image */}
                    <img
                      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTyaM27Ep_V4xPeZG97l5Q4gv7nPSoj0wfpbKQu9XpfPbXzmx644CCbPaIq2GPAtsv7i4MBG6lernnqJSWRpYZctaopv91nDMgIpDfqs2HO"
                      alt={video.channelName}
                      className="w-10 h-10 rounded-full"
                    />
                    {/* Title and Channel Info */}
                    <div>
                      <h3 className="text-lg font-semibold text-red-700 line-clamp-2 hover:text-blue-700">
                        {video.title}
                      </h3>
                      <div className="mt-1 text-sm text-red-700">
                        {video.channelName} • {formatViews(video.views)} •{" "}
                        {video.uploadedAt}
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-red-700 text-center line-clamp-2">
                    {video.description}
                  </p>
                </div>

                {/* Thumbnail */}
                <div className="relative w-full h-[200px] bg-gray-700 flex items-center justify-center rounded-md">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover rounded-b-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-green-500 bg-opacity-90 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default YouTubeClone;
