export default function PurchaseHistoryTable({
purchases,
openInvoice
}){


return(

<div className="bg-white rounded-xl shadow overflow-x-auto">


<table className="w-full">


<thead className="bg-gray-100">

<tr>

<th className="p-4 text-left">
Date
</th>

<th className="p-4">
Product / Service
</th>


<th className="p-4">
Seller
</th>


<th className="p-4">
Price
</th>


<th className="p-4">
Status
</th>


<th className="p-4">
Actions
</th>


</tr>

</thead>



<tbody>


{
purchases.map(item=>(


<tr 
key={item.id}
className="border-t"
>


<td className="p-4">
{item.date}
</td>


<td className="p-4 font-medium">
{item.name}
</td>


<td className="p-4">
{item.seller}
</td>


<td className="p-4">
${item.price}
</td>



<td className="p-4">


<span

className={`px-3 py-1 rounded-full text-sm

${
item.status==="Delivered"
?
"bg-green-100 text-green-700"
:
item.status==="Pending"
?
"bg-yellow-100 text-yellow-700"
:
"bg-red-100 text-red-700"

}

`}

>

{item.status}

</span>


</td>



<td className="p-4 space-x-2">


<button

className="bg-blue-600 text-white px-3 py-1 rounded"

>

View Details

</button>



<button

onClick={()=>
openInvoice(item)
}

className="bg-gray-800 text-white px-3 py-1 rounded"

>

Invoice

</button>



</td>


</tr>


))

}



</tbody>



</table>



</div>


)

}