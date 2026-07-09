import { CheckCheck } from "lucide-react";

export default function ChatList({
  chats,
  selectedChatId,
  onSelectChat,
}) {
  return (
    <div className="divide-y">

      {chats.length === 0 ? (

        <div className="p-8 text-center text-gray-500">
          No conversations found.
        </div>

      ) : (

        chats.map((chat) => (

          <button
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`
              w-full
              text-left
              p-4
              transition-all
              hover:bg-blue-50

              ${
                selectedChatId === chat.id
                  ? "bg-blue-100 border-r-4 border-blue-600"
                  : ""
              }
            `}
          >

            <div className="flex items-start gap-4">

              {/* Avatar */}

              <div className="relative">

                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                {/* Online Status */}

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

              {/* Chat Info */}

              <div className="flex-1 min-w-0">

                <div className="flex justify-between items-center">

                  <h3 className="font-bold text-gray-800 truncate">
                    {chat.name}
                  </h3>

                  <span className="text-xs text-gray-500">
                    {chat.lastTime}
                  </span>

                </div>

                <div className="flex justify-between items-center mt-2">

                  <div className="flex items-center gap-2 flex-1 min-w-0">

                    <CheckCheck
                      size={16}
                      className="text-blue-500 flex-shrink-0"
                    />

                    <p className="text-sm text-gray-600 truncate">
                      {chat.lastMessage}
                    </p>

                  </div>

                  {/* Unread Badge */}

                  {chat.unread > 0 && (

                    <span
                      className="
                        ml-3
                        bg-red-500
                        text-white
                        text-xs
                        font-bold
                        min-w-[22px]
                        h-6
                        px-2
                        rounded-full
                        flex
                        items-center
                        justify-center
                      "
                    >
                      {chat.unread}
                    </span>

                  )}

                </div>

              </div>

            </div>

          </button>

        ))

      )}

    </div>
  );
}