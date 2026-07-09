import AccountSettings from "./AccountSettings";
import ProfileSettings from "./ProfileSettings";
import PreferencesSettings from "./PreferencesSettings";
import PaymentMethods from "./PaymentMethods";


export default function BuyerSettingsPage(){


const logout=()=>{

const confirmLogout=
window.confirm(
"You will be signed out. Continue?"
);


if(confirmLogout){

localStorage.removeItem("token");

window.location.href="/login";

}

};



return(

<div className="space-y-8">


<h1 className="text-3xl font-bold">
Settings
</h1>



<AccountSettings />



<ProfileSettings />



<PreferencesSettings />



<PaymentMethods />




<div className="bg-white rounded-xl shadow p-6">


<h2 className="text-xl font-bold mb-3">
Logout
</h2>


<p className="text-gray-500 mb-5">
You will be signed out from your account.
</p>



<button

onClick={logout}

className="bg-red-600 text-white px-8 py-3 rounded-lg"

>

Logout

</button>


</div>



</div>


)

}