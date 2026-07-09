import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts";



const data=[

{
month:"Jan",
revenue:5000
},

{
month:"Feb",
revenue:7200
},

{
month:"Mar",
revenue:9000
},

{
month:"Apr",
revenue:6500
},

{
month:"May",
revenue:11000
},

{
month:"Jun",
revenue:12450
}

];




export default function RevenueChart(){


return(

<div className="rounded-2xl bg-white p-6 shadow">


<h2 className="mb-5 text-xl font-bold">

Monthly Revenue

</h2>



<div className="h-80">


<ResponsiveContainer width="100%" height="100%">


<BarChart data={data}>


<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>


<Bar

dataKey="revenue"

fill="#2563eb"

/>


</BarChart>


</ResponsiveContainer>


</div>


</div>


)

}