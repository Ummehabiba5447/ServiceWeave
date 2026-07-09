import { X } from "lucide-react";
import { useState } from "react";


export default function SuspendUserModal({
    user,
    close,
    confirm
}) {


    const [reason, setReason] = useState("");
    const [message, setMessage] = useState("");



    const handleSubmit = () => {

        confirm(
            user.id,
            {
                reason,
                message
            }
        );

    };



    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">


            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">


                <div className="flex items-center justify-between">

                    <h2 className="text-xl font-bold text-slate-900">
                        Suspend User
                    </h2>


                    <button
                        onClick={close}
                        className="rounded-lg p-2 hover:bg-slate-100"
                    >
                        <X size={20} />
                    </button>

                </div>



                <p className="mt-4 text-sm text-gray-600">

                    Suspend account of:

                    <span className="font-semibold text-slate-900">
                        {" "}{user.name}
                    </span>

                </p>




                <label className="mt-5 block text-sm font-medium">

                    Suspension Reason

                </label>


                <select

                    value={reason}

                    onChange={(e)=>setReason(e.target.value)}

                    className="mt-2 w-full rounded-lg border p-3"

                >

                    <option value="">
                        Select reason
                    </option>

                    <option value="Suspicious activity">
                        Suspicious activity
                    </option>


                    <option value="Fake reviews">
                        Fake reviews
                    </option>


                    <option value="Bad behavior">
                        Bad behavior
                    </option>


                    <option value="Other">
                        Other
                    </option>


                </select>





                <label className="mt-5 block text-sm font-medium">

                    Message to User (Optional)

                </label>


                <textarea

                    value={message}

                    onChange={(e)=>setMessage(e.target.value)}

                    placeholder="Explain suspension reason..."

                    className="mt-2 h-24 w-full rounded-lg border p-3"

                />





                <div className="mt-6 flex gap-3">


                    <button

                        onClick={close}

                        className="flex-1 rounded-lg border py-3"

                    >

                        Cancel

                    </button>




                    <button

                        disabled={!reason}

                        onClick={handleSubmit}

                        className={`flex-1 rounded-lg py-3 text-white

                        ${
                            reason
                            ?
                            "bg-orange-500 hover:bg-orange-600"
                            :
                            "bg-gray-300 cursor-not-allowed"
                        }

                        `}

                    >

                        Suspend Account

                    </button>


                </div>



            </div>


        </div>

    );

}