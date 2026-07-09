import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  Globe,
  Camera,
} from "lucide-react";

export default function AccountSettings() {

  const [formData, setFormData] = useState({
    fullName: "John Smith",
    email: "john@example.com",
    phone: "+92 300 1234567",
    businessName: "John Web Studio",
    location: "Rawalpindi, Pakistan",
    website: "https://johnstudio.com",
    bio: "Professional Full Stack Developer with 5+ years of experience building websites and web applications.",
    profileImage:
      "https://i.pravatar.cc/200?img=12",
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

    // Laravel API will be connected later

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >

      {/* Profile Picture */}

      <div className="flex flex-col md:flex-row items-center gap-6">

        <div className="relative">

          <img
            src={formData.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
          />

          <button
            type="button"
            className="
              absolute
              bottom-2
              right-2
              bg-blue-600
              text-white
              p-2
              rounded-full
              hover:bg-blue-700
              transition
            "
          >
            <Camera size={18} />
          </button>

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Seller Profile
          </h2>

          <p className="text-gray-500 mt-2">
            Update your profile picture and personal information.
          </p>

        </div>

      </div>

      {/* Personal Information */}

      <div className="grid md:grid-cols-2 gap-6">

        {/* Full Name */}

        <div>

          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <div className="relative">

            <User
              size={18}
              className="absolute left-3 top-4 text-gray-400"
            />

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
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

        {/* Email */}

        <div>

          <label className="block mb-2 font-medium">
            Email Address
          </label>

          <div className="relative">

            <Mail
              size={18}
              className="absolute left-3 top-4 text-gray-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
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

        </div>        {/* Phone */}

        <div>

          <label className="block mb-2 font-medium">
            Phone Number
          </label>

          <div className="relative">

            <Phone
              size={18}
              className="absolute left-3 top-4 text-gray-400"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
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

        {/* Business Name */}

        <div>

          <label className="block mb-2 font-medium">
            Business Name
          </label>

          <div className="relative">

            <Building2
              size={18}
              className="absolute left-3 top-4 text-gray-400"
            />

            <input
              type="text"
              name="businessName"
              value={formData.businessName}
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

        {/* Location */}

        <div>

          <label className="block mb-2 font-medium">
            Location
          </label>

          <div className="relative">

            <MapPin
              size={18}
              className="absolute left-3 top-4 text-gray-400"
            />

            <input
              type="text"
              name="location"
              value={formData.location}
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

        {/* Website */}

        <div>

          <label className="block mb-2 font-medium">
            Website
          </label>

          <div className="relative">

            <Globe
              size={18}
              className="absolute left-3 top-4 text-gray-400"
            />

            <input
              type="url"
              name="website"
              value={formData.website}
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

      </div>

      {/* Bio */}

      <div>

        <label className="block mb-2 font-medium">
          About You
        </label>

        <textarea
          rows={5}
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className="
            w-full
            border
            rounded-xl
            px-4
            py-3
            resize-none
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
          placeholder="Tell customers about yourself..."
        />

      </div>

      {/* Action Buttons */}

      <div className="flex flex-wrap justify-end gap-4">

        <button
          type="reset"
          className="
            px-6
            py-3
            border
            rounded-xl
            hover:bg-gray-100
            transition
          "
        >
          Reset
        </button>

        <button
          type="submit"
          className="
            px-6
            py-3
            bg-blue-600
            hover:bg-blue-700
            text-white
            rounded-xl
            transition
          "
        >
          Save Changes
        </button>

      </div>

    </form>

  );
}