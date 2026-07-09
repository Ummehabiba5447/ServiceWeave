import {
  DollarSign,
  CalendarCheck,
  Clock3,
  Heart,
} from "lucide-react";

export default function BuyerStatsCards() {

  const stats = [
    {
      title: "Total Spent",
      subtitle: "This Month",
      value: "$1,250",
      icon: DollarSign,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Active Bookings",
      subtitle: "Currently Running",
      value: "3",
      icon: CalendarCheck,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Pending Services",
      subtitle: "Waiting for Seller",
      value: "2",
      icon: Clock3,
      color: "bg-amber-100 text-amber-600",
    },
    {
      title: "Saved Items",
      subtitle: "Favorites",
      value: "12",
      icon: Heart,
      color: "bg-red-100 text-red-600",
    },
  ];

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((stat, index) => {

        const Icon = stat.icon;

        return (

          <div
            key={index}
            className="
              bg-white
              border
              border-slate-200
              rounded-2xl
              p-6
              shadow-sm
              hover:shadow-lg
              transition-all
              duration-300
            "
          >

            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {stat.value}
                </h2>

                <p className="mt-2 text-xs text-slate-400">
                  {stat.subtitle}
                </p>

              </div>

              <div
                className={`
                  h-14
                  w-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  ${stat.color}
                `}
              >

                <Icon size={28} />

              </div>

            </div>

            <div className="mt-6">

              <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">

                <div
                  className="h-full rounded-full bg-blue-600"
                  style={{
                    width: `${70 + index * 8}%`,
                  }}
                />

              </div>

            </div>

          </div>

        );

      })}

    </div>

  );

}