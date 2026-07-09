import {useState} from "react";


export default function FavoritesFilters({
onFilter
}){


const [filters,setFilters]=useState({

type:"All",
sort:"Most Recent"

});



const update=(key,value)=>{


const data={
...filters,
[key]:value
};


setFilters(data);

onFilter(data);


}



return(

<div className="bg-white shadow rounded-xl p-5 flex flex-wrap gap-4">



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
Products
</option>


<option>
Services
</option>


</select>



<select

className="border rounded-lg px-4 py-2"

onChange={(e)=>
update("sort",e.target.value)
}

>


<option>
Most Recent
</option>


<option>
Price Low
</option>


<option>
Price High
</option>


<option>
Highest Rated
</option>


</select>


</div>


)


}
