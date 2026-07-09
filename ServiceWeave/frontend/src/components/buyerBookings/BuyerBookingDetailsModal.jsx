import { X, Calendar, DollarSign, User, MessageCircle } from "lucide-react";
import BuyerBookingTimeline from "./BuyerBookingTimeline";
import BuyerBookingStatusBadge from "./BuyerBookingStatusBadge";

export default function BuyerBookingDetailsModal({
  open,
  onClose,
  booking,
}) {
  if (!open || !booking) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      <div className="w-full max-w-4xl rounded-2xl bg-white shadow-2xl overflow-hidden">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              Booking Details
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              View complete booking information.
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100 transition"
          >
            <X size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="max-h-[80vh] overflow-y-auto p-6">

          <div className="grid gap-6 lg:grid-cols-3">

            {/* Left */}

            <div className="lg:col-span-2">

              <img
                src={booking.image}
                alt={booking.title}
                className="h-64 w-full rounded-xl object-cover"
              />

              <div className="mt-6 flex items-start justify-between gap-4">

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {booking.title}
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Seller:
                    <span className="ml-1 font-medium text-slate-700">
                      {booking.seller}
                    </span>
                  </p>

                </div>

                <BuyerBookingStatusBadge
                  status={booking.status}
                />

              </div>

              <div className="mt-8">

                <BuyerBookingTimeline
                  status={booking.status}
                />

              </div>

            </div>

            {/* Right Sidebar */}

            <div className="space-y-5"></div>              {/* Booking Information */}

              <div className="rounded-2xl border border-slate-200 p-5">

                <h4 className="mb-4 text-lg font-semibold text-slate-900">
                  Booking Information
                </h4>

                <div className="space-y-4">

                  <div className="flex items-center gap-3">

                    <Calendar
                      size={18}
                      className="text-blue-600"
                    />

                    <div>

                      <p className="text-xs text-slate-500">
                        Booking Date
                      </p>

                      <p className="font-medium text-slate-800">
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
                        Total Paid
                      </p>

                      <p className="font-semibold text-green-600">
                        {booking.price}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* Seller Information */}

              <div className="rounded-2xl border border-slate-200 p-5">

                <h4 className="mb-4 text-lg font-semibold text-slate-900">
                  Seller
                </h4>

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">

                    <User
                      size={22}
                      className="text-blue-600"
                    />

                  </div>

                  <div>

                    <h5 className="font-semibold text-slate-900">
                      {booking.seller}
                    </h5>

                    <p className="text-sm text-slate-500">
                      Verified Seller
                    </p>

                  </div>

                </div>

                <button
                  type="button"
                  className="
                    mt-5
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-blue-700
                  "
                >
                  <MessageCircle size={18} />

                  Message Seller

                </button>

              </div>

              {/* Payment Summary */}

              <div className="rounded-2xl border border-slate-200 p-5">

                <h4 className="mb-4 text-lg font-semibold text-slate-900">
                  Payment Summary
                </h4>

                <div className="space-y-3 text-sm">

                  <div className="flex justify-between">

                    <span className="text-slate-500">
                      Service Price
                    </span>

                    <span>{booking.price}</span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-slate-500">
                      Platform Fee
                    </span>

                    <span>$10</span>

                  </div>

                  <div className="border-t border-slate-200 pt-3 flex justify-between font-semibold text-slate-900">

                    <span>Total Paid</span>

                    <span>{booking.price}</span>

                  </div>

                </div>

              </div>            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="flex flex-col-reverse gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 sm:flex-row sm:justify-end">

          <button
            type="button"
            onClick={onClose}
            className="
              rounded-xl
              border
              border-slate-300
              px-5
              py-2.5
              text-sm
              font-medium
              text-slate-700
              transition
              hover:bg-slate-100
            "
          >
            Close
          </button>

          <button
            type="button"
            className="
              rounded-xl
              bg-blue-600
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              transition
              hover:bg-blue-700
            "
          >
            Download Invoice
          </button>

        </div>

      </div>

    

  );

}