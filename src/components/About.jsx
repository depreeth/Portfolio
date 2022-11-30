import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          I’m Dhaivat Vipat, I am from Ujjain, Madhya Pradesh. I have a good
          experience in Data Science and a niche in blockchain development.I'm
          extremely passionate about my work and believe in quality with
          specific attention to details. I'm a tech fanatic and a laptop
          enthusiast.I am currently working with Generative Adversarial Networks
          and Decentralized Applications
        </p>

        <br />

        <p className="text-xl mt-6">
          I am really ambitious about solving problems using my skills and this
          motivates me to learn and grasp new things quickly. I am looking
          forward to gain more experience and accomplishments in my future
          ahead.
        </p>
        <p className="text-xl mt-6 mb-32">
        If you want to collaborate with me, please feel free to {""}
        <Link to="contact" smooth duration={500} className=" text-[#2196f3] font-bold cursor-pointer underline hover:font-dark">
         Contact
            </Link>
            .
        </p>
      </div>
    </div>
  );
};

export default About;
