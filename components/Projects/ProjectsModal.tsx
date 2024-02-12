import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import Carousel from './carousel/Carousel';
import { ModalFooterButtons } from './ModalFooterButtons';
import { ProjectsModalType } from '@/types/ProjectsTypes';

export const ProjectsModal = ({
  isOpen,
  imgs,
  onClose,
  project,
}: ProjectsModalType) => {
  return (
    <Modal
      size={['xl', '2xl', '3xl', '3xl']}
      isCentered
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton zIndex={10} bg='blackAlpha.600' />
        <ModalBody>
          <ModalBody>
            <Carousel title={project.title} images={imgs.map((i) => i.src)} />
            <Text py={3}>{project.description}</Text>
          </ModalBody>
        </ModalBody>

        <ModalFooterButtons project={project} />
      </ModalContent>
    </Modal>
  );
};
