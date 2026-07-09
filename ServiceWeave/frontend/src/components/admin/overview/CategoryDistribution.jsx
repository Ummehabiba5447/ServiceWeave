import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "Home Services", value: 30 },
  { name: "IT Services", value: 25 },
  { name: "Products", value: 20 },
  { name: "Design", value: 15 },
  { name: "Others", value: 10 },
];

const COLORS = [
  "#3b82f6",
  "#8b5cf6",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
];

export default function CategoryDistribution() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-lg font-semibold mb-5">
        Listings by Category
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              outerRadius={100}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Legend />

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}