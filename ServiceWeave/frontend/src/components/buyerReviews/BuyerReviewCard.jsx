import {Star, Edit, Trash2} from "lucide-react";


export default function BuyerReviewCard({

review,
edit,
remove

}){


return(

<div className="bg-white shadow rounded-xl p-6">


<div className="flex justify-between">


<div>


<h2 className="text-xl font-bold">

{review.service}

</h2>


<p className="text-gray-500">

Seller: {review.seller}

</p>


</div>



<div className="flex">


{

[1,2,3,4,5].map(star=>(


<Star

key={star}

size={20}

fill={
star<=review.rating
?
"gold"
:
"none"
}

className={
star<=review.rating
?
"text-yellow-500"
:
"text-gray-300"
}

/>


))


}


</div>



</div>




<h3 className="font-semibold mt-4">

{review.title}

</h3>



<p className="text-gray-600 mt-2">

{review.comment}

</p>



<p className="text-sm text-gray-400 mt-3">

{review.date}

</p>



<div className="flex gap-3 mt-5">


<button

onClick={edit}

className="flex gap-2 bg-blue-600 text-white px-4 py-2 rounded"

>

<Edit size={18}/>

Edit

</button>



<button

onClick={()=>
remove(review.id)
}

className="flex gap-2 bg-red-600 text-white px-4 py-2 rounded"

>

<Trash2 size={18}/>

Delete

</button>



</div>



</div>


)

}