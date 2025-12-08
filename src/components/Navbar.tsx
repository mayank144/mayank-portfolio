"use client";
import Link from "next/link";
import Item, { ItemProps } from "./Item";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverlayed from "./MenuOverlayed";
import Image from "next/image";
const navLinks: ItemProps[] = [
  {
    href: "#about",
    title: "About",
  },
  // {
  //   href: "#projects",
  //   title: "Projects",
  // },
  {
    href: "#EmailSection",
    title: "Contact",
  },
];
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav
      className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90"
      style={{ backgroundColor: "black" }}
    >
      <div className="flex lg:py-4 flex-wrap items-center justify-between lg:mx-32 p-2">
        {/* <Link
          href={
            process.env.SAMSUNG_URL
              ? process.env.SAMSUNG_URL
              : "https://en.wikipedia.org/wiki/Samsung"
          }
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            className="rounded-full"
            src={"/images/samsung-logo.png"}
            alt={"samsung-logo"}
            width={125}
            height={50}
          ></Image>
        </Link> */}
        <Link
          href={"https://en.wikipedia.org/wiki/Google"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            className="rounded-full"
            src={"/images/google_logo.png"}
            alt={"google-logo"}
            width={80}
            height={20}
          ></Image>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              id="bar3Icon"
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              id="XMarkSign"
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <Item href={link.href} title={link.title} key={link.title} />
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlayed links={navLinks} /> : null}
    </nav>
  );
}
