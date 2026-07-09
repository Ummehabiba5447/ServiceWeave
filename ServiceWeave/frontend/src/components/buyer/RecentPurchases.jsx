import { Star, Eye } from "lucide-react";

const purchases = [
  {
    id: 1,
    image: "https://picsum.photos/300/200?random=11",
    title: "Professional Home Cleaning",
    seller: "CleanPro Services",
    price: "$120",
    date: "July 5, 2026",
    reviewed: false,
  },
  {
    id: 2,
    image: "https://picsum.photos/300/200?random=12",
    title: "Website Development",
    seller: "Tech Solutions",
    price: "$650",
    date: "July 2, 2026",
    reviewed: true,
  },
  {
    id: 3,
    image: "https://picsum.photos/300/200?random=13",
    title: "Photography Package",
    seller: "Lens Studio",
    price: "$180",
    date: "June 28, 2026",
    reviewed: false,
  },
  {
    id: 4,
    image: "https://picsum.photos/300/200?random=14",
    title: "Graphic Design",
    seller: "Creative Hub",
    price: "$95",
    date: "June 25, 2026",
    reviewed: true,
  },
  {
    id: 5,
    image: "https://picsum.photos/300/200?random=15",
    title: "Plumbing Repair",
    seller: "QuickFix Experts",
    price: "$80",
    date: "June 20, 2026",
    reviewed: false,
  },
];

export default function RecentPurchases() {

  return (

    <div className="space-y-5">

      {purchases.map((purchase) => (

        <div
          key={purchase.id}
          className="
            flex
            flex-col
            md:flex-row
            gap-5
            rounded-2xl
            border
            border-slate-200
            p-4
            hover:shadow-md
            transition
          "
        >

          {/* Image */}

          <img
            src={purchase.image}
            alt={purchase.title}
            className="
              h-32
              w-full
              md:w-44
              rounded-xl
              object-cover
            "
          />

          {/* Details */}

          <div className="flex-1 flex flex-col justify-between">

            <div>

              <h3 className="text-lg font-semibold text-slate-900">
                {purchase.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Seller: {purchase.seller}
              </p>

              <div className="mt-3 flex flex-wrap gap-4 text-sm">

                <span className="font-semibold text-blue-600">
                  {purchase.price}
                </span>

                <span className="text-slate-500">
                  {purchase.date}
                </span>

              </div>

            </div>            {/* Actions */}

            <div className="mt-5 flex flex-wrap items-center gap-3">

              {!purchase.reviewed ? (

                <button
                  type="button"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-yellow-500
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-yellow-600
                  "
                >
                  <Star size={16} />

                  Leave Review

                </button>

              ) : (

                <span
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    bg-green-100
                    px-3
                    py-1
                    text-sm
                    font-medium
                    text-green-700
                  "
                >
                  ✓ Reviewed
                </span>

              )}

              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-300
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-slate-700
                  transition
                  hover:bg-slate-100
                "
              >
                <Eye size={16} />

                View Details

              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

  );

}