import {useState} from "react";

import ReviewStats from "./ReviewStats";
import BuyerReviewCard from "./BuyerReviewCard";
import EditReviewModal from "./EditReviewModal";


const reviewsData=[

{
id:1,
service:"Website Development",
seller:"Tech Solutions",
rating:5,
title:"Excellent Service",
comment:"Very professional and delivered before deadline.",
date:"2026-06-20"
},

{
id:2,
service:"Logo Designing",
seller:"Creative Studio",
rating:4,
title:"Good Experience",
comment:"Creative designs and quick response.",
date:"2026-06-12"
},

{
id:3,
service:"Laptop Repair",
seller:"Fix Masters",
rating:4,
title:"Satisfied",
comment:"Repair was completed successfully.",
date:"2026-05-30"
}

];



export default function BuyerReviewsPage(){


const [reviews,setReviews]=useState(reviewsData);

const [selectedReview,setSelectedReview]=useState(null);



const deleteReview=(id)=>{


const confirmDelete=
window.confirm(
"Are you sure you want to delete this review?"
);


if(confirmDelete){

setReviews(
reviews.filter(
review=>review.id!==id
)
);

}


};



const updateReview=(updated)=>{


setReviews(

reviews.map(item=>

item.id===updated.id

?

updated

:

item

)

);


setSelectedReview(null);


};



return(

<div className="space-y-6">


<h1 className="text-3xl font-bold">

My Reviews

</h1>



<ReviewStats

reviews={reviews}

/>



<div className="space-y-5">


{

reviews.map(review=>(

<BuyerReviewCard

key={review.id}

review={review}

edit={()=>setSelectedReview(review)}

remove={deleteReview}

/>

))

}


</div>



{
selectedReview &&

<EditReviewModal

review={selectedReview}

close={()=>
setSelectedReview(null)
}

save={updateReview}

/>

}



</div>

)


}