"use client";

import Link from "next/link";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <>
      <nav className="w-full flex justify-between items-center h-20 mb-12 text-black">
        <h3 className="text-2xl font-bold ml-4 text-black">Shanti Hedelin</h3>



        <div className="hidden md:flex space-x-2 text-black">
          <Link className="link text-lg px-4" href={"/"}>Home</Link>
          <Link className="link text-lg px-4" href={""}>Resume</Link>
          <Link className="link text-lg px-4" href={""}>Contact</Link>
        </div>
{/* 
        <button className="bg-transparent border-none">
          <FontAwesomeIcon className="cursor-pointer text-white md:hidden" icon={faBars} size="xl" />
        </button> */}

      </nav>
    </>
  );
}

export default Nav;
