import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function EducationItem({
  show,
  item,
  handleEducationItemClick,
}: any) {
  const content = (
    <div className="mt-2">
      {show === true ? (
        <li className="my-2">
          <div className="flex flex-row">
            <button
              onClick={handleEducationItemClick}
              className="flex flex-row font-bold"
            >
              <ChevronUpIcon className="h-5 w-5" /> {item.degree}
            </button>
          </div>
          <div className="pl-5">
            <p className="text-[#ADB7BE]">{item.college}</p>
            <div className="flex flex-row justify-between">
              <p className="text-[#ADB7BE] font-sans text-xs">{item.period}</p>
              <p className="text-[#ADB7BE] font-sans text-xs">
                <span className="text-white">{item.prefix}</span> {item.cgpa}
                {item.percentage}
                <span>{item.postfix}</span>
              </p>
            </div>
          </div>
        </li>
      ) : (
        <li>
          <button
            onClick={handleEducationItemClick}
            className="flex flex-row font-bold"
          >
            <ChevronDownIcon className="h-5 w-5" /> {item.degree}
          </button>
        </li>
      )}
    </div>
  );
  return content;
}
