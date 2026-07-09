import {
    Database,
    Download
} from "lucide-react";



export default function BackupSettings(){



return(

<div className="rounded-2xl bg-white p-6 shadow">


<div className="flex items-center gap-3">


<div className="rounded-xl bg-blue-100 p-3 text-blue-600">

<Database size={22}/>

</div>



<h2 className="text-xl font-bold">

Backup Settings

</h2>


</div>





<div className="mt-5 space-y-4">



<div className="rounded-lg bg-slate-100 p-4">


<p className="text-sm text-gray-500">

Last Backup

</p>


<p className="font-semibold">

2026-07-01

</p>


</div>






<div className="rounded-lg bg-slate-100 p-4">


<p className="text-sm text-gray-500">

Backup Schedule

</p>


<p className="font-semibold">

Every 24 Hours

</p>


</div>






<button

className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white"

>


<Download size={18}/>


Create Manual Backup


</button>





</div>



</div>


)

}