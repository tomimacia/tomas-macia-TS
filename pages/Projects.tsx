import { FullProjectType, ProjectsDataType } from "@/types/ProjectsTypes";
import Layout from "../components/Layouts/Article";
import ProjectsCard from "../components/Projects/ProjectsCard";
import { MainImages, ModalImages } from "../data/ProjectImages";
import ProjectsJson from "../data/Projects.json";
import useJsonData from "../hooks/useJsonData";

const Projects = () => {
  const data: ProjectsDataType = useJsonData(ProjectsJson);

  return (
    <Layout headTitle="Projects" pageTitle={data.Title}>
      {data.ProjectCardsData?.map((project: FullProjectType, i: number) => {
        return (
          <ProjectsCard          
            key={project.alt}
            img={MainImages[i].src}
            modalImages={ModalImages[i]}
            project={project}
          />
        );
      })}
    </Layout>
  );
};

export default Projects;
