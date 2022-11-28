import React from "react";

import c from "../assets/c.png";
import cp from "../assets/c++.png";
import python from "../assets/python.png";
import django from "../assets/django.png";
import pandas from "../assets/pandas.png";
import sklearn from "../assets/sklearn.png";
import github from "../assets/github.png";
import apache from "../assets/apache.png";
import numpy from "../assets/numpy.png";
import postgresql from "../assets/postgresql.png";
import opencv from "../assets/opencv.png";
import sql from "../assets/sql.jpg";
import solidity from "../assets/solidity.png";
import truffle from "../assets/truffle.png";
import tenserflow from "../assets/tensorflow.png";
// import seaborn from "../assets/seaborn.png";
import heroku  from "../assets/heroku.png";


const Skills = () => {
  const techs = [
    {
      id: 1,
      src: c,
      title: "C",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: cp,
      title: "C++",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: django,
      title: "Django",
      style: "shadow-green-700",
    },
    {
      id: 5,
      src: pandas,
      title: "Pandas",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: sklearn,
      title: "Sklearn",
      style: "shadow-orange-400",
    },
    {
      id: 7,
      src: tenserflow,
      title: "Tensorflow",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      src: apache,
      title: "Apache Spark",
      style: "shadow-orange-700",
    },
    {
      id: 9,
      src: numpy,
      title: "Numpy",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: postgresql,
      title: "PostgreSQL",
      style: "shadow-slate-500",
    },
    {
      id: 11,
      src: opencv,
      title: "OpenCV",
      style: "shadow-green-400",
    },
    {
      id: 12,
      src: sql,
      title: "SQL",
      style: "shadow-yellow-600",
    },
    {
      id: 13,
      src: solidity,
      title: "Solidity",
      style: "shadow-gray-400",
    },
    {
      id: 14,
      src: truffle,
      title: "Truffle",
      style: "shadow-green-300",
    },
    {
      id: 15,
      src: github,
      title: "Seaborn",
      style: "shadow-gray-400",
    },
    {
      id: 16,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 17,
      src: heroku,
      title: "Heroku",
      style: "shadow-purple-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b  from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl  font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 mb-10">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md  hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 ">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
