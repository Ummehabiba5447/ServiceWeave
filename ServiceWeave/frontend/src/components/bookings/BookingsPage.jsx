import { useMemo, useState } from "react";
import { CalendarDays } from "lucide-react";

import BookingFilters from "./BookingFilters";
import BookingCard from "./BookingCard";
import BookingDetailsModal from "./BookingDetailsModal";

export default function BookingsPage() {

  // ============================
  // Dummy Booking Data
  // ============================

  const [bookings] = useState([
    {
      id: 1001,
      customer: "John David",
      avatar: "https://i.pravatar.cc/150?img=12",
      service: "Website Development",
      date: "10 Jul 2026",
      time: "10:00 AM",
      amount: 250,
      status: "Pending",
      address: "Rawalpindi, Pakistan",
      payment: "Paid",
      notes: "Need responsive website within 5 days.",
    },

    {
      id: 1002,
      customer: "Sarah Williams",
      avatar: "https://i.pravatar.cc/150?img=24",
      service: "Logo Design",
      date: "11 Jul 2026",
      time: "3:00 PM",
      amount: 80,
      status: "Accepted",
      address: "Lahore, Pakistan",
      payment: "Paid",
      notes: "Modern minimal logo.",
    },

    {
      id: 1003,
      customer: "Emily Stone",
      avatar: "https://i.pravatar.cc/150?img=36",
      service: "SEO Optimization",
      date: "12 Jul 2026",
      time: "1:00 PM",
      amount: 150,
      status: "Completed",
      address: "Islamabad, Pakistan",
      payment: "Paid",
      notes: "Improve Google ranking.",
    },

    {
      id: 1004,
      customer: "Michael Brown",
      avatar: "https://i.pravatar.cc/150?img=48",
      service: "Mobile App UI",
      date: "13 Jul 2026",
      time: "9:30 AM",
      amount: 300,
      status: "Cancelled",
      address: "Karachi, Pakistan",
      payment: "Refunded",
      notes: "Client cancelled order.",
    },
  ]);

  // ============================
  // States
  // ============================

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [search, setSearch] = useState("");

  const [selectedBooking, setSelectedBooking] =
    useState(null);

  const [showDetails, setShowDetails] =
    useState(false);
      // ============================
  // Filter Bookings
  // ============================

  const filteredBookings = useMemo(() => {

    return bookings.filter((booking) => {

      const matchesStatus =
        statusFilter === "All"
          ? true
          : booking.status === statusFilter;

      const matchesSearch =
        booking.customer
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        booking.service
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesStatus && matchesSearch;

    });

  }, [bookings, statusFilter, search]);

  // ============================
  // Statistics
  // ============================

  const totalBookings = bookings.length;

  const pendingBookings = bookings.filter(
    (booking) => booking.status === "Pending"
  ).length;

  const completedBookings = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  const totalRevenue = bookings
    .filter((booking) => booking.status === "Completed")
    .reduce(
      (sum, booking) => sum + booking.amount,
      0
    );

  return (

    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center gap-3">

        <CalendarDays
          size={34}
          className="text-blue-600"
        />

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            Bookings
          </h1>

          <p className="text-gray-500">
            Manage all customer bookings.
          </p>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="bg-white rounded-xl shadow p-6">

          <p className="text-gray-500 text-sm">
            Total Bookings
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {totalBookings}
          </h2>

        </div>

        <div className="bg-yellow-50 rounded-xl shadow p-6">

          <p className="text-yellow-700 text-sm">
            Pending
          </p>

          <h2 className="text-3xl font-bold mt-2 text-yellow-700">
            {pendingBookings}
          </h2>

        </div>

        <div className="bg-green-50 rounded-xl shadow p-6">

          <p className="text-green-700 text-sm">
            Completed
          </p>

          <h2 className="text-3xl font-bold mt-2 text-green-700">
            {completedBookings}
          </h2>

        </div>

        <div className="bg-blue-50 rounded-xl shadow p-6">

          <p className="text-blue-700 text-sm">
            Revenue
          </p>

          <h2 className="text-3xl font-bold mt-2 text-blue-700">
            ${totalRevenue}
          </h2>

        </div>

      </div>

      {/* Filters */}

      <BookingFilters
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
            {/* ============================
            Bookings List
      ============================ */}

      {filteredBookings.length > 0 ? (

        <div className="grid gap-6 lg:grid-cols-2">

          {filteredBookings.map((booking) => (

            <BookingCard
              key={booking.id}
              booking={booking}
              onView={() => {
                setSelectedBooking(booking);
                setShowDetails(true);
              }}
            />

          ))}

        </div>

      ) : (

        <div className="bg-white rounded-xl shadow p-12 text-center">

          <CalendarDays
            size={60}
            className="mx-auto text-gray-300"
          />

          <h2 className="text-2xl font-bold text-gray-700 mt-6">
            No Bookings Found
          </h2>

          <p className="text-gray-500 mt-2">
            There are no bookings matching your current
            search or filter.
          </p>

          <button
            onClick={() => {
              setSearch("");
              setStatusFilter("All");
            }}
            className="
              mt-6
              px-6
              py-3
              bg-blue-600
              hover:bg-blue-700
              text-white
              rounded-lg
              transition
            "
          >
            Clear Filters
          </button>

        </div>

      )}

            {/* ============================
            Booking Details Modal
      ============================ */}

      {showDetails && selectedBooking && (

        <BookingDetailsModal
          booking={selectedBooking}
          onClose={() => {
            setShowDetails(false);
            setSelectedBooking(null);
          }}
        />

      )}

    </div>

  );
}