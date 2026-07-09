import {
  Calendar,
  MessageCircle,
  MapPin,
} from "lucide-react";

const bookings = [
  {
    id: 1,
    image: "https://picsum.photos/300/200?random=21",
    title: "House Cleaning Service",
    seller: "CleanPro Services",
    status: "In Progress",
    date: "July 10, 2026",
  },
  {
    id: 2,
    image: "https://picsum.photos/300/200?random=22",
    title: "Website Development",
    seller: "Tech Solutions",
    status: "Accepted",
    date: "July 12, 2026",
  },
  {
    id: 3,
    image: "https://picsum.photos/300/200?random=23",
    title: "Photography Session",
    seller: "Lens Studio",
    status: "Pending",
    date: "July 15, 2026",
  },
];

const statusClasses = {
  Pending: "bg-yellow-100 text-yellow-700",
  Accepted: "bg-blue-100 text-blue-700",
  "In Progress": "bg-green-100 text-green-700",
};

export default function ActiveBookings() {

  return (

    <div className="space-y-5">

      {bookings.map((booking) => (

        <div
          key={booking.id}
          className="
            rounded-2xl
            border
            border-slate-200
            p-4
            hover:shadow-md
            transition
          "
        >

          <div className="flex gap-4">

            <img
              src={booking.image}
              alt={booking.title}
              className="
                h-24
                w-24
                rounded-xl
                object-cover
              "
            />

            <div className="flex-1">

              <div className="flex items-start justify-between">

                <div>

                  <h3 className="font-semibold text-slate-900">
                    {booking.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {booking.seller}
                  </p>

                </div>

                <span
                  className={`
                    rounded-full
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    ${statusClasses[booking.status]}
                  `}
                >
                  {booking.status}
                </span>

              </div>

              <div className="mt-4 flex items-center gap-5 text-sm text-slate-500">

                <div className="flex items-center gap-2">

                  <Calendar size={16} />

                  {booking.date}

                </div>

                <div className="flex items-center gap-2">

                  <MapPin size={16} />

                  Online

                </div>

              </div>              {/* Action Buttons */}

              <div className="mt-5 flex flex-wrap gap-3">

                <button
                  type="button"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    hover:bg-blue-700
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    transition
                  "
                >
                  <MapPin size={16} />

                  Track Status

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
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-slate-700
                    transition
                  "
                >
                  <MessageCircle size={16} />

                  Message Seller

                </button>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  );

}