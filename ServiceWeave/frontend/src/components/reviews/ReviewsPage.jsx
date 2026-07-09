import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import RatingSummary from "./RatingSummary";
import ReviewCard from "./ReviewCard";
import ReplyReviewModal from "./ReplyReviewModal";

export default function ReviewsPage() {

  // -----------------------------
  // Mock Reviews
  // -----------------------------

  const [reviews, setReviews] = useState([
    {
      id: 1,
      customer: "John David",
      avatar: "https://i.pravatar.cc/150?img=11",
      service: "Wedding Photography",
      rating: 5,
      review:
        "Excellent service! Very professional and delivered beyond expectations.",
      date: "Today",
      reply: "",
    },
    {
      id: 2,
      customer: "Sarah Williams",
      avatar: "https://i.pravatar.cc/150?img=5",
      service: "Website Development",
      rating: 4,
      review:
        "Very good communication and quality work. Highly recommended.",
      date: "Yesterday",
      reply: "Thank you for your valuable feedback!",
    },
    {
      id: 3,
      customer: "Emily Stone",
      avatar: "https://i.pravatar.cc/150?img=32",
      service: "Graphic Design",
      rating: 5,
      review:
        "Amazing logo design. Fast delivery and excellent creativity.",
      date: "2 Days Ago",
      reply: "",
    },
    {
      id: 4,
      customer: "Daniel Smith",
      avatar: "https://i.pravatar.cc/150?img=13",
      service: "Video Editing",
      rating: 3,
      review:
        "Good work overall, but delivery was slightly delayed.",
      date: "Last Week",
      reply: "",
    },
    {
      id: 5,
      customer: "Alice Cooper",
      avatar: "https://i.pravatar.cc/150?img=9",
      service: "SEO Optimization",
      rating: 5,
      review:
        "My website ranking improved significantly. Great experience!",
      date: "Last Week",
      reply: "",
    },
    {
      id: 6,
      customer: "Michael Jordan",
      avatar: "https://i.pravatar.cc/150?img=16",
      service: "UI/UX Design",
      rating: 4,
      review:
        "Professional UI design with a modern look. Will hire again.",
      date: "This Month",
      reply: "",
    },
  ]);

  // -----------------------------
  // States
  // -----------------------------

  const [search, setSearch] = useState("");

  const [ratingFilter, setRatingFilter] = useState("All");

  const [selectedReview, setSelectedReview] = useState(null);

  const [openReplyModal, setOpenReplyModal] = useState(false);

  // -----------------------------
  // Filtering
  // -----------------------------

  const filteredReviews = useMemo(() => {

    return reviews.filter((review) => {

      const matchesSearch =
        review.customer
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        review.service
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesRating =
        ratingFilter === "All"
          ? true
          : review.rating === Number(ratingFilter);

      return matchesSearch && matchesRating;

    });

  }, [reviews, search, ratingFilter]);

  // -----------------------------
  // Reply Handler
  // -----------------------------

  const handleReply = (review) => {

    setSelectedReview(review);

    setOpenReplyModal(true);

  };

  const saveReply = (replyText) => {

    setReviews((prev) =>
      prev.map((item) =>
        item.id === selectedReview.id
          ? { ...item, reply: replyText }
          : item
      )
    );

    setOpenReplyModal(false);

  };
    return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            Customer Reviews
          </h1>

          <p className="text-gray-500 mt-2">
            Manage customer feedback and respond to reviews.
          </p>

        </div>

      </div>

      {/* Search & Filter */}

      <div className="bg-white rounded-2xl shadow-md p-5">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Search */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Search Reviews
            </label>

            <div className="relative">

              <Search
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search by customer or service..."
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

          {/* Rating Filter */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Filter by Rating
            </label>

            <select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
              className="
                w-full
                border
                rounded-lg
                py-2.5
                px-3
                bg-white
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            >
              <option value="All">All Ratings</option>
              <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
              <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
              <option value="3">⭐⭐⭐ (3 Stars)</option>
              <option value="2">⭐⭐ (2 Stars)</option>
              <option value="1">⭐ (1 Star)</option>
            </select>

          </div>

        </div>

      </div>

      {/* Rating Summary */}

      <RatingSummary reviews={reviews} />

      {/* Reviews List */}

      {filteredReviews.length > 0 ? (

        <div className="space-y-5">

          {filteredReviews.map((review) => (

            <ReviewCard
              key={review.id}
              review={review}
              onReply={handleReply}
            />

          ))}

        </div>

      ) : (

        <div className="bg-white rounded-2xl shadow-md p-10 text-center">

          <h2 className="text-2xl font-bold text-gray-700">
            No Reviews Found
          </h2>

          <p className="text-gray-500 mt-3">
            Try changing your search or rating filter.
          </p>

        </div>

      )}

      {/* Reply Modal */}

      {openReplyModal && selectedReview && (
<ReplyReviewModal
  key={selectedReview.id}
  review={selectedReview}
  onClose={() => setOpenReplyModal(false)}
  onSave={saveReply}
/>

      )}

            {/* Footer */}

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Total Reviews */}

        <p className="text-gray-600">
          Showing{" "}
          <span className="font-semibold">
            {filteredReviews.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold">
            {reviews.length}
          </span>{" "}
          reviews
        </p>

        {/* Pagination */}

        <div className="flex items-center gap-2">

          <button
            disabled
            className="
              px-4
              py-2
              rounded-lg
              border
              bg-gray-100
              text-gray-400
              cursor-not-allowed
            "
          >
            Previous
          </button>

          <button
            className="
              w-10
              h-10
              rounded-lg
              bg-blue-600
              text-white
              font-semibold
            "
          >
            1
          </button>

          <button
            disabled
            className="
              px-4
              py-2
              rounded-lg
              border
              bg-gray-100
              text-gray-400
              cursor-not-allowed
            "
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}