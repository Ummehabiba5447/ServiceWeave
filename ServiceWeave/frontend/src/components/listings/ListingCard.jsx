import {
  Eye,
  Pencil,
  Trash2,
  Package,
  Briefcase,
  Calendar,
} from "lucide-react";

export default function ListingCard({
  listing,
  view,
  onView,
  onEdit,
  onDelete,
}) {
  const statusColor = {
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-gray-100 text-gray-700",
    Sold: "bg-red-100 text-red-700",
  };

  // -------------------------
  // LIST VIEW
  // -------------------------

  if (view === "list") {
    return (
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col md:flex-row gap-5">

        {/* Image */}

        <img
          src={listing.image}
          alt={listing.title}
          className="w-full md:w-56 h-44 object-cover rounded-lg"
        />

        {/* Details */}

        <div className="flex-1 flex flex-col justify-between">

          <div>

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-bold text-gray-800">
                {listing.title}
              </h2>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor[listing.status]}`}
              >
                {listing.status}
              </span>

            </div>

            <div className="flex items-center gap-2 mt-3 text-gray-500">

              {listing.type === "Product" ? (
                <Package size={18} />
              ) : (
                <Briefcase size={18} />
              )}

              <span>{listing.type}</span>

            </div>

            <div className="mt-3 text-2xl font-bold text-blue-600">
              ${listing.price}
            </div>

            <div className="mt-3 flex flex-wrap gap-5 text-gray-500">

              <span className="flex items-center gap-1">
                <Eye size={16} />
                {listing.views} Views
              </span>

              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {listing.created}
              </span>

            </div>

          </div>

          {/* Actions */}

          <div className="flex gap-3 mt-5">

            <button
              onClick={() => onView(listing)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              <Eye size={16} />
              View
            </button>

            <button
              onClick={() => onEdit(listing)}
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
            >
              <Pencil size={16} />
              Edit
            </button>

            <button
              onClick={() => onDelete(listing)}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              <Trash2 size={16} />
              Delete
            </button>

          </div>

        </div>

      </div>
    );
  }

  // -------------------------
  // GRID VIEW
  // -------------------------

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">

      {/* Image */}

      <img
        src={listing.image}
        alt={listing.title}
        className="w-full h-52 object-cover"
      />

      {/* Body */}

      <div className="p-5">

        <div className="flex justify-between items-start">

          <h2 className="font-bold text-lg text-gray-800 line-clamp-2">
            {listing.title}
          </h2>

          <span
            className={`text-xs px-3 py-1 rounded-full ${statusColor[listing.status]}`}
          >
            {listing.status}
          </span>

        </div>

        <div className="mt-4 flex items-center gap-2 text-gray-500">

          {listing.type === "Product" ? (
            <Package size={18} />
          ) : (
            <Briefcase size={18} />
          )}

          <span>{listing.type}</span>

        </div>

        <div className="mt-4 text-3xl font-bold text-blue-600">
          ${listing.price}
        </div>

        <div className="mt-4 flex justify-between text-sm text-gray-500">

          <span className="flex items-center gap-1">

            <Eye size={15} />

            {listing.views}

          </span>

          <span className="flex items-center gap-1">

            <Calendar size={15} />

            {listing.created}

          </span>

        </div>

        {/* Buttons */}

        <div className="grid grid-cols-3 gap-2 mt-6">

          <button
            onClick={() => onView(listing)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            <Eye className="mx-auto" size={18} />
          </button>

          <button
            onClick={() => onEdit(listing)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg transition"
          >
            <Pencil className="mx-auto" size={18} />
          </button>

          <button
            onClick={() => onDelete(listing)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            <Trash2 className="mx-auto" size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}