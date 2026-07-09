import {useState} from "react";


export default function AccountSettings(){


const [user,setUser]=useState({

name:"Umme Habiba",
email:"user@email.com",
phone:"0300-0000000"

});



return(

<div className="bg-white shadow rounded-xl p-6">


<h2 className="text-xl font-bold mb-5">
Account Information
</h2>



<div className="grid md:grid-cols-2 gap-5">


<input

className="border p-3 rounded"

value={user.name}

onChange={(e)=>
setUser({
...user,
name:e.target.value
})
}

/>



<input

className="border p-3 rounded bg-gray-100"

value={user.email}

disabled

/>



<input

className="border p-3 rounded"

value={user.phone}

onChange={(e)=>
setUser({
...user,
phone:e.target.value
})
}

/>



</div>



<button

className="mt-5 bg-blue-600 text-white px-5 py-2 rounded"

>

Save Changes

</button>



</div>

)


}