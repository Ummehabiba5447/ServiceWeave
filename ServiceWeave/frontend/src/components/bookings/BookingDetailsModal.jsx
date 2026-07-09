import { X, MapPin, Calendar, Clock, DollarSign } from "lucide-react";

import BookingStatusBadge from "./BookingStatusBadge";
import BookingTimeline from "./BookingTimeline";

export default function BookingDetailsModal({
  booking,
  onClose,
}) {

  if (!booking) return null;

  return (

    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">

        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <div>

            <h2 className="text-2xl font-bold text-gray-800">
              Booking Details
            </h2>

            <p className="text-gray-500 mt-1">
              Booking ID #{booking.id}
            </p>

          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <X size={24} />
          </button>

        </div>

        {/* Body */}

        <div className="p-6 grid lg:grid-cols-2 gap-8">

          {/* Left Column */}

          <div>

            {/* Customer */}

            <div className="flex items-center gap-4 mb-8">

              <img
                src={booking.avatar}
                alt={booking.customer}
                className="w-20 h-20 rounded-full object-cover"
              />

              <div>

                <h3 className="text-xl font-bold">
                  {booking.customer}
                </h3>

                <p className="text-gray-500 mt-1">
                  {booking.service}
                </p>

                <div className="mt-3">

                  <BookingStatusBadge
                    status={booking.status}
                  />

                </div>

              </div>

            </div>

            {/* Booking Information */}

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <Calendar
                  size={20}
                  className="text-blue-600"
                />

                <span>{booking.date}</span>

              </div>

              <div className="flex items-center gap-3">

                <Clock
                  size={20}
                  className="text-green-600"
                />

                <span>{booking.time}</span>

              </div>

              <div className="flex items-center gap-3">

                <MapPin
                  size={20}
                  className="text-red-500"
                />

                <span>{booking.address}</span>

              </div>

              <div className="flex items-center gap-3">

                <DollarSign
                  size={20}
                  className="text-emerald-600"
                />

                <span className="font-bold text-lg">
                  ${booking.amount}
                </span>

              </div>

            </div>            {/* Payment Information */}

            <div className="mt-8 bg-gray-50 rounded-xl p-5">

              <h4 className="font-semibold text-lg mb-4">
                Payment Information
              </h4>

              <div className="flex items-center justify-between">

                <span className="text-gray-600">
                  Payment Status
                </span>

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

              <div className="flex items-center justify-between mt-4">

                <span className="text-gray-600">
                  Total Amount
                </span>

                <span className="font-bold text-xl text-blue-600">
                  ${booking.amount}
                </span>

              </div>

            </div>

            {/* Customer Notes */}

            <div className="mt-8">

              <h4 className="font-semibold text-lg mb-3">
                Customer Notes
              </h4>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">

                <p className="text-gray-700 leading-7">

                  {booking.notes || "No additional notes provided."}

                </p>

              </div>

            </div>

          </div>

          {/* Right Column */}

          <div>

            <div className="bg-gray-50 rounded-2xl p-6">

              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Booking Progress
              </h3>

              <BookingTimeline
                status={booking.status}
              />

            </div>

            {/* Summary Card */}

            <div className="mt-6 bg-white border rounded-2xl p-6 shadow-sm">

              <h3 className="font-bold text-lg mb-5">
                Booking Summary
              </h3>

              <div className="space-y-4">

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Booking ID
                  </span>

                  <span className="font-semibold">
                    #{booking.id}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Service
                  </span>

                  <span className="font-semibold text-right">
                    {booking.service}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Customer
                  </span>

                  <span className="font-semibold">
                    {booking.customer}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Status
                  </span>

                  <BookingStatusBadge
                    status={booking.status}
                  />

                </div>

              </div>

            </div>

          </div>
                    {/* End Right Column */}

        </div>

        {/* Footer */}

        <div className="border-t p-6 flex flex-wrap justify-end gap-3">

          <button
            onClick={onClose}
            className="
              px-5
              py-2.5
              rounded-lg
              border
              hover:bg-gray-100
              transition
            "
          >
            Close
          </button>

          {booking.status === "Pending" && (
            <>
              <button
                className="
                  px-5
                  py-2.5
                  rounded-lg
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  transition
                "
              >
                Reject Booking
              </button>

              <button
                className="
                  px-5
                  py-2.5
                  rounded-lg
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  transition
                "
              >
                Accept Booking
              </button>
            </>
          )}

          {booking.status === "Accepted" && (
            <button
              className="
                px-5
                py-2.5
                rounded-lg
                bg-blue-600
                hover:bg-blue-700
                text-white
                transition
              "
            >
              Mark as In Progress
            </button>
          )}

          {booking.status === "In Progress" && (
            <button
              className="
                px-5
                py-2.5
                rounded-lg
                bg-emerald-600
                hover:bg-emerald-700
                text-white
                transition
              "
            >
              Mark as Completed
            </button>
          )}

          {booking.status === "Completed" && (
            <button
              disabled
              className="
                px-5
                py-2.5
                rounded-lg
                bg-green-100
                text-green-700
                cursor-not-allowed
              "
            >
              Booking Completed
            </button>
          )}

          {booking.status === "Cancelled" && (
            <button
              disabled
              className="
                px-5
                py-2.5
                rounded-lg
                bg-red-100
                text-red-700
                cursor-not-allowed
              "
            >
              Booking Cancelled
            </button>
          )}

        </div>

      </div>

    </div>

  );
}