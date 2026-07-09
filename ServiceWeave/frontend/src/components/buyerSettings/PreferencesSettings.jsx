import { useState } from "react";


// ✅ Component declared outside render
function Option({ title, value, toggle }) {

    return (

        <div className="flex justify-between items-center py-3 border-b">

            <span className="capitalize">
                {title}
            </span>


            <input

                type="checkbox"

                checked={value}

                onChange={() => toggle(title)}

                className="w-5 h-5"

            />


        </div>

    );

}



export default function PreferencesSettings(){


    const [settings,setSettings] = useState({

        email:true,
        push:true,
        booking:true,
        message:true,
        reviews:true,
        profile:true,
        sellerMessage:true

    });



    const toggle = (key) => {

        setSettings(prev => ({

            ...prev,

            [key]: !prev[key]

        }));

    };



    return (

        <div className="bg-white shadow rounded-xl p-6">


            <h2 className="text-xl font-bold mb-4">
                Preferences
            </h2>



            <Option

                title="email"

                value={settings.email}

                toggle={toggle}

            />



            <Option

                title="push"

                value={settings.push}

                toggle={toggle}

            />



            <Option

                title="booking"

                value={settings.booking}

                toggle={toggle}

            />



            <Option

                title="message"

                value={settings.message}

                toggle={toggle}

            />



            <Option

                title="reviews"

                value={settings.reviews}

                toggle={toggle}

            />




            <h3 className="font-bold mt-6 mb-2">
                Privacy
            </h3>




            <Option

                title="profile"

                value={settings.profile}

                toggle={toggle}

            />



            <Option

                title="sellerMessage"

                value={settings.sellerMessage}

                toggle={toggle}

            />





            <select

                className="border p-3 rounded mt-5"

            >

                <option>
                    English
                </option>

            </select>



        </div>

    );


}