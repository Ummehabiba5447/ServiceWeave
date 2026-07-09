export default function BookingStatusBadge({ status }) {

  const statusStyles = {
    Pending: "bg-yellow-100 text-yellow-700",
    Accepted: "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
    Rejected: "bg-red-100 text-red-700",
    "In Progress": "bg-purple-100 text-purple-700",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        px-3
        py-1
        rounded-full
        text-sm
        font-semibold
        ${
          statusStyles[status] ||
          "bg-gray-100 text-gray-700"
        }
      `}
    >
      {status}
    </span>
  );
}