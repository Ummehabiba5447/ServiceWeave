export default function ReviewStats({
reviews
}){


const total=reviews.length;


const average=

(
reviews.reduce(
(sum,item)=>sum+item.rating,
0
)
/total
).toFixed(1);



return(

<div className="grid md:grid-cols-3 gap-5">


<div className="bg-white shadow rounded-xl p-5">

<h3 className="text-gray-500">
Total Reviews
</h3>

<p className="text-3xl font-bold">
{total}
</p>

</div>



<div className="bg-white shadow rounded-xl p-5">

<h3 className="text-gray-500">
Average Rating
</h3>

<p className="text-3xl font-bold">
⭐ {average}/5
</p>

</div>



<div className="bg-white shadow rounded-xl p-5">

<h3 className="text-gray-500">
Most Common Rating
</h3>


<p className="text-3xl font-bold">
⭐⭐⭐⭐
</p>


</div>



</div>


)


}