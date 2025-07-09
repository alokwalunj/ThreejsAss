import React from 'react';
import { skills } from '../assets/imgs';

const Skills = () => {
  return (
    <>
      <div className="w-[25%] flex flex-col text-primary text-[20px] md:text-[25px] items-end justify-between pt-4 pb-4">
        <h2 className="text-right">{'<img>'}</h2>
        <h2 className="text-right">{'</img>'}</h2>
      </div>

      <div className="relative w-[50%] flex justify-center items-center">
        {/* Background box */}
        <div className="absolute z-0 w-[90%] md:h-[600px] w-[845px] rounded-[20px] bg-gray-700 animate-pulse" />

        {/* Matching image */}
        <img
          src={skills}
          alt="skills"
          draggable={false}
          className="absolute z-10 select-none pointer-events-none w-[90%] md:h-[550px] w-[820px]  object-contain"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Skills;
