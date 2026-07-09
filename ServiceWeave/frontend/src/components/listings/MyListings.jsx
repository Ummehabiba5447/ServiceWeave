import { useMemo, useState } from "react";
import {
  Plus,
  Grid3X3,
  List,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import ListingFilters from "./ListingFilters";
import ListingCard from "./ListingCard";

export default function MyListings() {

  // ----------------------------
  // Mock Listings
  // ----------------------------

  const [listings] = useState([
    {
      id: 1,
      title: "Professional Photography",
      type: "Service",
      status: "Active",
      price: 150,
      views: 235,
      created: "2 weeks ago",
      image: "https://picsum.photos/400/300?1",
    },
    {
      id: 2,
      title: "Gaming Laptop",
      type: "Product",
      status: "Sold",
      price: 950,
      views: 420,
      created: "1 month ago",
      image: "https://picsum.photos/400/300?2",
    },
    {
      id: 3,
      title: "Website Development",
      type: "Service",
      status: "Active",
      price: 450,
      views: 610,
      created: "5 days ago",
      image: "https://picsum.photos/400/300?3",
    },
    {
      id: 4,
      title: "Graphic Design",
      type: "Service",
      status: "Inactive",
      price: 120,
      views: 80,
      created: "3 weeks ago",
      image: "https://picsum.photos/400/300?4",
    },
    {
      id: 5,
      title: "Wireless Headphones",
      type: "Product",
      status: "Active",
      price: 85,
      views: 195,
      created: "4 days ago",
      image: "https://picsum.photos/400/300?5",
    },
    {
      id: 6,
      title: "Mobile App UI Design",
      type: "Service",
      status: "Active",
      price: 250,
      views: 510,
      created: "Yesterday",
      image: "https://picsum.photos/400/300?6",
    },
  ]);

  // ----------------------------
  // Filters
  // ----------------------------

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Most Recent");
  const [view, setView] = useState("grid");

  // ----------------------------
  // Pagination
  // ----------------------------

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

    // ----------------------------
  // Filter + Search + Sort
  // ----------------------------

  const filteredListings = useMemo(() => {
    let data = [...listings];

    // Search
    if (search.trim() !== "") {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Status Filter
    if (statusFilter !== "All") {
      data = data.filter(
        (item) => item.status === statusFilter
      );
    }

    // Type Filter
    if (typeFilter !== "All") {
      data = data.filter(
        (item) => item.type === typeFilter
      );
    }

    // Sorting
    switch (sortBy) {
      case "Highest Price":
        data.sort((a, b) => b.price - a.price);
        break;

      case "Lowest Price":
        data.sort((a, b) => a.price - b.price);
        break;

      case "Most Viewed":
        data.sort((a, b) => b.views - a.views);
        break;

      case "Most Recent":
      default:
        data.sort((a, b) => b.id - a.id);
        break;
    }

    return data;
  }, [
    listings,
    search,
    statusFilter,
    typeFilter,
    sortBy,
  ]);

  // ----------------------------
  // Pagination
  // ----------------------------

  const totalPages = Math.ceil(
    filteredListings.length / itemsPerPage
  );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const currentListings = filteredListings.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // ----------------------------
  // Actions
  // ----------------------------

  const handleCreate = () => {
    alert("Create New Listing");
  };

  const handleEdit = (listing) => {
    alert(`Edit: ${listing.title}`);
  };

  const handleDelete = (listing) => {
    const confirmDelete = window.confirm(
      `Delete "${listing.title}"?`
    );

    if (confirmDelete) {
      alert("Listing deleted.");
    }
  };

  const handleView = (listing) => {
    alert(`Viewing ${listing.title}`);
  };
    return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            My Listings
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all your products and services.
          </p>

        </div>

        <button
          onClick={handleCreate}
          className="
            mt-4 md:mt-0
            flex
            items-center
            gap-2
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-5
            py-3
            rounded-xl
            shadow-md
            transition
          "
        >
          <Plus size={18} />

          Create New Listing
        </button>

      </div>

      {/* Filters */}

      <ListingFilters
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Grid/List Toggle */}

      <div className="flex justify-end">

        <div className="flex rounded-lg overflow-hidden border">

          <button
            onClick={() => setView("grid")}
            className={`p-3 ${
              view === "grid"
                ? "bg-blue-600 text-white"
                : "bg-white"
            }`}
          >
            <Grid3X3 size={18} />
          </button>

          <button
            onClick={() => setView("list")}
            className={`p-3 ${
              view === "list"
                ? "bg-blue-600 text-white"
                : "bg-white"
            }`}
          >
            <List size={18} />
          </button>

        </div>

      </div>

      {/* Empty State */}

      {currentListings.length === 0 && (

        <div className="bg-white rounded-xl shadow p-12 text-center">

          <h2 className="text-2xl font-bold">
            No Listings Found
          </h2>

          <p className="text-gray-500 mt-3">
            Try changing your filters or create your
            first listing.
          </p>

          <button
            onClick={handleCreate}
            className="
            mt-6
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-lg
            hover:bg-blue-700"
          >
            Create Listing
          </button>

        </div>

      )}

      {/* Listing Grid */}

      {currentListings.length > 0 && (

        <div
          className={
            view === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              : "space-y-5"
          }
        >

          {currentListings.map((listing) => (

            <ListingCard

              key={listing.id}

              listing={listing}

              view={view}

              onEdit={handleEdit}

              onDelete={handleDelete}

              onView={handleView}

            />

          ))}

        </div>

      )}  
            {/* Pagination */}

      {currentListings.length > 0 && (
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Showing Results */}

          <p className="text-sm text-gray-600">
            Showing{" "}
            <span className="font-semibold">
              {startIndex + 1}
            </span>{" "}
            -
            <span className="font-semibold">
              {" "}
              {Math.min(
                startIndex + itemsPerPage,
                filteredListings.length
              )}
            </span>{" "}
            of{" "}
            <span className="font-semibold">
              {filteredListings.length}
            </span>{" "}
            listings
          </p>

          {/* Pagination Controls */}

          <div className="flex items-center gap-2">

            {/* Previous */}

            <button
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage((prev) => prev - 1)
              }
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition
                ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "hover:bg-blue-600 hover:text-white"
                }`}
            >
              <ChevronLeft size={18} />

              Previous
            </button>

            {/* Page Numbers */}

            {Array.from(
              { length: totalPages },
              (_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setCurrentPage(index + 1)
                  }
                  className={`w-10 h-10 rounded-lg font-medium transition
                    ${
                      currentPage === index + 1
                        ? "bg-blue-600 text-white"
                        : "bg-white border hover:bg-gray-100"
                    }`}
                >
                  {index + 1}
                </button>
              )
            )}

            {/* Next */}

            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => prev + 1)
              }
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition
                ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "hover:bg-blue-600 hover:text-white"
                }`}
            >
              Next

              <ChevronRight size={18} />

            </button>

          </div>

        </div>
      )}

    </div>
  );
}