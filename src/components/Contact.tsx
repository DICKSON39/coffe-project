import { MapPinIcon, EnvelopeIcon, ClockIcon,PhoneIcon, GlobeAltIcon, TruckIcon } from "@heroicons/react/24/solid";

export default function ContactInfo() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center bg-[#f8f1ee] p-8">
      {/* Contact Details Section */}
      <div className="w-full md:w-1/2 max-w-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-black text-center">CONTACT US</h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto"></div>

        {/* Contact Details */}
        <div className="space-y-4 text-gray-700">
          <div className="flex items-center space-x-3">
            <MapPinIcon className="hover:text-amber-900 h-6 w-6 text-red-500" />
            <span>123 Campsite Avenue, Wilderness, CA 98765</span>
          </div>
          <div className="flex items-center space-x-3">
            <EnvelopeIcon className="hover:text-green-300 h-6 w-6 text-blue-500" />
            <span>info@coffeeshopwebsite.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <PhoneIcon className="hover:text-green-300 h-6 w-6 text-red-500"/>
            <span>(123) 456-7899</span>
          </div>
          <div className="flex items-center space-x-3">
          <ClockIcon className="hover:text-amber-900 h-6 w-6 text-blue-300"/>
            <span>Monday - Friday: 9:00 AM - 5:00 PM</span>
          </div>
          <div className="flex items-center space-x-3">
            <ClockIcon className="hover:text-amber-900 h-6 w-6 text-green-300"/>
            <span>Sunday: Closed</span>
          </div>
          <div className="flex items-center space-x-3">
            <GlobeAltIcon className="hover:text-yellow-300 h-6 w-6 text-blue-300"/>
            <span>daltonmnyeri19@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <TruckIcon className="hover:text-yellow-300 h-6 w-6 text-blue-300"/>
            <span>Deliver At your place</span>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full md:w-1/2 max-w-lg p-8">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <textarea
            placeholder="Your Message"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none resize-none min-h-[120px]"
          ></textarea>
          <button className="w-full bg-[#5a1f1f] text-white py-3 rounded-lg hover:bg-[#3d1313] transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
