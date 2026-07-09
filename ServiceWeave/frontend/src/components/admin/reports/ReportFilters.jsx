import {useState} from "react";


export default function ReportFilters({
onFilter
}){


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

<div className="rounded-xl bg-white p-5 shadow flex flex-wrap gap-4">


<input

placeholder="Search report..."

className="border rounded-lg px-4 py-2"

onChange={(e)=>

update(
"search",
e.target.value
)

}


/>



<select

className="border rounded-lg px-4 py-2"

onChange={(e)=>

update(
"status",
e.target.value
)

}

>


<option>
All
</option>


<option>
Pending
</option>


<option>
Resolved
</option>


<option>
Dismissed
</option>


</select>






<select

className="border rounded-lg px-4 py-2"

onChange={(e)=>

update(
"type",
e.target.value
)

}

>


<option>
All
</option>


<option>
Review
</option>


<option>
Listing
</option>


<option>
User
</option>


<option>
Message
</option>


</select>



</div>


)

}