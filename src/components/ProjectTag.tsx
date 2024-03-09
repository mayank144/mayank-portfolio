import React from "react";

export default function ProjectTag({ name, onClick, selected }: any) {
  const buttonStyles =
    selected === name
      ? "text-white border-purple-500"
      : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => {
        onClick(name);
      }}
    >
      {name}
    </button>
  );
}
