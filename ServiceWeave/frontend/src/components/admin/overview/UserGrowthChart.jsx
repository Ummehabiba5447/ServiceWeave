import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", sellers: 50, buyers: 90 },
  { month: "Feb", sellers: 70, buyers: 130 },
  { month: "Mar", sellers: 95, buyers: 170 },
  { month: "Apr", sellers: 120, buyers: 230 },
  { month: "May", sellers: 160, buyers: 290 },
  { month: "Jun", sellers: 190, buyers: 360 },
  { month: "Jul", sellers: 230, buyers: 430 },
  { month: "Aug", sellers: 270, buyers: 500 },
  { month: "Sep", sellers: 320, buyers: 590 },
  { month: "Oct", sellers: 370, buyers: 650 },
  { month: "Nov", sellers: 420, buyers: 710 },
  { month: "Dec", sellers: 456, buyers: 778 },
];

export default function UserGrowthChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-lg font-semibold mb-5">
        User Growth (Last 12 Months)
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="sellers"
              stroke="#3b82f6"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="buyers"
              stroke="#22c55e"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}