"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
interface TabData {
  title: string;
  id: string;
  content: any;
}
const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Nest.js</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Sammsung</li>
        <li>Accolite Digital</li>
        <li>Bharat Electronics Limited</li>
        <li>Chegg</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Tech Inderprastha Engineering College</li>
      </ul>
    ),
  },
  //   {
  //     title: "Certification",
  //     id: "certification",
  //     content: (
  //       <ul className="list-disc pl-2">
  //         <li>Samsung Professional Cleared</li>
  //       </ul>
  //     ),
  //   },
];
export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={"/images/about_me.jpg"}
          alt={"about_me.jpg"}
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ad
            nihil exercitationem debitis libero veniam natus aliquam
            consequuntur, placeat provident, aut, harum vero eveniet voluptates
            eos fugit quos. Veniam, saepe!
          </p>
          <div className="flex flex-row mt-8">
            {TAB_DATA.map((tabItem: TabData) => (
              <TabButton
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
                key={tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id == tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}
