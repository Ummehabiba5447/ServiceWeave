import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";

export default function MessagesPage() {

  // -----------------------------
  // Mock Chats
  // -----------------------------

  const [chats] = useState([
    {
      id: 1,
      name: "John David",
      avatar: "https://i.pravatar.cc/150?img=11",
      online: true,
      unread: 2,
      lastMessage: "Can you complete it by tomorrow?",
      lastTime: "2 min ago",
      messages: [
        {
          id: 1,
          sender: "buyer",
          text: "Hello! I need a logo design.",
          time: "10:00 AM",
        },
        {
          id: 2,
          sender: "seller",
          text: "Sure! I'd be happy to help.",
          time: "10:02 AM",
           seen: true,
        },
        {
          id: 3,
          sender: "buyer",
          text: "Can you complete it by tomorrow?",
          time: "10:05 AM",
        },
      ],
    },
    {
      id: 2,
      name: "Sarah Williams",
      avatar: "https://i.pravatar.cc/150?img=5",
      online: false,
      unread: 0,
      lastMessage: "Thank you for the amazing work!",
      lastTime: "Yesterday",
      messages: [
        {
          id: 1,
          sender: "buyer",
          text: "The website looks amazing!",
          time: "4:20 PM",
        },
        {
          id: 2,
          sender: "seller",
          text: "Thank you so much!",
          time: "4:25 PM",
           seen: true,
        },
      ],
    },
    {
      id: 3,
      name: "Emily Stone",
      avatar: "https://i.pravatar.cc/150?img=32",
      online: true,
      unread: 1,
      lastMessage: "Please send the updated files.",
      lastTime: "1 hour ago",
      messages: [
        {
          id: 1,
          sender: "buyer",
          text: "Please send the updated files.",
          time: "9:30 AM",
        },
      ],
    },
  ]);

  // -----------------------------
  // States
  // -----------------------------

  const [search, setSearch] = useState("");

  const [selectedChatId, setSelectedChatId] = useState(1);

  // -----------------------------
  // Search Filter
  // -----------------------------

  const filteredChats = useMemo(() => {

    return chats.filter((chat) =>
      chat.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  }, [search, chats]);

  const selectedChat =
    chats.find(
      (chat) => chat.id === selectedChatId
    ) || filteredChats[0];
      return (
    <div className="h-[calc(100vh-120px)] bg-white rounded-2xl shadow-lg overflow-hidden">

      {/* Header */}

      <div className="border-b px-6 py-5">

        <h1 className="text-3xl font-bold text-gray-800">
          Messages
        </h1>

        <p className="text-gray-500 mt-2">
          Communicate with your customers in real time.
        </p>

      </div>

      {/* Main Layout */}

      <div className="grid lg:grid-cols-3 h-[calc(100%-90px)]">

        {/* Left Sidebar */}

        <div className="border-r flex flex-col">

          {/* Search */}

          <div className="p-4 border-b">

            <div className="relative">

              <Search
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search conversations..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                  w-full
                  border
                  rounded-xl
                  py-3
                  pl-10
                  pr-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

            </div>

          </div>

          {/* Chat List */}

          <div className="flex-1 overflow-y-auto">

            <ChatList
              chats={filteredChats}
              selectedChatId={selectedChatId}
              onSelectChat={setSelectedChatId}
            />

          </div>

        </div>

        {/* Chat Window */}

        <div className="lg:col-span-2 flex flex-col">

          {selectedChat ? (

            <ChatWindow
              chat={selectedChat}
            />

          ) : (

            <div className="flex-1 flex items-center justify-center">

              <div className="text-center">

                <h2 className="text-2xl font-bold text-gray-700">
                  No Conversation Selected
                </h2>

                <p className="text-gray-500 mt-2">
                  Select a conversation to start chatting.
                </p>

              </div>

            </div>

          )}

        </div>

      </div>
            {/* End Main Layout */}

    </div>
  );
}