import {
    Activity,
    Database,
    HardDrive,
    Users
} from "lucide-react";



const healthData=[


{
title:"API Response Time",
value:"45ms",
status:"Normal",
icon:Activity,
color:"text-green-600",
bg:"bg-green-100"
},


{
title:"Database Status",
value:"Connected",
status:"Online",
icon:Database,
color:"text-green-600",
bg:"bg-green-100"
},


{
title:"Storage Usage",
value:"45% Used",
status:"Healthy",
icon:HardDrive,
color:"text-blue-600",
bg:"bg-blue-100"
},


{
title:"Active Users Now",
value:"234",
status:"Online",
icon:Users,
color:"text-violet-600",
bg:"bg-violet-100"
}


];



export default function SystemHealth(){


return(

<div className="bg-white rounded-2xl shadow p-6">


<h2 className="text-lg font-semibold mb-5">

System Health

</h2>



<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">


{

healthData.map((item)=>{


const Icon=item.icon;


return(

<div

key={item.title}

className="border rounded-xl p-5"

>


<div className="flex justify-between">


<div

className={`${item.bg} p-3 rounded-xl`}

>

<Icon

size={22}

className={item.color}

/>

</div>



<span className="text-sm text-green-600 font-medium">

{item.status}

</span>


</div>



<h3 className="mt-4 text-gray-500 text-sm">

{item.title}

</h3>



<p className="text-2xl font-bold mt-1">

{item.value}

</p>



</div>

)


})

}


</div>



</div>

)

}