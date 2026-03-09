"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  async function handleSend() {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setReply(data.reply);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6 text-black">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Mini APEX Chat</h1>

        <textarea
          className="w-full border rounded-lg p-3 mb-4"
          rows={4}
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={handleSend}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>

        <div className="mt-6">
          <h2 className="font-semibold mb-2">Reply:</h2>
          <div className="border rounded-lg p-3 min-h-[80px] bg-gray-50">
            {reply || "No reply yet."}
          </div>
        </div>
      </div>
    </main>
  );
}