"use client";

import React, { useEffect, useState } from "react";
import AgoraRTC, {
  IAgoraRTCClient,
  ILocalAudioTrack,
  IRemoteAudioTrack,
} from "agora-rtc-sdk-ng";
import type IRemoteUser from "agora-rtc-sdk-ng";

const APP_ID = "YOUR_AGORA_APP_ID";
const TOKEN = null; // Or your generated token
const CHANNEL = "test-room";

export default function HomePage() {
  const [client] = useState<IAgoraRTCClient>(() =>
    AgoraRTC.createClient({ mode: "rtc", codec: "vp8" })
  );
  const [localAudioTrack, setLocalAudioTrack] =
    useState<ILocalAudioTrack | null>(null);
  const [remoteUsers, setRemoteUsers] = useState<IRemoteUser[]>([]);

  useEffect(() => {
    const init = async () => {
      await client.join(APP_ID, CHANNEL, TOKEN || null, null);

      const micTrack = await AgoraRTC.createMicrophoneAudioTrack();
      await client.publish([micTrack]);

      setLocalAudioTrack(micTrack);

      client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === "audio") {
          const remoteAudioTrack = user.audioTrack as IRemoteAudioTrack;
          remoteAudioTrack?.play();
        }
        setRemoteUsers((prevUsers) => [...prevUsers, user]);
      });

      client.on("user-unpublished", (user) => {
        setRemoteUsers((prevUsers) =>
          prevUsers.filter((u) => u.uid !== user.uid)
        );
      });
    };

    init();

    return () => {
      client.leave();
      localAudioTrack?.close();
      setRemoteUsers([]);
    };
  }, [client, localAudioTrack]);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Agora Audio Room</h1>
      <p className="mt-2">Users in room: {remoteUsers.length}</p>
    </main>
  );
}
