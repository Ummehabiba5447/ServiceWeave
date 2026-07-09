import { useState } from "react";
import {
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Monitor,
} from "lucide-react";

export default function SecuritySettings() {

  const [showCurrent, setShowCurrent] =
    useState(false);

  const [showNew, setShowNew] =
    useState(false);

  const [showConfirm, setShowConfirm] =
    useState(false);

  const [twoFactor, setTwoFactor] =
    useState(true);

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    // Connect Laravel API later

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >

      {/* Password Section */}

      <div>

        <h2 className="text-2xl font-bold text-gray-800">
          Password & Security
        </h2>

        <p className="text-gray-500 mt-2">
          Update your password and secure your account.
        </p>

      </div>

      <div className="grid gap-6">

        {/* Current Password */}

        <div>

          <label className="block mb-2 font-medium">
            Current Password
          </label>

          <div className="relative">

            <Lock
              size={18}
              className="absolute left-3 top-4 text-gray-400"
            />

            <input
              type={
                showCurrent
                  ? "text"
                  : "password"
              }
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className="
                w-full
                border
                rounded-xl
                py-3
                pl-10
                pr-12
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowCurrent(!showCurrent)
              }
              className="
                absolute
                right-4
                top-3.5
              "
            >
              {showCurrent ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

        </div>

        {/* New Password */}

        <div>

          <label className="block mb-2 font-medium">
            New Password
          </label>

          <div className="relative">

            <Lock
              size={18}
              className="absolute left-3 top-4 text-gray-400"
            />

            <input
              type={
                showNew
                  ? "text"
                  : "password"
              }
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="
                w-full
                border
                rounded-xl
                py-3
                pl-10
                pr-12
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowNew(!showNew)
              }
              className="
                absolute
                right-4
                top-3.5
              "
            >
              {showNew ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

        </div>        {/* Confirm Password */}

        <div>

          <label className="block mb-2 font-medium">
            Confirm New Password
          </label>

          <div className="relative">

            <Lock
              size={18}
              className="absolute left-3 top-4 text-gray-400"
            />

            <input
              type={
                showConfirm
                  ? "text"
                  : "password"
              }
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="
                w-full
                border
                rounded-xl
                py-3
                pl-10
                pr-12
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirm(!showConfirm)
              }
              className="
                absolute
                right-4
                top-3.5
              "
            >
              {showConfirm ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

        </div>

      </div>

      {/* Two Factor Authentication */}

      <div className="bg-gray-50 rounded-2xl p-6">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <ShieldCheck
              size={28}
              className="text-green-600"
            />

            <div>

              <h3 className="font-semibold text-lg">
                Two-Factor Authentication
              </h3>

              <p className="text-gray-500 text-sm">
                Add an extra layer of protection to your account.
              </p>

            </div>

          </div>

          <button
            type="button"
            onClick={() => setTwoFactor(!twoFactor)}
            className={`
              relative
              w-14
              h-8
              rounded-full
              transition
              ${
                twoFactor
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
                  twoFactor
                    ? "left-7"
                    : "left-1"
                }
              `}
            />

          </button>

        </div>

      </div>

      {/* Active Sessions */}

      <div className="bg-white border rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-4">

          <Monitor
            size={24}
            className="text-blue-600"
          />

          <h3 className="text-xl font-bold">
            Active Sessions
          </h3>

        </div>

        <div className="flex items-center justify-between border rounded-xl p-4">

          <div>

            <p className="font-semibold">
              Windows • Chrome
            </p>

            <p className="text-gray-500 text-sm">
              Rawalpindi, Pakistan • Current Device
            </p>

          </div>

          <span className="text-green-600 font-semibold">
            Active
          </span>

        </div>

        <button
          type="button"
          className="
            mt-5
            bg-red-600
            hover:bg-red-700
            text-white
            px-5
            py-3
            rounded-xl
            transition
          "
        >
          Logout From All Devices
        </button>

      </div>

      {/* Submit Button */}

      <div className="flex justify-end">

        <button
          type="submit"
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
          Update Password
        </button>

      </div>

    </form>

  );
}