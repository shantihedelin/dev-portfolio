import headshotImg from "../public/headshot.jpg";
import Image from "next/image";
import ProjectSectionList from "@/components/HeroSection";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="text-white">
      <Nav />
      <div className="m-12 flex md:m-8">
        <div className="flex items-center  flex-col md:flex-row md:m-4 md:space-x-8">
          <div className="relative h-96 my-4 w-full">
            <Image
              src={headshotImg}
              layout="responsive"
              objectFit="conver"
              alt="Headshot of Shanti Hedelin"
            />
          </div>
          <div className="flex justify-center flex-col items-center mb-2 md:text-center md:space-y-12">
            <h2 className="text-4xl m-0">
              Hello, my name is Shanti Hedelin, i'm a{" "}
              <span className="fullstack">fullstack developer</span>
            </h2>
            <p>
              Jag är en passionerad fullstack developer som bygger hemsidor och
              strävar efter att skriva enkel och smart kod med hög säkerhet. Jag
              är bra på att jobba i team och vill alltid uppnå bästa möjliga
              resultat och lägger gärna lite extra tid på detaljer för att det
              ska bli en så bra användarupplevelse som möjligt för användarna.
            </p>
            <button className="bg-transparent bg-white w-64 border p-4 shadow-xl rounded-3xl hover:cursor-pointer hover:w-96 transistion duration-300 ease-in-out mt-8">
              View Resume
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="mt-24 flex justify-center text-5xl">I work with...</h3>
        <div className="scroll-container">
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
      <h3 className="flex justify-center text-5xl pt-12">Projects</h3>
      <ProjectSectionList />
      <Footer />
    </main>
  );
}
