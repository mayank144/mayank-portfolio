"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="lg:py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-12"
      >
        <div className="lg:col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <div>
            <h1 className="text-white mb-4 text-4xl lg:text-8xl lg:leading-normal font-extrabold text-center">
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
            <p className="text-[#ADFFFF] text-lg mb-6 lg:text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit
            </p>
          </div>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
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
