import React from "react";
import { Facebook, Twitter, Dribbble, Linkedin } from "lucide-react";

const DoctorCard = ({ name, specialty, image, color, size = "large" }) => {
  const isLarge = size === "large";

  return (
    <div
      className={`relative ${
        isLarge ? "w-96 h-[500px]" : "w-64 h-72"
      } rounded-3xl overflow-hidden shadow-2xl group cursor-pointer`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-200">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Content Container - Bottom Section */}
      <div
        className={`absolute bottom-0 left-0 right-0 ${
          isLarge ? "p-8" : "p-4"
        }`}
      >
        {/* White/Colored Box */}
        <div
          className={`relative ${
            isLarge ? "rounded-2xl p-6" : "rounded-xl p-4"
          } text-center overflow-hidden bg-white`}
        >
          {/* Color Fill Animation - starts from top */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${color} -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out`}
          />

          {/* Content */}
          <div className="relative z-10">
            <h2
              className={`${
                isLarge ? "text-2xl" : "text-lg"
              } font-bold text-gray-800 mb-2 group-hover:text-white transition-colors duration-500`}
            >
              {name}
            </h2>
            <p
              className={`${
                isLarge ? "text-base" : "text-sm"
              } text-gray-600 mb-4 group-hover:text-white transition-colors duration-500`}
            >
              {specialty}
            </p>

            {/* Social Icons - appear after color fills */}
            <div
              className={`flex justify-center gap-${
                isLarge ? "4" : "3"
              } h-0 opacity-0 overflow-hidden group-hover:h-10 group-hover:opacity-100 transition-all duration-300 delay-500`}
            >
              <a
                href="#"
                className={`${
                  isLarge ? "w-10 h-10" : "w-8 h-8"
                } flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white`}
              >
                <Facebook size={isLarge ? 18 : 16} />
              </a>
              <a
                href="#"
                className={`${
                  isLarge ? "w-10 h-10" : "w-8 h-8"
                } flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white`}
              >
                <Twitter size={isLarge ? 18 : 16} />
              </a>
              <a
                href="#"
                className={`${
                  isLarge ? "w-10 h-10" : "w-8 h-8"
                } flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white`}
              >
                <Dribbble size={isLarge ? 18 : 16} />
              </a>
              <a
                href="#"
                className={`${
                  isLarge ? "w-10 h-10" : "w-8 h-8"
                } flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white`}
              >
                <Linkedin size={isLarge ? 18 : 16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DoctorCards() {
  // Sample data - you can replace this with your actual data
  const doctors = [
    {
      id: 1,
      name: "Catherine Denuve",
      specialty: "Optegra eye",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop",
      color: "from-orange-400 to-orange-500",
      size: "large",
    },
    {
      id: 2,
      name: "Dr. John Smith",
      specialty: "Cardiology",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=300&fit=crop",
      color: "from-blue-400 to-blue-600",
      size: "small",
    },
    {
      id: 3,
      name: "Dr. Sarah Wilson",
      specialty: "Neurology",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=300&fit=crop",
      color: "from-purple-400 to-purple-600",
      size: "small",
    },
    {
      id: 4,
      name: "Dr. Michael Brown",
      specialty: "Orthopedics",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=300&fit=crop",
      color: "from-green-400 to-green-600",
      size: "small",
    },
    {
      id: 5,
      name: "Dr. Emily Davis",
      specialty: "Pediatrics",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=300&fit=crop",
      color: "from-pink-400 to-pink-600",
      size: "small",
    },
  ];

  const mainDoctor = doctors[0];
  const otherDoctors = doctors.slice(1);

  return (
    <div className="bg-gradient-to-b from-[#001028] to-[#000514]  p-8">
      <div className="text-center">
        <p className="text-orange-500 italic mb-3 animate-fade-in">
          How It Works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up bg-gradient-to-b from-white to-[#737373] bg-clip-text text-transparent">
          HOW IT HELPS YOU TO KEEP HEALTHY
        </h2>
        <p className="text-white max-w-2xl mx-auto mb-14 animate-fade-in-up delay-200">
          Medical care is the practice of providing diagnosis, treatment, and
          preventive care for various illnesses, injuries, and diseases.
        </p>
      </div>

      <div className="min-h-screen flex items-center justify-center">
        {/* Main Large Card */}
        <DoctorCard
          name={mainDoctor.name}
          specialty={mainDoctor.specialty}
          image={mainDoctor.image}
          color={mainDoctor.color}
          size="large"
        />

        {/* Smaller Cards Grid */}
        <div className="ml-8 grid grid-cols-2 gap-6">
          {otherDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
              specialty={doctor.specialty}
              image={doctor.image}
              color={doctor.color}
              size="small"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
