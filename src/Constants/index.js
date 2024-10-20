import {
  chromecast,
  disc02,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  searchMd,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../../src/assets";

import Logo from "../../src/assets/benefits/Logo.png";

import benefitCard5 from "../../src/assets/benefits/card-5.svg";
import benefitCard6 from "../../src/assets/benefits/card-6.svg";

import user1 from "../../src/assets/user1.jpg";
import user2 from "../../src/assets/user2.jpg";
import user3 from "../../src/assets/user3.jpg";

import doc1 from "../../src/assets/doc1.jpg";
import doc2 from "../../src/assets/doc2.jpg";
import doc3 from "../../src/assets/doc3.jpg";
import doc4 from "../../src/assets/doc4.jpg";

export const navigation = [
  {
    id: "0",
    title: "Stats",
    url: "/Stats",
  },
  {
    id: "1",
    title: "Pricing",
    url: "/Pricing",
  },
  {
    id: "2",
    title: "About Us",
    url: "/AboutUs",
  },
  {
    id: "3",
    title: "Doctors",
    url: "/Doctors",
  },
  {
    id: "4",
    title: "New account",
    url: "/signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "/SignIn",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const benefits = [
  {
    id: "0",
    title: "Neurology",
    text: "Empowering your mind and body with expert neurological care, we are committed to diagnosing and treating your unique neurological needs with compassion and cutting-edge technology.",
    backgroundUrl: benefitCard5,
    iconUrl: Logo,
    imageUrl: Logo,
  },
  {
    id: "1",
    title: "Cardiology",
    text: "Your heart's health is our priority. Our cardiology department offers expert care, advanced treatments, and personalized support to keep your heart beating strong.",
    backgroundUrl: benefitCard6,
    iconUrl: Logo,
    imageUrl: Logo,
    light: true,
  },
  {
    id: "2",
    title: "Orthopedics",
    text: "Restoring mobility and enhancing your quality of life, our orthopedics department specializes in comprehensive care for bones, joints, and muscles, helping you move with confidence again.",
    backgroundUrl: benefitCard5,
    iconUrl: Logo,
    imageUrl: Logo,
  },
  {
    id: "3",
    title: "Surgery",
    text: "Our surgery department is committed to excellence in surgical care, combining expertise, precision, and advanced technology to ensure the best outcomes for your health and recovery.",
    backgroundUrl: benefitCard5,
    iconUrl: Logo,
    imageUrl: Logo,
    light: true,
  },
  {
    id: "4",
    title: "Dentistry",
    text: "Delivering smiles with care and precision, our dentistry department offers comprehensive dental services to keep your teeth and gums healthy, ensuring a bright and confident smile.",
    backgroundUrl: benefitCard6,
    iconUrl: Logo,
    imageUrl: Logo,
  },
  {
    id: "5",
    title: "Radiology",
    text: "Providing precise imaging and accurate diagnostics, our radiology department is dedicated to delivering the clarity you need for confident, informed healthcare decisions",
    backgroundUrl: benefitCard5,
    iconUrl: Logo,
    imageUrl: Logo,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const FeedbackData = {
  heading: "Patient Feedback",
  feedbacks: [
    {
      img: user1,
      name: "Ralph Edwards",
      job: "Businessman",
      desc: "My experience with this hospital has been great. I highly recommend their services to anyone in need of quility healthcare. they truly prioritize patients care!",
    },
    {
      img: user2,
      name: "Josh Smith",
      job: "Engineer",
      desc: "The healthcare professionals were top-natch. they were knowledgeable, attentive, and took the time to answer all of my questions and address my concerns",
    },
    {
      img: user3,
      name: "Eleanor Pena",
      job: "Teacher",
      desc: "One thing that stood out to me was the efficiency of the service, i didn't have to wait long for my appointment, and the entire process was hassle-free experience",
    },
  ],
};

export const DoctorsData = {
  heading: "Meet Our Specialists",
  GivenData: [
    {
      img: doc1,
      name: "Dr. Michael Lee",
      speciality: "Cardiologist",
    },
    {
      img: doc2,
      name: "Dr. Emily Davis",
      speciality: "Dermatologist",
    },
    {
      img: doc3,
      name: "Dr. James Smith",
      speciality: "Neurologist",
    },
    {
      img: doc4,
      name: "Dr. Sarah Johnson",
      speciality: "Pediatrician",
    },
  ],
};
