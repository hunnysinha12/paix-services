import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Stethoscope,
  CheckCircle,
} from "lucide-react";

export default function AppointmentBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const departments = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Dermatology",
    "Ophthalmology",
  ];

  const doctors = [
    "Dr. Sarah Johnson",
    "Dr. Michael Chen",
    "Dr. Emily Davis",
    "Dr. James Wilson",
    "Dr. Lisa Anderson",
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        doctor: "",
        date: "",
        time: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000514] to-[#001028]  py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto shadow-lg">
              <Calendar className="text-white" size={32} />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-b from-white to-[#737373] bg-clip-text text-transparent mb-4">
            Book Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Appointment
            </span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Schedule a consultation with our expert healthcare professionals.
            WeIt&apos;sre here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info Cards */}
          <div className="space-y-6">
            <div className="bg-[#001028] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Clock className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Working Hours
                  </h3>
                  <p className="text-gray-600 mb-3">
                    WeIt&apos;sre available throughout the week
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="font-semibold text-white">
                        9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="font-semibold text-white">
                        9:00 AM - 2:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="font-semibold text-red-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-xl text-white">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Stethoscope className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Expert Care</h3>
                  <p className="text-blue-100 mb-4">
                    Our team of specialists is dedicated to providing you with
                    the highest quality healthcare.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle size={16} className="mr-2" />
                      Board-certified physicians
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="mr-2" />
                      State-of-the-art facilities
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="mr-2" />
                      Personalized treatment plans
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#000514] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-600" size={20} />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-600" size={20} />
                  <span className="text-gray-700">contact@healthcare.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="bg-gradient-to-b from-[#001028] to-[#000514] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            {/* Success Message Overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 z-50 flex items-center justify-center transition-all duration-500">
                <div className="text-center text-white">
                  <CheckCircle size={64} className="mx-auto mb-4" />
                  <h3 className="text-3xl font-bold mb-2">
                    Appointment Booked!
                  </h3>
                  <p className="text-green-100">
                    WeIt&apos;sll contact you shortly to confirm.
                  </p>
                </div>
              </div>
            )}

            <h2 className="text-3xl font-bold text-white mb-6">
              Schedule Your Visit
            </h2>

            <div className="space-y-5">
              {/* Name Input */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors"
                    size={20}
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors"
                      size={20}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="relative">
                    <Phone
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors"
                      size={20}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>

              {/* Department and Doctor */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none bg-white cursor-pointer"
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Doctor
                  </label>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none bg-white cursor-pointer"
                  >
                    <option value="">Select Doctor</option>
                    {doctors.map((doc) => (
                      <option key={doc} value={doc}>
                        {doc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors"
                      size={20}
                    />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all cursor-pointer"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors"
                      size={20}
                    />
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none bg-white cursor-pointer"
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                  placeholder="Tell us more about your condition or any specific concerns..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg hover:shadow-xl"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
