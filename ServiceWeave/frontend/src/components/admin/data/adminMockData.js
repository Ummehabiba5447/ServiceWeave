export const adminStats = {


totalUsers:{

value:"1,234",

buyers:"778",

sellers:"456"

},


activeListings:{

value:"3,456",

products:"1,200",

services:"2,256"

},


transactions:{

value:"567",

period:"This Month"

},


revenue:{

value:"$12,450",

commission:"10%"

}


};





// =========================
// USER MOCK DATA
// =========================


export const usersData=[


{
id:1,
name:"Ali Khan",
email:"ali@gmail.com",
role:"Seller",
joinDate:"2026-01-15",
status:"Active",
transactions:45,
spent:"$0",
earned:"$5400",
rating:4.8
},


{
id:2,
name:"Sara Ahmed",
email:"sara@gmail.com",
role:"Buyer",
joinDate:"2026-02-10",
status:"Active",
transactions:18,
spent:"$2200",
earned:"$0",
rating:4.5
},


{
id:3,
name:"John Smith",
email:"john@gmail.com",
role:"Seller",
joinDate:"2026-03-05",
status:"Suspended",
transactions:12,
spent:"$0",
earned:"$1200",
rating:3.2
}


];







// =========================
// LISTINGS MOCK DATA
// =========================


export const listingsData=[


{
id:101,
title:"Website Development Service",
type:"Service",
seller:"Ali Developers",
category:"Technology",
price:"$500",
status:"Pending",
submitted:"2026-07-09",
image:"/images/service.png"

},



{
id:102,
title:"Wireless Headphones",
type:"Product",
seller:"Tech Store",
category:"Electronics",
price:"$80",
status:"Approved",
submitted:"2026-07-05",
image:"/images/product.png"

},



{
id:103,
title:"Graphic Design Package",
type:"Service",
seller:"Creative Studio",
category:"Design",
price:"$200",
status:"Rejected",
submitted:"2026-07-01",
image:"/images/design.png"

}


];







// =========================
// REPORTS MOCK DATA
// =========================


export const reportsData=[


{
id:1,
type:"Listing",
reportedBy:"Sara Ahmed",
reason:"Fake Product",
date:"2026-07-09",
status:"Pending",
content:"Wireless Headphones listing"
},



{
id:2,
type:"Review",
reportedBy:"Ali Khan",
reason:"Spam Review",
date:"2026-07-08",
status:"Resolved",
content:"5 star fake review"

},



{
id:3,
type:"User",
reportedBy:"John",
reason:"Suspicious Activity",
date:"2026-07-07",
status:"Pending",
content:"Seller Account"

}


];








// =========================
// SYSTEM LOGS MOCK DATA
// =========================


export const logsData=[


{
id:1,
timestamp:"2026-07-09 10:30 AM",
user:"Admin",
action:"Approved Listing",
resource:"Listing #101",
status:"Success",
ip:"192.168.xxx.xxx",
device:"Chrome Windows"

},


{
id:2,
timestamp:"2026-07-09 09:20 AM",
user:"Sara",
action:"Login",
resource:"Account",
status:"Success",
ip:"192.168.xxx.xxx",
device:"Android"

},


{
id:3,
timestamp:"2026-07-08 06:10 PM",
user:"System",
action:"Backup",
resource:"Database",
status:"Error",
ip:"127.0.0.1",
device:"Server"

}


];









// =========================
// REVENUE MOCK DATA
// =========================


export const revenueData=[


{
month:"January",
revenue:5000
},


{
month:"February",
revenue:7200
},


{
month:"March",
revenue:9000
},


{
month:"April",
revenue:6500
},


{
month:"May",
revenue:11000
},


{
month:"June",
revenue:12450
}


];








export const transactionsData=[


{
id:1,
date:"2026-07-09",
type:"Service Booking",
amount:"$500",
commission:"$50",
status:"Completed",
reference:"TXN1001"
},



{
id:2,
date:"2026-07-08",
type:"Product Sale",
amount:"$250",
commission:"$25",
status:"Completed",
reference:"TXN1002"

},



{
id:3,
date:"2026-07-07",
type:"Service Booking",
amount:"$800",
commission:"$80",
status:"Pending",
reference:"TXN1003"

}


];







// =========================
// PAYOUT HISTORY
// =========================


export const payoutsData=[


{
id:1,
seller:"Ali Developers",
date:"2026-07-01",
amount:"$1200",
status:"Paid"
},


{
id:2,
seller:"Tech Store",
date:"2026-06-25",
amount:"$850",
status:"Pending"
}


];








// =========================
// ANALYTICS CHART DATA
// =========================


export const userGrowthData=[


{
month:"Jan",
buyers:400,
sellers:200
},


{
month:"Feb",
buyers:480,
sellers:260
},


{
month:"Mar",
buyers:550,
sellers:310
},


{
month:"Apr",
buyers:620,
sellers:350
},


{
month:"May",
buyers:700,
sellers:400
},


{
month:"Jun",
buyers:778,
sellers:456
}


];





export const categoryDistribution=[


{
name:"Technology",
value:35
},


{
name:"Fashion",
value:25
},


{
name:"Home",
value:20
},


{
name:"Services",
value:20
}


];





export const recentActivities=[


{
id:1,
user:"Ahmed",
action:"New user signup",
type:"User",
date:"Today"
},


{
id:2,
user:"Sara",
action:"New listing created",
type:"Listing",
date:"Today"
},


{
id:3,
user:"Ali",
action:"Booking completed",
type:"Transaction",
date:"Yesterday"
},


{
id:4,
user:"John",
action:"Review submitted",
type:"Review",
date:"Yesterday"
}


];





export default {

adminStats,

usersData,

listingsData,

reportsData,

logsData,

revenueData,

transactionsData,

payoutsData,

userGrowthData,

categoryDistribution,

recentActivities

};