import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function ExperienceItem({
  show,
  item,
  handleExperienceItemClick,
}: any) {
  const content =
    show === true ? (
      <li>
        <div className="flex flex-row">
          <button
            onClick={handleExperienceItemClick}
            className="flex flex-row font-bold"
          >
            <ChevronUpIcon className="h-5 w-5" /> {item.name}
          </button>
        </div>
        <div className="pl-5">
          <p className="text-[#ADB7BE]">{item.title}</p>
          <p className="text-[#ADB7BE] font-sans text-xs">{item.period}</p>
          <ul className="list-disc pl-4 text-sm text-[#ADB7BE] mt-2">
            {item.details.map((detail: any, index: number) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </li>
    ) : (
      <li>
        <button
          onClick={handleExperienceItemClick}
          className="flex flex-row font-bold"
        >
          <ChevronUpIcon className="h-5 w-5" /> {item.name}
        </button>
      </li>
    );
  return content;
}
