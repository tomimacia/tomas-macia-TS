import { FullProjectType, ProjectsDataType } from '@/types/ProjectsTypes';
import Layout from '../components/Layouts/Article';
import ProjectsCard from '../components/Projects/ProjectsCard';
import { MainImages, ModalImages } from '../data/ProjectImages';
import ProjectsJson from '../data/Projects.json';
import useJsonData from '../hooks/useJsonData';
import { motion } from 'framer-motion';
import { Flex } from '@chakra-ui/react';
const Projects = () => {
  const data: ProjectsDataType = useJsonData(ProjectsJson);

  return (
    <Layout headTitle='Projects' pageTitle={data.Title}>
      <Flex key={data.Title} flexDir='column'>
        {data.ProjectCardsData?.map((project: FullProjectType, i: number) => {
          return (
            <motion.div
              key={project.alt}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: i * 0.5 }}
            >
              <ProjectsCard
                img={MainImages[i].src}
                modalImages={ModalImages[i]}
                project={project}
              />
            </motion.div>
          );
        })}
      </Flex>
    </Layout>
  );
};

export default Projects;
