import {
  Phone,
  Video,
  MoreVertical,
} from "lucide-react";

import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

export default function ChatWindow({ chat }) {

  const handleSendMessage = (message) => {

    console.log("New Message:", message);

    // Later we'll connect this to Laravel API

  };

  return (

    <div className="flex flex-col h-full bg-gray-50">

      {/* ===========================
            Chat Header
      =========================== */}

      <div className="bg-white border-b px-6 py-4 flex items-center justify-between shadow-sm">

        <div className="flex items-center gap-4">

          <div className="relative">

            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-14 h-14 rounded-full object-cover"
            />

            <span
              className={`
                absolute
                bottom-0
                right-0
                w-4
                h-4
                rounded-full
                border-2
                border-white

                ${
                  chat.online
                    ? "bg-green-500"
                    : "bg-gray-400"
                }
              `}
            />

          </div>

          <div>

            <h2 className="font-bold text-lg">

              {chat.name}

            </h2>

            <p className="text-sm text-gray-500">

              {chat.online
                ? "Online"
                : "Offline"}

            </p>

          </div>

        </div>

        {/* Action Buttons */}

        <div className="flex items-center gap-3">

          <button
            className="
              p-2
              rounded-lg
              hover:bg-gray-100
              transition
            "
          >

            <Phone size={20} />

          </button>

          <button
            className="
              p-2
              rounded-lg
              hover:bg-gray-100
              transition
            "
          >

            <Video size={20} />

          </button>

          <button
            className="
              p-2
              rounded-lg
              hover:bg-gray-100
              transition
            "
          >

            <MoreVertical size={20} />

          </button>

        </div>

      </div>

      {/* ===========================
            Messages Area
      =========================== */}

      <div className="flex-1 overflow-y-auto p-6 space-y-4">

        {chat.messages.map((message) => (

          <MessageBubble

            key={message.id}

            message={message}

          />

        ))}

      </div>
            {/* ===========================
            Chat Input
      =========================== */}

      <div className="bg-white border-t p-4">

        <ChatInput
          onSend={handleSendMessage}
        />

      </div>

    </div>

  );
}