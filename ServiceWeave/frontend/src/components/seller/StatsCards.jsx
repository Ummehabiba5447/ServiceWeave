import {
  Package,
  Bell,
  DollarSign,
  Star,
  TrendingUp,
} from "lucide-react";

export default function StatsCards() {
  const stats = [
    {
      id: 1,
      title: "Active Listings",
      value: "24",
      subtitle: "+3 this month",
      icon: Package,
      bg: "bg-blue-50",
      iconBg: "bg-blue-500",
      text: "text-blue-600",
    },
    {
      id: 2,
      title: "Pending Requests",
      value: "7",
      subtitle: "3 accepted this month",
      icon: Bell,
      bg: "bg-orange-50",
      iconBg: "bg-orange-500",
      text: "text-orange-600",
      badge: true,
    },
    {
      id: 3,
      title: "Monthly Earnings",
      value: "$2,450",
      subtitle: "+18% from last month",
      icon: DollarSign,
      bg: "bg-green-50",
      iconBg: "bg-green-500",
      text: "text-green-600",
    },
    {
      id: 4,
      title: "Average Rating",
      value: "4.8",
      subtitle: "Based on 145 Reviews",
      icon: Star,
      bg: "bg-purple-50",
      iconBg: "bg-purple-500",
      text: "text-purple-600",
      stars: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.id}
            className={`${card.bg}
              rounded-2xl
              p-6
              shadow-sm
              hover:shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
              cursor-pointer`}
          >
            {/* Top */}

            <div className="flex justify-between items-start">

              <div>

                <p className="text-gray-500 text-sm">
                  {card.title}
                </p>

                <h2 className={`text-3xl font-bold mt-2 ${card.text}`}>
                  {card.value}
                </h2>

              </div>

              <div
                className={`${card.iconBg}
                h-14
                w-14
                rounded-xl
                flex
                items-center
                justify-center
                shadow-md`}
              >
                <Icon className="text-white" size={28} />
              </div>

            </div>

            {/* Rating Stars */}

            {card.stars && (
              <div className="flex mt-4 space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < 5 ? "#FACC15" : "none"}
                    color="#FACC15"
                  />
                ))}
              </div>
            )}

            {/* Bottom */}

            <div className="mt-5 flex justify-between items-center">

              <div className="flex items-center gap-2">

                <TrendingUp
                  size={16}
                  className="text-green-600"
                />

                <span className="text-sm text-gray-600">
                  {card.subtitle}
                </span>

              </div>

              {card.badge && (
                <span
                  className="
                  bg-red-500
                  text-white
                  text-xs
                  px-2
                  py-1
                  rounded-full
                  font-semibold"
                >
                  7
                </span>
              )}

            </div>
          </div>
        );
      })}
    </div>
  );
}