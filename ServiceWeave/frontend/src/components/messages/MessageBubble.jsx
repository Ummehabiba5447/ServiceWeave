import { Check, CheckCheck } from "lucide-react";

export default function MessageBubble({ message }) {
  const isSeller = message.sender === "seller";

  return (
    <div
      className={`flex ${
        isSeller ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[75%]
          rounded-2xl
          px-4
          py-3
          shadow-sm
          ${
            isSeller
              ? "bg-blue-600 text-white rounded-br-md"
              : "bg-white text-gray-800 rounded-bl-md border"
          }
        `}
      >
        {/* Message */}

        <p className="leading-7 break-words">
          {message.text}
        </p>

        {/* Footer */}

        <div
          className={`flex items-center gap-1 mt-3 text-xs ${
            isSeller
              ? "justify-end text-blue-100"
              : "justify-start text-gray-500"
          }`}
        >
          <span>{message.time}</span>

          {/* Status */}

          {isSeller && (
            <>
              {message.seen ? (
                <CheckCheck
                  size={15}
                  className="text-blue-200"
                />
              ) : (
                <Check
                  size={15}
                  className="text-blue-200"
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}