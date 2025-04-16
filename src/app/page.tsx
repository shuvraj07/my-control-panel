"use client";

import React, { useEffect, useState } from "react";
import AgoraRTC, {
  IAgoraRTCClient,
  IRemoteAudioTrack,
  IRemoteUser,
} from "agora-rtc-sdk-ng";

const APP_ID = "732e1ffcf3694567bdef7ca4c7a3374e"; // 🔁 Replace with your real App ID
const CHANNEL_NAME = "test-room"; // You can change this dynamically
const TOKEN = null; // Or generate a token for production

export default function AudioRoom() {
  const [client, setClient] = useState<IAgoraRTCClient | null>(null);
  const [localAudioTrack, setLocalAudioTrack] = useState<any>(null);
  const [remoteUsers, setRemoteUsers] = useState<IRemoteUser[]>([]);

  useEffect(() => {
    const init = async () => {
      const agoraClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
      setClient(agoraClient);

      // Join room
      const uid = await agoraClient.join(
        APP_ID,
        CHANNEL_NAME,
        TOKEN || null,
        null
      );

      const localTrack = await AgoraRTC.createMicrophoneAudioTrack();
      setLocalAudioTrack(localTrack);

      await agoraClient.publish([localTrack]);

      // Handle remote users
      agoraClient.on("user-published", async (user, mediaType) => {
        await agoraClient.subscribe(user, mediaType);
        if (mediaType === "audio") {
          const remoteAudioTrack = user.audioTrack as IRemoteAudioTrack;
          remoteAudioTrack.play();
        }
        setRemoteUsers((prev) => [...prev, user]);
      });

      agoraClient.on("user-unpublished", (user) => {
        setRemoteUsers((prev) => prev.filter((u) => u.uid !== user.uid));
      });

      agoraClient.on("user-left", (user) => {
        setRemoteUsers((prev) => prev.filter((u) => u.uid !== user.uid));
      });
    };

    init();

    return () => {
      client?.leave();
      localAudioTrack?.stop();
      localAudioTrack?.close();
    };
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">🎙️ Audio Room</h1>
      <p className="mb-4">Connected Users:</p>
      <ul className="list-disc pl-6">
        {remoteUsers.map((user) => (
          <li key={user.uid.toString()}>👤 User ID: {user.uid.toString()}</li>
        ))}
      </ul>
    </div>
  );
}
