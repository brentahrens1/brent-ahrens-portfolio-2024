import { workExperience } from "../../utils/work-experience";

import profilePic from "../../assets/profile-pic.png";

const About = () => {
  return (
    <div className="bg-black pt-52 flex justify-center items-center flex-col">
      <div className="px-20 pb-24 bg-black after:clear-both after:table">
        <div className="overflow-hidden h-36 w-36 rounded-full shrink-0 float-left mr-6">
          <img className="w-full h-full object-cover" src={profilePic} alt="Brent Ahrens | Profile Pic" />
        </div>
        <p className="text-white text-7xl max-w-[1108px]">
          I'm a highly driven developer with full-stack experience and a passion for frontend.
          I thrive in energetic, creative, and collaborative environments where I can help to build great
          products and continue to grow.
        </p>
      </div>
      <div className="px-20 bg-white w-full">
        <p className="text-2xl mb-12 pt-12">Roles</p>
        {
          workExperience.map(experience => {
            return (
              <div key={experience.title} className="py-10 border-t border-black">
                <div className="flex items-center justify-between">
                  <h1 className="text-7xl">{experience.title}</h1>
                  <p className="text-2xl text-projectSubText">{experience.years}</p>
                </div>
                <p className="text-2xl text-projectSubText mt-5">{experience.company}</p>
                <div className="text-2xl text-projectSubText mt-5 max-w-3xl">
                  {experience.description}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default About;