import { useState } from "react";

import ReportFilters from "./ReportFilters";
import ReportsTable from "./ReportsTable";
import ReportDetailModal from "./ReportDetailModal";



const reportsData = [

{
id:1,
type:"Review",
reportedBy:"Ahmed Khan",
content:"Fake review posted on service",
reason:"Fake reviews",
date:"2026-07-01",
status:"Pending",
user:"Seller Pro",
details:"This review contains misleading information."
},


{
id:2,
type:"Listing",
reportedBy:"Sara Ali",
content:"Inappropriate product image",
reason:"Violates terms",
date:"2026-06-28",
status:"Pending",
user:"Tech Store",
details:"Product image violates marketplace rules."
},


{
id:3,
type:"User",
reportedBy:"Hassan",
content:"Bad behavior complaint",
reason:"Bad behavior",
date:"2026-06-20",
status:"Resolved",
user:"John Smith",
details:"User was warned by admin."
}

];




export default function ManageReportsPage(){


const [reports,setReports]=useState(reportsData);


const [selectedReport,setSelectedReport]=useState(null);



const filterReports=(filters)=>{


let data=[...reportsData];



if(filters.status!=="All"){

data=data.filter(
item=>item.status===filters.status
);

}



if(filters.type!=="All"){

data=data.filter(
item=>item.type===filters.type
);

}



if(filters.search){

data=data.filter(

item=>

item.content
.toLowerCase()
.includes(
filters.search.toLowerCase()
)

);

}



setReports(data);


};






const updateReport=(id,status)=>{


setReports(prev=>

prev.map(report=>

report.id===id

?

{
...report,
status
}

:

report

)

);



setSelectedReport(null);


};






return(

<div className="space-y-6">


<div>


<h1 className="text-3xl font-bold">

Manage Reports

</h1>


<p className="text-gray-500 mt-1">

Review reported users, listings and content.

</p>


</div>





<ReportFilters

onFilter={filterReports}

/>





<ReportsTable

reports={reports}

view={setSelectedReport}

/>






{
selectedReport &&


<ReportDetailModal

report={selectedReport}

close={()=>setSelectedReport(null)}

resolve={updateReport}

/>

}



</div>


)

}