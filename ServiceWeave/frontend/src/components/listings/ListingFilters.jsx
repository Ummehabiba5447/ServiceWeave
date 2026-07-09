import { Search, Filter, ArrowUpDown } from "lucide-react";

export default function ListingFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  typeFilter,
  setTypeFilter,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5">

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        {/* Search */}

        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Search Listing
          </label>

          <div className="relative">

            <Search
              size={18}
              className="absolute left-3 top-3 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                border
                rounded-lg
                py-2.5
                pl-10
                pr-3
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

          </div>

        </div>

        {/* Status */}

        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Status
          </label>

          <div className="relative">

            <Filter
              size={18}
              className="absolute left-3 top-3 text-gray-400"
            />

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
              className="
                w-full
                border
                rounded-lg
                py-2.5
                pl-10
                pr-3
                bg-white
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            >
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Sold</option>
            </select>

          </div>

        </div>

        {/* Type */}

        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Listing Type
          </label>

          <div className="relative">

            <Filter
              size={18}
              className="absolute left-3 top-3 text-gray-400"
            />

            <select
              value={typeFilter}
              onChange={(e) =>
                setTypeFilter(e.target.value)
              }
              className="
                w-full
                border
                rounded-lg
                py-2.5
                pl-10
                pr-3
                bg-white
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            >
              <option>All</option>
              <option>Product</option>
              <option>Service</option>
            </select>

          </div>

        </div>

        {/* Sort */}

        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Sort By
          </label>

          <div className="relative">

            <ArrowUpDown
              size={18}
              className="absolute left-3 top-3 text-gray-400"
            />

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
              className="
                w-full
                border
                rounded-lg
                py-2.5
                pl-10
                pr-3
                bg-white
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            >
              <option>Most Recent</option>
              <option>Most Viewed</option>
              <option>Highest Price</option>
              <option>Lowest Price</option>
            </select>

          </div>

        </div>

      </div>

      {/* Active Filters */}

      <div className="flex flex-wrap gap-2 mt-6">

        {search && (
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            Search: {search}
          </span>
        )}

        {statusFilter !== "All" && (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            Status: {statusFilter}
          </span>
        )}

        {typeFilter !== "All" && (
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            Type: {typeFilter}
          </span>
        )}

        {sortBy !== "Most Recent" && (
          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
            Sort: {sortBy}
          </span>
        )}

      </div>

    </div>
  );
}