import React from "react";

const Review = ({ user = {}, index }) => {
  return (
    <div
      className={` ${
        index % 2 !== 0 && "md:mb-16"
      } p-5 max-w-[300px] bg-[#d5f5ff] rounded-3xl shadow-lg`}
    >
      <div className="flex gap-5 items-center">
        <img
          className="w-12 rounded-full"
          src={user.img || "default-image.jpg"} // Provide a default image or handle undefined
          alt={user.name || "Anonymous"} // Provide a default name if undefined
        />
        <div>
          <h6 className="font-bold text-sm">{user.name || "Anonymous"}</h6>
          <p className="text-xs opacity-70">{user.job || "Unknown Job"}</p>
        </div>
      </div>
      <p className="opacity-90 text-xs mt-2">
        {user.desc || "No description available."}
      </p>
    </div>
  );
};

export default Review;
