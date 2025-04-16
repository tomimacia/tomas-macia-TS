import { useLanguage } from '@/context/languageContext';
import useGetFont from '@/hooks/useGetFont';
import { Flex, Heading, Link, Text } from '@chakra-ui/react';

type WorkCardType = {
  title: string;
  subTitle: string;

  href: string;
};

const MinimalWorkCard = ({ title, subTitle, href }: WorkCardType) => {
  const { font } = useGetFont();
  const language = useLanguage();
  const linkText = {
    Español: 'Ver',
    English: 'Visit',
  };
  return (
    <Flex
      borderRadius='10px'
      gap={3}
      align='flex-start'
      cursor='pointer'
      justify='space-between'
      maxW='500px'
    >
      <Flex align='center' gap={1} justify='space-around'>
        <Heading fontFamily={font} as='h3' fontSize='lg'>
          {title}
        </Heading>{' '}
        -<Text>{subTitle}</Text>
      </Flex>

      <Link target='blank' rel='noreferrer nofollow noopener' href={href}>
        {linkText[language]}
      </Link>
    </Flex>
  );
};

export default MinimalWorkCard;
