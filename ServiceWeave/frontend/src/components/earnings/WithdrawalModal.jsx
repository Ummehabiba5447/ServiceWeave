import { useState } from "react";
import {
  X,
  Wallet,
  Landmark,
  CreditCard,
  DollarSign,
} from "lucide-react";

export default function WithdrawalModal({
  balance,
  onClose,
}) {
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("Bank");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    const withdrawAmount = Number(amount);

    if (!amount || withdrawAmount <= 0) {
      alert("Please enter a valid withdrawal amount.");
      return;
    }

    if (withdrawAmount > balance) {
      alert("Withdrawal amount exceeds your available balance.");
      return;
    }

    alert(
      `Withdrawal request of $${withdrawAmount} submitted successfully!`
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">

        {/* Header */}

        <div className="flex justify-between items-center border-b p-6">

          <h2 className="text-2xl font-bold">
            Withdraw Funds
          </h2>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <X size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="p-6 space-y-6">

          {/* Balance */}

          <div className="bg-green-50 rounded-xl p-5 border border-green-200">

            <div className="flex items-center gap-3">

              <Wallet
                className="text-green-600"
                size={26}
              />

              <div>

                <p className="text-gray-500 text-sm">
                  Available Balance
                </p>

                <h3 className="text-3xl font-bold text-green-600">
                  ${balance.toLocaleString()}
                </h3>

              </div>

            </div>

          </div>

          {/* Withdrawal Method */}

          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Withdrawal Method
            </label>

            <div className="relative">

              <Landmark
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />

              <select
                value={account}
                onChange={(e) =>
                  setAccount(e.target.value)
                }
                className="w-full border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Bank</option>
                <option>EasyPaisa</option>
                <option>JazzCash</option>
                <option>PayPal</option>
              </select>

            </div>

          </div>

          {/* Amount */}

          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Withdrawal Amount
            </label>

            <div className="relative">

              <DollarSign
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                type="number"
                value={amount}
                onChange={(e) =>
                  setAmount(e.target.value)
                }
                placeholder="Enter amount"
                className="w-full border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

          </div>

          {/* Notes */}

          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Notes (Optional)
            </label>

            <textarea
              rows="4"
              value={notes}
              onChange={(e) =>
                setNotes(e.target.value)
              }
              placeholder="Add any notes..."
              className="w-full border rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Info Box */}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">

            <div className="flex items-start gap-3">

              <CreditCard
                className="text-blue-600 mt-1"
                size={20}
              />

              <div>

                <p className="font-semibold text-blue-700">
                  Processing Time
                </p>

                <p className="text-sm text-gray-600 mt-1">
                  Withdrawal requests are usually processed
                  within 1–3 business days.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="border-t p-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-5 py-3 rounded-lg border hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white transition"
          >
            Confirm Withdrawal
          </button>

        </div>

      </div>

    </div>
  );
}