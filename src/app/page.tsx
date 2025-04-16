"use client";

import { useState, useRef, useEffect } from "react";

const SIGNALING_SERVER = "wss://golang-k2mu.onrender.com/ws"; // Change if needed

const rooms = [
  { id: "room1", name: "🌍 World Chat", thumbnail: "/world.jpg" },
  { id: "room2", name: "🎮 Gamers Lounge", thumbnail: "/game.jpg" },
  { id: "room3", name: "🎵 Music Jam", thumbnail: "/music.jpg" },
];

export default function Home() {
  const [currentRoom, setCurrentRoom] = useState<string | null>(null);
  const [connected, setConnected] = useState(false);
  const [joined, setJoined] = useState(false);

  const localAudioRef = useRef<HTMLAudioElement>(null);
  const remoteAudioRef = useRef<HTMLAudioElement>(null);
  const ws = useRef<WebSocket | null>(null);
  const peer = useRef<RTCPeerConnection | null>(null);
  const localStream = useRef<MediaStream | null>(null);

  useEffect(() => {
    if (!currentRoom) return;

    ws.current = new WebSocket(SIGNALING_SERVER);

    ws.current.onopen = () => {
      console.log("✅ WebSocket connected");
      setConnected(true);
      ws.current?.send(JSON.stringify({ type: "join", room: currentRoom }));
    };

    ws.current.onmessage = async (event) => {
      const data = JSON.parse(event.data);
      switch (data.type) {
        case "offer":
          await peer.current?.setRemoteDescription(
            new RTCSessionDescription(data.offer)
          );
          const answer = await peer.current?.createAnswer();
          await peer.current?.setLocalDescription(answer!);
          ws.current?.send(
            JSON.stringify({ type: "answer", answer, room: currentRoom })
          );
          break;

        case "answer":
          await peer.current?.setRemoteDescription(
            new RTCSessionDescription(data.answer)
          );
          break;

        case "candidate":
          await peer.current?.addIceCandidate(
            new RTCIceCandidate(data.candidate)
          );
          break;
      }
    };

    return () => {
      ws.current?.send(JSON.stringify({ type: "leave", room: currentRoom }));
      ws.current?.close();
    };
  }, [currentRoom]);

  const joinRoom = async () => {
    peer.current = new RTCPeerConnection();

    peer.current.onicecandidate = (e) => {
      if (e.candidate) {
        ws.current?.send(
          JSON.stringify({
            type: "candidate",
            candidate: e.candidate,
            room: currentRoom,
          })
        );
      }
    };

    peer.current.ontrack = (event) => {
      if (remoteAudioRef.current) {
        remoteAudioRef.current.srcObject = event.streams[0];
      }
    };

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    localStream.current = stream;
    if (localAudioRef.current) {
      localAudioRef.current.srcObject = stream;
    }
    stream
      .getTracks()
      .forEach((track) => peer.current?.addTrack(track, stream));

    const offer = await peer.current.createOffer();
    await peer.current.setLocalDescription(offer);

    ws.current?.send(
      JSON.stringify({ type: "offer", offer, room: currentRoom })
    );

    setJoined(true);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      {!currentRoom ? (
        <>
          <h1 className="text-3xl font-bold mb-6">🎙️ Explore Rooms</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <div
                key={room.id}
                onClick={() => setCurrentRoom(room.id)}
                className="cursor-pointer rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition"
              >
                <img
                  src={room.thumbnail}
                  alt={room.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{room.name}</h2>
                  <p className="text-sm text-gray-600">Click to join</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Room: {currentRoom}</h1>

          <button
            onClick={joinRoom}
            disabled={!connected || joined}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {joined
              ? "In Room"
              : connected
              ? "Join Audio Room"
              : "Connecting..."}
          </button>

          <button
            onClick={() => {
              setCurrentRoom(null);
              setConnected(false);
              setJoined(false);
              peer.current?.close();
            }}
            className="ml-4 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            🔙 Back to Rooms
          </button>

          <div className="mt-6 space-y-4">
            <div>
              <p className="font-semibold">🎧 You:</p>
              <audio ref={localAudioRef} autoPlay controls />
            </div>
            <div>
              <p className="font-semibold">🗣️ Others:</p>
              <audio ref={remoteAudioRef} autoPlay controls />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
