"use client";
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface ReviewType {
  username: string;
  review: {
    content: string;
    rating: number;
    sentinental_analysis: number[];
    _id: string;
    createdAt: string;
  };
}

const Page = () => {
  const [reviews, setReviews] = useState<ReviewType[] | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/neutral", {
          method: "GET",
        });
        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    fetchComments();
  }, []);

  if (!reviews)
    return <p className="text-center mt-6 text-gray-400">Loading reviews...</p>;

  return (
    <div className="flex flex-wrap pt-4 justify-center gap-8 px-4 md:px-10 lg:px-20">
      {reviews.map(({ username, review }) => (
        <div
          key={review._id}
          className="w-full sm:w-80 md:w-96 bg-black text-white rounded-xl shadow-lg overflow-hidden p-6 space-y-4 border border-gray-700 hover:scale-105 transition-transform duration-200"
        >
          {/* User Info */}
          <div className="flex items-center space-x-4">
            <img
              src="https://i.pinimg.com/474x/9e/83/75/9e837528f01cf3f42119c5aeeed1b336.jpg?nii=t"
              alt="User Avatar"
              className="w-16 h-16 rounded-full border border-gray-500"
            />
            <div>
              <h2 className="text-lg font-semibold">{username}</h2>
              {/* Stars */}
              <div className="flex mt-1 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < review.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* User Comment */}
          <p className="text-gray-300 text-sm sm:text-base">{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
