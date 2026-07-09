import {
useState
} from "react";



export default function CommissionSettings(){


const [rate,setRate]=useState(10);



return(

<div className="rounded-2xl bg-white p-6 shadow">


<h2 className="text-xl font-bold">

Commission Settings

</h2>



<p className="mt-1 text-sm text-gray-500">

Set platform commission percentage.

</p>





<div className="mt-5 flex gap-4 items-center">


<input

type="number"

value={rate}

onChange={(e)=>setRate(e.target.value)}

className="w-32 rounded-lg border p-3"

/>


<span className="font-semibold">

%

</span>



<button

className="rounded-lg bg-blue-600 px-5 py-3 text-white"

>

Save Changes

</button>



</div>





<div className="mt-5 rounded-lg bg-blue-50 p-4 text-sm text-blue-700">


Example:

Service price $100 → Platform earns ${rate}


</div>



</div>


)

}