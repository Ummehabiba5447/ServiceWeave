import { Search, RotateCcw } from "lucide-react";

export default function BookingFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
}) {
  const statuses = [
    "All",
    "Pending",
    "Accepted",
    "Completed",
    "Cancelled",
  ];

  const handleClearFilters = () => {
    setSearch("");
    setStatusFilter("All");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5">

      <div className="grid gap-4 md:grid-cols-3">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3.5 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search by customer or service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              border
              rounded-xl
              pl-10
              pr-4
              py-3
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

        </div>

        {/* Status Filter */}

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
          className="
            border
            rounded-xl
            px-4
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        >
          {statuses.map((status) => (
            <option
              key={status}
              value={status}
            >
              {status}
            </option>
          ))}
        </select>

        {/* Clear Button */}

        <button
          onClick={handleClearFilters}
          className="
            flex
            items-center
            justify-center
            gap-2
            bg-gray-100
            hover:bg-gray-200
            rounded-xl
            py-3
            transition
          "
        >
          <RotateCcw size={18} />

          Clear Filters

        </button>

      </div>

    </div>
  );
}