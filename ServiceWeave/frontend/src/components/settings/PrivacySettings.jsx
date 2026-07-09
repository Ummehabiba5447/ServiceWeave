import { useState } from "react";
import {
  Eye,

  MapPin,
  Mail,
  Phone,
  Download,
  Shield,
  Trash2,
} from "lucide-react";

import DeleteAccountModal from "./DeleteAccountModal";

export default function PrivacySettings() {

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showEmail: false,
    showPhone: false,
    showLocation: true,
    searchEngineIndexing: true,
  });

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  const handleToggle = (key) => {

    setPrivacy((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

  };

  const options = [
    {
      key: "profileVisible",
      title: "Public Profile",
      description:
        "Allow customers to view your seller profile.",
      icon: Eye,
    },
    {
      key: "showEmail",
      title: "Display Email Address",
      description:
        "Show your email address on your public profile.",
      icon: Mail,
    },
    {
      key: "showPhone",
      title: "Display Phone Number",
      description:
        "Allow customers to see your phone number.",
      icon: Phone,
    },
    {
      key: "showLocation",
      title: "Display Location",
      description:
        "Show your city and country publicly.",
      icon: MapPin,
    },
    {
      key: "searchEngineIndexing",
      title: "Search Engine Visibility",
      description:
        "Allow search engines to index your profile.",
      icon: Shield,
    },
  ];

  return (

    <div className="space-y-8">

      {/* Header */}

      <div>

        <h2 className="text-2xl font-bold text-gray-800">
          Privacy Settings
        </h2>

        <p className="text-gray-500 mt-2">
          Control your privacy and visibility across ServiceWeave.
        </p>

      </div>

      {/* Privacy Options */}

      <div className="space-y-5">

        {options.map((option) => {

          const Icon = option.icon;

          return (

            <div
              key={option.key}
              className="border rounded-2xl p-5 flex items-center justify-between"
            >

              <div className="flex items-center gap-4">

                <div className="bg-blue-100 p-3 rounded-xl">

                  <Icon
                    size={22}
                    className="text-blue-600"
                  />

                </div>

                <div>

                  <h3 className="font-semibold">
                    {option.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {option.description}
                  </p>

                </div>

              </div>

              <button
                type="button"
                onClick={() =>
                  handleToggle(option.key)
                }
                className={`
                  relative
                  w-14
                  h-8
                  rounded-full
                  transition

                  ${
                    privacy[option.key]
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
                      privacy[option.key]
                        ? "left-7"
                        : "left-1"
                    }
                  `}
                />

              </button>

            </div>

          );

        })}

      </div>      {/* Download Account Data */}

      <div className="bg-white border rounded-2xl p-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>

            <h3 className="text-xl font-bold text-gray-800">
              Download Your Data
            </h3>

            <p className="text-gray-500 mt-2">
              Download a copy of your account information, bookings,
              services, reviews, and payment history.
            </p>

          </div>

          <button
            type="button"
            className="
              flex
              items-center
              gap-2
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-6
              py-3
              rounded-xl
              transition
            "
          >
            <Download size={18} />
            Download Data
          </button>

        </div>

      </div>

      {/* Delete Account */}

      <div className="bg-red-50 border border-red-200 rounded-2xl p-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>

            <h3 className="text-xl font-bold text-red-700">
              Delete Account
            </h3>

            <p className="text-red-600 mt-2">
              Permanently delete your ServiceWeave seller account.
              This action cannot be undone.
            </p>

          </div>

          <button
            type="button"
            onClick={() => setShowDeleteModal(true)}
            className="
              flex
              items-center
              gap-2
              bg-red-600
              hover:bg-red-700
              text-white
              px-6
              py-3
              rounded-xl
              transition
            "
          >
            <Trash2 size={18} />
            Delete Account
          </button>

        </div>

      </div>

      {/* Save Button */}

      <div className="flex justify-end">

        <button
          type="button"
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
          Save Privacy Settings
        </button>

      </div>

      {/* Delete Account Modal */}

      {showDeleteModal && (

        <DeleteAccountModal
          onClose={() => setShowDeleteModal(false)}
        />

      )}

    </div>

  );
}