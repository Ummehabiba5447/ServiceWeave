import {
  Wallet,
  CircleDollarSign,
  Clock3,
  Landmark,
  TrendingUp,
} from "lucide-react";

export default function EarningsSummary({ summary }) {
  const cards = [
    {
      title: "Total Earnings",
      value: `$${summary.total.toLocaleString()}`,
      icon: CircleDollarSign,
      color: "from-blue-500 to-blue-700",
      trend: "+12.5%",
    },
    {
      title: "Available Balance",
      value: `$${summary.available.toLocaleString()}`,
      icon: Wallet,
      color: "from-green-500 to-green-700",
      trend: "+8.2%",
    },
    {
      title: "Pending Payments",
      value: `$${summary.pending.toLocaleString()}`,
      icon: Clock3,
      color: "from-orange-400 to-orange-600",
      trend: "3 Pending",
    },
    {
      title: "Withdrawn",
      value: `$${summary.withdrawn.toLocaleString()}`,
      icon: Landmark,
      color: "from-purple-500 to-purple-700",
      trend: "Lifetime",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card, index) => {

        const Icon = card.icon;

        return (

          <div
            key={index}
            className={`
              bg-gradient-to-r
              ${card.color}
              rounded-2xl
              p-6
              text-white
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-1
              transition-all
              duration-300
            `}
          >

            <div className="flex justify-between items-start">

              <div>

                <p className="text-sm opacity-90">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold mt-3">
                  {card.value}
                </h2>

              </div>

              <div className="bg-white/20 p-3 rounded-xl">

                <Icon size={28} />

              </div>

            </div>

            <div className="mt-8 flex items-center gap-2">

              <TrendingUp size={18} />

              <span className="text-sm font-medium">
                {card.trend}
              </span>

            </div>

          </div>

        );

      })}

    </div>
  );
}