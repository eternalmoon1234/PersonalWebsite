import { FC } from "react";
import profilePicture from '../assets/profile_picture.jpeg'
import Image from 'next/image'

export const Hero: FC = () => {
  return (
    <section className="flex justify-center space-x-20" id="hero">
      <Image src={profilePicture} alt="Profile Image" className="w-3/12 h-3/12 flex justify-start items-start rounded-full" /> 
      <div>
        <h3 className="text-4xl text-[#5FA8FF] font-beatriceBold">
          Gautam Paranjape
        </h3>
        <p className="text-base text-primary-light">
          Developer, Designer & Student
        </p>
        <p className="text-base text-white">Bay Area, California</p>
      </div>
    </section>
  );
};
