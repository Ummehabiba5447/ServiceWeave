import { useState } from "react";
import { Bell, Mail, Smartphone, MessageCircle, CalendarDays, Star, DollarSign } from "lucide-react";

export default function NotificationSettings() {

  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    bookingNotifications: true,
    messageNotifications: true,
    reviewNotifications: true,
    paymentNotifications: true,
    marketingEmails: false,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const options = [
    {
      key: "emailNotifications",
      title: "Email Notifications",
      description: "Receive important updates by email.",
      icon: Mail,
    },
    {
      key: "smsNotifications",
      title: "SMS Notifications",
      description: "Receive important alerts via SMS.",
      icon: Smartphone,
    },
    {
      key: "pushNotifications",
      title: "Push Notifications",
      description: "Receive instant push notifications.",
      icon: Bell,
    },
    {
      key: "bookingNotifications",
      title: "Booking Notifications",
      description: "Get notified when customers make bookings.",
      icon: CalendarDays,
    },
    {
      key: "messageNotifications",
      title: "Message Notifications",
      description: "Receive alerts for new customer messages.",
      icon: MessageCircle,
    },
    {
      key: "reviewNotifications",
      title: "Review Notifications",
      description: "Be notified when customers leave reviews.",
      icon: Star,
    },
    {
      key: "paymentNotifications",
      title: "Payment Notifications",
      description: "Receive notifications for payments and withdrawals.",
      icon: DollarSign,
    },
    {
      key: "marketingEmails",
      title: "Marketing Emails",
      description: "Receive promotions, offers and newsletters.",
      icon: Mail,
    },
  ];

  return (
    <div className="space-y-8">

      <div>

        <h2 className="text-2xl font-bold text-gray-800">
          Notification Preferences
        </h2>

        <p className="text-gray-500 mt-2">
          Choose how you'd like to receive notifications.
        </p>

      </div>

      <div className="space-y-5">

        {options.map((option) => {

          const Icon = option.icon;

          return (

            <div
              key={option.key}
              className="flex items-center justify-between border rounded-2xl p-5 hover:shadow-md transition"
            >

              <div className="flex items-center gap-4">

                <div className="bg-blue-100 p-3 rounded-xl">

                  <Icon
                    size={24}
                    className="text-blue-600"
                  />

                </div>

                <div>

                  <h3 className="font-semibold text-lg">
                    {option.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {option.description}
                  </p>

                </div>

              </div>

              {/* Toggle */}

              <button
                type="button"
                onClick={() => handleToggle(option.key)}
                className={`
                  relative
                  w-14
                  h-8
                  rounded-full
                  transition
                  ${
                    settings[option.key]
                      ? "bg-blue-600"
                      : "bg-gray-300"
                  }
                `}
              >

                <span
                  className={`
                    absolute
                    top-1
                    w-6
                    h-6
                    rounded-full
                    bg-white
                    transition
                    ${
                      settings[option.key]
                        ? "left-7"
                        : "left-1"
                    }
                  `}
                />

              </button>

            </div>

          );

        })}

      </div>

      <div className="flex justify-end">

        <button
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-8
            py-3
            rounded-xl
            transition
          "
        >
          Save Preferences
        </button>

      </div>

    </div>
  );
}