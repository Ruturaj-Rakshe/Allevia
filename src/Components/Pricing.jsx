import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section className="bg-n-3 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center text-n-10">
        <h2 className="text-4xl font-bold mb-12">Our Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            plan="Basic Plan"
            price="$19.99/mo"
            features={[
              "Free Initial Consultation: One free consultation per month.",
              "General Checkup: Access to yearly routine health checkups.",
              "24/7 Online Support: Access to virtual healthcare support anytime.",
            ]}
          />
          <PricingCard
            plan="Standard Plan"
            price="$49.99/mo"
            features={[
              "Everything in Basic Plan",
              "Specialist Consultation: Two free consultations with a specialist each month.",
              "Priority Appointments: Fast-tracked appointments with shorter wait times.",
              "Diagnostic Imaging Discount: 10% off X-rays, MRIs, and other imaging services.",
            ]}
          />
          <PricingCard
            plan="Premium Plan"
            price="$99.99/mo"
            features={[
              "Everything in Standard Plan",
              "Unlimited Specialist Consultations: Free consultations with specialists every month.",
              "Surgery & Procedure Discounts: 15% off surgeries and procedures.",
              "Private Room Access: Complimentary upgrade to a private room during hospital stays.",
              "Exclusive Emergency Services: Priority access to emergency care and treatment.",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
