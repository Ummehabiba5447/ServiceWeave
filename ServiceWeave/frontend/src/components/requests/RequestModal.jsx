import {
  X,
  Star,
  Calendar,
  DollarSign,
  MessageCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function RequestModal({
  request,
  onClose,
  onAccept,
  onReject,
  onMessage,
}) {
  if (!request) return null;

  const statusColors = {
    Pending: "bg-orange-100 text-orange-700",
    Accepted: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
    Completed: "bg-blue-100 text-blue-700",
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">

        {/* Header */}

        <div className="flex justify-between items-center border-b p-6">

          <h2 className="text-2xl font-bold">
            Service Request Details
          </h2>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X size={24} />
          </button>

        </div>

        {/* Body */}

        <div className="p-6 space-y-6">

          {/* Buyer */}

          <div className="flex flex-col md:flex-row md:items-center gap-5">

            <img
              src={request.avatar}
              alt={request.buyer}
              className="w-24 h-24 rounded-full object-cover"
            />

            <div className="flex-1">

              <h3 className="text-2xl font-bold">
                {request.buyer}
              </h3>

              <div className="flex items-center gap-2 mt-2">

                <Star
                  size={18}
                  className="text-yellow-500"
                  fill="currentColor"
                />

                <span>{request.rating}</span>

                <span className="text-gray-500">
                  ({request.reviews} Reviews)
                </span>

              </div>

              <span
                className={`inline-block mt-4 px-4 py-2 rounded-full font-medium ${statusColors[request.status]}`}
              >
                {request.status}
              </span>

            </div>

          </div>

          {/* Service */}

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <h4 className="text-lg font-semibold mb-3">
                Service
              </h4>

              <p className="text-gray-700">
                {request.title}
              </p>

            </div>

            <div>

              <h4 className="text-lg font-semibold mb-3">
                Price
              </h4>

              <div className="flex items-center gap-2 text-green-600">

                <DollarSign size={18} />

                <span className="text-xl font-bold">
                  ${request.price}
                </span>

              </div>

            </div>

          </div>

          {/* Date */}

          <div>

            <h4 className="text-lg font-semibold mb-3">
              Request Date
            </h4>

            <div className="flex items-center gap-2 text-gray-600">

              <Calendar size={18} />

              {request.date}

            </div>

          </div>

          {/* Notes */}

          <div>

            <h4 className="text-lg font-semibold mb-3">
              Buyer Notes
            </h4>

            <div className="bg-gray-50 rounded-xl p-5 leading-7 text-gray-700">

              {request.notes}

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="border-t p-6">

          <div className="flex flex-wrap gap-3 justify-end">

            <button
              onClick={() => onMessage(request)}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg transition"
            >
              <MessageCircle size={18} />

              Message Buyer

            </button>

            {request.status === "Pending" && (
              <>
                <button
                  onClick={() => {
                    onAccept(request.id);
                    onClose();
                  }}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg transition"
                >
                  <CheckCircle size={18} />

                  Accept

                </button>

                <button
                  onClick={() => {
                    onReject(request.id);
                    onClose();
                  }}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg transition"
                >
                  <XCircle size={18} />

                  Reject

                </button>
              </>
            )}

            <button
              onClick={onClose}
              className="px-5 py-3 border rounded-lg hover:bg-gray-100 transition"
            >
              Close
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}