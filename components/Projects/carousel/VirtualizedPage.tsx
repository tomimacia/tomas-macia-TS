import {
  animate,
  motion,
  MotionStyle,
  PanInfo,
  useMotionValue,
} from 'framer-motion';
import { Page } from './Page';
import { Box, Flex, Heading, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useEffect, useRef, useState } from 'react';
import TitleAndButtons from './TitleAndButtons';
const range = [-1, 0, 1];

interface VirtualizedPageProps {
  children: (props: { index: number }) => JSX.Element;
  title: string;
}

const containerStyle: MotionStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
};

const transition: any = {
  type: 'spring',
  bounce: 0,
};

export const VirtualizedPage: React.FunctionComponent<VirtualizedPageProps> = ({
  children,
  title,
}) => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 5000); // Cambia 5000 por el tiempo deseado en milisegundos
    return () => clearInterval(interval);
  }, []);
  const calculateNewX = () => -index * (containerRef.current?.clientWidth || 0);

  const handleEndDrag = (e: Event, dragProps: PanInfo) => {
    const clientWidth = containerRef.current?.clientWidth || 0;

    const { offset, velocity } = dragProps;

    if (Math.abs(velocity.y) > Math.abs(velocity.x)) {
      animate(x, calculateNewX(), transition);
      return;
    }

    if (offset.x > clientWidth / 4) {
      setIndex(index - 1);
    } else if (offset.x < -clientWidth / 4) {
      setIndex(index + 1);
    } else {
      animate(x, calculateNewX(), transition);
    }
  };

  useEffect(() => {
    const controls = animate(x, calculateNewX(), transition);
    return controls.stop;
  }, [index]);
  const nextSlide = () => {
    setIndex(index + 1); // Aumentamos el índice para ir a la siguiente página
  };

  const prevSlide = () => {
    setIndex(index - 1); // Disminuimos el índice para ir a la página anterior
  };
  return (
    <motion.div ref={containerRef} style={containerStyle}>
      <TitleAndButtons
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        title={title}
      />
      {range.map((rangeValue) => {
        return (
          <Page
            key={rangeValue + index}
            x={x}
            onDragEnd={handleEndDrag}
            index={rangeValue + index}
            renderPage={children}
          />
        );
      })}
    </motion.div>
  );
};

VirtualizedPage.displayName = 'VirtualizedPage';
