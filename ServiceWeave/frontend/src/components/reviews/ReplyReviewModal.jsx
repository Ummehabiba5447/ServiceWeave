import { useState } from "react";
import { X, MessageSquare, Send } from "lucide-react";

export default function ReplyReviewModal({
  review,
  onClose,
  onSave,
}) {
  const [reply, setReply] = useState(review?.reply || "");

  const maxCharacters = 500;

  const handleSubmit = () => {
    if (!reply.trim()) {
      alert("Please enter a reply.");
      return;
    }

    onSave(reply.trim());
  };

  if (!review) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <div>

            <h2 className="text-2xl font-bold text-gray-800">
              {review.reply ? "Edit Reply" : "Reply to Review"}
            </h2>

            <p className="text-gray-500 mt-1">
              Respond professionally to your customer's review.
            </p>

          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <X size={22} />
          </button>

        </div>

        {/* Customer Review */}

        <div className="p-6 border-b">

          <h3 className="font-semibold text-gray-700 mb-3">
            Customer Review
          </h3>

          <div className="bg-gray-50 rounded-xl p-5">

            <div className="flex items-center gap-4 mb-4">

              <img
                src={review.avatar}
                alt={review.customer}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>

                <h4 className="font-bold">
                  {review.customer}
                </h4>

                <p className="text-sm text-gray-500">
                  {review.service}
                </p>

              </div>

            </div>

            <p className="text-gray-700 leading-7">
              {review.review}
            </p>

          </div>

        </div>

        {/* Reply */}

        <div className="p-6">

          <label className="flex items-center gap-2 font-semibold text-gray-700 mb-3">

            <MessageSquare
              size={18}
              className="text-blue-600"
            />

            Your Reply

          </label>

          <textarea
            rows={6}
            value={reply}
            onChange={(e) => {
              if (e.target.value.length <= maxCharacters) {
                setReply(e.target.value);
              }
            }}
            placeholder="Write your professional reply..."
            className="
              w-full
              border
              rounded-xl
              p-4
              resize-none
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

          <div className="flex justify-end mt-2">

            <span
              className={`text-sm ${
                reply.length > 450
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              {reply.length}/{maxCharacters}
            </span>

          </div>

        </div>

        {/* Footer */}

        <div className="border-t p-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="
              px-5
              py-3
              rounded-lg
              border
              hover:bg-gray-100
              transition
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="
              flex
              items-center
              gap-2
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-6
              py-3
              rounded-lg
              transition
            "
          >
            <Send size={18} />

            {review.reply ? "Update Reply" : "Send Reply"}

          </button>

        </div>

      </div>

    </div>
  );
}