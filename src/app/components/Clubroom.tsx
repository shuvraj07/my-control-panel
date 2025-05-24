import Image from "next/image";

const speakers = [
  { name: "Big", image: "/big.jpg", muted: false },
  { name: "ZellTren...", image: "/zell.jpg", muted: true },
  { name: "Archie", image: "/archie.jpg", muted: true },
  { name: "Albert", image: "/albert.jpg", muted: true },
  { name: "Nunu", image: "/nunu.jpg", muted: true },
  { name: "Shawn", image: "/shawn.jpg", muted: true },
  { name: "DIANN", image: "/diann.jpg", muted: true },
  { name: "Daphniq...", image: "/daphni.jpg", muted: true },
  { name: "Derek", image: "/derek.jpg", muted: true },
];

const listeners = [
  { name: "Jason", image: "/jason.jpg" },
  { name: "Veronica’M...", image: "/veronica.jpg" },
  { name: "Eddie", image: "/eddie.jpg" },
  { name: "Blessed", image: "/blessed.jpg" },
  { name: "Debbie", image: "/debbie.jpg" },
  { name: "Kayla", image: "/kayla.jpg" },
  { name: "Mali", image: "/mali.jpg" },
  { name: "Charles", image: "/charles.jpg" },
];

export default function Room() {
  return (
    <div className="min-h-screen bg-[#fdfdfb] p-4 pt-8 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center">
        <button className="text-2xl">⌄</button>
        <span className="text-orange-500 font-semibold text-sm">
          ✌ leave quietly
        </span>
      </div>

      {/* Room Info */}
      <div className="mt-4">
        <div className="flex items-center mb-1">
          <Image
            src="/big.jpg"
            width={24}
            height={24}
            alt="host"
            className="rounded-full mr-2"
          />
          <span className="text-sm font-semibold">Big House</span>
        </div>
        <h2 className="text-lg font-bold leading-snug">
          The devil is in the details: Why do you want to be married?
        </h2>
      </div>

      {/* Speakers */}
      <div className="grid grid-cols-3 gap-y-6 gap-x-4 mt-6">
        {speakers.map((person, i) => (
          <div key={i} className="relative flex flex-col items-center">
            <Image
              src={person.image}
              width={64}
              height={64}
              alt={person.name}
              className="rounded-xl"
            />
            {person.muted && (
              <div className="absolute bottom-0 right-0 bg-white rounded-full p-1">
                <span className="text-xs">🔇</span>
              </div>
            )}
            <span className="mt-1 text-sm text-center">{person.name}</span>
          </div>
        ))}
      </div>

      {/* House Members */}
      <h3 className="mt-8 mb-2 text-gray-500 text-sm">house members</h3>
      <div className="grid grid-cols-4 gap-y-4 gap-x-2">
        {listeners.map((person, i) => (
          <div key={i} className="flex flex-col items-center">
            <Image
              src={person.image}
              width={48}
              height={48}
              alt={person.name}
              className="rounded-xl"
            />
            <span className="text-xs text-center mt-1">{person.name}</span>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t flex justify-around">
        <button className="text-sm flex items-center gap-1 px-4 py-2 bg-[#f2f1f6] rounded-full">
          💬 <span>10</span>
        </button>
        <button className="text-sm flex items-center gap-1 px-4 py-2 bg-[#f2f1f6] rounded-full">
          🔗 share
        </button>
        <button className="text-lg px-3 py-2 bg-[#f2f1f6] rounded-full">
          ✋
        </button>
      </div>
    </div>
  );
}
