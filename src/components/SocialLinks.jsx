import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/dhaivat-vipat",
      style: "bg-blue-500",
      
    },
    {
      id: 2,
      child: (
        <>
          <GrInstagram size={30} />
        </>
      ),
      href: "mailto:vipatdhaivat25@gmail.com",
      style: "bg-pink-500",
      
    },
    {
      id: 3,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1OoSGu_Yq9uiOwb5E-jUZCEHMY-xEVbM2/view?usp=sharing",
      style: "bg-yellow-500",
      download: true,
    },
    {
      id: 4,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/DhaivatV",
      style: "bg-gray-500",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              `"flex justify-between items-center p-4 ${style}  my-2 rounded-full ml-2 hover:ml-2  hover:scale-125 duration-300 "` +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
