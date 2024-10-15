import Image from "next/image";
import RadioPlayerImg from "../public/ProjRadioPlayer.png";
import mockupLudi from "../public/mockup-ludi.jpg";
import mockupWeatherApp from "../public/mockup-weather-app.jpg";

const ProjectSectionList = () => {
  const projects = [
    {
      title: "Ludi App",
      description:
        "This Movie Recommendation Website uses React, Node.js, and MySQL to offer personalized film suggestions via TMDB and OpenAI APIs. Users create accounts, set preferences, and receive weekly AI-driven recommendations. I served as Scrum Master and developer, and the project won first prize in a school competition. ",
      liveLink: "https://ludi-app.com/",
      Github: "https://github.com/axelcfk/chas-challenge2",
      image: mockupLudi,
    },
    {
      title: "Weather App",
      description:
        "Weather app created with React. Search for current weather information in different citites and see 5-day forecast.",
      liveLink: "https://weather-app-mocha-two-41.vercel.app/",
      Github: "https://github.com/shantihedelin/weather-app",
      image: mockupWeatherApp,
    },
    {
      title: "Swedish Radio Players",
      description: "School project where we fetch swedish radio players api.",
      liveLink: "https://react-radioplayer.vercel.app/",
      Github: "https://github.com/shantihedelin/ReactRadioplayer",
      image: RadioPlayerImg,
    },
  ];

  const ProjectCard = ({ title, description, liveLink, Github, image }) => (
    <div className=" bg-white border-solid border-2 shadow-lg rounded-lg overflow-hidden m-8 flex flex-col justify-center items-center lg:mx-72 lg:h-80 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          <Image
            src={image}
            alt={title}
            height="350"
            className="rounded-t-lg w-full flex justify-center items-center object-contain"
          />
        </div>
        <div>
          <div className="px-6 py-4">
            <h3 className="text-2xl font-semibold mb-2 flex justify-center text-black">
              {title}
            </h3>
            <p className=" text-gray-800 text-base flex justify-center">
              {description}
            </p>
          </div>
          <div className="px-6 py-4 flex justify-center">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 no-underline font-semibold hover:underline mr-4"
              >
                Live Site
              </a>
            )}
            {Github && (
              <a
                href={Github}
                target="_blank"
                rel="noopener noreferrer"
                className="	
                text-blue-700 no-underline font-semibold hover:underline"
              >
                Code Repository
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return projects.map((project, index) => (
    <ProjectCard
      key={index}
      title={project.title}
      description={project.description}
      liveLink={project.liveLink}
      Github={project.Github}
      image={project.image}
    />
  ));
};

export default ProjectSectionList;
