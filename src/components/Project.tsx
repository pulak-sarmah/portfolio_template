import { Card } from "flowbite-react";
import { useInView } from "react-intersection-observer";
import { projects } from "../constants/project";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <section id="projects" className="py-16">
      <div
        ref={ref}
        className={`container mx-auto ${
          inView ? "animate__animated animate__zoomIn" : "opacity-0"
        }`}
      >
        <h2 className="mb-8 text-3xl font-bold text-center text_text_dark ">
          Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="relative w-full max-w-xs overflow-hidden transition-transform border-none cursor-pointer sm:max-w-lg md:max-w-2xl lg:max-w-md xl:max-w-xl 2xl:max-w-2xl bg-light dark:bg-light transform-gpu hover:scale-105 "
              imgAlt="project images"
              imgSrc={project.imgSrc}
            >
              <div className="p-4">
                <h5 className="text-2xl font-bold tracking-tight text_text_dark">
                  {project.title}
                </h5>
                <p className="pb-6 font-normal text-gray-700">
                  {project.description}
                </p>
                <a href={project.link}>
                  <button className="hover:underline">
                    View Project &rarr;
                  </button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
