import { useState } from "react";
import {
  AlertTriangle,
  Eye,
  EyeOff,
  Trash2,
  X,
} from "lucide-react";

export default function DeleteAccountModal({
  onClose,
}) {

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [confirmed, setConfirmed] =
    useState(false);

  const handleDelete = () => {

    if (!confirmed) {
      alert("Please confirm before deleting.");
      return;
    }

    console.log("Delete Account");

    // Laravel API will be connected later

    onClose();

  };

  return (

    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">

        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <div className="flex items-center gap-3">

            <AlertTriangle
              size={32}
              className="text-red-600"
            />

            <div>

              <h2 className="text-2xl font-bold text-red-700">
                Delete Account
              </h2>

              <p className="text-gray-500 text-sm">
                This action is permanent.
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="p-6 space-y-6">

          <div className="bg-red-50 border border-red-200 rounded-xl p-4">

            <p className="text-red-700 leading-7">

              Deleting your account will permanently remove:

            </p>

            <ul className="mt-3 list-disc list-inside text-red-600 space-y-2">

              <li>Your seller profile</li>

              <li>All services & listings</li>

              <li>Bookings history</li>

              <li>Messages</li>

              <li>Reviews</li>

              <li>Earnings history</li>

            </ul>

          </div>

          {/* Password */}

          <div>

            <label className="block mb-2 font-medium">

              Confirm Password

            </label>

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter your password"
                className="
                  w-full
                  border
                  rounded-xl
                  py-3
                  px-4
                  pr-12
                  focus:outline-none
                  focus:ring-2
                  focus:ring-red-500
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-3.5"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>          {/* Confirmation Checkbox */}

          <div className="flex items-start gap-3">

            <input
              id="confirmDelete"
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="mt-1 w-5 h-5 accent-red-600"
            />

            <label
              htmlFor="confirmDelete"
              className="text-gray-700 leading-6"
            >
              I understand that this action is
              <span className="font-semibold text-red-600">
                {" "}permanent{" "}
              </span>
              and cannot be undone.
            </label>

          </div>

        </div>

        {/* Footer */}

        <div className="border-t p-6 flex justify-end gap-3">

          <button
            type="button"
            onClick={onClose}
            className="
              px-6
              py-3
              border
              rounded-xl
              hover:bg-gray-100
              transition
            "
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={!confirmed || password.trim() === ""}
            onClick={handleDelete}
            className={`
              flex
              items-center
              gap-2
              px-6
              py-3
              rounded-xl
              text-white
              transition

              ${
                confirmed && password.trim() !== ""
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-red-300 cursor-not-allowed"
              }
            `}
          >
            <Trash2 size={18} />

            Permanently Delete

          </button>

        </div>

      </div>

    </div>

  );
}