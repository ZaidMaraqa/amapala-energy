import {
  Box,
  Heading,
  Text,
  Flex
} from "@chakra-ui/react";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import dynamic from 'next/dynamic';
import "@fontsource/lexend";

import BlogNewsLetter from "@/components/blogs/blogNewsLetter";

const TopBlogList = dynamic(() => import('@/components/blogs/TopBlogsList'), { ssr: false });
const BlogList = dynamic(() => import('@/components/blogs/blogsList'), { ssr: false });

const Blogs = () => {
  return (
    <>
      <NavBar bg="#F2F2F2" />
      <Flex bg="#F2F2F2" direction={'column'} my={'3rem'} p={'3rem'} gap={'2rem'}>
        <Heading fontSize={'4.625rem'} fontWeight={600}>Trending Topics</Heading>
        <Box p={'1rem'}>
          <TopBlogList />
          <BlogNewsLetter />
        </Box>
      </Flex>
      <Box bg="primeGray" py={'5rem'} px={'3rem'}>
        <Text fontFamily="'Lexend', sans-serif" fontSize={'1.5rem'} fontWeight={500} color={'#202122'}>
          Blogs
        </Text>
        <Text color={'primeBlue'} fontWeight={600} fontSize={['1.375rem', '2.775rem', '3.575rem', '4.375rem', '5.375rem']}>
          Discover <Text as={'span'} color={'black'}>The</Text> <br />
          <Text as={'span'} color={'black'}>Latest</Text> Insights
        </Text>
        <BlogList />
      </Box>
      <Footer />
    </>
  );
};

export default Blogs;
