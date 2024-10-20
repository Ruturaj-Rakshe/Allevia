import React from "react";
import BarChart from "@/ui/BarChart";
import PieChart from "@/ui/PieChart";

const StatsPage = () => {
  return (
    <div className="container p-8">
      <div className="flex gap-4 justify-center">
        <BarChart />
      </div>
      <div className="text-gray-800 p-6 ">
        <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
          Track the Growth: Desktop vs. Mobile Visitors Over Time
        </h2>
        <p className="text-lg leading-relaxed text-center">
          This bar chart gives you a snapshot of how our hospital website is
          accessed across different devices. It shows the daily number of
          visitors using desktop and mobile devices, allowing us to keep
          improving your online experience.
          <span className="font-semibold text-indigo-500">
            {" "}
            Whether you’re browsing from the comfort of your computer or on the
            go with your phone
          </span>
          , this data helps us tailor our services to meet your needs. Explore
          how engagement has grown across platforms over the past three months!
        </p>
      </div>
      <div className="flex gap-4 justify-center">
        <PieChart />
      </div>
      <div className="text-gray-800 p-6 ">
        <h2 className="text-2xl font-bold mb-4 text-center text-teal-600">
          Specialists at a Glance: Most Visited Doctors
        </h2>
        <p className="text-lg leading-relaxed text-center">
          This pie chart highlights the top medical specialties most visited by
          our patients. From{" "}
          <span className="font-semibold text-teal-500">
            orthopedics and cardiology
          </span>{" "}
          to{" "}
          <span className="font-semibold text-teal-500">
            neurology and radiology
          </span>
          , the chart showcases the popularity of these specialists. It reflects
          the trust our patients place in their expert care. Whether you're
          looking for a specialist or exploring our services, this data provides
          a clear snapshot of our hospital's healthcare focus.
          <span className="font-semibold text-teal-500">
            {" "}
            Find the care that best fits your needs!
          </span>
        </p>
      </div>
    </div>
  );
};

export default StatsPage;
