export default function PayoutHistory({
    payouts
}) {


return (

<div className="overflow-hidden rounded-2xl bg-white shadow">


<div className="overflow-x-auto">


<table className="w-full">


<thead className="bg-slate-100">


<tr>


<th className="p-4 text-left">
Seller
</th>


<th className="p-4 text-left">
Date
</th>


<th className="p-4 text-left">
Amount
</th>


<th className="p-4 text-left">
Status
</th>


</tr>


</thead>





<tbody>


{

payouts.map((payout)=>(


<tr

key={payout.id}

className="border-b hover:bg-slate-50"

>


<td className="p-4 font-medium">

{payout.seller}

</td>




<td className="p-4">

{payout.date}

</td>





<td className="p-4">

{payout.amount}

</td>





<td className="p-4">


<span

className={`rounded-full px-3 py-1 text-sm

${
payout.status==="Paid"

?

"bg-green-100 text-green-700"

:

"bg-yellow-100 text-yellow-700"

}

`}

>

{payout.status}

</span>


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