import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import Carousel from "./Carousel";
import { ModalFooterButtons } from "./ModalFooterButtons";
import { ProjectsModalType } from "@/types/ProjectsTypes";

export const ProjectsModal = ({
  isOpen,
  imgs,
  onClose,
  project,
}: ProjectsModalType) => {
  return (
    <Modal
      size={["xl", "2xl", "3xl", "3xl"]}
      isCentered
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton zIndex={10} bg="blackAlpha.600" />
        <ModalBody>
          <Carousel imgs={imgs} />

          <Heading pt={3} pb={3} fontSize="3xl">
            {project.title}
          </Heading>
          <Text>{project.description}</Text>
        </ModalBody>

        <ModalFooterButtons project={project} />
      </ModalContent>
    </Modal>
  );
};
