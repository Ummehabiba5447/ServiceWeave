import { useState } from "react";
import {
  Smile,
  Paperclip,
  Image,
  Mic,
  Send,
} from "lucide-react";

export default function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message.trim());

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-end gap-3">

      {/* Left Icons */}

      <div className="flex items-center gap-2">

        <button
          className="
            p-2
            rounded-lg
            hover:bg-gray-100
            transition
          "
        >
          <Smile
            size={22}
            className="text-gray-600"
          />
        </button>

        <button
          className="
            p-2
            rounded-lg
            hover:bg-gray-100
            transition
          "
        >
          <Paperclip
            size={22}
            className="text-gray-600"
          />
        </button>

        <button
          className="
            p-2
            rounded-lg
            hover:bg-gray-100
            transition
          "
        >
          <Image
            size={22}
            className="text-gray-600"
          />
        </button>

      </div>

      {/* Message Input */}

      <textarea
        rows={1}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        className="
          flex-1
          border
          rounded-xl
          px-4
          py-3
          resize-none
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />

      {/* Right Buttons */}

      {message.trim() ? (

        <button
          onClick={handleSend}
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            p-3
            rounded-xl
            transition
          "
        >
          <Send size={22} />
        </button>

      ) : (

        <button
          className="
            bg-gray-200
            hover:bg-gray-300
            p-3
            rounded-xl
            transition
          "
        >
          <Mic
            size={22}
            className="text-gray-700"
          />
        </button>

      )}

    </div>
  );
}