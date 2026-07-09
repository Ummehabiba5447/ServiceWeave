const buyerMockData = {


    // =========================
    // Buyer Profile
    // =========================

    profile: {

        id: 1,

        name: "Umme Habiba",

        email: "buyer@email.com",

        phone: "0300-0000000",

        location: "Rawalpindi",

        bio:
        "Looking for quality products and professional services."

    },



    // =========================
    // Dashboard Statistics
    // =========================

    stats: {

        totalSpent: "$1,250",

        activeBookings: 3,

        pendingServices: 2,

        savedItems: 12,

        totalReviews: 8,

        averageRating: 4.2

    },



    // =========================
    // Spending Chart Data
    // =========================

    spendingTrend: [

        {
            month:"January",
            amount:400
        },

        {
            month:"February",
            amount:550
        },

        {
            month:"March",
            amount:700
        },

        {
            month:"April",
            amount:450
        },

        {
            month:"May",
            amount:900
        },

        {
            month:"June",
            amount:1200
        },

        {
            month:"July",
            amount:850
        },

        {
            month:"August",
            amount:600
        },

        {
            month:"September",
            amount:750
        },

        {
            month:"October",
            amount:1100
        },

        {
            month:"November",
            amount:950
        },

        {
            month:"December",
            amount:1250
        }

    ],




    // =========================
    // Category Spending
    // =========================

    categorySpending:[

        {
            name:"Web Development",
            value:500
        },


        {
            name:"Graphic Design",
            value:250
        },


        {
            name:"Marketing",
            value:300
        },


        {
            name:"Products",
            value:200
        }


    ],





    // =========================
    // Recent Purchases
    // =========================

    recentPurchases:[

        {

            id:1,

            title:"Website Development",

            seller:"Tech Solutions",

            image:"https://via.placeholder.com/150",

            price:500,

            date:"2026-07-01",

            reviewed:false

        },


        {

            id:2,

            title:"Logo Design Package",

            seller:"Creative Studio",

            image:"https://via.placeholder.com/150",

            price:120,

            date:"2026-06-20",

            reviewed:true

        },


        {

            id:3,

            title:"Laptop Repair",

            seller:"Fix Masters",

            image:"https://via.placeholder.com/150",

            price:80,

            date:"2026-06-10",

            reviewed:false

        }


    ],





    // =========================
    // Active Bookings
    // =========================

    activeBookings:[


        {

            id:1,

            title:"Mobile App Development",

            seller:"App Experts",

            status:"In Progress",

            date:"2026-07-05"

        },


        {

            id:2,

            title:"SEO Service",

            seller:"Digital Agency",

            status:"Accepted",

            date:"2026-07-02"

        }


    ],





    // =========================
    // Favorites
    // =========================

    favorites:[


        {

            id:1,

            type:"Service",

            title:"Full Stack Development",

            seller:"Code Masters",

            price:800,

            rating:4.8,

            image:"https://via.placeholder.com/300"

        },


        {

            id:2,

            type:"Product",

            title:"Wireless Headphones",

            seller:"Tech Store",

            price:120,

            rating:4.5,

            image:"https://via.placeholder.com/300"

        }


    ],





    // =========================
    // Reviews
    // =========================

    reviews:[


        {

            id:1,

            service:"Website Development",

            seller:"Tech Solutions",

            rating:5,

            title:"Excellent Service",

            comment:
            "Very professional work.",

            date:"2026-06-20"

        },


        {

            id:2,

            service:"Graphic Design",

            seller:"Creative Studio",

            rating:4,

            title:"Good Work",

            comment:
            "Creative and fast delivery.",

            date:"2026-06-10"

        }


    ],




    // =========================
    // Notification Settings
    // =========================

    preferences:{

        emailNotifications:true,

        pushNotifications:true,

        newBookings:true,

        newMessages:true,

        reviews:true,

        showProfile:true,

        allowSellerMessages:true

    }



};



export default buyerMockData;