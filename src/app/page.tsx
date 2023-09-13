import Image from "next/image";
import FrameWorkCard from "./components/FrameWorkCard";
import { projects } from "./utils/projectsData";
import { projectIcons } from "./components/IconsList";
import { ProjectsType } from "@/types";

// display: grid;
// grid-template-columns: repeat(3, 346px);
// grid-template-rows: repeat(2, 256);
// grid-gap: 50px;

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl mb-11 mt-24">
        What Can I Deploy to Static Apps?
      </h1>
      <div className="grid grid-cols-3 gap-12 grid-rows-2">
        {projects.map((project: ProjectsType) => {
          const Icon = projectIcons[project.id];
          return (
            <FrameWorkCard
              key={project.id}
              Icon={Icon}
              title={project.name}
              slug={project.slug}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Home;
