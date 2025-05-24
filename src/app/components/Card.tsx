import { CheckCircle, Users } from "lucide-react";

const VideoCard = () => {
  const campers = 12;

  return (
    <div className="w-full sm:w-[500px] h-[400px] rounded-2xl bg-white shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 ease-in-out">
      {/* Top: Profile + Title + Checkmark */}
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40?img=5"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <h3 className="font-semibold text-gray-800 text-lg">
            How to Build a Room UI
          </h3>
        </div>
        <CheckCircle className="w-5 h-5 text-blue-600" />
      </div>

      <img
        src="https://picsum.photos/500/250"
        alt="Thumbnail"
        className="w-full h-52 object-cover mt-3"
      />

      <div className="px-5 py-3 flex flex-col gap-2">
        <p className="text-sm text-gray-700 leading-snug">
          यहाँ जे सामान चाहिन्छ, जस्तै हार्डवेयरको सामान पनि सजिलै पाइन्छ।
        </p>
        <div className="flex justify-between items-center pt-1">
          <div className="flex gap-3">{/* Social buttons if needed */}</div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Users className="w-4 h-4 text-green-500" />
            <span>{campers} campers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CenteredCardPage() {
  return (
    <div className="flex justify-center items-start pt-6 pb-10 px-4 bg-gray-100 min-h-screen">
      <VideoCard />
    </div>
  );
}
