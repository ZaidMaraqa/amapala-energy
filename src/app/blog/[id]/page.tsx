"use client";

import "@fontsource/lexend";

import {
  Badge,
  Flex,
  Heading,
  IconButton,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";

import { ArrowBackIcon } from "@chakra-ui/icons";
import BlogList from "@/components/blogs/blogsList";
import BlogNewsLetter from "@/components/blogs/blogNewsLetter";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import React from "react";
import Flag from "react-world-flags";
import { formatDate, getCountryBackgroundColor, splitContentIntoParagraphs } from "@/utils";
import { useRouter } from "next/navigation";
import useGetBlog from "@/hooks/getBlog";
import LinkedInSection from "@/components/linkedinSection";

const BlogOverview = ({ params }: { params: { id: string } }) => {
  const id = params.id
  const { data, isLoading, error } = useGetBlog(id)
  const router = useRouter()

  if (isLoading) return <Flex h={'100vh'} w={'100vw'} justifyContent={'center'} alignItems={'center'}><Spinner thickness='0.25rem' speed='0.55s' emptyColor='gray.200' color='primeBlue' size='xl' /></Flex>;
  if (error) return <div>Failed to load data</div>;

  const paragraphs = splitContentIntoParagraphs(data.content, 3);

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
          <Flex direction={['column', 'column', 'row', 'row']} gap={'1rem'}>
            <Image src={data.image} w={'21.875rem'} alt="blog related pic" borderRadius={'.5rem'} />
            <Flex direction={'column'} gap={'1rem'} px={['0rem', '.5rem', '1rem', '1rem']} justifyContent={'space-between'}>
              <Flex direction={'row'} alignItems={'center'} gap={'.5rem'} mt={'1rem'}>
                <Badge bg={'primeBlue'} p={'.5rem'} borderRadius={'.25rem'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  <Text fontWeight={600} fontSize={['.75rem', '1rem', '1rem', '1rem']} color={'white'}>{data.category}</Text>
                </Badge>
                <Flex alignItems={'center'} gap={'.5rem'} bg={getCountryBackgroundColor(data.country_code)} p={'.45rem'} borderRadius={'.25rem'}>
                    <Flag code={data.country_code} style={{ width: "24px", height: "16px" }} alt={`${data.country} flag`} />
                    <Text fontWeight={600} fontSize={['.75rem', '1rem', '1rem', '1rem']} color={'white'}>{data.country}</Text>
                  </Flex>
                <Text fontSize={['.75rem', '1.25rem', '1.25rem', '1.25rem']} fontWeight={600}>{data.readingTime} min read</Text>
              </Flex>
              <Heading fontWeight={600} fontSize={['2.375rem', '4.375rem', '4.375rem', '4.375rem']} >{data.title}</Heading>
              <Text fontWeight={600} fontSize={'1rem'} color={'#696D70'} mb={'1rem'}>{formatDate(data.date)}</Text>
            </Flex>
          </Flex>
        </Flex>
        {paragraphs.map((paragraph, index) => (
          <Text key={index} mb={'2rem'} fontFamily="'Lexend', sans-serif" fontWeight={500} fontSize={'1.25rem'} color={'#696D70'} px={'2rem'}>
            {paragraph}
          </Text>
        ))}
        <Flex direction={'column'} gap={'1em'} p={'2rem'} borderTop={'1px solid #8A9BA8'}>
        <BlogNewsLetter />
        <LinkedInSection black={true} />
        </Flex>
        <BlogList isSpecficBlog={true} />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default BlogOverview;
