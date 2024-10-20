import React from "react";
import hero from "../assets/hero.png";

const AboutUs = () => {
  return (
    <section className="bg-white text-green-900 py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Welcome to Allevia</h2>
        <p className="text-lg font-medium mb-8">
          Where Compassion Meets Excellence
        </p>
        <p className="mb-8">
          At Allevia, we believe that healthcare is more than just a
          service—it's a commitment to your well-being. Our state-of-the-art
          hospital is dedicated to providing the highest standard of care,
          combining cutting-edge technology with a personal touch. From the
          moment you step through our doors, you’re not just a patient—you’re
          family.
        </p>

        <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
        <p className="mb-8">
          We are driven by a singular vision: to be a beacon of hope and healing
          in the community. We strive to create a safe and nurturing environment
          where patients can experience world-class medical care in the comfort
          of a compassionate setting.
        </p>

        <h3 className="text-3xl font-semibold mb-4">Why Choose Allevia?</h3>
        <ul className="list-disc list-inside mb-8 text-left">
          <li className="mb-4">
            <strong>Expert Doctors:</strong> Our team of doctors is composed of
            top specialists from various fields of medicine. Each brings years
            of experience, innovative practices, and a passion for patient care.
          </li>
          <li className="mb-4">
            <strong>Comprehensive Care:</strong> From routine check-ups to
            complex surgeries, Allevia offers a wide range of medical services
            under one roof. Our multidisciplinary approach ensures that you
            receive holistic and personalized treatment.
          </li>
          <li className="mb-4">
            <strong>Advanced Technology:</strong> We invest in the latest
            medical technologies to provide precise diagnostics and effective
            treatments. Our facilities are equipped with state-of-the-art
            equipment to ensure you receive the best care possible.
          </li>
          <li className="mb-4">
            <strong>Patient-Centered Approach:</strong> At Allevia, your comfort
            and satisfaction are our top priorities. We listen, we care, and we
            go the extra mile to ensure that your healthcare journey is smooth
            and stress-free.
          </li>
          <li>
            <strong>24/7 Emergency Services:</strong> Healthcare needs can arise
            at any time, which is why our emergency department is always open,
            staffed by experienced professionals ready to provide immediate
            care.
          </li>
        </ul>

        <div className="flex justify-center items-center mb-8">
          <img src={hero} alt="Hero" className="w-full max-w-md" />
        </div>

        <h3 className="text-3xl font-semibold mb-4">Our Promise</h3>
        <p className="mb-8">
          Allevia is committed to making healthcare accessible, affordable, and,
          above all, humane. We promise to treat every patient with dignity,
          respect, and the highest level of professionalism. Your health and
          well-being are our mission, and we’re here to support you every step
          of the way.
        </p>

        <h3 className="text-3xl font-semibold mb-4">Join the Allevia Family</h3>
        <p>
          Whether you’re here for a routine visit or a major procedure, you can
          trust Allevia to provide the care you need with the compassion you
          deserve. Come experience healthcare redefined—come experience Allevia.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
