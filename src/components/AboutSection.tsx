"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import ExperienceItem from "./ExperienceItem";
interface TabData {
  title: string;
  id: string;
  content: any;
}

interface CompanyDetails {
  id: string;
  name: string;
  title: string;
  period: string;
  details: string[];
}
const COMPANY_DETAILS: CompanyDetails[] = [
  {
    id: "4",
    name: "Samsung Research & Development",
    title: "Senior Software Engineer",
    period: "(07/2022-present)",
    details: [
      "Lead the development of a commercialized Web Report using vue.js for visualizing generated health data.",
      "Create an android library to handle all the server calls and Authorization.",
      "Designed and implemented a web application for live information monitoring using WebSocket.",
      "Developed a fitness app enabling users to track running, walking, and analyze their progress in android.",
      "Developed a module to use AI for some suggestions to users and develop microservices in nestjs.",
    ],
  },
  {
    id: "3",
    name: "Accolite Digital",
    title: "Senior Software Engineer",
    period: "(07/2022-present)",
    details: [
      "Lead the development of a commercialized Web Report using vue.js for visualizing generated health data.",
      "Create an android library to handle all the server calls and Authorization.",
      "Designed and implemented a web application for live information monitoring using WebSocket.",
      "Developed a fitness app enabling users to track running, walking, and analyze their progress in android.",
      "Developed a module to use AI for some suggestions to users and develop microservices in nestjs.",
    ],
  },
  {
    id: "2",
    name: "BEL",
    title: "Senior Software Engineer",
    period: "(07/2022-present)",
    details: [
      "Lead the development of a commercialized Web Report using vue.js for visualizing generated health data.",
      "Create an android library to handle all the server calls and Authorization.",
      "Designed and implemented a web application for live information monitoring using WebSocket.",
      "Developed a fitness app enabling users to track running, walking, and analyze their progress in android.",
      "Developed a module to use AI for some suggestions to users and develop microservices in nestjs.",
    ],
  },
  {
    id: "1",
    name: "Chegg",
    title: "Senior Software Engineer",
    period: "(07/2022-present)",
    details: [
      "Lead the development of a commercialized Web Report using vue.js for visualizing generated health data.",
      "Create an android library to handle all the server calls and Authorization.",
      "Designed and implemented a web application for live information monitoring using WebSocket.",
      "Developed a fitness app enabling users to track running, walking, and analyze their progress in android.",
      "Developed a module to use AI for some suggestions to users and develop microservices in nestjs.",
    ],
  },
];
const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 list-disc pl-2">
        <li>Node.js</li>
        <li>Nest.js</li>
        <li>Next.js</li>
        <li>React.js</li>
        <li>MongoDB</li>
        <li>SQL</li>
        <li>Azure</li>
        <li>DSA</li>
        <li>Android(kotlin)</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="pl-2">
        {COMPANY_DETAILS.map((detail) => (
          <ExperienceItem show={true} item={detail} key={detail.id} />
        ))}
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
  const [_, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
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
            I specialize in backend development, with expertise in Nest.js for
            robust server-side solutions, and I also contribute to Android
            libraries using Kotlin to create efficient and seamless mobile
            experiences.
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
