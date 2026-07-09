import CommissionSettings from "./CommissionSettings";
import NotificationSettings from "./NotificationSettings";
import FeatureFlags from "./FeatureFlags";
import BackupSettings from "./BackupSettings";



export default function AdminSettingsPage(){


return(

<div className="space-y-6">



<div>

<h1 className="text-3xl font-bold">

Platform Settings

</h1>


<p className="mt-1 text-gray-500">

Manage marketplace configuration and system preferences.

</p>


</div>





<CommissionSettings />



<NotificationSettings />



<FeatureFlags />



<BackupSettings />





</div>

)

}