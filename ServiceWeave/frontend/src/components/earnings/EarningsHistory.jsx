import {
  CheckCircle,
  Clock3,
  DollarSign,
  User,
  Calendar,
} from "lucide-react";

export default function EarningsHistory({ transactions }) {
  const statusStyle = {
    Completed: "bg-green-100 text-green-700",
    Pending: "bg-orange-100 text-orange-700",
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between border-b p-6">

        <div>

          <h2 className="text-2xl font-bold text-gray-800">
            Transaction History
          </h2>

          <p className="text-gray-500 mt-1">
            View all completed and pending payments
          </p>

        </div>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
          {transactions.length} Transactions
        </span>

      </div>

      {/* Desktop Table */}

      <div className="hidden lg:block overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="text-left px-6 py-4">Customer</th>

              <th className="text-left px-6 py-4">Service</th>

              <th className="text-left px-6 py-4">Amount</th>

              <th className="text-left px-6 py-4">Date</th>

              <th className="text-left px-6 py-4">Status</th>

            </tr>

          </thead>

          <tbody>

            {transactions.map((transaction) => (

              <tr
                key={transaction.id}
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="px-6 py-5">

                  <div className="flex items-center gap-3">

                    <div className="bg-blue-100 p-2 rounded-full">

                      <User
                        size={18}
                        className="text-blue-600"
                      />

                    </div>

                    <span className="font-medium">
                      {transaction.customer}
                    </span>

                  </div>

                </td>

                <td className="px-6">

                  {transaction.service}

                </td>

                <td className="px-6">

                  <div className="flex items-center gap-2 text-green-600 font-bold">

                    <DollarSign size={18} />

                    {transaction.amount}

                  </div>

                </td>

                <td className="px-6">

                  <div className="flex items-center gap-2 text-gray-500">

                    <Calendar size={16} />

                    {transaction.date}

                  </div>

                </td>

                <td className="px-6">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle[transaction.status]}`}
                  >
                    {transaction.status === "Completed" ? (
      <CheckCircle size={16} />
    ) : (
      <Clock3 size={16} />
    )}

    {transaction.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}

      <div className="lg:hidden p-5 space-y-4">

        {transactions.map((transaction) => (

          <div
            key={transaction.id}
            className="border rounded-xl p-5 hover:shadow-md transition"
          >

            <div className="flex justify-between items-center">

              <div>

                <h3 className="font-bold text-lg">
                  {transaction.customer}
                </h3>

                <p className="text-gray-500">
                  {transaction.service}
                </p>

              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm ${statusStyle[transaction.status]}`}
              >
                {transaction.status}
              </span>

            </div>

            <div className="mt-5 flex justify-between">

              <div className="flex items-center gap-2 text-green-600 font-bold">

                <DollarSign size={18} />

                ${transaction.amount}

              </div>

              <div className="flex items-center gap-2 text-gray-500">

                <Calendar size={16} />

                {transaction.date}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}