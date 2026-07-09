import { Star } from "lucide-react";

export default function RatingSummary({ reviews }) {

  const totalReviews = reviews.length;

  const averageRating =
    totalReviews > 0
      ? (
          reviews.reduce(
            (sum, review) => sum + review.rating,
            0
          ) / totalReviews
        ).toFixed(1)
      : "0.0";

  const ratingCounts = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter(
      (review) => review.rating === rating
    ).length,
  }));

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Left Section */}

        <div className="flex flex-col items-center justify-center text-center">

          <div className="text-6xl font-bold text-blue-600">
            {averageRating}
          </div>

          <div className="flex items-center gap-1 mt-3">

            {[1, 2, 3, 4, 5].map((star) => (

              <Star
                key={star}
                size={22}
                fill={
                  star <= Math.round(averageRating)
                    ? "#FACC15"
                    : "none"
                }
                className={
                  star <= Math.round(averageRating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />

            ))}

          </div>

          <p className="mt-4 text-gray-500">
            Based on{" "}
            <span className="font-semibold">
              {totalReviews}
            </span>{" "}
            customer reviews
          </p>

        </div>

        {/* Right Section */}

        <div className="lg:col-span-2 space-y-5">

          {ratingCounts.map((item) => {

            const percentage =
              totalReviews === 0
                ? 0
                : (item.count / totalReviews) * 100;

            return (

              <div
                key={item.rating}
                className="flex items-center gap-4"
              >

                {/* Rating */}

                <div className="flex items-center gap-1 w-14">

                  <span className="font-semibold">
                    {item.rating}
                  </span>

                  <Star
                    size={16}
                    fill="#FACC15"
                    className="text-yellow-400"
                  />

                </div>

                {/* Progress */}

                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">

                  <div
                    className="bg-yellow-400 h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${percentage}%`,
                    }}
                  />

                </div>

                {/* Count */}

                <span className="w-10 text-right font-medium text-gray-700">
                  {item.count}
                </span>

              </div>

            );

          })}

        </div>

      </div>

      {/* Bottom Cards */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

        <div className="bg-blue-50 rounded-xl p-5 text-center">

          <h3 className="text-gray-500 text-sm">
            Average Rating
          </h3>

          <p className="text-3xl font-bold text-blue-600 mt-2">
            {averageRating}
          </p>

        </div>

        <div className="bg-green-50 rounded-xl p-5 text-center">

          <h3 className="text-gray-500 text-sm">
            Total Reviews
          </h3>

          <p className="text-3xl font-bold text-green-600 mt-2">
            {totalReviews}
          </p>

        </div>

        <div className="bg-yellow-50 rounded-xl p-5 text-center">

          <h3 className="text-gray-500 text-sm">
            5-Star Reviews
          </h3>

          <p className="text-3xl font-bold text-yellow-600 mt-2">

            {
              reviews.filter(
                (item) => item.rating === 5
              ).length
            }

          </p>

        </div>

        <div className="bg-purple-50 rounded-xl p-5 text-center">

          <h3 className="text-gray-500 text-sm">
            Satisfaction
          </h3>

          <p className="text-3xl font-bold text-purple-600 mt-2">

            {Math.round(
              (reviews.filter(
                (item) => item.rating >= 4
              ).length /
                totalReviews) *
                100
            ) || 0}
            %

          </p>

        </div>

      </div>

    </div>
  );
}