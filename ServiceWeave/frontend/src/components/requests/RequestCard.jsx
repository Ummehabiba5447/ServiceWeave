import {
  CheckCircle,
  XCircle,
  MessageCircle,
  Eye,
  Star,
  Calendar,
  DollarSign,
} from "lucide-react";

export default function RequestCard({
  request,
  onView,
  onAccept,
  onReject,
  onMessage,
}) {

  const statusColors = {
    Pending: "bg-orange-100 text-orange-700 border-orange-500",
    Accepted: "bg-green-100 text-green-700 border-green-500",
    Rejected: "bg-red-100 text-red-700 border-red-500",
    Completed: "bg-blue-100 text-blue-700 border-blue-500",
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-md border-l-4 ${
        statusColors[request.status]?.split(" ")[2]
      } hover:shadow-xl transition-all duration-300`}
    >
      {/* Header */}

      <div className="p-5 border-b">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <img
              src={request.avatar}
              alt={request.buyer}
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>

              <h2 className="font-bold text-lg">
                {request.buyer}
              </h2>

              <div className="flex items-center gap-1 text-yellow-500 mt-1">

                <Star size={15} fill="currentColor" />

                <span className="text-gray-700 text-sm">
                  {request.rating}
                </span>

                <span className="text-gray-400 text-sm">
                  ({request.reviews} reviews)
                </span>

              </div>

            </div>

          </div>

          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[
              request.status
            ]}`}
          >
            {request.status}
          </span>

        </div>

      </div>

      {/* Body */}

      <div className="p-5">

        <h3 className="text-xl font-semibold text-gray-800">
          {request.title}
        </h3>

        <div className="flex items-center gap-2 mt-4 text-green-600">

          <DollarSign size={18} />

          <span className="font-bold text-lg">
            ${request.price}
          </span>

        </div>

        <div className="flex items-center gap-2 mt-3 text-gray-500">

          <Calendar size={17} />

          <span>{request.date}</span>

        </div>

        <div className="mt-5">

          <p className="text-gray-500 text-sm mb-2">
            Special Notes
          </p>

          <p className="text-gray-700 line-clamp-3">
            {request.notes}
          </p>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t p-5">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

          <button
            onClick={() => onView(request)}
            className="
              flex
              items-center
              justify-center
              gap-2
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-2.5
              rounded-lg
              transition"
          >
            <Eye size={17} />

            View
          </button>

          <button
            onClick={() => onMessage(request)}
            className="
              flex
              items-center
              justify-center
              gap-2
              bg-purple-600
              hover:bg-purple-700
              text-white
              py-2.5
              rounded-lg
              transition"
          >
            <MessageCircle size={17} />

            Message
          </button>

          {request.status === "Pending" ? (
            <>
              <button
                onClick={() => onAccept(request.id)}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  py-2.5
                  rounded-lg
                  transition"
              >
                <CheckCircle size={17} />

                Accept
              </button>

              <button
                onClick={() => onReject(request.id)}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  py-2.5
                  rounded-lg
                  transition"
              >
                <XCircle size={17} />

                Reject
              </button>
            </>
          ) : (
            <div className="col-span-2 flex items-center justify-center rounded-lg bg-gray-100 py-2.5 text-gray-500 font-medium">
              Request {request.status}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}