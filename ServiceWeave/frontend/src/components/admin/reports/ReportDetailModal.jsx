import {
    X,
    Trash2,
    UserX,
    AlertTriangle,
    CheckCircle
} from "lucide-react";



export default function ReportDetailModal({
    report,
    close,
    resolve
}) {


return (

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">


<div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">



<div className="flex items-center justify-between">


<h2 className="text-xl font-bold">

Report Details

</h2>


<button

onClick={close}

className="rounded-lg p-2 hover:bg-slate-100"

>

<X/>

</button>


</div>






<div className="mt-5 space-y-3">


<p>

<b>Content Type:</b> {report.type}

</p>


<p>

<b>Reported By:</b> {report.reportedBy}

</p>



<p>

<b>Against User:</b> {report.user}

</p>



<p>

<b>Reason:</b> {report.reason}

</p>



<p>

<b>Date:</b> {report.date}

</p>



<div className="rounded-lg bg-slate-100 p-4">


<p className="font-semibold">

Reported Content

</p>


<p className="mt-1 text-gray-600">

{report.details}

</p>


</div>



</div>







<div className="mt-6 grid gap-3">


<button

onClick={()=>resolve(report.id,"Resolved")}

className="flex items-center justify-center gap-2 rounded-lg bg-green-600 py-3 text-white"

>

<CheckCircle size={18}/>

Resolve Report

</button>






<button

onClick={()=>resolve(report.id,"Resolved")}

className="flex items-center justify-center gap-2 rounded-lg bg-red-600 py-3 text-white"

>

<Trash2 size={18}/>

Remove Content

</button>






<button

onClick={()=>resolve(report.id,"Resolved")}

className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 py-3 text-white"

>

<UserX size={18}/>

Suspend User

</button>






<button

onClick={()=>resolve(report.id,"Dismissed")}

className="flex items-center justify-center gap-2 rounded-lg border py-3"

>

<AlertTriangle size={18}/>

Dismiss Report

</button>



</div>



</div>


</div>


)

}