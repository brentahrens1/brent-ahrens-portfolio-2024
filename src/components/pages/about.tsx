import React, { useState, useRef, useEffect } from 'react';
import { workExperience } from "../../utils/work-experience";
import Button from "../blocks/buttons/button";
import CustomCursor from "../blocks/Cursor";

import profilePic from "../../assets/profile-pic.png";

const About = () => {
  const [isCursorActive, setIsCursorActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInsideSection = (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );

        setIsCursorActive(isInsideSection);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-black flex justify-center items-center flex-col">
      {/* CustomCursor is only active within the specified section */}
      <CustomCursor active={isCursorActive} />
      
      <div ref={sectionRef} className="section-h-padding pt-52 pb-24 bg-black after:clear-both after:table">
        <div className="overflow-hidden h-36 w-36 rounded-full shrink-0 float-left mr-6">
          <img className="w-full h-full object-cover" src={profilePic} alt="Brent Ahrens | Profile Pic" />
        </div>
        <div className="text-white large-header flex flex-wrap gap-x-4">
          <span>I'm</span> 
          <span>a</span> 
          <span>highly</span> 
          <span>driven</span> 
          <span>developer</span> 
          <span>with</span> 
          <span>full-stack</span> 
          <span>experience</span> 
          <span>and</span> 
          <span>a</span>
          <span>passion</span> 
          <span>for</span> 
          <span>frontend.</span> 
          <span>I</span> 
          <span>thrive</span> 
          <span>in</span> 
          <span>energetic,</span> 
          <span>creative,</span> 
          <span>and</span> 
          <span>collaborative </span>
          <span>environments</span> 
          <span>where</span> 
          <span>I</span> 
          <span>can</span> 
          <span>help</span> 
          <span>to</span> 
          <span>build</span> 
          <span>great</span> 
          <span>products</span> 
          <span>and</span>
          <span>continue</span> 
          <span>to</span> 
          <span>grow</span>
        </div>
      </div>

      <div className="section-h-padding bg-white w-full">
        <p className="text-2xl mb-12 pt-12">Roles</p>
        {
          workExperience.map(experience => (
            <div key={experience.title} className="py-10 border-t border-black">
              <div className="flex items-center justify-between">
                <h1 className="large-header">{experience.title}</h1>
                <p className="text-2xl text-projectSubText">{experience.years}</p>
              </div>
              <p className="text-2xl text-projectSubText mt-5">{experience.company}</p>
              <div className="text-2xl text-projectSubText mt-5 max-w-3xl">
                {experience.description}
              </div>
            </div>
          ))
        }
        <div className="py-20">
          <Button text="Resume" target="_blank" url="/BrentAhrensResume.pdf" styles="hover:bg-nightblue hover:text-white hover:no-underline inline" />
        </div>
      </div>
    </div>
  );
};

export default About;