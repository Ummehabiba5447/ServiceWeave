import {useState} from "react";


export default function PaymentMethods(){


const [methods,setMethods]=useState([]);



return(

<div className="bg-white shadow rounded-xl p-6">


<h2 className="text-xl font-bold mb-4">

Payment Methods

</h2>



{
methods.length===0 ?


<p className="text-gray-500">

No saved payment methods

</p>


:


methods.map((item,index)=>(

<p key={index}>
{item}
</p>

))


}



<button

onClick={()=>
setMethods([
...methods,
"Visa **** 4567"
])
}

className="mt-5 bg-blue-600 text-white px-5 py-2 rounded"

>

Add Payment Method

</button>



</div>


)

}