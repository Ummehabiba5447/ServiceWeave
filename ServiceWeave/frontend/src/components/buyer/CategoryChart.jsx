import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Home Services",
    value: 35,
  },
  {
    name: "Technology",
    value: 25,
  },
  {
    name: "Design",
    value: 18,
  },
  {
    name: "Transport",
    value: 12,
  },
  {
    name: "Others",
    value: 10,
  },
];

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
  "#ef4444",
];

export default function CategoryChart() {

  return (

    <div className="h-80 w-full">

      <ResponsiveContainer
        width="100%"
        height="100%"
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="45%"
            outerRadius={90}
            innerRadius={45}
            paddingAngle={3}
            label={({ percent }) =>
              `${(percent * 100).toFixed(0)}%`
            }
          >

            {data.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />

            ))}

          </Pie>

          <Tooltip
            formatter={(value) => [
              `${value}%`,
              "Spending",
            ]}
          />

          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
          />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

}