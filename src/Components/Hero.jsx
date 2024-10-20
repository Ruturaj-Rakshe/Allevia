import React, { useRef } from "react";
import Section from "./Section";
import Button from "./Button";
import { curve, Hospital } from "../assets";
import { Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import Popupside from "./Popupside";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";

const Hero = () => {
  const parallaxRef = useRef(null);

  // Create the array for popup data inside the Hero component
  const popupData = [
    {
      id: 1,
      img: user3, // Image for Eleanor Pena
      name: "Eleanor Pena",
      title: "Teacher",
      top: 0,
      left: 0,
      review:
        "One thing that really stood out to me was the efficiency of the service provided. The entire process was a hassle-free experience. TOTALLY A RECOMMENDATION!",
    },
    {
      id: 2,
      img: user1, // Image for Ralph Edwards
      name: "Ralph Edwards",
      title: "Businessman",
      top: 300,
      left: 0,
      review:
        "My experience with this hospital has been nothing but great. I highly recommend their services to anyone in need of quality healthcare.",
    },
    {
      id: 3,
      img: user2, // Image for Josh Smith
      name: "Josh Smith",
      title: "Engineer",
      top: 150,
      left: 800,
      review:
        "The healthcare professionals were top-notch, knowledgeable, and attentive. They answered all of my questions.",
    },
  ];

  return (
    <Section
      className="pt-[12-rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-4 md:mb-8">
          <h1 className="h1 mb-6 mt-20 text-n-10">
            Bringing Comfort and Care to&nbsp;Every Patient with&nbsp;
            <span className="inline-block relative">
              Allevia{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-10 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button
            href="appointment"
            className="text-white hover:opacity-80 transition-opacity duration-200 shadow-md"
            black={true}
          >
            Get Started
          </Button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n- rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={Hospital}
                  className="w-full scale-[1.7] translate-y-[8%]
                  md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%}"
                  width={1024}
                  height={490}
                  alt="Hospital"
                />
                {popupData.map((popup, i) => (
                  <div
                    style={{
                      top: popup.top,
                      left: popup.left,
                      position: "absolute",
                      width: "100%",
                    }}
                  >
                    <ScrollParallax isAbsolutelyPositioned key={popup.id}>
                      <Popupside
                        img={popup.img}
                        name={popup.name}
                        title={popup.title}
                        review={popup.review}
                      />
                    </ScrollParallax>
                  </div>
                ))}
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]"></div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
