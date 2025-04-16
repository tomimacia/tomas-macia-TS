import { useWebType } from '@/context/webTypeContext';
import { useEffect, useState } from 'react';

const useGetFont = () => {
  const webType = useWebType();
  const fonts = {
    Modern: 'montserrat',
    Minimalist: 'mono',
  };
  const [font, setFont] = useState(fonts[webType]);
  useEffect(() => {
    setFont(fonts[webType]);
  }, [webType]);
  return { font };
};

export default useGetFont;
