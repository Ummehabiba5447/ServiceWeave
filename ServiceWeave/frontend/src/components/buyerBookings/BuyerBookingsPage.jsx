import { useMemo, useState } from "react";

import BuyerBookingCard from "./BuyerBookingCard";
import BuyerBookingFilters from "./BuyerBookingFilters";

const bookingData = [
  {
    id: 1,
    title: "Professional Home Cleaning",
    seller: "CleanPro Services",
    image: "https://picsum.photos/300/200?random=31",
    status: "Pending",
    price: "$120",
    date: "09 Jul 2026",
  },
  {
    id: 2,
    title: "Website Development",
    seller: "Tech Solutions",
    image: "https://picsum.photos/300/200?random=32",
    status: "Accepted",
    price: "$650",
    date: "08 Jul 2026",
  },
  {
    id: 3,
    title: "Photography Session",
    seller: "Lens Studio",
    image: "https://picsum.photos/300/200?random=33",
    status: "In Progress",
    price: "$180",
    date: "06 Jul 2026",
  },
  {
    id: 4,
    title: "Graphic Design",
    seller: "Creative Hub",
    image: "https://picsum.photos/300/200?random=34",
    status: "Completed",
    price: "$95",
    date: "02 Jul 2026",
  },
  {
    id: 5,
    title: "Plumbing Repair",
    seller: "QuickFix Experts",
    image: "https://picsum.photos/300/200?random=35",
    status: "Cancelled",
    price: "$80",
    date: "30 Jun 2026",
  },
];

const tabs = [
  "All",
  "Pending",
  "Accepted",
  "In Progress",
  "Completed",
  "Cancelled",
];

export default function BuyerBookingsPage() {

  const [activeTab, setActiveTab] = useState("All");

  const [search, setSearch] = useState("");

  const filteredBookings = useMemo(() => {

    return bookingData.filter((booking) => {

      const matchesTab =
        activeTab === "All" ||
        booking.status === activeTab;

      const matchesSearch =
        booking.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        booking.seller
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesTab && matchesSearch;

    });

  }, [activeTab, search]);

  return (

    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <h1 className="text-3xl font-bold text-slate-900">
            My Bookings
          </h1>

          <p className="mt-2 text-slate-500">
            Track and manage all your service bookings.
          </p>

        </div>

      </div>

      {/* Filters */}

      <BuyerBookingFilters
        search={search}
        setSearch={setSearch}
      />

      {/* Status Tabs */}

      <div className="flex gap-3 overflow-x-auto pb-2">

        {tabs.map((tab) => (

          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              whitespace-nowrap
              rounded-xl
              px-5
              py-2.5
              text-sm
              font-medium
              transition

              ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }
            `}
          >
            {tab}
          </button>

        ))}

      </div>      {/* Results */}

      <div className="flex items-center justify-between">

        <p className="text-sm text-slate-500">

          Showing

          <span className="mx-1 font-semibold text-slate-800">
            {filteredBookings.length}
          </span>

          bookings

        </p>

      </div>

      {/* Booking Cards */}

      <div className="space-y-5">

        {filteredBookings.length > 0 ? (

          filteredBookings.map((booking) => (

            <BuyerBookingCard
              key={booking.id}
              booking={booking}
            />

          ))

        ) : (

          <div
            className="
              rounded-2xl
              border
              border-dashed
              border-slate-300
              bg-white
              py-16
              px-6
              text-center
            "
          >

            <div className="mx-auto max-w-md">

              <div
                className="
                  mx-auto
                  mb-5
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-100
                "
              >

                📭

              </div>

              <h3 className="text-xl font-semibold text-slate-800">

                No Bookings Found

              </h3>

              <p className="mt-3 text-slate-500">

                We couldn't find any bookings matching your
                current filters.

              </p>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("All");
                  setSearch("");
                }}
                className="
                  mt-6
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-3
                  font-medium
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                Clear Filters
              </button>

            </div>

          </div>

        )}

      </div>      {/* Pagination */}

      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">

        <p className="text-sm text-slate-500">
          Showing
          <span className="mx-1 font-semibold text-slate-800">
            1–5
          </span>
          of
          <span className="mx-1 font-semibold text-slate-800">
            {filteredBookings.length}
          </span>
          bookings
        </p>

        <div className="flex items-center gap-2">

          <button
            type="button"
            disabled
            className="
              rounded-xl
              border
              border-slate-300
              px-4
              py-2
              text-sm
              font-medium
              text-slate-400
              cursor-not-allowed
            "
          >
            Previous
          </button>

          {[1, 2, 3].map((page) => (

            <button
              key={page}
              type="button"
              className={`
                h-10
                w-10
                rounded-xl
                text-sm
                font-semibold
                transition

                ${
                  page === 1
                    ? "bg-blue-600 text-white"
                    : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                }
              `}
            >
              {page}
            </button>

          ))}

          <button
            type="button"
            className="
              rounded-xl
              border
              border-slate-300
              px-4
              py-2
              text-sm
              font-medium
              text-slate-700
              transition
              hover:bg-slate-100
            "
          >
            Next
          </button>

        </div>

      </div>    </div>

  );

}