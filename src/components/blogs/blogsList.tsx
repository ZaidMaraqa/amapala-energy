'use client';

import { SimpleGrid, Flex, Spinner } from "@chakra-ui/react";
import getBlogs from "@/hooks/getAllBlogs";
import ServiceCard from "../home/serviceCard";
import { useState } from "react";
import Paginator from "../paginator";

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, error, isLoading } = getBlogs(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };


  if (isLoading) return <Flex h={'10rem'} justifyContent={'center'} alignItems={'center'}><Spinner thickness='0.25rem' speed='0.55s' emptyColor='gray.200' color='primeBlue' size='xl' /></Flex>;
  if (error) return <div>Failed to load data</div>;

  return (
    <>
    <SimpleGrid columns={[1,1,2,3, 4]} spacing={10} mt={'1rem'}>
      {data.map((blog: any, index: number) => (
        <ServiceCard
          key={index}
          imageUrl={blog.image}
          category={blog.category}
          readTime={blog.readTime}
          title={blog.title}
          description={blog.description}
          blog={true}
        />
      ))}
    </SimpleGrid>
    <Flex justifyContent="center" mt="2rem" >
    <Paginator
      currentPage={currentPage}
      totalPages={2}
      onPageChange={handlePageChange}
    />
  </Flex>
  </>
  );
};

export default BlogList;
