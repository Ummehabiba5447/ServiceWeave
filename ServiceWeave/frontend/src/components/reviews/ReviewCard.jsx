import {
  Star,
  Calendar,
  MessageSquare,
  Reply,
  Briefcase,
} from "lucide-react";

export default function ReviewCard({
  review,
  onReply,
}) {

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

      {/* Header */}

      <div className="p-6 border-b">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div className="flex items-center gap-4">

            <img
              src={review.avatar}
              alt={review.customer}
              className="w-16 h-16 rounded-full object-cover"
            />

            <div>

              <h2 className="text-lg font-bold text-gray-800">
                {review.customer}
              </h2>

              <div className="flex items-center gap-1 mt-2">

                {[1, 2, 3, 4, 5].map((star) => (

                  <Star
                    key={star}
                    size={18}
                    fill={
                      star <= review.rating
                        ? "#FACC15"
                        : "none"
                    }
                    className={
                      star <= review.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />

                ))}

              </div>

            </div>

          </div>

          <div className="text-gray-500 flex items-center gap-2">

            <Calendar size={17} />

            {review.date}

          </div>

        </div>

      </div>

      {/* Service */}

      <div className="px-6 pt-5">

        <div className="flex items-center gap-2 text-blue-600 font-semibold">

          <Briefcase size={18} />

          {review.service}

        </div>

      </div>

      {/* Review */}

      <div className="p-6">

        <div className="flex items-start gap-3">

          <MessageSquare
            size={22}
            className="text-blue-500 mt-1"
          />

          <p className="text-gray-700 leading-7">
            {review.review}
          </p>

        </div>

      </div>

      {/* Seller Reply */}

      {review.reply && (

        <div className="mx-6 mb-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">

          <div className="flex items-center gap-2 mb-2">

            <Reply
              size={18}
              className="text-blue-600"
            />

            <span className="font-semibold text-blue-700">
              Your Reply
            </span>

          </div>

          <p className="text-gray-700">
            {review.reply}
          </p>

        </div>

      )}

      {/* Footer */}

      <div className="border-t p-5 flex justify-end">

        <button
          onClick={() => onReply(review)}
          className="
            flex
            items-center
            gap-2
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-5
            py-2.5
            rounded-lg
            transition
          "
        >

          <Reply size={18} />

          {review.reply
            ? "Edit Reply"
            : "Reply"}

        </button>

      </div>

    </div>
  );
}