"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
export default function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    console.log("handleSubmit called");
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Context-Type": "application/json",
      },
      body: JSONdata,
    };

    e.target.email.value = "";
    e.target.subject.value = "";
    e.target.message.value = "";

    const response = await fetch(endpoint, options);
    if (response.status === 200) {
      setEmailSubmitted(true);
      setTimeout(() => {
        setEmailSubmitted(false);
      }, 3000);
    }
  };
  return (
    <section
      id="EmailSection"
      className="grid md:grid-cols-2 my-4 md:my-12 py-24 gap-4"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>

        <div className="flex flex-col mt-5">
          <p className="text-white font-bold">
            For all developers, software professionals and HR&apos;s
          </p>
          <div className="flex flex-row mt-4">
            <span className="text-white mr-4">Contact us:</span>
            <a href="tel:+91 9643574584" className="text-[#ADB7BE] underline">
              +(91) 9643574584
            </a>
          </div>
          <div className="flex flex-row">
            <span className="text-white mr-4">Email:</span>
            <a
              href="mailto:mayankgoel756@gmail.com"
              className="text-[#ADB7BE] underline"
            >
              mayankgoel756@gmail.com
            </a>
          </div>
          <div className="mt-4">
            <span className="text-[#ADB7BE]">
              Alternatively, fill in the form. Follow Mayank on Linkedin
            </span>
          </div>
        </div>

        <div className="socials flex flex-row gap-2 w-20 mt-4">
          <Link href="https://github.com/mayank144">
            <Image
              src={"/images/github-mark-white.png"}
              alt={"githubwhitemark"}
              width={100}
              height={100}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/mayank-goyal-339763151/">
            <Image
              src={"/images/linkedin-white.png"}
              alt={"linkedinwhitemark"}
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
      <div className="mt-20 md:mt-0">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium"
            >
              &nbsp;Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              &nbsp;Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              &nbsp;Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2 ">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
