import { useMemo, useState } from "react";
import { Plus } from "lucide-react";

import RequestCard from "./RequestCard";
import RequestModal from "./RequestModal";

export default function ServiceRequests() {

  // --------------------------
  // Mock Data
  // --------------------------

  const [requests, setRequests] = useState([
    {
      id: 1,
      buyer: "John David",
      avatar: "https://i.pravatar.cc/150?img=11",
      title: "Professional Photography",
      price: 150,
      status: "Pending",
      date: "Today",
      notes: "Need wedding photography for full day event.",
      rating: 4.8,
      reviews: 28,
    },
    {
      id: 2,
      buyer: "Sarah Williams",
      avatar: "https://i.pravatar.cc/150?img=5",
      title: "Website Development",
      price: 450,
      status: "Accepted",
      date: "Yesterday",
      notes: "Need ecommerce website with payment gateway.",
      rating: 4.9,
      reviews: 15,
    },
    {
      id: 3,
      buyer: "Alice Cooper",
      avatar: "https://i.pravatar.cc/150?img=9",
      title: "Graphic Design",
      price: 120,
      status: "Rejected",
      date: "2 Days Ago",
      notes: "Logo and branding kit required.",
      rating: 4.7,
      reviews: 40,
    },
    {
      id: 4,
      buyer: "Michael Jordan",
      avatar: "https://i.pravatar.cc/150?img=16",
      title: "UI/UX Design",
      price: 280,
      status: "Pending",
      date: "Today",
      notes: "Need complete mobile app design.",
      rating: 5.0,
      reviews: 90,
    },
    {
      id: 5,
      buyer: "Emily Stone",
      avatar: "https://i.pravatar.cc/150?img=32",
      title: "SEO Optimization",
      price: 300,
      status: "Pending",
      date: "3 Days Ago",
      notes: "Improve website ranking.",
      rating: 4.6,
      reviews: 18,
    },
    {
      id: 6,
      buyer: "Daniel Smith",
      avatar: "https://i.pravatar.cc/150?img=13",
      title: "Video Editing",
      price: 210,
      status: "Accepted",
      date: "Last Week",
      notes: "Need YouTube editing.",
      rating: 4.9,
      reviews: 35,
    },
  ]);

  // --------------------------
  // States
  // --------------------------

  const [statusFilter, setStatusFilter] = useState("All");

  const [selectedRequest, setSelectedRequest] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  // --------------------------
  // Filtering
  // --------------------------

  const filteredRequests = useMemo(() => {

    if (statusFilter === "All") return requests;

    return requests.filter(
      (item) => item.status === statusFilter
    );

  }, [requests, statusFilter]);

  // --------------------------
  // Handlers
  // --------------------------

  const handleView = (request) => {

    setSelectedRequest(request);

    setOpenModal(true);

  };

  const handleAccept = (id) => {

    setRequests((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: "Accepted" }
          : item
      )
    );

  };

  const handleReject = (id) => {

    setRequests((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: "Rejected" }
          : item
      )
    );

  };

  const handleMessage = (request) => {

    alert(`Open chat with ${request.buyer}`);

  };
    return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            Service Requests
          </h1>

          <p className="text-gray-500 mt-2">
            Manage incoming service requests from buyers.
          </p>

        </div>

        <button
          className="
            mt-4
            md:mt-0
            flex
            items-center
            gap-2
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-5
            py-3
            rounded-xl
            transition"
        >
          <Plus size={18} />

          New Listing

        </button>

      </div>

      {/* Status Tabs */}

      <div className="bg-white rounded-xl shadow p-2 flex flex-wrap gap-2">

        {[
          "All",
          "Pending",
          "Accepted",
          "Rejected",
        ].map((status) => (

          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-5 py-2 rounded-lg transition font-medium

              ${
                statusFilter === status
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }
            `}
          >
            {status}

            <span className="ml-2 text-sm">

              {status === "All"
                ? requests.length
                : requests.filter(
                    (item) => item.status === status
                  ).length}

            </span>

          </button>

        ))}

      </div>

      {/* Empty State */}

      {filteredRequests.length === 0 && (

        <div className="bg-white rounded-xl shadow p-12 text-center">

          <h2 className="text-2xl font-bold">

            No Requests Found

          </h2>

          <p className="text-gray-500 mt-3">

            There are currently no service requests in this category.

          </p>

        </div>

      )}

      {/* Request Cards */}

      {filteredRequests.length > 0 && (

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          {filteredRequests.map((request) => (

            <RequestCard

              key={request.id}

              request={request}

              onView={handleView}

              onAccept={handleAccept}

              onReject={handleReject}

              onMessage={handleMessage}

            />

          ))}

        </div>

      )}

      {/* Details Modal */}

      {openModal && selectedRequest && (

        <RequestModal

          request={selectedRequest}

          onClose={() => setOpenModal(false)}

          onAccept={handleAccept}

          onReject={handleReject}

          onMessage={handleMessage}

        />

      )}

            {/* Pagination */}

      {filteredRequests.length > 0 && (
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Results Info */}

          <p className="text-sm text-gray-600">
            Showing{" "}
            <span className="font-semibold">
              {filteredRequests.length}
            </span>{" "}
            request(s)
          </p>

          {/* Pagination Buttons */}

          <div className="flex items-center gap-2">

            <button
              disabled
              className="px-4 py-2 rounded-lg border bg-gray-100 text-gray-400 cursor-not-allowed"
            >
              Previous
            </button>

            <button className="w-10 h-10 rounded-lg bg-blue-600 text-white font-semibold">
              1
            </button>

            <button
              disabled
              className="px-4 py-2 rounded-lg border bg-gray-100 text-gray-400 cursor-not-allowed"
            >
              Next
            </button>

          </div>

        </div>
      )}

    </div>
  );
}