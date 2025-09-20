"use client";
import React, { useState } from "react";
import { Star } from "lucide-react";

const UserReview = () => {
  const [rating, setRating] = useState(0); // Selected rating
  const [hoverRating, setHoverRating] = useState(0); // Hover effect

  return (
    <div className="max-w-md mx-auto bg-black text-white rounded-xl shadow-md overflow-hidden p-6 space-y-4 border border-gray-700">
      {/* User Info */}
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/60"
          alt="User Avatar"
          className="w-16 h-16 rounded-full border border-gray-500"
        />
        <div>
          <h2 className="text-lg font-semibold">John Doe</h2>
          {/* Interactive 5-Star Rating */}
          <div className="flex mt-1 space-x-1">
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              const isActive = starValue <= (hoverRating || rating);

              return (
                <Star
                  key={i}
                  className={`
                    w-6 h-6 cursor-pointer transition-all duration-200
                    ${
                      isActive
                        ? "text-yellow-400 fill-current"
                        : "text-gray-600"
                    }
                    ${hoverRating === starValue ? "scale-125 glow" : ""}
                  `}
                  onMouseEnter={() => setHoverRating(starValue)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(starValue)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* User Comment */}
      <p className="text-gray-300 text-sm sm:text-base">
        "This platform is amazing! It really helped us understand our customers
        and improve our services efficiently."
      </p>

      {/* Tailwind custom glow */}
      <style jsx>{`
        .glow {
          filter: drop-shadow(0 0 6px #facc15);
        }
      `}</style>
    </div>
  );
};

export default UserReview;
