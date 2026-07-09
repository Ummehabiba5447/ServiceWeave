import StatsCards from "./StatsCards";
import EarningsChart from "./EarningsChart";
import ListingChart from "./ListingChart";
import RecentActivity from "./RecentActivity";

export default function DashboardOverview() {
  return (
    <div className="space-y-8">

      {/* Welcome Banner */}

      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl text-white p-8 shadow-lg">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-3xl font-bold">
              Welcome Back 👋
            </h1>

            <p className="mt-3 text-blue-100 max-w-2xl">
              Here's an overview of your seller account.
              Track your listings, manage customer requests,
              monitor earnings, and grow your business with
              ServiceWeave.
            </p>

          </div>

          <div className="mt-6 lg:mt-0">

            <button
              className="
              bg-white
              text-blue-600
              px-6
              py-3
              rounded-xl
              font-semibold
              shadow-md
              hover:shadow-lg
              hover:scale-105
              transition
              "
            >
              + Create New Listing
            </button>

          </div>

        </div>

      </div>

      {/* Statistics */}

      <StatsCards />

      {/* Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl shadow p-6">

          <div className="mb-4">

            <h2 className="text-xl font-semibold">
              Earnings Trend
            </h2>

            <p className="text-gray-500 text-sm">
              Monthly earnings during the last year
            </p>

          </div>

          <EarningsChart />

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <div className="mb-4">

            <h2 className="text-xl font-semibold">
              Listing Performance
            </h2>

            <p className="text-gray-500 text-sm">
              Active vs Inactive vs Sold Listings
            </p>

          </div>

          <ListingChart />

        </div>

      </div>

      {/* Recent Activity */}

      <RecentActivity />

    </div>
  );
}