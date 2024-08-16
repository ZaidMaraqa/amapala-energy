"use client";

import "@fontsource/lexend";

import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";

import BlogList from "@/components/blogs/blogsList";
import BlogNewsLetter from "@/components/blogs/blogNewsLetter";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import React from "react";
import { formatDate } from "@/utils";
import getBlog from "@/hooks/getBlog";

const BlogOverview = ({ params }: { params: { id: string } }) => {
  const id = params.id
  const { data, isLoading, error } = getBlog(id)

  console.log(data)

  if (isLoading) return <Flex h={'100vh'} w={'100vw'} justifyContent={'center'} alignItems={'center'}><Spinner thickness='0.25rem' speed='0.55s' emptyColor='gray.200' color='primeBlue' size='xl' /></Flex>;
  if (error) return <div>Failed to load data</div>;

  return (
    <Flex direction={'column'} h={'100vh'}>
      <NavBar />
      <Flex flex={1} direction={'column'} gap={'2rem'}>
          <Flex direction={'row'} p={'2rem'}>
            <Image src={data.image}  w={'350px'} h={'350px'} alt="blog related pic" borderRadius={'.5rem'} />
            <Flex direction={'column'} gap={'1rem'} px={'1rem'} py={'.5rem'} justifyContent={'space-between'}>
              <Flex direction={'row'} alignItems={'center'} gap={'.5rem'} mt={'1rem'}>
                <Box bg={'#00842A'} p={'.5rem'} borderRadius={'.25rem'}>
                  <Text fontWeight={600} fontSize={'1rem'} color={'white'}>{data.category}</Text>
                </Box>
                <Text fontSize={'20px'} fontWeight={600}>{data.readingTime} min read</Text>
              </Flex>
              <Heading fontWeight={600} fontSize={'4.375rem'} >{data.title}</Heading>
              <Text fontWeight={600} fontSize={'1rem'} color={'#696D70'} mb={'1rem'}>{formatDate(data.date)}</Text>
            </Flex>
          </Flex>
          <Text fontFamily="'Lexend', sans-serif" fontWeight={500} fontSize={'1.25rem'} color={'#696D70'} px={'2rem'}>{data.content}</Text>
          <BlogList isSpecficBlog={true} />
          <Box p={'2rem'}>
            <Divider colorScheme={'blue'} orientation="horizontal" size={'lg'} />
          <BlogNewsLetter />
          </Box>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default BlogOverview;
