import {useState} from "react";


export default function ListingFilters({onFilter}){


const [filters,setFilters]=useState({

status:"All",

type:"All",

search:""

});



const update=(key,value)=>{


const data={

...filters,

[key]:value

};


setFilters(data);

onFilter(data);


};



return(

<div className="bg-white rounded-xl shadow p-5 flex flex-wrap gap-4">


<input

className="border rounded-lg px-4 py-2"

placeholder="Search listing..."

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

<option>
All
</option>

<option>
Pending
</option>

<option>
Approved
</option>

<option>
Rejected
</option>


</select>





<select

className="border rounded-lg px-4 py-2"

onChange={(e)=>
update("type",e.target.value)
}

>


<option>
All
</option>

<option>
Product
</option>

<option>
Service
</option>


</select>



</div>

)

}