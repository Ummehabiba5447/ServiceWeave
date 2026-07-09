import AdminStatsCards from "./AdminStatsCards";
import UserGrowthChart from "./UserGrowthChart";
import RevenueChart from "./RevenueChart";
import TransactionChart from "./TransactionChart";
import CategoryDistribution from "./CategoryDistribution";
import RecentActivity from "./RecentActivity";
import SystemHealth from "./SystemHealth";

export default function AdminOverview() {

    return (

        <div className="space-y-6">

            <AdminStatsCards />

            <div className="grid lg:grid-cols-2 gap-6">

                <UserGrowthChart />

                <RevenueChart />

            </div>

            <div className="grid lg:grid-cols-2 gap-6">

                <TransactionChart />

                <CategoryDistribution />

            </div>

            <RecentActivity />

            <SystemHealth />

        </div>

    );

}