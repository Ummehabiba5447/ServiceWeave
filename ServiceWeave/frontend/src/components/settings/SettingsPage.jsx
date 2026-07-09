import { useState } from "react";
import { Settings } from "lucide-react";

import AccountSettings from "./AccountSettings";
import SecuritySettings from "./SecuritySettings";
import NotificationSettings from "./NotificationSettings";
import PaymentSettings from "./PaymentSettings";
import PrivacySettings from "./PrivacySettings";

export default function SettingsPage() {

  const [activeTab, setActiveTab] = useState("account");

  const tabs = [
    {
      id: "account",
      label: "Account",
    },
    {
      id: "security",
      label: "Security",
    },
    {
      id: "notifications",
      label: "Notifications",
    },
    {
      id: "payment",
      label: "Payment",
    },
    {
      id: "privacy",
      label: "Privacy",
    },
  ];

  return (

    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center gap-3">

        <Settings
          size={34}
          className="text-blue-600"
        />

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            Settings
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your account preferences and security.
          </p>

        </div>

      </div>

      {/* Navigation Tabs */}

      <div className="bg-white rounded-2xl shadow p-2 flex flex-wrap gap-2">

        {tabs.map((tab) => (

          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-5
              py-3
              rounded-xl
              font-medium
              transition

              ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }
            `}
          >
            {tab.label}
          </button>

        ))}

      </div>      {/* Settings Content */}

      <div className="bg-white rounded-2xl shadow-lg p-6">

        {activeTab === "account" && (
          <AccountSettings />
        )}

        {activeTab === "security" && (
          <SecuritySettings />
        )}

        {activeTab === "notifications" && (
          <NotificationSettings />
        )}

        {activeTab === "payment" && (
          <PaymentSettings />
        )}

        {activeTab === "privacy" && (
          <PrivacySettings />
        )}

      </div>

      {/* Information Card */}

      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">

        <h2 className="text-xl font-bold text-blue-800">
          Security Tips
        </h2>

        <ul className="mt-4 space-y-3 text-blue-700">

          <li>
            • Use a strong password with at least 8 characters.
          </li>

          <li>
            • Enable Two-Factor Authentication for better security.
          </li>

          <li>
            • Review your login activity regularly.
          </li>

          <li>
            • Keep your payment information up to date.
          </li>

          <li>
            • Never share your account credentials with anyone.
          </li>

        </ul>

      </div>      {/* Footer */}

      <div className="bg-white rounded-2xl shadow p-5 flex items-center justify-between">

        <div>

          <h3 className="font-semibold text-gray-800">
            ServiceWeave Seller Settings
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Your changes will be saved securely and applied to your seller account.
          </p>

        </div>

        <span className="text-sm text-gray-400">
          Version 1.0
        </span>

      </div>

    </div>

  );
}