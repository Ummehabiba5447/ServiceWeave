import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Requested",
    key: "Pending",
    time: "09 Jul, 10:30 AM",
  },
  {
    title: "Accepted",
    key: "Accepted",
    time: "09 Jul, 12:00 PM",
  },
  {
    title: "In Progress",
    key: "In Progress",
    time: "10 Jul, 09:00 AM",
  },
  {
    title: "Completed",
    key: "Completed",
    time: "11 Jul, 05:30 PM",
  },
];

const statusOrder = {
  Pending: 0,
  Accepted: 1,
  "In Progress": 2,
  Completed: 3,
  Cancelled: -1,
};

export default function BuyerBookingTimeline({ status }) {

  const currentStep = statusOrder[status] ?? 0;

  return (

    <div>

      <h3 className="mb-4 text-sm font-semibold text-slate-700">
        Booking Progress
      </h3>

      <div className="flex items-start justify-between overflow-x-auto">

        {steps.map((step, index) => {

          const completed = index < currentStep;
          const active = index === currentStep;

          return (

            <div
              key={step.key}
              className="relative flex min-w-[90px] flex-1 flex-col items-center"
            >

              {/* Connecting Line */}

              {index !== steps.length - 1 && (

                <div
                  className={`
                    absolute
                    top-5
                    left-1/2
                    h-1
                    w-full

                    ${
                      completed
                        ? "bg-green-500"
                        : "bg-slate-300"
                    }
                  `}
                />

              )}

              {/* Step Circle */}

              <div
                className={`
                  relative
                  z-10
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border-2

                  ${
                    completed
                      ? "border-green-500 bg-green-500 text-white"
                      : active
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-300 bg-white text-slate-400"
                  }
                `}
              >

                {completed ? (

                  <CheckCircle2 size={18} />

                ) : (

                  <span className="font-semibold">
                    {index + 1}
                  </span>

                )}

              </div>

              {/* Step Text */}

              <p
                className={`
                  mt-3
                  text-center
                  text-xs
                  font-medium

                  ${
                    active
                      ? "text-blue-600"
                      : completed
                      ? "text-green-600"
                      : "text-slate-500"
                  }
                `}
              >
                {step.title}
              </p>

              <p className="mt-1 text-center text-[11px] text-slate-400">
                {step.time}
              </p>

            </div>

          );

        })}

      </div>

      {status === "Cancelled" && (

        <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4">

          <p className="font-medium text-red-700">
            This booking has been cancelled.
          </p>

        </div>

      )}

    </div>

  );

}