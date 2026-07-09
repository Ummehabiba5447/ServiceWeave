import { useState } from "react";

import ListingFilters from "./ListingFilters";
import ListingTable from "./ListingTable";
import ListingPreviewModal from "./ListingPreviewModal";
import ApproveModal from "./ApproveModal";
import RejectListingModal from "./RejectListingModal";



const listingsData = [

{
id:1,
title:"Website Development Service",
type:"Service",
seller:"Ali Developers",
category:"IT Services",
price:"$500",
date:"2026-06-20",
status:"Pending",
image:"https://via.placeholder.com/80",
description:"Full stack website development using React and Laravel."
},


{
id:2,
title:"Wireless Headphones",
type:"Product",
seller:"Tech Store",
category:"Electronics",
price:"$120",
date:"2026-06-18",
status:"Pending",
image:"https://via.placeholder.com/80",
description:"Premium wireless headphones with noise cancellation."
},


{
id:3,
title:"Graphic Design Package",
type:"Service",
seller:"Creative Studio",
category:"Design",
price:"$250",
date:"2026-06-15",
status:"Approved",
image:"https://via.placeholder.com/80",
description:"Professional logo and branding design."
}

];



export default function ApproveListingsPage(){


const [listings,setListings]=useState(listingsData);


const [selectedListing,setSelectedListing]=useState(null);

const [approveListing,setApproveListing]=useState(null);

const [rejectListing,setRejectListing]=useState(null);



const filterListings=(filters)=>{


let result=[...listingsData];



if(filters.status!=="All"){

result=result.filter(
item=>item.status===filters.status
);

}



if(filters.type!=="All"){

result=result.filter(
item=>item.type===filters.type
);

}



if(filters.search){

result=result.filter(

item=>

item.title
.toLowerCase()
.includes(filters.search.toLowerCase())

);

}



setListings(result);


};





const approve=(id)=>{


setListings(prev=>

prev.map(item=>

item.id===id

?

{
...item,
status:"Approved"
}

:

item

)

);


setApproveListing(null);


};





const reject=(id,data)=>{


setListings(prev=>

prev.map(item=>

item.id===id

?

{
...item,
status:"Rejected",
rejectReason:data.reason
}

:

item

)

);


setRejectListing(null);


};





return(

<div className="space-y-6">


<div>

<h1 className="text-3xl font-bold">

Approve Listings

</h1>


<p className="text-gray-500 mt-1">

Review and manage seller submitted listings.

</p>


</div>




<ListingFilters

onFilter={filterListings}

/>




<ListingTable

listings={listings}

preview={setSelectedListing}

approve={setApproveListing}

reject={setRejectListing}

/>





{
selectedListing &&

<ListingPreviewModal

listing={selectedListing}

close={()=>setSelectedListing(null)}

/>

}




{
approveListing &&

<ApproveModal

listing={approveListing}

close={()=>setApproveListing(null)}

confirm={approve}

/>

}




{
rejectListing &&

<RejectListingModal

listing={rejectListing}

close={()=>setRejectListing(null)}

confirm={reject}

/>

}



</div>


)

}