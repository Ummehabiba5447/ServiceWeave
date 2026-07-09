import {
    useState
} from "react";



function Option({
    title,
    value,
    name,
    toggle
}) {


    return (

        <div className="flex items-center justify-between border-b py-3">


            <div>

                <p className="font-medium">
                    {title}
                </p>


                <p className="text-sm text-gray-500">
                    Enable or disable this feature
                </p>


            </div>



            <input

                type="checkbox"

                checked={value}

                onChange={() => toggle(name)}

                className="h-5 w-5"

            />


        </div>

    )

}






export default function FeatureFlags(){



const [features,setFeatures]=useState({

chat:true,

reviews:true,

payments:true,

maintenance:false

});





const toggle=(key)=>{


setFeatures(prev => ({

...prev,

[key]:!prev[key]

}));


};







return(

<div className="rounded-2xl bg-white p-6 shadow">


<h2 className="text-xl font-bold">

Feature Flags

</h2>


<p className="mt-1 text-sm text-gray-500">

Control platform features.

</p>





<Option

title="Messaging System"

name="chat"

value={features.chat}

toggle={toggle}

/>






<Option

title="User Reviews"

name="reviews"

value={features.reviews}

toggle={toggle}

/>






<Option

title="Online Payments"

name="payments"

value={features.payments}

toggle={toggle}

/>







<Option

title="Maintenance Mode"

name="maintenance"

value={features.maintenance}

toggle={toggle}

/>





</div>

)

}