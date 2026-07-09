import {X} from "lucide-react";


export default function DeleteUserModal({
user,
close,
confirm
}){


return(

<div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">


<div className="bg-white rounded-xl p-6 max-w-md w-full">


<div className="flex justify-between">


<h2 className="text-xl font-bold text-red-600">

Delete Account

</h2>


<button onClick={close}>

<X/>

</button>


</div>



<p className="mt-4 text-gray-600">

This will permanently delete:

<b> {user.name}</b>

and all associated data.

</p>



<button

onClick={()=>confirm(user.id)}

className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg"

>

Delete Account

</button>


</div>


</div>


)

}