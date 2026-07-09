import { useState } from "react";
import FavoriteCard from "./FavoriteCard";
import FavoritesFilters from "./FavoritesFilters";


const favoriteItems = [

{
id:1,
type:"Service",
title:"Full Stack Website Development",
seller:"Code Masters",
price:800,
rating:4.8,
image:"https://via.placeholder.com/300",
date:"2026-07-01"
},

{
id:2,
type:"Product",
title:"Wireless Headphones",
seller:"Tech Store",
price:120,
rating:4.5,
image:"https://via.placeholder.com/300",
date:"2026-06-25"
},

{
id:3,
type:"Service",
title:"Graphic Design Package",
seller:"Creative Studio",
price:250,
rating:4.7,
image:"https://via.placeholder.com/300",
date:"2026-06-15"
},

{
id:4,
type:"Product",
title:"Mechanical Keyboard",
seller:"Gaming Hub",
price:150,
rating:4.6,
image:"https://via.placeholder.com/300",
date:"2026-06-10"
}

];



export default function FavoritesPage(){


const [items,setItems]=useState(favoriteItems);

const [view,setView]=useState("grid");



const removeFavorite=(id)=>{

setItems(
items.filter(item=>item.id!==id)
);

};



const applyFilters=(filters)=>{


let result=[...favoriteItems];



if(filters.type!=="All"){

result=result.filter(
item=>item.type===filters.type
);

}



if(filters.sort==="Price Low"){

result.sort(
(a,b)=>a.price-b.price
);

}



if(filters.sort==="Price High"){

result.sort(
(a,b)=>b.price-a.price
);

}



if(filters.sort==="Highest Rated"){

result.sort(
(a,b)=>b.rating-a.rating
);

}



setItems(result);


}



return(

<div className="space-y-6">


<div className="flex justify-between items-center">


<h1 className="text-3xl font-bold">
Saved Items
</h1>


<div className="flex gap-2">


<button

onClick={()=>setView("grid")}

className={`px-4 py-2 rounded 
${view==="grid"?
"bg-blue-600 text-white":
"bg-gray-200"
}`}

>
Grid
</button>


<button

onClick={()=>setView("list")}

className={`px-4 py-2 rounded 
${view==="list"?
"bg-blue-600 text-white":
"bg-gray-200"
}`}

>
List
</button>


</div>


</div>




<FavoritesFilters

onFilter={applyFilters}

/>




{
items.length===0 ?


<div className="bg-white rounded-xl p-10 text-center shadow">


<h2 className="text-xl font-semibold">

You haven't saved any items yet

</h2>


<p className="text-gray-500 mt-2">

Browse products and services to save favorites

</p>


</div>



:


<div

className={
view==="grid"

?
"grid md:grid-cols-2 lg:grid-cols-3 gap-6"

:

"space-y-4"

}

>


{

items.map(item=>(

<FavoriteCard

key={item.id}

item={item}

view={view}

removeFavorite={removeFavorite}

/>

))


}


</div>


}



</div>


)


}