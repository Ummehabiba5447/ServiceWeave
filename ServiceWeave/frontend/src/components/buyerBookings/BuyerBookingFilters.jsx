import { Search, Calendar, ArrowUpDown, RotateCcw } from "lucide-react";

export default function BuyerBookingFilters({
  search,
  setSearch,
}) {

  return (

    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-2xl
        p-5
        shadow-sm
      "
    >

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search bookings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              py-3
              pl-11
              pr-4
              text-sm
              focus:border-blue-500
              focus:outline-none
              focus:ring-2
              focus:ring-blue-200
            "
          />

        </div>

        {/* Date Filter */}

        <div className="relative">

          <Calendar
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="date"
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              py-3
              pl-11
              pr-4
              text-sm
              focus:border-blue-500
              focus:outline-none
              focus:ring-2
              focus:ring-blue-200
            "
          />

        </div>

        {/* Sort */}

        <div className="relative">

          <ArrowUpDown
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <select
            className="
              w-full
              appearance-none
              rounded-xl
              border
              border-slate-300
              py-3
              pl-11
              pr-4
              text-sm
              focus:border-blue-500
              focus:outline-none
              focus:ring-2
              focus:ring-blue-200
            "
            defaultValue="Newest"
          >
            <option>Newest</option>
            <option>Oldest</option>
            <option>Highest Price</option>
            <option>Lowest Price</option>
          </select>

        </div>

        {/* Reset */}

        <button
          type="button"
          onClick={() => setSearch("")}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-slate-300
            py-3
            text-sm
            font-medium
            text-slate-700
            transition
            hover:bg-slate-100
          "
        >
          <RotateCcw size={18} />

          Reset Filters

        </button>

      </div>

    </div>

  );

}