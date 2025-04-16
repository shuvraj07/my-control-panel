import React from "react";

interface VideoCardProps {
  title: string;
  channelName: string;
  views: string;
  timeAgo: string;
  thumbnailUrl: string;
}

const VideoCard = ({
  title,
  channelName,
  views,
  timeAgo,
  thumbnailUrl,
}: VideoCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full aspect-video object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-500 text-sm">
          {channelName} · {views} views · {timeAgo}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
