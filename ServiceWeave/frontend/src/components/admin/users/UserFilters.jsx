import { useState } from "react";


export default function UserFilters({onFilter}){


const [filters,setFilters]=useState({

role:"All",

status:"All",

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

placeholder="Search user..."

onChange={(e)=>
update("search",e.target.value)
}

/>



<select

className="border rounded-lg px-4 py-2"

onChange={(e)=>
update("role",e.target.value)
}

>

<option>
All
</option>

<option>
Buyer
</option>

<option>
Seller
</option>


</select>



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
Active
</option>


<option>
Suspended
</option>


</select>



</div>

)

}