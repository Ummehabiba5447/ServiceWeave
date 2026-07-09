import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const spendingData = [
  { month: "Jan", amount: 420 },
  { month: "Feb", amount: 610 },
  { month: "Mar", amount: 750 },
  { month: "Apr", amount: 540 },
  { month: "May", amount: 890 },
  { month: "Jun", amount: 980 },
  { month: "Jul", amount: 760 },
  { month: "Aug", amount: 1120 },
  { month: "Sep", amount: 930 },
  { month: "Oct", amount: 1180 },
  { month: "Nov", amount: 1250 },
  { month: "Dec", amount: 1380 },
];

export default function SpendingChart() {

  return (

    <div className="h-80 w-full">

      <ResponsiveContainer width="100%" height="100%">

        <LineChart
          data={spendingData}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e2e8f0"
          />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 12 }}
          />

          <YAxis
            tick={{ fontSize: 12 }}
          />

          <Tooltip
            formatter={(value) => [`$${value}`, "Spent"]}
          />

          <Line
            type="monotone"
            dataKey="amount"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{
              r: 5,
            }}
            activeDot={{
              r: 8,
            }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}