import {
DollarSign,
TrendingUp,
Percent
} from "lucide-react";



const stats=[

{
title:"Total Revenue (All Time)",
value:"$125,450",
icon:DollarSign
},

{
title:"This Month",
value:"$12,450",
icon:TrendingUp
},

{
title:"Commission Rate",
value:"10%",
icon:Percent
}

];




export default function RevenueStats(){


return(

<div className="grid gap-5 md:grid-cols-3">


{

stats.map((item)=>(


<div

key={item.title}

className="rounded-2xl bg-white p-6 shadow"

>


<div className="flex items-center gap-3">


<div className="rounded-xl bg-blue-100 p-3 text-blue-600">

<item.icon size={22}/>

</div>


<h3 className="font-semibold">

{item.title}

</h3>


</div>




<p className="mt-5 text-3xl font-bold">

{item.value}

</p>



</div>


))

}



</div>


)

}