import RevenueStats from "./RevenueStats";
import RevenueChart from "./RevenueChart";
import TransactionTable from "./TransactionTable";
import PayoutHistory from "./PayoutHistory";



const transactions = [

{
id:1,
date:"2026-07-09",
type:"Service Booking",
amount:500,
commission:50,
status:"Completed",
reference:"#TXN1024"
},


{
id:2,
date:"2026-07-08",
type:"Product Sale",
amount:250,
commission:25,
status:"Completed",
reference:"#TXN1025"
},


{
id:3,
date:"2026-07-07",
type:"Service Booking",
amount:800,
commission:80,
status:"Pending",
reference:"#TXN1026"
},


{
id:4,
date:"2026-07-05",
type:"Product Sale",
amount:120,
commission:12,
status:"Failed",
reference:"#TXN1027"
}

];




const payouts=[

{
id:1,
seller:"Ali Developers",
date:"2026-07-01",
amount:"$1200",
status:"Paid"
},


{
id:2,
seller:"Tech Store",
date:"2026-06-25",
amount:"$850",
status:"Pending"
}

];





export default function RevenueAnalyticsPage(){



return(

<div className="space-y-6">


<div>


<h1 className="text-3xl font-bold">

Revenue Analytics

</h1>


<p className="mt-1 text-gray-500">

Monitor platform earnings and transactions.

</p>


</div>





<RevenueStats />





<RevenueChart />






<div>


<h2 className="mb-4 text-xl font-bold">

Transaction Breakdown

</h2>


<TransactionTable

transactions={transactions}

/>


</div>







<div>


<h2 className="mb-4 text-xl font-bold">

Seller Payout History

</h2>


<PayoutHistory

payouts={payouts}

/>


</div>





</div>

)

}