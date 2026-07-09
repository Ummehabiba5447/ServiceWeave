import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "1", transactions: 14 },
  { day: "5", transactions: 22 },
  { day: "10", transactions: 35 },
  { day: "15", transactions: 42 },
  { day: "20", transactions: 39 },
  { day: "25", transactions: 55 },
  { day: "30", transactions: 47 },
];

export default function TransactionChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-lg font-semibold mb-5">
        Daily Transactions (30 Days)
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="transactions"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}