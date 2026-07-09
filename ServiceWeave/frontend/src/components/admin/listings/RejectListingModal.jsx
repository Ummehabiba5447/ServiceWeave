import {X} from "lucide-react";
import {useState} from "react";


export default function RejectListingModal({
listing,
close,
confirm
}){


const [reason,setReason]=useState("");



return(

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">


<div className="bg-white rounded-xl p-6 w-full max-w-md">


<div className="flex justify-between">


<h2 className="text-xl font-bold text-red-600">

Reject Listing

</h2>


<button onClick={close}>

<X/>

</button>


</div>





<p className="mt-4">

Reject:

<b> {listing.title}</b>

</p>





<select

className="mt-4 w-full rounded-lg border p-3"

value={reason}

onChange={(e)=>setReason(e.target.value)}

>


<option value="">
Select reason
</option>


<option>
Inappropriate content
</option>


<option>
Duplicate listing
</option>


<option>
Low quality images
</option>


<option>
Violates terms
</option>


<option>
Other
</option>


</select>




<button

disabled={!reason}

onClick={()=>confirm(

listing.id,

{
reason

}

)}

className={`mt-6 w-full rounded-lg py-3 text-white

${
reason

?

"bg-red-600"

:

"bg-gray-300"

}

`}

>

Reject Listing

</button>


</div>


</div>


)

}