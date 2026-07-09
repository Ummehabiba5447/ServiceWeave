import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

const listingData = [
  {
    status: "Active",
    count: 20,
    color: "#2563EB",
  },
  {
    status: "Inactive",
    count: 3,
    color: "#9CA3AF",
  },
  {
    status: "Sold",
    count: 12,
    color: "#16A34A",
  },
];

export default function ListingChart() {
  return (
    <div className="w-full h-[320px]">

      <ResponsiveContainer width="100%" height="100%">

        <BarChart
          data={listingData}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 10,
          }}
        >

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="status"
            tick={{ fontSize: 12 }}
          />

          <YAxis
            tick={{ fontSize: 12 }}
          />

          <Tooltip
            cursor={{ fill: "#F3F4F6" }}
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 4px 15px rgba(0,0,0,.15)",
            }}
            formatter={(value) => [value, "Listings"]}
          />

          <Bar
            dataKey="count"
            radius={[10, 10, 0, 0]}
            animationDuration={1200}
          >
            {listingData.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.color}
              />
            ))}
          </Bar>

        </BarChart>

      </ResponsiveContainer>

      {/* Legend */}

      <div className="flex justify-center gap-8 mt-5 flex-wrap">

        <div className="flex items-center gap-2">

          <span className="w-4 h-4 rounded-full bg-blue-600"></span>

          <span className="text-sm text-gray-600">
            Active (20)
          </span>

        </div>

        <div className="flex items-center gap-2">

          <span className="w-4 h-4 rounded-full bg-gray-400"></span>

          <span className="text-sm text-gray-600">
            Inactive (3)
          </span>

        </div>

        <div className="flex items-center gap-2">

          <span className="w-4 h-4 rounded-full bg-green-600"></span>

          <span className="text-sm text-gray-600">
            Sold (12)
          </span>

        </div>

      </div>

    </div>
  );
}