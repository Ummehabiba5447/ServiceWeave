import BuyerStatsCards from "./BuyerStatsCards";
import SpendingChart from "./SpendingChart";
import CategoryChart from "./CategoryChart";
import RecentPurchases from "./RecentPurchases";
import ActiveBookings from "./ActiveBookings";

export default function BuyerOverview() {

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-3xl font-bold text-slate-900">
            Buyer Dashboard
          </h1>

          <p className="mt-2 text-slate-600">
            Track your purchases, bookings and favorite services.
          </p>

        </div>

        <div className="mt-4 md:mt-0">

          <button
            className="
              px-5
              py-3
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-medium
              transition
            "
          >
            Browse Services
          </button>

        </div>

      </div>

      {/* Stats */}

      <BuyerStatsCards />

      {/* Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2">

          <div
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              p-6
              shadow-sm
            "
          >

            <div className="mb-6">

              <h2 className="text-xl font-semibold text-slate-900">
                Spending Trend
              </h2>

              <p className="text-sm text-slate-500">
                Last 12 months
              </p>

            </div>

            <SpendingChart />

          </div>

        </div>

        <div>

          <div
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              p-6
              shadow-sm
            "
          >

            <div className="mb-6">

              <h2 className="text-xl font-semibold text-slate-900">
                Category Spending
              </h2>

              <p className="text-sm text-slate-500">
                Spending by category
              </p>

            </div>

            <CategoryChart />

          </div>

        </div>

      </div>
            {/* Recent Purchases & Active Bookings */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Recent Purchases */}

        <div className="xl:col-span-2">

          <div
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              shadow-sm
            "
          >

            <div
              className="
                flex
                items-center
                justify-between
                p-6
                border-b
                border-slate-200
              "
            >

              <div>

                <h2 className="text-xl font-semibold text-slate-900">
                  Recent Purchases
                </h2>

                <p className="text-sm text-slate-500">
                  Your latest orders and bookings
                </p>

              </div>

              <button
                className="
                  text-blue-600
                  hover:text-blue-700
                  font-medium
                  text-sm
                "
              >
                View All
              </button>

            </div>

            <div className="p-6">

              <RecentPurchases />

            </div>

          </div>

        </div>

        {/* Active Bookings */}

        <div>

          <div
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              shadow-sm
            "
          >

            <div
              className="
                flex
                items-center
                justify-between
                p-6
                border-b
                border-slate-200
              "
            >

              <div>

                <h2 className="text-xl font-semibold text-slate-900">
                  Active Bookings
                </h2>

                <p className="text-sm text-slate-500">
                  Services currently in progress
                </p>

              </div>

              <button
                className="
                  text-blue-600
                  hover:text-blue-700
                  font-medium
                  text-sm
                "
              >
                View All
              </button>

            </div>

            <div className="p-6">

              <ActiveBookings />

            </div>

          </div>

        </div>

      </div>      {/* Quick Actions & Recommendations */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Quick Actions */}

        <div
          className="
            bg-white
            rounded-2xl
            border
            border-slate-200
            shadow-sm
            p-6
          "
        >

          <h2 className="text-xl font-semibold text-slate-900 mb-5">
            Quick Actions
          </h2>

          <div className="space-y-4">

            <button
              className="
                w-full
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                text-white
                py-3
                font-medium
                transition
              "
            >
              Browse Services
            </button>

            <button
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                hover:bg-slate-50
                py-3
                font-medium
                transition
              "
            >
              Browse Products
            </button>

            <button
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                hover:bg-slate-50
                py-3
                font-medium
                transition
              "
            >
              View Purchase History
            </button>

            <button
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                hover:bg-slate-50
                py-3
                font-medium
                transition
              "
            >
              Saved Favorites
            </button>

          </div>

        </div>

        {/* Recommended Services */}

        <div
          className="
            xl:col-span-2
            bg-white
            rounded-2xl
            border
            border-slate-200
            shadow-sm
            p-6
          "
        >

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-xl font-semibold text-slate-900">
                Recommended For You
              </h2>

              <p className="text-sm text-slate-500">
                Based on your recent activity
              </p>

            </div>

            <button
              className="
                text-blue-600
                hover:text-blue-700
                text-sm
                font-medium
              "
            >
              Browse More
            </button>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className="
                  rounded-xl
                  border
                  border-slate-200
                  overflow-hidden
                  hover:shadow-lg
                  transition
                "
              >

                <img
                  src={`https://picsum.photos/400/250?random=${item}`}
                  alt="Service"
                  className="h-40 w-full object-cover"
                />

                <div className="p-4">

                  <h3 className="font-semibold text-slate-900">
                    Premium Home Cleaning
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    by CleanPro Services
                  </p>

                  <div className="mt-4 flex items-center justify-between">

                    <span className="font-bold text-blue-600">
                      $120
                    </span>

                    <button
                      className="
                        px-4
                        py-2
                        rounded-lg
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        text-sm
                      "
                    >
                      View
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>      {/* Recent Activity & Buyer Tips */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent Activity */}

        <div
          className="
            bg-white
            rounded-2xl
            border
            border-slate-200
            shadow-sm
            p-6
          "
        >

          <h2 className="text-xl font-semibold text-slate-900 mb-5">
            Recent Activity
          </h2>

          <div className="space-y-5">

            {[
              {
                title: "Booking Confirmed",
                description: "Home Cleaning Service was accepted.",
                time: "2 hours ago",
              },
              {
                title: "Payment Successful",
                description: "Payment of $120 completed.",
                time: "Yesterday",
              },
              {
                title: "Review Submitted",
                description: "You reviewed Web Design Service.",
                time: "2 days ago",
              },
              {
                title: "New Favorite Added",
                description: "Photography Package saved.",
                time: "3 days ago",
              },
            ].map((activity, index) => (

              <div
                key={index}
                className="flex justify-between items-start border-b border-slate-100 pb-4 last:border-0 last:pb-0"
              >

                <div>

                  <h3 className="font-medium text-slate-900">
                    {activity.title}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {activity.description}
                  </p>

                </div>

                <span className="text-xs text-slate-400 whitespace-nowrap ml-4">
                  {activity.time}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Buyer Tips */}

        <div
          className="
            bg-gradient-to-r
            from-blue-600
            to-violet-600
            rounded-2xl
            shadow-lg
            p-6
            text-white
          "
        >

          <h2 className="text-2xl font-bold">
            Buyer Tips 💡
          </h2>

          <p className="mt-2 text-blue-100">
            Make the most of your ServiceWeave experience.
          </p>

          <ul className="mt-6 space-y-4 text-sm">

            <li>
              ✅ Compare multiple sellers before booking.
            </li>

            <li>
              ⭐ Read reviews and ratings carefully.
            </li>

            <li>
              💬 Contact sellers if you have questions.
            </li>

            <li>
              ❤️ Save your favorite services for later.
            </li>

            <li>
              🎁 Watch for seasonal discounts and offers.
            </li>

          </ul>

          <button
            className="
              mt-8
              bg-white
              text-blue-600
              hover:bg-slate-100
              font-semibold
              px-6
              py-3
              rounded-xl
              transition
            "
          >
            Explore Services
          </button>

        </div>

      </div>

    </div>

  );

}