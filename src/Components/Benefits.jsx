import React from "react";
import Heading from "./Heading";
import Section from "./Section";
import { benefits } from "../Constants";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { Link } from "react-router-dom";
import Logo from "../assets/benefits/Logo.png";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <div className="flex px-10 xs:px-16 sm:px-5 md:px-0 gap-5 flex-wrap items-center md:flex-nowrap text-center justify-center md:justify-around mt-10 text-n-10">
          <div className="rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 p-6 md:px-2 lg:w-1/5 w-xl bg-n-8">
            <h3 className="lg:text-4xl text-2xl font-bold mb-2 ">500+</h3>
            <p className="lg:text-base text-sm">Expert Doctors</p>
          </div>
          <div className="rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 p-6 md:px-2 lg:w-1/5 w-xl bg-n-8">
            <h3 className="lg:text-4xl text-2xl font-bold mb-2">20k+</h3>
            <p className="lg:text-base text-sm">Happy Patients</p>
          </div>
          <div className="rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 p-6 md:px-2 lg:w-1/5 w-xl bg-n-8">
            <h3 className="lg:text-4xl text-2xl font-bold mb-2">24/7</h3>
            <p className="lg:text-base text-sm">Emergency Service</p>
          </div>
          <div className="rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 p-6 md:px-2 lg:w-1/5 w-xl bg-n-8">
            <h3 className="lg:text-4xl text-2xl font-bold mb-2">100+</h3>
            <p className="lg:text-base text-sm">Operation Theatres</p>
          </div>
          <div className="rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 p-6 md:px-2 lg:w-1/5 w-xl bg-n-8">
            <h3 className="lg:text-4xl text-2xl font-bold mb-2">850+</h3>
            <p className="lg:text-base text-sm">Hospital Rooms</p>
          </div>
        </div>

        <Heading
          className="md:px-24 mt-20"
          title="At Allevia, we are constantly innovating and improving our services to provide you with the best possible care experience."
        />
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] shadow-2xl hover:shadow-3xl transition-all duration-300"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5 text-n-11">{item.title}</h5>
                <p className="body-2 mb-6 text-n-1">{item.text}</p>

                <Link
                  to="/appointment"
                  className="flex items-center mt-auto pointer-events-auto"
                >
                  <img src={Logo} width={48} height={48} alt={item.title} />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Book Appointment
                  </p>
                  <Arrow />
                </Link>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-6 rounded-xl"
                style={{ ClipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {Logo && (
                    <img
                      src={Logo}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
