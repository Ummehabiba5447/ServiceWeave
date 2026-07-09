export default function TransactionTable({
    transactions
}) {


return (

<div className="overflow-hidden rounded-2xl bg-white shadow">


<div className="overflow-x-auto">


<table className="w-full">


<thead className="bg-slate-100">


<tr>


<th className="p-4 text-left">
Date
</th>


<th className="p-4 text-left">
Transaction Type
</th>


<th className="p-4 text-left">
Amount
</th>


<th className="p-4 text-left">
Commission
</th>


<th className="p-4 text-left">
Status
</th>


<th className="p-4 text-left">
Reference
</th>


</tr>


</thead>





<tbody>


{

transactions.map((transaction)=>(


<tr

key={transaction.id}

className="border-b hover:bg-slate-50"

>


<td className="p-4">

{transaction.date}

</td>





<td className="p-4 font-medium">

{transaction.type}

</td>





<td className="p-4">

${transaction.amount}

</td>





<td className="p-4 text-green-600 font-semibold">

${transaction.commission}

</td>





<td className="p-4">


<span

className={`rounded-full px-3 py-1 text-sm

${
transaction.status==="Completed"

?

"bg-green-100 text-green-700"

:

transaction.status==="Pending"

?

"bg-yellow-100 text-yellow-700"

:

"bg-red-100 text-red-700"

}

`}

>

{transaction.status}

</span>


</td>





<td className="p-4">

{transaction.reference}

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