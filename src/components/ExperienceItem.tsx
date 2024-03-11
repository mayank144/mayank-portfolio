import React from "react";

export default function ExperienceItem({ show, item }: any) {
  const content =
    show === true ? (
      <li>
        <p className="font-bold">{item.name}</p>
        <p className="text-[#ADB7BE]">{item.title}</p>
        <p className="text-[#ADB7BE] font-sans text-xs">{item.period}</p>
        <ul className="list-disc pl-4 text-sm text-[#ADB7BE] mt-2">
          <li>
            Lead the development of a commercialized Web Report using vue.js for
            visualizing generated health data.
          </li>
          <li>
            Create an android library to handle all the server calls and
            Authorization.
          </li>
          <li>
            Designed and implemented a web application for live information
            monitoring using WebSocket.
          </li>
          <li>
            Developed a fitness app enabling users to track running, walking,
            and analyze their progress in android.{" "}
          </li>{" "}
          <li>
            {" "}
            Developed a module to use AI for some suggestions to users and
            develop microservices in nestjs.
          </li>{" "}
        </ul>
      </li>
    ) : (
        <p className="font-bold">{item.name}</p>
    );
  return content;
}
