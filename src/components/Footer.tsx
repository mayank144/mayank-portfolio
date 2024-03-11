import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="flex container mx-auto p-4 justify-between items-center">
        <Link
          href={
            process.env.RESUME_URL
              ? process.env.RESUME_URL
              : "https://drive.google.com/file/d/1xTRpF0WV8yueQPyrLOcQs-8QU8Lu09-r/view?usp=drive_link"
          }
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            src={"/images/resume-logo.jpg"}
            alt={"resume-logo"}
            width={50}
            height={50}
          ></Image>
        </Link>
        <p className="text-slate-800">@All Rights Reserved</p>
      </div>
    </footer>
  );
}
