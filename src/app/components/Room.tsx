import React, { useEffect, useRef, useState } from "react";

type Message = {
  type: "create" | "join" | "offer" | "answer" | "candidate" | "leave";
  roomId: string;
  senderId: string;
  receiverId?: string;
  payload?: string;
};

const App: React.FC = () => {
  const ws = useRef<WebSocket | null>(null);
  const [roomId, setRoomId] = useState("");
  const [myId, setMyId] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [connected, setConnected] = useState(false);

  const log = (msg: string) => {
    console.log(`[Frontend] ${msg}`);
  };

  const connectWebSocket = () => {
    ws.current = new WebSocket("ws://localhost:8080/ws");

    ws.current.onopen = () => {
      log("Connected to WebSocket server");
      setConnected(true);
    };

    ws.current.onmessage = (event) => {
      const msg: Message = JSON.parse(event.data);
      log(`Received '${msg.type}' from '${msg.senderId}'`);
    };

    ws.current.onerror = (err) => {
      console.error("WebSocket error", err);
    };

    ws.current.onclose = () => {
      log("WebSocket closed");
      setConnected(false);
    };
  };

  useEffect(() => {
    connectWebSocket();

    window.addEventListener("beforeunload", leaveRoom);
    return () => {
      leaveRoom();
      window.removeEventListener("beforeunload", leaveRoom);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = (msg: Message) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(msg));
      log(`Sent '${msg.type}'`);
    } else {
      log("WebSocket not ready");
    }
  };

  const createRoom = () => {
    if (!roomId || !myId) return alert("Room ID and Your ID are required");
    sendMessage({
      type: "create",
      roomId,
      senderId: myId,
    });
  };

  const joinRoom = () => {
    if (!roomId || !myId) return alert("Room ID and Your ID are required");
    sendMessage({
      type: "join",
      roomId,
      senderId: myId,
    });
  };

  const sendOffer = () => {
    sendMessage({
      type: "offer",
      roomId,
      senderId: myId,
      receiverId,
      payload: "dummy-offer-sdp",
    });
  };

  const sendAnswer = () => {
    sendMessage({
      type: "answer",
      roomId,
      senderId: myId,
      receiverId,
      payload: "dummy-answer-sdp",
    });
  };

  const sendCandidate = () => {
    sendMessage({
      type: "candidate",
      roomId,
      senderId: myId,
      receiverId,
      payload: "dummy-ice-candidate",
    });
  };

  const leaveRoom = () => {
    if (!roomId || !myId) return;
    sendMessage({
      type: "leave",
      roomId,
      senderId: myId,
    });
    ws.current?.close();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🎙️ WebRTC Signaling Frontend</h2>

      <div>
        <label>Room ID: </label>
        <input value={roomId} onChange={(e) => setRoomId(e.target.value)} />
      </div>
      <div>
        <label>Your ID: </label>
        <input value={myId} onChange={(e) => setMyId(e.target.value)} />
      </div>
      <div>
        <label>Receiver ID: </label>
        <input
          value={receiverId}
          onChange={(e) => setReceiverId(e.target.value)}
        />
      </div>

      <div style={{ marginTop: 10 }}>
        <button onClick={createRoom}>Create Room</button>
        <button onClick={joinRoom} style={{ marginLeft: 10 }}>
          Join Room
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={sendOffer}>Send Offer</button>
        <button onClick={sendAnswer} style={{ marginLeft: 10 }}>
          Send Answer
        </button>
        <button onClick={sendCandidate} style={{ marginLeft: 10 }}>
          Send Candidate
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={leaveRoom} style={{ color: "red" }}>
          Leave Room
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <strong>Status:</strong>{" "}
        {connected ? "🟢 Connected" : "🔴 Disconnected"}
      </div>
    </div>
  );
};

export default App;
