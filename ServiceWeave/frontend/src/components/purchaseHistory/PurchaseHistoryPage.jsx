import { useState } from "react";
import PurchaseHistoryTable from "./PurchaseHistoryTable";
import PurchaseFilters from "./PurchaseFilters";
import InvoiceModal from "./InvoiceModal";

const purchases = [
  {
    id: 1,
    name: "Website Development Service",
    seller: "Tech Solutions",
    price: 500,
    date: "2026-06-20",
    status: "Delivered",
  },
  {
    id: 2,
    name: "Logo Design Package",
    seller: "Creative Studio",
    price: 120,
    date: "2026-06-15",
    status: "Pending",
  },
  {
    id: 3,
    name: "Laptop Repair Service",
    seller: "Fix Masters",
    price: 80,
    date: "2026-05-30",
    status: "Delivered",
  },
  {
    id: 4,
    name: "Social Media Marketing",
    seller: "Digital Experts",
    price: 300,
    date: "2026-05-10",
    status: "Cancelled",
  }
];


export default function PurchaseHistoryPage(){

    const [data,setData] = useState(purchases);
    const [selectedInvoice,setSelectedInvoice] = useState(null);


    const filterPurchases=(filters)=>{

        let result=[...purchases];


        if(filters.search){

            result=result.filter(item=>
                item.name
                .toLowerCase()
                .includes(filters.search.toLowerCase())
            );

        }


        if(filters.status !== "All"){

            result=result.filter(item=>
                item.status === filters.status
            );

        }


        if(filters.sort==="Newest"){

            result.sort((a,b)=>
                new Date(b.date)-new Date(a.date)
            );

        }


        if(filters.sort==="Oldest"){

            result.sort((a,b)=>
                new Date(a.date)-new Date(b.date)
            );

        }


        if(filters.sort==="Highest"){

            result.sort((a,b)=>b.price-a.price);

        }


        if(filters.sort==="Lowest"){

            result.sort((a,b)=>a.price-b.price);

        }


        setData(result);

    }



    return(

    <div className="space-y-6">


        <h1 className="text-3xl font-bold">
            Purchase History
        </h1>


        <PurchaseFilters
            onFilter={filterPurchases}
        />


        <PurchaseHistoryTable

            purchases={data}

            openInvoice={(item)=>
                setSelectedInvoice(item)
            }

        />


        {
            selectedInvoice &&
            
            <InvoiceModal

                purchase={selectedInvoice}

                close={()=>
                    setSelectedInvoice(null)
                }

            />

        }


    </div>

    )

}