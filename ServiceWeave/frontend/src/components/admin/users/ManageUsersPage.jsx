import { useState } from "react";

import UserFilters from "./UserFilters";
import UserTable from "./UserTable";
import UserDetailModal from "./UserDetailModal";
import SuspendUserModal from "./SuspendUserModal";
import DeleteUserModal from "./DeleteUserModal";


const usersData = [

{
id:1,
name:"Ali Khan",
email:"ali@gmail.com",
role:"Seller",
joinDate:"2026-01-15",
status:"Active",
transactions:45,
spent:"$0",
earned:"$5600",
rating:4.8
},


{
id:2,
name:"Sara Ahmed",
email:"sara@gmail.com",
role:"Buyer",
joinDate:"2026-02-10",
status:"Active",
transactions:20,
spent:"$2400",
earned:"$0",
rating:4.5
},


{
id:3,
name:"Ahmed Services",
email:"ahmed@gmail.com",
role:"Seller",
joinDate:"2026-03-05",
status:"Suspended",
transactions:12,
spent:"$0",
earned:"$1200",
rating:3.9
},


{
id:4,
name:"Fatima Noor",
email:"fatima@gmail.com",
role:"Buyer",
joinDate:"2026-04-20",
status:"Active",
transactions:35,
spent:"$3500",
earned:"$0",
rating:4.9
}

];



export default function ManageUsersPage(){


const [users,setUsers]=useState(usersData);


const [selectedUser,setSelectedUser]=useState(null);


const [suspendUser,setSuspendUser]=useState(null);


const [deleteUser,setDeleteUser]=useState(null);




const applyFilters=(filters)=>{


let result=[...usersData];



if(filters.role!=="All"){

result=result.filter(
user=>user.role===filters.role
);

}



if(filters.status!=="All"){

result=result.filter(
user=>user.status===filters.status
);

}



if(filters.search){

result=result.filter(

user=>

user.name
.toLowerCase()
.includes(filters.search.toLowerCase())

||

user.email
.toLowerCase()
.includes(filters.search.toLowerCase())

);

}



setUsers(result);


};





const suspend=(id, data)=>{


setUsers(prev=>

prev.map(user=>

user.id===id

?

{
...user,
status:"Suspended",
suspendReason:data.reason,
suspendMessage:data.message
}

:

user

)

);


setSuspendUser(null);


};



const removeUser=(id)=>{


setUsers(prev=>

prev.filter(
user=>user.id!==id
)

);


setDeleteUser(null);


};





return(

<div className="space-y-6">


<h1 className="text-3xl font-bold">

Manage Users

</h1>



<UserFilters

onFilter={applyFilters}

/>




<UserTable

users={users}

viewUser={setSelectedUser}

suspendUser={setSuspendUser}

deleteUser={setDeleteUser}

/>





{
selectedUser &&

<UserDetailModal

user={selectedUser}

close={()=>setSelectedUser(null)}

/>

}



{
suspendUser &&

<SuspendUserModal

user={suspendUser}

close={()=>setSuspendUser(null)}

confirm={suspend}

/>

}



{
deleteUser &&

<DeleteUserModal

user={deleteUser}

close={()=>setDeleteUser(null)}

confirm={removeUser}

/>

}



</div>

)

}