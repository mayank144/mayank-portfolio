"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/project2.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Next.js Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/project2.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

export default function ProjectSection() {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag: "All" | "Web" | "App") => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => {
    return project.tag.includes(tag);
  });
  console.log(filteredProjects);
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="flex text-white flex-row justify-center items-center gap-2 py-6">
        <ProjectTag name="All" onClick={handleTagChange} selected={tag} />
        <ProjectTag name="Web" onClick={handleTagChange} selected={tag} />
        <ProjectTag name="App" onClick={handleTagChange} selected={tag} />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-4">
        {filteredProjects.map((project) => (
          <ProjectCard
            imageUrl={project.image}
            title={project.title}
            description={project.description}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            key={project.id}
          />
        ))}
      </div>
    </>
  );
}
