import {X} from "lucide-react";


export default function ApproveModal({
listing,
close,
confirm
}){


return(

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">


<div className="bg-white rounded-xl p-6 w-full max-w-md">


<div className="flex justify-between">


<h2 className="text-xl font-bold">

Approve Listing

</h2>


<button onClick={close}>

<X/>

</button>


</div>




<p className="mt-4 text-gray-600">

Are you sure you want to approve:

</p>


<p className="font-semibold">

{listing.title}

</p>




<button

onClick={()=>confirm(listing.id)}

className="mt-6 w-full rounded-lg bg-green-600 py-3 text-white"

>

Approve Listing

</button>



</div>


</div>


)

}