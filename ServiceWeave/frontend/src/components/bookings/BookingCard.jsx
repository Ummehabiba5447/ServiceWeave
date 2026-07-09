import {
  Calendar,
  Clock,
  MapPin,
  DollarSign,
  Eye,
  CheckCircle,
  XCircle,
} from "lucide-react";

import BookingStatusBadge from "./BookingStatusBadge";

export default function BookingCard({
  booking,
  onView,
}) {

  return (

    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

      {/* Header */}

      <div className="p-5 border-b">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <img
              src={booking.avatar}
              alt={booking.customer}
              className="w-16 h-16 rounded-full object-cover"
            />

            <div>

              <h2 className="text-lg font-bold text-gray-800">
                {booking.customer}
              </h2>

              <p className="text-blue-600 font-medium mt-1">
                {booking.service}
              </p>

            </div>

          </div>

          <BookingStatusBadge
            status={booking.status}
          />

        </div>

      </div>

      {/* Booking Information */}

      <div className="p-5 space-y-4">

        <div className="flex items-center gap-3 text-gray-600">

          <Calendar
            size={18}
            className="text-blue-600"
          />

          <span>{booking.date}</span>

        </div>

        <div className="flex items-center gap-3 text-gray-600">

          <Clock
            size={18}
            className="text-green-600"
          />

          <span>{booking.time}</span>

        </div>

        <div className="flex items-center gap-3 text-gray-600">

          <MapPin
            size={18}
            className="text-red-500"
          />

          <span>{booking.address}</span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <DollarSign
              size={18}
              className="text-green-600"
            />

            <span className="font-bold text-lg">
              ${booking.amount}
            </span>

          </div>

          <span
            className={`
              px-3
              py-1
              rounded-full
              text-sm
              font-semibold

              ${
                booking.payment === "Paid"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }
            `}
          >
            {booking.payment}
          </span>

        </div>

      </div>

      {/* Action Buttons */}

      <div className="border-t p-5 flex flex-wrap gap-3">
        
             {/* View Details */}

        <button
          onClick={onView}
          className="
            flex
            items-center
            gap-2
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-4
            py-2
            rounded-lg
            transition
          "
        >
          <Eye size={18} />
          View Details
        </button>

        {/* Pending Booking Actions */}

        {booking.status === "Pending" && (
          <>
            <button
              className="
                flex
                items-center
                gap-2
                bg-green-600
                hover:bg-green-700
                text-white
                px-4
                py-2
                rounded-lg
                transition
              "
            >
              <CheckCircle size={18} />
              Accept
            </button>

            <button
              className="
                flex
                items-center
                gap-2
                bg-red-600
                hover:bg-red-700
                text-white
                px-4
                py-2
                rounded-lg
                transition
              "
            >
              <XCircle size={18} />
              Reject
            </button>
          </>
        )}

        {/* Accepted Booking */}

        {booking.status === "Accepted" && (
          <button
            className="
              flex
              items-center
              gap-2
              bg-emerald-600
              hover:bg-emerald-700
              text-white
              px-4
              py-2
              rounded-lg
              transition
            "
          >
            <CheckCircle size={18} />
            Mark Completed
          </button>
        )}

        {/* Completed Booking */}

        {booking.status === "Completed" && (
          <div
            className="
              flex
              items-center
              gap-2
              bg-green-100
              text-green-700
              px-4
              py-2
              rounded-lg
              font-semibold
            "
          >
            <CheckCircle size={18} />
            Completed
          </div>
        )}

        {/* Cancelled Booking */}

        {booking.status === "Cancelled" && (
          <div
            className="
              flex
              items-center
              gap-2
              bg-red-100
              text-red-700
              px-4
              py-2
              rounded-lg
              font-semibold
            "
          >
            <XCircle size={18} />
            Cancelled
          </div>
        )}

      </div>

    </div>

  );
}