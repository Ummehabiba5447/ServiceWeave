import {useState} from "react";


export default function PurchaseFilters({onFilter}){


const [filters,setFilters]=useState({

search:"",
status:"All",
sort:"Newest"

});



const update=(key,value)=>{

const newFilters={
...filters,
[key]:value
};

setFilters(newFilters);

onFilter(newFilters);

}



return(

<div className="bg-white p-5 rounded-xl shadow flex flex-wrap gap-4">


<input

className="border rounded-lg px-4 py-2"

placeholder="Search product/service"

onChange={(e)=>
update("search",e.target.value)
}

/>


<select

className="border rounded-lg px-4 py-2"

onChange={(e)=>
update("status",e.target.value)
}

>

<option>All</option>
<option>Delivered</option>
<option>Pending</option>
<option>Cancelled</option>

</select>



<select

className="border rounded-lg px-4 py-2"

onChange={(e)=>
update("sort",e.target.value)
}

>

<option>Newest</option>
<option>Oldest</option>
<option>Highest</option>
<option>Lowest</option>


</select>



</div>

)


}