import {
  ClipboardList,
  CheckCircle,
  Wrench,
  PartyPopper,
  XCircle,
} from "lucide-react";

export default function BookingTimeline({ status }) {
  const steps = [
    {
      title: "Requested",
      icon: ClipboardList,
    },
    {
      title: "Accepted",
      icon: CheckCircle,
    },
    {
      title: "In Progress",
      icon: Wrench,
    },
    {
      title: "Completed",
      icon: PartyPopper,
    },
  ];

  const getCurrentStep = () => {
    switch (status) {
      case "Pending":
        return 0;

      case "Accepted":
        return 1;

      case "In Progress":
        return 2;

      case "Completed":
        return 3;

      default:
        return -1;
    }
  };

  const currentStep = getCurrentStep();

  if (status === "Cancelled") {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 flex items-center gap-4">

        <div className="bg-red-100 p-3 rounded-full">
          <XCircle
            size={28}
            className="text-red-600"
          />
        </div>

        <div>
          <h3 className="font-bold text-red-700">
            Booking Cancelled
          </h3>

          <p className="text-red-600 text-sm mt-1">
            This booking has been cancelled and is no longer active.
          </p>
        </div>

      </div>
    );
  }

  return (
    <div className="space-y-6">

      {steps.map((step, index) => {
        const Icon = step.icon;

        const completed = index <= currentStep;

        return (
          <div
            key={step.title}
            className="flex items-start gap-4"
          >

            {/* Icon */}

            <div className="flex flex-col items-center">

              <div
                className={`
                  w-12
                  h-12
                  rounded-full
                  flex
                  items-center
                  justify-center
                  ${
                    completed
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }
                `}
              >
                <Icon size={22} />
              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`
                    w-1
                    h-10
                    ${
                      completed
                        ? "bg-blue-600"
                        : "bg-gray-300"
                    }
                  `}
                />
              )}

            </div>

            {/* Text */}

            <div className="pt-2">

              <h4
                className={`font-semibold ${
                  completed
                    ? "text-gray-800"
                    : "text-gray-400"
                }`}
              >
                {step.title}
              </h4>

              <p className="text-sm text-gray-500 mt-1">

                {completed
                  ? "Completed"
                  : "Waiting..."}

              </p>

            </div>

          </div>
        );
      })}

    </div>
  );
}