"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import ExperienceItem from "./ExperienceItem";
import EducationItem from "./EducationItem";
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
interface EducationDetails {
  id: string;
  degree: string;
  college: string;
  period: string;
  prefix: string;
  cgpa?: number;
  percentage?: number;
  postfix?: string;
}
const COMPANY_DETAILS: CompanyDetails[] = [
  {
    id: "5",
    name: "Google",
    title: "Senior Software Engineer",
    period: "(10/2025-present)",
    details: [
      "Led the implementation of security protocols, enhancing the overall safety and integrity of the product, while ensuring compliance with internal and industry security standards.",
      "Developed and maintained a robust client-server communication layer, facilitating seamless and efficient data exchange across modules.",
      "Handled the SDK release process to the Maven repository, managing versioning, dependency management, and documentation to ensure smooth developer experience.",
      "Took ownership of the UI integration efforts, collaborating closely with design and backend teams to deliver a consistent and performant user interface across platforms.",
    ],
  },
  {
    id: "4",
    name: "Samsung(SRIB)",
    title: "Senior Software Engineer",
    period: "(07/2022-10/2025)",
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
    period: "(07/2020-07/2022)",
    details: [
      "Spearheaded the creation of a web application for a hotel management organization, providing visualization of reviews, bookings, and demand predictions.",
      "Contributed to an employment management portal, introducing a two-way data sync feature.",
      "Analyzed CSR's and successfully resolved bugs.",
    ],
  },
  {
    id: "2",
    name: "BEL",
    title: "Internship",
    period: "(06/2019-07/2019)",
    details: [
      "Implemented client-server synchronization using Web Socket technology.",
    ],
  },
];
const EDUCATION_DETAILS: EducationDetails[] = [
  {
    id: "3",
    degree: "Bachelor of Technology",
    college: "Inderprastha Engineering College",
    period: "(08/2016-08/2020)",
    prefix: "CGPA:",
    cgpa: 8.39,
  },
  {
    id: "2",
    degree: "XII(Senior Secondary)",
    college: "Central Board Of Senior Secondary School(CBSE)/Delhi",
    period: "(04/2014-03/2016)",
    prefix: "Percentage:",
    percentage: 79.99,
    postfix: "%",
  },
];

export default function AboutSection() {
  const [experienceItemId, setExperienceItemId] = useState("5");
  const [educationItemId, setEducationItemId] = useState("3");
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
            <ExperienceItem
              show={detail.id === experienceItemId}
              item={detail}
              key={detail.id}
              handleExperienceItemClick={() =>
                handleExperienceItemClick(detail.id)
              }
            />
          ))}
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="pl-2">
          {EDUCATION_DETAILS.map((detail) => (
            <EducationItem
              show={detail.id === educationItemId}
              item={detail}
              key={detail.id}
              handleEducationItemClick={() =>
                handleEducationItemClick(detail.id)
              }
            />
          ))}
        </ul>
      ),
    },
  ];

  const handleExperienceItemClick = (id: string) => {
    setExperienceItemId(id !== experienceItemId ? id : "");
  };
  const handleEducationItemClick = (id: string) => {
    setEducationItemId(id !== educationItemId ? id : "");
  };

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
          <div className="mt-2">
            {TAB_DATA.find((t) => t.id == tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}
