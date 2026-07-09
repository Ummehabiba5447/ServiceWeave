import {
  Calendar,
  DollarSign,
  MessageCircle,
  Eye,
  XCircle,
  Star,
} from "lucide-react";

import BuyerBookingStatusBadge from "./BuyerBookingStatusBadge";
import BuyerBookingTimeline from "./BuyerBookingTimeline";

export default function BuyerBookingCard({ booking }) {

  const canCancel =
    booking.status === "Pending" ||
    booking.status === "Accepted";

  const canReview =
    booking.status === "Completed";

  return (

    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-2xl
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
        overflow-hidden
      "
    >

      <div className="p-6">

        <div className="flex flex-col lg:flex-row gap-6">

          {/* Image */}

          <img
            src={booking.image}
            alt={booking.title}
            className="
              w-full
              lg:w-56
              h-48
              lg:h-40
              object-cover
              rounded-xl
            "
          />

          {/* Content */}

          <div className="flex-1">

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

              <div>

                <h2 className="text-xl font-bold text-slate-900">
                  {booking.title}
                </h2>

                <p className="mt-2 text-slate-500">
                  Seller:
                  <span className="font-medium text-slate-700 ml-1">
                    {booking.seller}
                  </span>
                </p>

              </div>

              <BuyerBookingStatusBadge
                status={booking.status}
              />

            </div>

            {/* Booking Info */}

            <div className="grid sm:grid-cols-2 gap-4 mt-6">

              <div className="flex items-center gap-3">

                <Calendar
                  size={18}
                  className="text-blue-600"
                />

                <div>

                  <p className="text-xs text-slate-500">
                    Booking Date
                  </p>

                  <p className="font-medium">
                    {booking.date}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <DollarSign
                  size={18}
                  className="text-green-600"
                />

                <div>

                  <p className="text-xs text-slate-500">
                    Total Price
                  </p>

                  <p className="font-semibold text-green-600">
                    {booking.price}
                  </p>

                </div>

              </div>

            </div>

            {/* Timeline */}

            <div className="mt-8">

              <BuyerBookingTimeline
                status={booking.status}
              />

            </div>            {/* Action Buttons */}

            <div className="mt-8 flex flex-wrap gap-3">

              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-700
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition
                "
              >
                <Eye size={18} />

                View Details

              </button>

              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-300
                  hover:bg-slate-100
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-slate-700
                  transition
                "
              >
                <MessageCircle size={18} />

                Message Seller

              </button>

              {canCancel && (

                <button
                  type="button"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-red-600
                    hover:bg-red-700
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-white
                    transition
                  "
                >
                  <XCircle size={18} />

                  Cancel Booking

                </button>

              )}

              {canReview && (

                <button
                  type="button"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-amber-500
                    hover:bg-amber-600
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-white
                    transition
                  "
                >
                  <Star size={18} />

                  Leave Review

                </button>

              )}

            </div>          </div>

        </div>

      </div>

    </div>

  );

}