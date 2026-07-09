import {
X,
Mail,
Phone,
Star,
Wallet
} from "lucide-react";


export default function UserDetailModal({
user,
close
}){


return(

<div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">


<div className="bg-white rounded-2xl w-full max-w-lg p-6">


<div className="flex justify-between">


<h2 className="text-xl font-bold">

User Details

</h2>


<button onClick={close}>

<X/>

</button>


</div>




<div className="mt-5 space-y-4">


<div className="flex items-center gap-4">


<div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-white flex items-center justify-center text-2xl font-bold">

{user.name[0]}

</div>


<div>

<h3 className="font-bold">

{user.name}

</h3>

<p className="text-gray-500">

{user.role}

</p>


</div>


</div>





<p className="flex gap-2">

<Mail size={18}/>

{user.email}

</p>



<p className="flex gap-2">

<Phone size={18}/>

+92 300 0000000

</p>




<div className="grid grid-cols-2 gap-4">


<div className="bg-gray-100 p-3 rounded-xl">

<p className="text-sm text-gray-500">

Transactions

</p>

<b>

{user.transactions}

</b>

</div>




<div className="bg-gray-100 p-3 rounded-xl">

<p className="text-sm text-gray-500">

Rating

</p>

<b className="flex gap-1">

<Star size={16}/>

{user.rating}

</b>

</div>


</div>




<div className="bg-blue-50 p-4 rounded-xl">


<p className="flex gap-2">

<Wallet size={18}/>

Total Earned/Spent

</p>


<b>

{user.role==="Seller"

?user.earned

:user.spent}

</b>


</div>



</div>


</div>


</div>


)

}