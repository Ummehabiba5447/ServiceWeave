export default function BuyerBookingStatusBadge({ status }) {

  const styles = {
    Pending:
      "bg-yellow-100 text-yellow-700 border-yellow-200",

    Accepted:
      "bg-blue-100 text-blue-700 border-blue-200",

    "In Progress":
      "bg-purple-100 text-purple-700 border-purple-200",

    Completed:
      "bg-green-100 text-green-700 border-green-200",

    Cancelled:
      "bg-red-100 text-red-700 border-red-200",
  };

  return (

    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-3
        py-1
        text-xs
        font-semibold
        whitespace-nowrap
        ${
          styles[status] ||
          "bg-slate-100 text-slate-700 border-slate-200"
        }
      `}
    >
      {status}
    </span>

  );

}