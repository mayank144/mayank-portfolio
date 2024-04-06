"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Logger from "@/utils/Logger";
import { scrollToEmailTemplate } from "@/utils/utilityFunction";

const RESUME_URL = process.env.RESUME_URL
  ? process.env.RESUME_URL
  : "https://drive.google.com/file/d/1frbOvyvNmW2Db3Q2nz1nFYE3Y50O41FX/view?usp=sharing";
const TAG: string = HeroSection.name;
export default function HeroSection() {
  const handleDownloadCv = () => {
    Logger.logD(TAG, "handleDownloadCv Called");
    window.location.href = RESUME_URL;
  };

  return (
    <section className="md:py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-12"
      >
        <div className="md:col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <div>
            <h1 className="text-white mb-4 text-2xl md:text-5xl md:leading-normal font-extrabold text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Hello, I&apos;m&nbsp;
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Mayank Goyal",
                  1000,
                  "Senior Developer",
                  1000,
                  "Samsung Engineer",
                  1000,
                ]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADFFFF] sm:text-xl mb-6 md:text-xl">
              I am a backend developer with 4 yrs+ experience
            </p>
          </div>
          <div className="md:flex md:flex-row md:justify-center md:items-baseline">
            <button
              onClick={() => {
                scrollToEmailTemplate("EmailSection");
              }}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </button>
            <button
              onClick={handleDownloadCv}
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-transparent hover:bg-slate-800 text-white border border-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="md:col-span-5 place-self-center mt-4 md:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] md:w-[400px] md:h-[400px] relative">
            <Image
              src={"/images/dev_image2.png"}
              alt={"dev_image2"}
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
