import { useState } from "react";
import {
  Building2,
  CreditCard,
  Landmark,
  Wallet,
} from "lucide-react";

export default function PaymentSettings() {

  const [paymentData, setPaymentData] = useState({
    accountHolder: "John Smith",
    bankName: "HBL Bank",
    accountNumber: "123456789012",
    iban: "PK36HABB0001234567890123",
    cardNumber: "**** **** **** 4589",
    easypaisa: "03001234567",
    jazzcash: "03019876543",
    paypal: "john@example.com",
    defaultMethod: "Bank Transfer",
  });

  const handleChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(paymentData);

    // Connect Laravel API later
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >

      {/* Header */}

      <div>

        <h2 className="text-2xl font-bold text-gray-800">
          Payment Settings
        </h2>

        <p className="text-gray-500 mt-2">
          Manage your payment and withdrawal methods.
        </p>

      </div>

      {/* Bank Details */}

      <div className="bg-white border rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-6">

          <Landmark
            size={26}
            className="text-blue-600"
          />

          <h3 className="text-xl font-bold">
            Bank Account
          </h3>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Account Holder */}

          <div>

            <label className="block mb-2 font-medium">
              Account Holder
            </label>

            <div className="relative">

              <Building2
                size={18}
                className="absolute left-3 top-4 text-gray-400"
              />

              <input
                type="text"
                name="accountHolder"
                value={paymentData.accountHolder}
                onChange={handleChange}
                className="
                  w-full
                  border
                  rounded-xl
                  py-3
                  pl-10
                  pr-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

            </div>

          </div>

          {/* Bank Name */}

          <div>

            <label className="block mb-2 font-medium">
              Bank Name
            </label>

            <input
              type="text"
              name="bankName"
              value={paymentData.bankName}
              onChange={handleChange}
              className="
                w-full
                border
                rounded-xl
                py-3
                px-4
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

          </div>

          {/* Account Number */}

          <div>

            <label className="block mb-2 font-medium">
              Account Number
            </label>

            <input
              type="text"
              name="accountNumber"
              value={paymentData.accountNumber}
              onChange={handleChange}
              className="
                w-full
                border
                rounded-xl
                py-3
                px-4
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

          </div>

          {/* IBAN */}

          <div>

            <label className="block mb-2 font-medium">
              IBAN
            </label>

            <input
              type="text"
              name="iban"
              value={paymentData.iban}
              onChange={handleChange}
              className="
                w-full
                border
                rounded-xl
                py-3
                px-4
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

          </div>

        </div>

      </div>      {/* Digital Payment Methods */}

      <div className="bg-white border rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-6">

          <Wallet
            size={26}
            className="text-green-600"
          />

          <h3 className="text-xl font-bold">
            Digital Payment Methods
          </h3>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Card Number */}

          <div>

            <label className="block mb-2 font-medium">
              Debit / Credit Card
            </label>

            <div className="relative">

              <CreditCard
                size={18}
                className="absolute left-3 top-4 text-gray-400"
              />

              <input
                type="text"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handleChange}
                placeholder="**** **** **** ****"
                className="
                  w-full
                  border
                  rounded-xl
                  py-3
                  pl-10
                  pr-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

            </div>

          </div>

          {/* EasyPaisa */}

          <div>

            <label className="block mb-2 font-medium">
              EasyPaisa Number
            </label>

            <input
              type="text"
              name="easypaisa"
              value={paymentData.easypaisa}
              onChange={handleChange}
              className="
                w-full
                border
                rounded-xl
                py-3
                px-4
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

          </div>

          {/* JazzCash */}

          <div>

            <label className="block mb-2 font-medium">
              JazzCash Number
            </label>

            <input
              type="text"
              name="jazzcash"
              value={paymentData.jazzcash}
              onChange={handleChange}
              className="
                w-full
                border
                rounded-xl
                py-3
                px-4
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

          </div>

          {/* PayPal */}

          <div>

            <label className="block mb-2 font-medium">
              PayPal Email
            </label>

            <input
              type="email"
              name="paypal"
              value={paymentData.paypal}
              onChange={handleChange}
              className="
                w-full
                border
                rounded-xl
                py-3
                px-4
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

          </div>

        </div>

      </div>

      {/* Default Withdrawal Method */}

      <div className="bg-white border rounded-2xl p-6">

        <h3 className="text-xl font-bold mb-5">
          Default Withdrawal Method
        </h3>

        <select
          name="defaultMethod"
          value={paymentData.defaultMethod}
          onChange={handleChange}
          className="
            w-full
            border
            rounded-xl
            py-3
            px-4
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        >
          <option>Bank Transfer</option>
          <option>EasyPaisa</option>
          <option>JazzCash</option>
          <option>PayPal</option>
          <option>Debit Card</option>
        </select>

      </div>

      {/* Save Button */}

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
          Save Payment Settings
        </button>

      </div>

    </form>

  );
}