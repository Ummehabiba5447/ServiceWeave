import {
    UserPlus,
    FilePlus,
    CheckCircle,
    MessageSquare
} from "lucide-react";


const activities = [

    {
        id:1,
        user:"Ali Khan",
        action:"New user signup",
        type:"User",
        date:"Today, 10:30 AM",
        icon:UserPlus
    },

    {
        id:2,
        user:"Sara Ahmed",
        action:"New listing created",
        type:"Listing",
        date:"Today, 09:45 AM",
        icon:FilePlus
    },

    {
        id:3,
        user:"Ahmed Services",
        action:"Booking completed",
        type:"Transaction",
        date:"Yesterday",
        icon:CheckCircle
    },

    {
        id:4,
        user:"Fatima Noor",
        action:"Review submitted",
        type:"Review",
        date:"Yesterday",
        icon:MessageSquare
    },

    {
        id:5,
        user:"Tech Solutions",
        action:"Listing approved",
        type:"Listing",
        date:"2 days ago",
        icon:CheckCircle
    },

    {
        id:6,
        user:"Usman Ali",
        action:"Account created",
        type:"User",
        date:"2 days ago",
        icon:UserPlus
    }

];



export default function RecentActivity(){


return(

<div className="bg-white rounded-2xl shadow p-6">


<h2 className="text-lg font-semibold mb-5">

Recent Activity

</h2>



<div className="overflow-x-auto">


<table className="w-full">


<thead className="bg-gray-100">

<tr>

<th className="text-left p-3">
User
</th>

<th className="text-left p-3">
Action
</th>

<th className="text-left p-3">
Type
</th>

<th className="text-left p-3">
Date
</th>

</tr>

</thead>



<tbody>


{
activities.map((item)=>{


const Icon=item.icon;


return(

<tr

key={item.id}

className="border-b"

>


<td className="p-3 flex items-center gap-3">


<div className="bg-blue-100 p-2 rounded-lg">

<Icon 
size={18}
className="text-blue-600"
/>

</div>


<span>
{item.user}
</span>


</td>



<td className="p-3">

{item.action}

</td>



<td className="p-3">

<span className="bg-gray-100 px-3 py-1 rounded-full text-sm">

{item.type}

</span>

</td>



<td className="p-3 text-gray-500">

{item.date}

</td>



</tr>

)


})

}


</tbody>


</table>


</div>



</div>

)

}