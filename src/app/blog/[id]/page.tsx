"use client";

import "@fontsource/lexend";

import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import config, { PAGES } from "@/config";

import { ArrowBackIcon } from "@chakra-ui/icons";
import BlogList from "@/components/blogs/blogsList";
import BlogNewsLetter from "@/components/blogs/blogNewsLetter";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import React from "react";
import { formatDate } from "@/utils";
import { useRouter } from "next/navigation";
import useGetBlog from "@/hooks/getBlog";

const BlogOverview = ({ params }: { params: { id: string } }) => {
  const id = params.id
  const { data, isLoading, error } = useGetBlog(id)
  const router = useRouter()


  if (isLoading) return <Flex h={'100vh'} w={'100vw'} justifyContent={'center'} alignItems={'center'}><Spinner thickness='0.25rem' speed='0.55s' emptyColor='gray.200' color='primeBlue' size='xl' /></Flex>;
  if (error) return <div>Failed to load data</div>;

  return (
    <Flex direction={'column'} h={'100vh'}>
      <NavBar />
      <Flex flex={1} direction={'column'}>
        {/* Go Back Button */}
        <Flex direction={'column'} align={'start'} p={'2rem'} gap={'1rem'}>
        <Flex alignItems={"center"} _hover={{ opacity:.7 }}>
          <IconButton
            icon={<ArrowBackIcon />}
            aria-label="Go Back"
            _hover={'none'}
            variant="ghost"
            fontSize="1.5rem"
            onClick={() => router.back()}
          />
          <Text fontFamily="'Lexend', sans-serif" fontSize={"1.25rem"} fontWeight={500} cursor={"pointer"} onClick={() => router.back()}>
            Back
          </Text>
        </Flex>
          <Flex direction={'row'} gap={'1rem'}>
            <Image src={`${config.apiUrl}${data.image}`} w={'350px'} alt="blog related pic" borderRadius={'.5rem'} />
            <Flex direction={'column'} gap={'1rem'} px={'1rem'} justifyContent={'space-between'}>
              <Flex direction={'row'} alignItems={'center'} gap={'.5rem'} mt={'1rem'}>
                <Badge bg={'#00842A'} p={'.5rem'} borderRadius={'.25rem'}>
                  <Text fontWeight={600} fontSize={'1rem'} color={'white'}>{data.category}</Text>
                </Badge>
                <Badge bg={'primeBlue'} p={'.5rem'} borderRadius={'.25rem'}>
                  <Text fontWeight={600} fontSize={'1rem'} color={'white'}>{'PANAMA'}</Text>
                </Badge>
                <Text fontSize={'20px'} fontWeight={600}>{data.readingTime} min read</Text>
              </Flex>
              <Heading fontWeight={600} fontSize={'4.375rem'} >{data.title}</Heading>
              <Text fontWeight={600} fontSize={'1rem'} color={'#696D70'} mb={'1rem'}>{formatDate(data.date)}</Text>
            </Flex>
          </Flex>
        </Flex>

        <Text mb={'2rem'} fontFamily="'Lexend', sans-serif" fontWeight={500} fontSize={'1.25rem'} color={'#696D70'} px={'2rem'}>{data.content}</Text>
        <Box py={'3rem'} borderTop={'1px solid #8A9BA8'}>
        <BlogNewsLetter />
        </Box>
        <BlogList isSpecficBlog={true} />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default BlogOverview;
