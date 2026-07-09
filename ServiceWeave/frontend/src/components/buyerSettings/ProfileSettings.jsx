import {useState} from "react";


export default function ProfileSettings(){


const [profile,setProfile]=useState({

bio:"",
location:"Rawalpindi"

});



return(

<div className="bg-white shadow rounded-xl p-6">


<h2 className="text-xl font-bold mb-5">
Profile
</h2>



<div className="flex items-center gap-5">


<img

src="https://via.placeholder.com/100"

className="w-24 h-24 rounded-full"

/>



<button

className="border px-4 py-2 rounded"

>

Change Picture

</button>


</div>




<textarea

className="border rounded w-full mt-5 p-3"

rows="4"

maxLength="300"

placeholder="Write your bio..."

value={profile.bio}

onChange={(e)=>
setProfile({
...profile,
bio:e.target.value
})
}

/>



<input

className="border rounded p-3 w-full mt-4"

value={profile.location}

onChange={(e)=>
setProfile({
...profile,
location:e.target.value
})
}

/>



<button

className="mt-5 bg-blue-600 text-white px-5 py-2 rounded"

>

Save Profile

</button>



</div>

)


}