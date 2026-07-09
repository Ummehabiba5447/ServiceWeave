export default function InvoiceModal({
purchase,
close
}){


return(

<div className="fixed inset-0 bg-black/50 flex items-center justify-center">


<div className="bg-white p-8 rounded-xl w-[400px]">


<h2 className="text-2xl font-bold mb-4">
Invoice
</h2>


<p>
Service:
{purchase.name}
</p>


<p>
Seller:
{purchase.seller}
</p>


<p>
Amount:
${purchase.price}
</p>


<p>
Date:
{purchase.date}
</p>


<button

onClick={close}

className="mt-5 bg-blue-600 text-white px-5 py-2 rounded"

>

Close

</button>



</div>


</div>


)

}