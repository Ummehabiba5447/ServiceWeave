import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const earningsData = [
  { month: "Jan", earnings: 1200 },
  { month: "Feb", earnings: 1450 },
  { month: "Mar", earnings: 1700 },
  { month: "Apr", earnings: 1600 },
  { month: "May", earnings: 1900 },
  { month: "Jun", earnings: 2100 },
  { month: "Jul", earnings: 1950 },
  { month: "Aug", earnings: 2250 },
  { month: "Sep", earnings: 2400 },
  { month: "Oct", earnings: 2550 },
  { month: "Nov", earnings: 2700 },
  { month: "Dec", earnings: 2450 },
];

export default function EarningsChart() {
  return (
    <div className="w-full h-[320px]">

      <ResponsiveContainer width="100%" height="100%">

        <AreaChart
          data={earningsData}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 10,
          }}
        >

          <defs>

            <linearGradient
              id="earningsGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#2563EB"
                stopOpacity={0.4}
              />

              <stop
                offset="95%"
                stopColor="#2563EB"
                stopOpacity={0}
              />
            </linearGradient>

          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 12 }}
          />

          <YAxis tick={{ fontSize: 12 }} />

          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow:
                "0 4px 15px rgba(0,0,0,0.15)",
            }}
            formatter={(value) => [`$${value}`, "Earnings"]}
          />

          <Area
            type="monotone"
            dataKey="earnings"
            stroke="#2563EB"
            strokeWidth={3}
            fill="url(#earningsGradient)"
            activeDot={{
              r: 6,
            }}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}