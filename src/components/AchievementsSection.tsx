"use client";
import dynamic from "next/dynamic";
import React from "react";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);
const achievementsList = [
  {
    metric: "Experience",
    value: "4",
    postfix: "yrs+",
  },
  {
    metric: "Achievement",
    value: "5",
    postfix: "+",
  },
  {
    metric: "Emp(history)",
    value: "4",
  },
];

export default function AchievementsSection() {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-around">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-1 lg:mx-4 my-0 lg:my-4"
            >
              <h2 className="flex flex-row text-white text-xl lg:text-4xl font-bold">
                <AnimatedNumbers
                  includeComma
                  className="text-white text-xl lg:text-4xl font-bold"
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
