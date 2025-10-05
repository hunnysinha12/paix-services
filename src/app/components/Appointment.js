"use client";

import { useState } from "react";
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
    <div
      id="contact"
      className="min-h-screen py-16 px-4 bg-gradient-to-b from-[#000514] to-[#001028]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mx-auto shadow-2xl shadow-blue-500/50 hover:scale-110 transition-transform duration-300">
              <Calendar className="text-white" size={40} />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Book Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Appointment
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Schedule a consultation with our expert healthcare professionals.
            We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info Cards */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700 delay-150">
            {/* Working Hours Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-blue-500/50 hover:bg-white/10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Clock className="text-white" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Working Hours
                  </h3>
                  <p className="text-gray-400 mb-4">
                    We're available throughout the week
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-2 rounded-lg bg-white/5">
                      <span className="text-gray-400">Monday - Friday:</span>
                      <span className="font-semibold text-white">
                        9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-white/5">
                      <span className="text-gray-400">Saturday:</span>
                      <span className="font-semibold text-white">
                        9:00 AM - 2:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-white/5">
                      <span className="text-gray-400">Sunday:</span>
                      <span className="font-semibold text-red-400">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expert Care Card */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-500/30 hover:shadow-2xl transition-all duration-300 hover:border-blue-500/50">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Stethoscope className="text-white" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Expert Care
                  </h3>
                  <p className="text-blue-200 mb-4">
                    Our team of specialists is dedicated to providing you with
                    the highest quality healthcare.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle size={18} className="mr-2 text-green-400" />
                      Board-certified physicians
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={18} className="mr-2 text-green-400" />
                      State-of-the-art facilities
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={18} className="mr-2 text-green-400" />
                      Personalized treatment plans
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-purple-500/50 hover:bg-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={18} />
                  </div>
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={18} />
                  </div>
                  <span className="text-gray-300">contact@healthcare.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl relative overflow-hidden border border-white/10 animate-in fade-in slide-in-from-right duration-700 delay-300">
            {/* Success Message Overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 z-50 flex items-center justify-center transition-all duration-500 rounded-3xl">
                <div className="text-center text-white animate-in zoom-in duration-500">
                  <CheckCircle
                    size={64}
                    className="mx-auto mb-4 animate-pulse"
                  />
                  <h3 className="text-3xl font-bold mb-2">
                    Appointment Booked!
                  </h3>
                  <p className="text-green-100">
                    We'll contact you shortly to confirm.
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
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400 transition-colors"
                    size={20}
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full text-white pl-12 pr-4 py-3 border-2 border-white/10 rounded-xl bg-white/5 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute text-gray-400 left-4 top-1/2 transform -translate-y-1/2 group-focus-within:text-blue-400 transition-colors"
                      size={20}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full text-white pl-12 pr-4 py-3 border-2 border-white/10 rounded-xl bg-white/5 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone *
                  </label>
                  <div className="relative">
                    <Phone
                      className="absolute text-gray-400 left-4 top-1/2 transform -translate-y-1/2 group-focus-within:text-blue-400 transition-colors"
                      size={20}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full text-white pl-12 pr-4 py-3 border-2 border-white/10 rounded-xl bg-white/5 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-200"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>

              {/* Department and Doctor */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Department *
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full text-white px-4 py-3 border-2 border-white/10 rounded-xl bg-white/5 cursor-pointer focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-200"
                  >
                    <option value="" className="bg-gray-800">
                      Select Department
                    </option>
                    {departments.map((item) => (
                      <option key={item} value={item} className="bg-gray-800">
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Preferred Doctor
                  </label>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="w-full text-white px-4 py-3 border-2 border-white/10 rounded-xl bg-white/5 cursor-pointer focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-200"
                  >
                    <option value="" className="bg-gray-800">
                      Select Doctor
                    </option>
                    {doctors.map((item) => (
                      <option key={item} value={item} className="bg-gray-800">
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400 transition-colors pointer-events-none"
                      size={20}
                    />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full text-white pl-12 pr-4 py-3 border-2 border-white/10 rounded-xl bg-white/5 cursor-pointer focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <Clock
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={20}
                    />
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full text-white pl-12 pr-4 py-3 border-2 border-white/10 rounded-xl bg-white/5 cursor-pointer focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-200"
                    >
                      <option value="" className="bg-gray-800">
                        Select Time
                      </option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-gray-800">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full text-white px-4 py-3 border-2 border-white/10 rounded-xl bg-white/5 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-200 resize-none"
                  placeholder="Tell us more about your condition or any specific concerns..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60"
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
