import React,{useState} from "react";
import { motion } from "framer-motion";
import useCollapse from 'react-collapsed'
import Card from "./Card";

const Experience = () => {
// const [Open,setOpen]=useState(false)
const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
const experience = [
  {
    // id: 1,
    name: "Data Scientist",
    title: "Gaius Networks (Filpped.ai),   New York",
    desc: "IT Services and IT Consulting.",
    style: " bg-gradient-to-b from-blue-600 to-blue-400",
    one: "Data modelling",
    two: "Working on NLP engines",
    three: "Content Creation",
  },
  {
    // id: 2,
    name: "Python Development Associate",
    title: "The Entrepreneurship Network, Chennai",
    desc: "The Entrepreneurship Network is an Edu-Tech company.",
    style: " bg-gradient-to-b from-red-600 to-red-400",
    one: "Development Using Django Rest Framework",
    two: "Software Development in Python",
    three: "",
  },
  {
    // id: 3,
    name: "Envision Head",
    title: "Team Envision (Aaruush), Chennai ",
    desc: " Team Envision is a Multidisciplinary technical team of Aaruush (National-Level Techno-management Fest at SRMIST) that aims to provide solutions to most campus and societal issues and problems.",
    style: " bg-gradient-to-b from-green-600 to-green-400",
    one: "Qualified Internal Round Of Smart India Hackathon.",
    two: "Found solutions to campus-related issues through ideation (ideas are under implementation).",
    three: "Team management.",
  },
  {
    name: "Committee Head",
    title: "Sponsorship and Marketing (Aaruush), Chennai",
    desc: "Identifying and developing sponsor marketing / promotional opportunities through research, creative thinking, and industry-standard campaigns.",
    style: " bg-gradient-to-b from-yellow-600 to-yellow-400",
    one: "Cresting pipelines of potential sponsors and partners.",
    two: "Making proposals for sponsors and partners.",
    three: "Team management",
  }
  
];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0 ">
        {experience.map(({ item, index,name,desc,title,style,one,two,three}) => {
          return<Card 
          key={index} item={item} name={name} desc={desc} title={title} style={style} one={one} two={two} three={three}
          />
        })}
        </div>

      </div>
    </div>
  );
};

export default Experience;
