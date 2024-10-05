'use client'
import React from "react";
import { Flex } from "@chakra-ui/react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import BlogList from "@/components/blogs/blogsList";
import BlogNewsLetter from "@/components/blogs/blogNewsLetter";
import { splitContentIntoParagraphs } from "@/utils";
import useGetBlog from "@/hooks/getBlog";
import LoadingSpinner from "@/components/article/loadingSpinner";
import BackButton from "@/components/article/backButton";
import BlogHeader from "@/components/article/blogHeader";
import BlogContent from "@/components/article/blogContent";

const BlogOverview = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const { data, isLoading, error } = useGetBlog(id);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Failed to load data</div>;

  const paragraphs = splitContentIntoParagraphs(data.content, 3);

  return (
    <Flex direction={"column"} h={"100vh"}>
      <NavBar />
      <Flex flex={1} direction={"column"}>
        <Flex direction={"column"} align={"start"} p={"2rem"} gap={"1rem"}>
          <BackButton />
          <BlogHeader data={data} />
        </Flex>
        <BlogContent paragraphs={paragraphs} />
        <Flex direction={"column"} gap={"1rem"} p={"2rem"} borderTop={"1px solid #8A9BA8"}>
          <BlogNewsLetter />
        </Flex>
        <BlogList isSpecficBlog={true} />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default BlogOverview;
