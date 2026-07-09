import {
  Calendar,
  MessageSquare,
  CheckCircle,
  Star,
  Eye,
  Clock,
} from "lucide-react";

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "Booking Request",
      icon: Calendar,
      customer: "John D.",
      details: "requested your Photography Service",
      date: "Today • 2:30 PM",
      status: "Pending",
      color: "orange",
    },
    {
      id: 2,
      type: "New Message",
      icon: MessageSquare,
      customer: "Sarah M.",
      details: "Hi, do you have availability this weekend?",
      date: "Yesterday • 5:15 PM",
      status: "Unread",
      color: "red",
    },
    {
      id: 3,
      type: "Listing Approved",
      icon: CheckCircle,
      customer: "Admin",
      details: "Website Redesign Service is now live",
      date: "2 Days Ago",
      status: "Active",
      color: "green",
    },
    {
      id: 4,
      type: "New Review",
      icon: Star,
      customer: "Alice K.",
      details: "Left you a 5-star review",
      date: "3 Days Ago",
      status: "Read",
      color: "blue",
    },
    {
      id: 5,
      type: "Booking Completed",
      icon: CheckCircle,
      customer: "Mike J.",
      details: "Booking marked as completed",
      date: "4 Days Ago",
      status: "Completed",
      color: "green",
    },
  ];

  const badgeColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-orange-100 text-orange-700";

      case "Unread":
        return "bg-red-100 text-red-700";

      case "Active":
        return "bg-green-100 text-green-700";

      case "Completed":
        return "bg-blue-100 text-blue-700";

      case "Read":
        return "bg-gray-100 text-gray-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6 border-b">

        <div>

          <h2 className="text-2xl font-bold text-gray-800">
            Recent Activity
          </h2>

          <p className="text-gray-500 mt-1">
            Your latest seller activities
          </p>

        </div>

        <button
          className="mt-4 md:mt-0
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-5
          py-2.5
          rounded-lg
          transition"
        >
          View All Activities
        </button>

      </div>

      {/* Desktop Table */}

      <div className="hidden lg:block overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="text-left px-6 py-4">Activity</th>

              <th className="text-left px-6 py-4">Customer</th>

              <th className="text-left px-6 py-4">Details</th>

              <th className="text-left px-6 py-4">Date</th>

              <th className="text-left px-6 py-4">Status</th>

              <th className="text-center px-6 py-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {activities.map((activity) => {

              const Icon = activity.icon;

              return (

                <tr
                  key={activity.id}
                  className="border-b hover:bg-gray-50 transition"
                >

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div className="bg-blue-100 p-3 rounded-xl">

                        <Icon
                          className="text-blue-600"
                          size={20}
                        />

                      </div>

                      <span className="font-medium">
                        {activity.type}
                      </span>

                    </div>

                  </td>

                  <td className="px-6">

                    {activity.customer}

                  </td>

                  <td className="px-6 max-w-sm truncate">

                    {activity.details}

                  </td>

                  <td className="px-6">

                    {activity.date}

                  </td>

                  <td className="px-6">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColor(
                        activity.status
                      )}`}
                    >
                      {activity.status}
                    </span>

                  </td>

                  <td className="px-6 text-center">

                    <button
                      className="
                      flex
                      items-center
                      gap-2
                      mx-auto
                      bg-blue-600
                      hover:bg-blue-700
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      transition"
                    >

                      <Eye size={16} />

                      View

                    </button>

                  </td>

                </tr>

              );
            })}

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}

      <div className="lg:hidden p-5 space-y-4">

        {activities.map((activity) => {

          const Icon = activity.icon;

          return (

            <div
              key={activity.id}
              className="
              border
              rounded-xl
              p-5
              hover:shadow-md
              transition"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="bg-blue-100 p-3 rounded-lg">

                    <Icon
                      className="text-blue-600"
                      size={20}
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {activity.type}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {activity.customer}
                    </p>

                  </div>

                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs ${badgeColor(
                    activity.status
                  )}`}
                >
                  {activity.status}
                </span>

              </div>

              <p className="mt-4 text-gray-600">
                {activity.details}
              </p>

              <div className="flex justify-between items-center mt-5">

                <div className="flex items-center gap-2 text-gray-500">

                  <Clock size={15} />

                  <span>{activity.date}</span>

                </div>

                <button
                  className="
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-4
                  py-2
                  rounded-lg
                  transition"
                >
                  View
                </button>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}