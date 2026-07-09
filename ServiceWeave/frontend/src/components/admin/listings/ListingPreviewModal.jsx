import {X} from "lucide-react";


export default function ListingPreviewModal({
listing,
close
}){


return(

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">


<div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">


<div className="flex justify-between">


<h2 className="text-xl font-bold">

Listing Preview

</h2>


<button onClick={close}>

<X/>

</button>


</div>





<img

src={listing.image}

alt={listing.title}

className="mt-5 h-40 w-full rounded-xl object-cover"

/>





<h3 className="mt-5 text-xl font-bold">

{listing.title}

</h3>



<p className="mt-2 text-gray-600">

{listing.description}

</p>




<div className="mt-4 space-y-2">


<p>
<b>Seller:</b> {listing.seller}
</p>


<p>
<b>Category:</b> {listing.category}
</p>


<p>
<b>Price:</b> {listing.price}
</p>


<p>
<b>Type:</b> {listing.type}
</p>


</div>



</div>


</div>


)

}