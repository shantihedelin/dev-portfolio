import Image from "next/image";
import RadioPlayerImg from "../public/ProjRadioPlayer.png";
import ToDoImg from "../public/ProjToDo.png";

const ProjectSectionList = () => {
  const projects = [
    {
      title: "Swedish Radio Players",
      description: "Here is my description of the project",
      liveLink: "https://react-radioplayer.vercel.app/",
      Github: "https://github.com/shantihedelin/ReactRadioplayer",
      image: RadioPlayerImg
    },
    {      
      image: ToDoImg,
      title: "Digital To Do List",
      description: "Here is my description of the project",
      liveLink: "https://todo-list-workshop.vercel.app/",
      Github: "https://github.com/shantihedelin/TodoListWorkshop",

    },
  ];

  const ProjectCard = ({ title, description, liveLink, Github, image }) => (
    <div className=" bg-white border-solid border-2 shadow-lg rounded-lg overflow-hidden m-8 flex flex-col justify-center items-center lg:mx-72 lg:h-80 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="w-full">
          <Image
            src={image}
            alt={title}
            height="200"
            className="rounded-t-lg w-full flex justify-center items-center"
          />
        </div>
        <div>
          <div className="px-6 py-4">
            <h3 className="text-2xl font-semibold mb-2 flex justify-center">
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
      image = {project.image}
    />
  ));
};

export default ProjectSectionList;
