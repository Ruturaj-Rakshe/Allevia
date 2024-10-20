import React from "react";
import user1 from "../../src/assets/user1.jpg";
import user2 from "../../src/assets/user2.jpg";
import user3 from "../../src/assets/user3.jpg";

const Feedbacks = () => {
  return (
    <>
      <h3 className="text-3xl font-bold text-center mb-10 md:mb-20">
        Patient Feedback
      </h3>
      <div className="items-center flex flex-col md:flex-row justify-center gap-5">
        <div className="false p-5 max-w-[300px] bg-[#d5f5ff] rounded-3xl shadow-lg">
          <div className="flex gap-5 items-center">
            <img
              className="w-12 rounded-full"
              src={user1}
              alt="Ralph Edwards"
            />
            <div>
              <h6 className="font-bold text-sm">Ralph Edwards</h6>
              <p className="text-xs opacity-70">Businessman</p>
            </div>
          </div>
          <p className="opacity-90 text-xs mt-2">
            "My experience with this hospital has been nothing but great. I
            highly recommend their services to anyone in need of quality
            healthcare. They truly prioritize patients care!"
          </p>
        </div>
        <div className="md:mb-16 p-5 max-w-[300px] bg-[#d5f5ff] rounded-3xl shadow-lg">
          <div className="flex gap-5 items-center">
            <img className="w-12 rounded-full" src={user2} alt="Josh Smith" />
            <div>
              <h6 className="font-bold text-sm">Josh Smith</h6>
              <p className="text-xs opacity-70">Engineer</p>
            </div>
          </div>
          <p className="opacity-90 text-xs mt-2">
            "The healthcare professionals were top-notch. They were
            knowledgable, attentive and took the time to answer all of my
            questions and address my concerns"
          </p>
        </div>
        <div className="false p-5 max-w-[300px] bg-[#d5f5ff] rounded-3xl shadow-lg">
          <div className="flex gap-5 items-center">
            <img className="w-12 rounded-full" src={user3} alt="Eleanor Pena" />
            <div>
              <h6 className="font-bold text-sm">Eleanor Pena</h6>
              <p className="text-xs opacity-70">Teacher</p>
            </div>
          </div>
          <p className="opacity-90 text-xs mt-2">
            "One thing that really stood out to me was the efficiency of the
            service provided, I did not have to wait long for my appointment.
            The entire process was a hassle-free experience. TOTALLY A
            RECOMMENDATION!"
          </p>
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
