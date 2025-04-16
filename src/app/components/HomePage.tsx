import type { NextPage } from "next";
import Layout from "./Youtube";
import VideoCard from "./Videocard";

const Home: NextPage = () => {
  const videos = [
    {
      id: 1,
      title: "Video Title",
      channelName: "Channel Name",
      views: "1.2M",
      timeAgo: "3 days ago",
      thumbnailUrl: "/api/placeholder/400/200",
    },
    {
      id: 2,
      title: "Another Video",
      channelName: "Channel Name",
      views: "500K",
      timeAgo: "1 week ago",
      thumbnailUrl: "/api/placeholder/400/200",
    },
    // Add more videos as needed
  ];

  return (
    <Layout>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            channelName={video.channelName}
            views={video.views}
            timeAgo={video.timeAgo}
            thumbnailUrl={video.thumbnailUrl}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
