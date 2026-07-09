import {
    Users,
    Briefcase,
    ShoppingCart,
    DollarSign
} from "lucide-react";

const stats = [

    {

        title: "Total Users",

        value: "1,234",

        subtitle: "456 Sellers • 778 Buyers",

        icon: Users,

        color: "bg-blue-500"

    },

    {

        title: "Active Listings",

        value: "3,456",

        subtitle: "1,200 Products • 2,256 Services",

        icon: Briefcase,

        color: "bg-violet-500"

    },

    {

        title: "Completed Transactions",

        value: "567",

        subtitle: "This Month",

        icon: ShoppingCart,

        color: "bg-emerald-500"

    },

    {

        title: "Platform Revenue",

        value: "$12,450",

        subtitle: "Commission Earned",

        icon: DollarSign,

        color: "bg-amber-500"

    }

];



export default function AdminStatsCards() {

    return (

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {

                stats.map((item) => {

                    const Icon = item.icon;

                    return (

                        <div

                            key={item.title}

                            className="bg-white rounded-2xl shadow p-6"

                        >

                            <div className="flex justify-between items-start">

                                <div>

                                    <p className="text-gray-500 text-sm">

                                        {item.title}

                                    </p>

                                    <h2 className="text-3xl font-bold mt-2">

                                        {item.value}

                                    </h2>

                                    <p className="text-sm text-gray-500 mt-2">

                                        {item.subtitle}

                                    </p>

                                </div>

                                <div

                                    className={`${item.color} p-3 rounded-xl text-white`}

                                >

                                    <Icon size={24} />

                                </div>

                            </div>

                        </div>

                    );

                })

            }

        </div>

    );

}