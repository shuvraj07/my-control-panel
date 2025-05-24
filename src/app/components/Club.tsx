// pages/index.tsx
import { useRouter } from "next/router";
import Image from "next/image";

const rooms = [
  {
    title: "Test Room",
    host: "Test Host",
    speakers: ["/avatar1.jpg", "/avatar2.jpg", "+5"],
  },
];

export default function Home() {
  const router = useRouter(); // ✅ inside the component

  return (
    <div className="p-4 bg-green-400 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Clubhouse</h1>

      {rooms.map((room, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-xl mb-4 shadow-md cursor-pointer"
          onClick={() => router.push("/room")} // ✅ Safe navigation
        >
          <p className="font-semibold">{room.host}</p>
          <p className="text-md">{room.title}</p>
          <div className="flex space-x-2 mt-2">
            {room.speakers.map((spk, j) =>
              spk.startsWith("/") ? (
                <Image
                  key={j}
                  src={spk}
                  width={32}
                  height={32}
                  alt=""
                  className="rounded-full"
                />
              ) : (
                <div
                  key={j}
                  className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs"
                >
                  {spk}
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
