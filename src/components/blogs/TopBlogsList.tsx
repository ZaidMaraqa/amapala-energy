'use client'

import { Box, Divider, Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import TopBlogCard, { BlogCardProps } from "./TopBlogCard";

import useGetTopBlogs from "@/hooks/getTopBlogs";

const BlogList = () => {
  const { data, error, isLoading } = useGetTopBlogs();

  if (isLoading) return <Flex h={'10rem'} justifyContent={'center'} alignItems={'center'}><Spinner thickness='0.25rem' speed='0.55s' emptyColor='gray.200' color='primeBlue' size='xl' /></Flex>;
  if (error) return <div>Failed to load data</div>;

  return (
    <SimpleGrid columns={1} spacing={10}>
      {data.slice(0, 2).map((blog: BlogCardProps, index: number) => (
        <Box key={index}>
          <TopBlogCard
            image={blog.image}
            category={blog.category}
            readTime={blog.readTime}
            title={blog.title}
            description={blog.description}
            country={blog.country}
            country_code={blog.country_code}
            article_type={blog.article_type}
            _id={blog._id}
          />
          <Divider borderColor="#8A9BA8" borderWidth=".0625rem" my={5} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default BlogList;
