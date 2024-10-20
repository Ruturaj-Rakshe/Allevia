import React from "react";

const Popupside = ({ img, name, title, review, className }) => {
  return (
    <div
      className={`false p-5 max-w-[300px] bg-[#6bcfee] rounded-3xl shadow-lg ${className}`}
    >
      <div className="flex gap-5 items-center">
        <img className="w-12 rounded-full" src={img} alt={name} />
        <div>
          <h6 className="font-bold text-sm">{name}</h6>
          <p className="text-xs opacity-70">{title}</p>
        </div>
      </div>
      <p className="opacity-90 text-xs mt-2">{review}</p>
    </div>
  );
};

export default Popupside;
