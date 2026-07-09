import {useState} from "react";


export default function EditReviewModal({

review,
close,
save

}){


const [form,setForm]=useState(review);



return(

<div className="fixed inset-0 bg-black/50 flex items-center justify-center">


<div className="bg-white rounded-xl p-6 w-[420px]">


<h2 className="text-2xl font-bold mb-5">

Edit Review

</h2>



<input

className="border p-3 w-full rounded mb-3"

value={form.title}

onChange={(e)=>
setForm({
...form,
title:e.target.value
})
}

/>



<textarea

className="border p-3 w-full rounded mb-3"

value={form.comment}

onChange={(e)=>
setForm({
...form,
comment:e.target.value
})
}

/>



<select

className="border p-3 w-full rounded"

value={form.rating}

onChange={(e)=>
setForm({
...form,
rating:Number(e.target.value)
})
}

>


<option value="5">
⭐⭐⭐⭐⭐
</option>


<option value="4">
⭐⭐⭐⭐
</option>


<option value="3">
⭐⭐⭐
</option>


<option value="2">
⭐⭐
</option>


<option value="1">
⭐
</option>


</select>



<div className="flex justify-end gap-3 mt-5">


<button

onClick={close}

className="px-4 py-2 border rounded"

>

Cancel

</button>



<button

onClick={()=>
save(form)
}

className="px-4 py-2 bg-blue-600 text-white rounded"

>

Save Changes

</button>


</div>


</div>


</div>


)

}