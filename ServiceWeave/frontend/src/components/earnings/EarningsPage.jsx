import { useState } from "react";
import { Download } from "lucide-react";

import EarningsSummary from "./EarningsSummary";
import EarningsHistory from "./EarningsHistory";
import WithdrawalModal from "./WithdrawalModal";

export default function EarningsPage() {

  // -----------------------------
  // Earnings Summary
  // -----------------------------

  const [summary] = useState({
    total: 12450,
    available: 8250,
    pending: 2750,
    withdrawn: 1450,
  });

  // -----------------------------
  // Transactions
  // -----------------------------

  const [transactions] = useState([
    {
      id: 1,
      customer: "John David",
      service: "Wedding Photography",
      amount: 350,
      status: "Completed",
      date: "Today",
    },
    {
      id: 2,
      customer: "Sarah Williams",
      service: "Website Development",
      amount: 650,
      status: "Pending",
      date: "Yesterday",
    },
    {
      id: 3,
      customer: "Emily Stone",
      service: "Graphic Design",
      amount: 120,
      status: "Completed",
      date: "2 Days Ago",
    },
    {
      id: 4,
      customer: "Daniel Smith",
      service: "Video Editing",
      amount: 280,
      status: "Completed",
      date: "Last Week",
    },
    {
      id: 5,
      customer: "Michael Jordan",
      service: "SEO Optimization",
      amount: 420,
      status: "Completed",
      date: "Last Week",
    },
    {
      id: 6,
      customer: "Alice Cooper",
      service: "UI/UX Design",
      amount: 500,
      status: "Pending",
      date: "This Month",
    },
  ]);

  // -----------------------------
  // Withdrawal Modal
  // -----------------------------

  const [openWithdrawal, setOpenWithdrawal] =
    useState(false);
      return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            Earnings
          </h1>

          <p className="text-gray-500 mt-2">
            Track your income, withdrawals, and transaction history.
          </p>

        </div>

        <div className="flex flex-wrap gap-3 mt-5 md:mt-0">

          {/* Export */}

          <button
            className="
              flex
              items-center
              gap-2
              px-5
              py-3
              rounded-xl
              border
              hover:bg-gray-100
              transition"
          >

            <Download size={18} />

            Export Report

          </button>

          {/* Withdraw */}

          <button
            onClick={() => setOpenWithdrawal(true)}
            className="
              bg-green-600
              hover:bg-green-700
              text-white
              px-6
              py-3
              rounded-xl
              transition"
          >
            Withdraw Funds
          </button>

        </div>

      </div>

      {/* Summary Cards */}

      <EarningsSummary summary={summary} />

      {/* Monthly Chart + Transactions */}

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Chart */}

        <div className="lg:col-span-1 bg-white rounded-2xl shadow p-6">

          <h2 className="text-xl font-bold mb-6">
            Monthly Revenue
          </h2>

          <div className="flex items-end justify-between h-64">

            {[45, 60, 75, 55, 90, 80, 95].map(
              (height, index) => (

                <div
                  key={index}
                  className="
                    flex
                    flex-col
                    items-center
                    gap-2"
                >

                  <div
                    className="
                      bg-blue-600
                      rounded-t-lg
                      w-8
                      transition-all
                      hover:bg-blue-700"
                    style={{
                      height: `${height}%`,
                    }}
                  ></div>

                  <span className="text-xs text-gray-500">
                    {
                      [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                      ][index]
                    }
                  </span>

                </div>

              )
            )}

          </div>

        </div>

        {/* Transactions */}

        <div className="lg:col-span-2">

          <EarningsHistory
            transactions={transactions}
          />

        </div>

      </div>

      {/* Withdrawal Modal */}

      {openWithdrawal && (

        <WithdrawalModal

          balance={summary.available}

          onClose={() =>
            setOpenWithdrawal(false)
          }

        />

      )}
            {/* Quick Stats */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow p-6">

          <h3 className="text-gray-500 text-sm">
            Total Transactions
          </h3>

          <p className="text-3xl font-bold mt-3">
            {transactions.length}
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <h3 className="text-gray-500 text-sm">
            Completed Payments
          </h3>

          <p className="text-3xl font-bold text-green-600 mt-3">

            {
              transactions.filter(
                (item) => item.status === "Completed"
              ).length
            }

          </p>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <h3 className="text-gray-500 text-sm">
            Pending Payments
          </h3>

          <p className="text-3xl font-bold text-orange-500 mt-3">

            {
              transactions.filter(
                (item) => item.status === "Pending"
              ).length
            }

          </p>

        </div>

      </div>

    </div>
  );
}