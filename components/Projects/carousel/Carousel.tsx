import { Box, Flex, Image } from '@chakra-ui/react';
import { VirtualizedPage } from './VirtualizedPage';

export default function Carousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <Flex justifyContent='center'>
      <Flex w='100%' h={[200, 300, 400, 500]}>
        <VirtualizedPage title={title}>
          {({ index }) => {
            const modulo = index % images.length;
            const imageIndex = modulo < 0 ? images.length + modulo : modulo;
            return (
              <Image
                cursor='grab'
                draggable={false}
                alt='Mountain'
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                src={images[imageIndex]}
              />
            );
          }}
        </VirtualizedPage>
      </Flex>
    </Flex>
  );
}

{/* <ModalBody>
  <Carousel title={project.title} images={imgs.map((i) => i.src)} />
  <Text py={3}>{project.description}</Text>
</ModalBody>; */}
