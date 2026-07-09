import {
    Eye,
    Ban,
    Trash2
} from "lucide-react";


export default function UserTable({
    users,
    viewUser,
    suspendUser,
    deleteUser
}){


return(

<div className="bg-white rounded-2xl shadow overflow-hidden">


<div className="overflow-x-auto">


<table className="w-full">


<thead className="bg-slate-100">


<tr>


<th className="p-4 text-left">
User
</th>


<th className="p-4 text-left">
Role
</th>


<th className="p-4 text-left">
Join Date
</th>


<th className="p-4 text-left">
Status
</th>


<th className="p-4 text-left">
Transactions
</th>


<th className="p-4 text-left">
Actions
</th>


</tr>


</thead>



<tbody>


{

users.map(user=>(


<tr

key={user.id}

className="border-b hover:bg-slate-50"

>


<td className="p-4">


<div className="flex items-center gap-3">


<div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold">

{user.name[0]}

</div>


<div>

<p className="font-semibold">

{user.name}

</p>

<p className="text-sm text-gray-500">

{user.email}

</p>

</div>


</div>


</td>





<td className="p-4">


<span

className={`px-3 py-1 rounded-full text-sm

${user.role==="Seller"

?"bg-blue-100 text-blue-700"

:"bg-green-100 text-green-700"}

`}

>

{user.role}

</span>


</td>





<td className="p-4">

{user.joinDate}

</td>





<td className="p-4">


<span

className={`px-3 py-1 rounded-full text-sm

${user.status==="Active"

?"bg-green-100 text-green-700"

:"bg-red-100 text-red-700"}

`}

>

{user.status}

</span>


</td>





<td className="p-4">

{user.transactions}

</td>





<td className="p-4">


<div className="flex gap-2">


<button

onClick={()=>viewUser(user)}

className="p-2 rounded-lg bg-blue-100 text-blue-600"

>

<Eye size={18}/>

</button>



<button

onClick={()=>suspendUser(user)}

className="p-2 rounded-lg bg-orange-100 text-orange-600"

>

<Ban size={18}/>

</button>



<button

onClick={()=>deleteUser(user)}

className="p-2 rounded-lg bg-red-100 text-red-600"

>

<Trash2 size={18}/>

</button>



</div>


</td>



</tr>


))


}


</tbody>


</table>


</div>


</div>


)

}