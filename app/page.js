"use client";

//TODO: fixa bugg när man skiftar mellan mobilvy och desktop så slutar dom åka

import headshotImg from "../public/headshot.jpg";
import Image from "next/image";
import ProjectSectionList from "@/components/HeroSection";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useEffect } from "react";

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
        <div className="flex items-center  flex-col md:flex-row md:m-4 md:space-x-8">
          <div className="relative h-96 my-4 w-full">
            <Image
              src={headshotImg}
              layout="responsive"
              objectFit="conver"
              alt="Headshot of Shanti Hedelin"
            />
          </div>
          <div className="flex justify-center flex-col items-center mb-2 md:text-center md:space-y-12 bg-purple-500 p-8 rounded-xl shadow-2xl bg-opacity-40">
            <h2 className="text-5xl m-0">
              Hello, my name is Shanti Hedelin, i'm a{" "}
              <span className="fullstack">frontend developer</span>
            </h2>
            <p className="pt-20">
              Welcome to my page. I am a dedicated frontend developer with
              significant experience in building high-performance and secure
              websites, and I also have strong backend development skills. I
              work well in teams and strive to deliver smart and intuitive code.
              I'm detail-oriented and prioritize creating an optimal user
              experience. My focus and dedication ensure that I always aim to
              achieve the best possible results for every project I work on.
            </p>
            <button className="bg-transparent bg-white w-64 border p-4 shadow-xl rounded-3xl hover:cursor-pointer hover:w-96 transistion duration-300 ease-in-out mt-8">
              View Resume
            </button>
          </div>
        </div>
      </div>

      <div className="m-12 flex md:hidden">
        <div className="flex items-center  flex-col md:flex-row md:m-4 md:space-x-8">
          <div className="flex justify-center flex-col items-center mb-2 md:text-center md:space-y-12">
            <h2 className="text-5xl m-0">
              Hello, my name is Shanti Hedelin, i'm a{" "}
              <span className="fullstack">frontend developer</span>
            </h2>{" "}
            <div className="relative h-96 my-4 w-full">
              <Image
                src={headshotImg}
                layout="responsive"
                objectFit="conver"
                alt="Headshot of Shanti Hedelin"
                className="border rounded-xl mt-6"
              />
            </div>
            <p className="pt-8">
              Welcome to my page. I am a dedicated frontend developer with
              significant experience in building high-performance and secure
              websites, and I also have strong backend development skills. I
              work well in teams and strive to deliver smart and intuitive code.
              I'm detail-oriented and prioritize creating an optimal user
              experience. My focus and dedication ensure that I always aim to
              achieve the best possible results for every project I work on.
            </p>
            <button className="bg-transparent bg-white w-64 border p-4 shadow-xl rounded-3xl hover:cursor-pointer hover:w-96 transistion duration-300 ease-in-out mt-8">
              View Resume
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="mt-24 flex justify-center text-5xl text-[#ea1179">
          I work with...
        </h3>
        <div className="scroll-container h-56 flex justify-center items-center">
          <div className="scroll-content space-x-8">
            <div className="h-40 w-40 rounded-full flex items-center justify-center skills">
              React
            </div>
            <div className="h-40 w-40 rounded-full flex items-center justify-center skills">
              Next.js
            </div>
            <div className="h-40 w-40 rounded-full flex items-center justify-center skills">
              MySQL
            </div>
            <div className="h-40 w-40 rounded-full flex items-center justify-center skills">
              HTML
            </div>
            <div className="skills">CSS</div>
            <div className="h-40 w-40 rounded-full flex items-center justify-center skills">
              Javascript
            </div>
            <div className="h-40 w-40 rounded-full flex items-center justify-center skills">
              AWS
            </div>
            <div className="h-40 w-40 rounded-full flex items-center justify-center skills">
              Docker
            </div>
            <div className="h-40 w-40 rounded-full flex items-center justify-center skills">
              Tailwind
            </div>
            <div className="h-40 w-40 rounded-full flex items-center justify-center skills">
              Express.js
            </div>
            <div className="h-40 w-40 rounded-full flex items-center justify-center skills">
              Node js
            </div>
          </div>
        </div>
      </div>
      <h3 className="flex justify-center text-5xl pt-12">Projects</h3>
      <ProjectSectionList />
      <Footer />
    </main>
  );
}
