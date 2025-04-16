import { IndexDataType } from '@/types/Datatype';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Layout from '../components/Layouts/Article';
import IndexData from '../data/Index.json';
import useJsonData from '../hooks/useJsonData';
import DescriptionProfile from '../public/images/ProfileImages/DescriptionProfile.png';
import useGetFont from '@/hooks/useGetFont';
export default function Home() {
  const { font } = useGetFont();
  const data: IndexDataType = useJsonData(IndexData);
  const edad =
    new Date().getFullYear() -
    1994 -
    (new Date().getMonth() < 8 ||
    (new Date().getMonth() === 8 && new Date().getDate() < 15)
      ? 1
      : 0);
  return (
    <Layout pageTitle={data?.Heading} headTitle='Portfolio'>
      <Flex mt={4} p={2} borderRadius='3%' flexDir='column'>
        <Box>
          <Image
            p={1}
            borderRadius='5%'
            display='block'
            float='right'
            alt='Tomás-Macía-profile'
            h={['200px', '250px', '300px', '350px']}
            maxH={['200px', '300px', '350px', '400px']}
            src={DescriptionProfile.src}
          />
          <Text
            fontFamily={font}
            p={1}
            borderRadius='5px'
            fontSize={['sm', 'md', 'md', 'lg']}
          >
            {data.Description?.map((line, i) => {
              return (
                <span key={'Line' + i}>
                  {line.replace('--AGE--', edad + '')}
                  <br />
                </span>
              );
            })}
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
}
