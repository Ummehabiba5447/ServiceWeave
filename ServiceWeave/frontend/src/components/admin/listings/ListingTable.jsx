import {
    Eye,
    CheckCircle,
    XCircle
} from "lucide-react";


export default function ListingTable({
    listings,
    preview,
    approve,
    reject
}) {


return (

<div className="bg-white rounded-2xl shadow overflow-hidden">


<div className="overflow-x-auto">


<table className="w-full">


<thead className="bg-slate-100">


<tr>

<th className="p-4 text-left">
Image
</th>


<th className="p-4 text-left">
Title
</th>


<th className="p-4 text-left">
Type
</th>


<th className="p-4 text-left">
Seller
</th>


<th className="p-4 text-left">
Date
</th>


<th className="p-4 text-left">
Status
</th>


<th className="p-4 text-left">
Actions
</th>


</tr>


</thead>




<tbody>


{
listings.map((listing)=>(


<tr

key={listing.id}

className="border-b hover:bg-slate-50"

>


<td className="p-4">


<img

src={listing.image}

alt={listing.title}

className="h-14 w-14 rounded-lg object-cover"

/>


</td>





<td className="p-4">


<p className="font-semibold">

{listing.title}

</p>


<p className="text-sm text-gray-500">

{listing.category}

</p>


</td>





<td className="p-4">


<span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">

{listing.type}

</span>


</td>





<td className="p-4">

{listing.seller}

</td>





<td className="p-4">

{listing.date}

</td>





<td className="p-4">


<span

className={`px-3 py-1 rounded-full text-sm

${
listing.status==="Approved"

?

"bg-green-100 text-green-700"

:

listing.status==="Rejected"

?

"bg-red-100 text-red-700"

:

"bg-yellow-100 text-yellow-700"

}

`}

>

{listing.status}

</span>


</td>





<td className="p-4">


<div className="flex gap-2">


<button

onClick={()=>preview(listing)}

className="rounded-lg bg-blue-100 p-2 text-blue-600"

>

<Eye size={18}/>

</button>





{
listing.status==="Pending" &&

<>


<button

onClick={()=>approve(listing)}

className="rounded-lg bg-green-100 p-2 text-green-600"

>

<CheckCircle size={18}/>

</button>




<button

onClick={()=>reject(listing)}

className="rounded-lg bg-red-100 p-2 text-red-600"

>

<XCircle size={18}/>

</button>


</>

}



</div>


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