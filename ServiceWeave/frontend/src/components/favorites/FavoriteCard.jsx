import { Heart, MessageCircle } from "lucide-react";


export default function FavoriteCard({

item,
removeFavorite,
view

}){


return(

<div

className={`bg-white rounded-xl shadow p-5

${view==="list"?
"flex gap-5 items-center":
""
}

`}


>


<img

src={item.image}

alt={item.title}

className={

view==="list"

?
"w-32 h-32 rounded-lg object-cover"

:

"w-full h-48 rounded-lg object-cover"

}

/>



<div className="flex-1">


<div className="flex justify-between">


<h2 className="font-bold text-lg">

{item.title}

</h2>



<button

onClick={()=>
removeFavorite(item.id)
}

className="text-red-500"

>

<Heart fill="red"/>

</button>



</div>



<p className="text-gray-600">

Seller:
{item.seller}

</p>



<p className="text-yellow-600 mt-1">

⭐ {item.rating}

</p>



<p className="font-semibold mt-2">

${item.price}

</p>




<div className="flex gap-3 mt-4">


<button

className="bg-blue-600 text-white px-4 py-2 rounded-lg"

>

View Details

</button>



<button

className="border px-4 py-2 rounded-lg flex gap-2 items-center"

>

<MessageCircle size={18}/>

Message

</button>


</div>


</div>



</div>


)

}