import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import { ProjectCardImg } from './ProjectCardImg';
import { ProjectsModal } from './ProjectsModal';
import { ProjectsCardType } from '@/types/ProjectsTypes';
import useGetFont from '@/hooks/useGetFont';

const ProjectsCard = ({ img, modalImages, project }: ProjectsCardType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { font } = useGetFont();
  return (
    <Box w='60%'>
      <Heading
        fontFamily={font}
        p={5}
        w='100%'
        alignSelf='center'
        as='h3'
        size='md'
      >
        {project.title}
      </Heading>
      <Flex>
        <Box>
          <ProjectCardImg
            tecs={project.tecs}
            src={img}
            alt={project.alt}
            onOpen={onOpen}
          />
          <ProjectsModal
            imgs={modalImages}
            isOpen={isOpen}
            project={project}
            onClose={onClose}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProjectsCard;
