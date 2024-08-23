"use client";

//TODO: fixa bugg när man skiftar mellan mobilvy och desktop så slutar dom åka

import headshotImg from "../public/headshot.jpg";
import Image from "next/image";
import ProjectSectionList from "@/components/HeroSection";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import awsImg from "../public/images/aws.svg";
import htmlImg from "../public/images/html.svg";
import cssImg from "../public/images/css.svg";
import dockerImg from "../public/images/docker.svg";
import javascriptImg from "../public/images/javascript.svg";
import mysqlImg from "../public/images/mysql.svg";
import nextImg from "../public/images/next.svg";
import nodeImg from "../public/images/node.svg";
import reactImg from "../public/images/react.svg";
import tailwindImg from "../public/images/tailwind.svg";

export default function Home() {
  // useEffect för scrollen till skillsen
  useEffect(() => {
    const container = document.querySelector(".scroll-content");
    const clone = container.innerHTML;
    container.innerHTML += clone;

    let scrollSpeed = 0.5; // controls the speed of the scroll
    let scrollPos = 0;
    const scrollWidth = container.scrolllWidth / 2;

    const animateScroll = () => {
      scrollPos += scrollSpeed;
      if (scrollPos >= scrollWidth) {
        scrollPos = 0;
      }
      container.style.transform = `translateX(-${scrollPos}px)`;
      requestAnimationFrame(animateScroll);
    };

    animateScroll();
  }, []);

  return (
    <main className="text-white">
      <Nav />
      <div className="hidden m-12 md:flex md:m-8">
        <div className="flex items-center flex-col md:m-4 ">
          <div className="flex justify-center flex-col items-center mb-2 md:text-center md:space-y-12">
            <h2
              className="text-7xl m-0 text-black pt-24 pb-16 opacity-0 animate-fadeInUp"
              style={{
                animation: "fadeInUp 1s ease-out forwards",
                animationDelay: "0.3s",
              }}
            >
              Hello, my name is Shanti, I'm a{" "}
              <span className="fullstack">frontend developer,</span>
              &nbsp;and I like to build
            </h2>
          </div>
          <div className="flex flex-row w-full items-center mt-36">
            <div className="flex flex-col w-full justify-center items-center">
              <p className="text-black text-lg justify-center text-center">
                Welcome to my page. I am a dedicated frontend developer from
                Sweden with significant experience in building high-performance
                and secure websites, and I also have essential backend
                development skills. I work well in teams and strive to deliver
                smart and intuitive code. I'm detail-oriented and prioritize
                creating an optimal user experience. My focus and dedication
                ensure that I always aim to achieve the best possible results
                for every project I work on.
              </p>
              <button className="bg-transparent bg-white w-64 border p-4 shadow-xl rounded-3xl hover:cursor-pointer hover:w-96 transistion duration-300 ease-in-out mt-16">
                View Resume
              </button>
            </div>
            <div className="my-4 w-full ml-20">
              <Image
                src={headshotImg}
                alt="Headshot of Shanti Hedelin"
                className="border rounded-full w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* för mobil */}
      <div className="m-12 flex md:hidden">
        <div className="flex items-center  flex-col md:flex-row md:m-4 md:space-x-8">
          <div className="flex justify-center flex-col items-center mb-2 md:text-center md:space-y-12">
            <h2
              className="text-5xl m-0 text-black opacity-0 animate-fadeInUp"
              style={{
                animation: "fadeInUp 1s ease-out forwards",
                animationDelay: "0.3s",
              }}
            >
              Hello, my name is Shanti Hedelin, i'm a{" "}
              <span className="fullstack">frontend developer</span>
            </h2>{" "}
            <div className="relative h-96 my-4 w-full">
              <Image
                src={headshotImg}
                layout="responsive"
                objectFit="cover"
                alt="Headshot of Shanti Hedelin"
                className="border rounded-xl mt-6"
              />
            </div>
            <p className="pt-8 text-black">
              Welcome to my page. I am a dedicated frontend developer from
              Sweden with significant experience in building high-performance
              and secure websites, and I also have strong backend development
              skills. I work well in teams and strive to deliver smart and
              intuitive code. I'm detail-oriented and prioritize creating an
              optimal user experience. My focus and dedication ensure that I
              always aim to achieve the best possible results for every project
              I work on.
            </p>
            <button className="bg-transparent bg-white w-64 border p-4 shadow-xl rounded-3xl hover:cursor-pointer hover:w-96 transistion duration-300 ease-in-out mt-8">
              View Resume
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="mt-24 flex justify-center text-5xl text-black">
          I work with...
        </h3>
        <div className="scroll-container h-56 flex justify-center items-center">
          <div className="scroll-content space-x-8">
            <div className="h-40 w-40 rounded-full flex items-center justify-center skills">
              <Image
                src={reactImg}
                layout="responsive"
                objectFit="cover"
                alt="react logo"
                className="border rounded-xl mt-6"
              />
            </div>
            <div className=" rounded-full flex items-center justify-center skills">
              <Image
                src={nextImg}
                layout="responsive"
                objectFit="cover"
                alt="next logo"
                className="border rounded-xl mt-6"
              />
            </div>
            <div className=" rounded-full flex items-center justify-center skills">
              <Image
                src={mysqlImg}
                layout="responsive"
                objectFit="cover"
                alt="mysql logo"
                className="border rounded-xl mt-6"
              />
            </div>
            <div className=" rounded-full flex items-center justify-center skills">
              <Image
                src={htmlImg}
                layout="responsive"
                objectFit="cover"
                alt="html logo"
                className="border rounded-xl mt-6"
              />
            </div>
            <div className="skills">
              <Image
                src={cssImg}
                layout="responsive"
                objectFit="cover"
                alt="css logo"
                className="border rounded-xl mt-6"
              />
            </div>

            <div className=" rounded-full flex items-center justify-center skills">
              <Image
                src={javascriptImg}
                layout="responsive"
                objectFit="cover"
                alt="javascript logo"
                className="border rounded-xl mt-6"
              />
            </div>
            <div className=" rounded-full flex items-center justify-center skills">
              <Image
                src={awsImg}
                layout="responsive"
                objectFit="cover"
                alt="aws logo"
                className="border rounded-xl mt-6"
              />
            </div>
            <div className=" rounded-full flex items-center justify-center skills">
              <Image
                src={dockerImg}
                layout="responsive"
                objectFit="cover"
                alt="docker logo"
                className="border rounded-xl mt-6"
              />
            </div>
            <div className=" rounded-full flex items-center justify-center skills">
              <Image
                src={tailwindImg}
                layout="responsive"
                objectFit="cover"
                alt="tailwind logo"
                className="border rounded-xl mt-6"
              />
            </div>
            <div className=" rounded-full flex items-center justify-center skills">
              <Image
                src={nodeImg}
                layout="responsive"
                objectFit="cover"
                alt="node logo"
                className="border rounded-xl mt-6"
              />
            </div>
          </div>
        </div>
      </div>
      <h3 className="flex justify-center text-5xl pt-12 text-black">
        My projects
      </h3>
      <ProjectSectionList />
      <Footer />
    </main>
  );
}
