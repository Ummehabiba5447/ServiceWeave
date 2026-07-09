import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", revenue: 3500 },
  { month: "Feb", revenue: 4200 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 6200 },
  { month: "May", revenue: 7000 },
  { month: "Jun", revenue: 7600 },
  { month: "Jul", revenue: 8500 },
  { month: "Aug", revenue: 9200 },
  { month: "Sep", revenue: 10300 },
  { month: "Oct", revenue: 11100 },
  { month: "Nov", revenue: 11800 },
  { month: "Dec", revenue: 12450 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-lg font-semibold mb-5">
        Monthly Revenue
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="revenue"
              fill="#3b82f6"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}