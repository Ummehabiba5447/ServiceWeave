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

        <div className="flex justify-between border-b py-3">


            <span className="font-medium">

                {title}

            </span>



            <input

                type="checkbox"

                checked={value}

                onChange={() => toggle(name)}

                className="h-5 w-5"

            />


        </div>

    )

}







export default function NotificationSettings(){



const [settings,setSettings]=useState({

reports:true,

listings:true,

security:true

});







const toggle=(key)=>{


setSettings(prev => ({

...prev,

[key]:!prev[key]

}));


};







return(

<div className="rounded-2xl bg-white p-6 shadow">


<h2 className="text-xl font-bold">

Notification Settings

</h2>


<p className="mt-1 text-sm text-gray-500">

Manage administrator alerts and notifications.

</p>







<Option

title="New reports alerts"

name="reports"

value={settings.reports}

toggle={toggle}

/>







<Option

title="Pending listings alerts"

name="listings"

value={settings.listings}

toggle={toggle}

/>








<Option

title="Suspicious activity alerts"

name="security"

value={settings.security}

toggle={toggle}

/>







<div className="mt-5">


<label className="block text-sm font-medium text-gray-700">

Alert Email

</label>


<input

type="email"

placeholder="admin@serviceweave.com"

className="mt-2 w-full rounded-lg border p-3"

/>


</div>






</div>

)

}