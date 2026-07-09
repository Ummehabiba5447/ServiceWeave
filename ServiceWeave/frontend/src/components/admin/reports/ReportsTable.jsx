import {
    Eye
} from "lucide-react";



export default function ReportsTable({
    reports,
    view
}) {


return (

<div className="overflow-hidden rounded-2xl bg-white shadow">


<div className="overflow-x-auto">


<table className="w-full">


<thead className="bg-slate-100">


<tr>


<th className="p-4 text-left">
Type
</th>


<th className="p-4 text-left">
Content
</th>


<th className="p-4 text-left">
Reported By
</th>


<th className="p-4 text-left">
Reason
</th>


<th className="p-4 text-left">
Date
</th>


<th className="p-4 text-left">
Status
</th>


<th className="p-4 text-left">
Action
</th>


</tr>


</thead>




<tbody>


{
reports.map((report)=>(


<tr

key={report.id}

className="border-b hover:bg-slate-50"

>


<td className="p-4">


<span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">

{report.type}

</span>


</td>




<td className="p-4">


<p className="font-medium">

{report.content}

</p>


<p className="text-sm text-gray-500">

Against: {report.user}

</p>


</td>





<td className="p-4">

{report.reportedBy}

</td>





<td className="p-4">

{report.reason}

</td>





<td className="p-4">

{report.date}

</td>





<td className="p-4">


<span

className={`rounded-full px-3 py-1 text-sm

${
report.status==="Resolved"

?

"bg-green-100 text-green-700"

:

report.status==="Dismissed"

?

"bg-gray-100 text-gray-700"

:

"bg-yellow-100 text-yellow-700"

}

`}

>

{report.status}

</span>


</td>





<td className="p-4">


<button

onClick={()=>view(report)}

className="rounded-lg bg-blue-100 p-2 text-blue-600"

>

<Eye size={18}/>

</button>


</td>



</tr>


))

}



</tbody>


</table>


</div>


</div>


)

}