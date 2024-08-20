'use client'

import { Flex, SimpleGrid, Spinner } from "@chakra-ui/react";

import { BlogCardProps } from "@/components/blogs/TopBlogCard";
import ServiceCard from "../serviceCard";
import getTopBlogs from "@/hooks/getTopBlogs";

const NewsGrid = () => {
    const { data, error, isLoading } = getTopBlogs();

    console.log(data)

    if (isLoading) return <Flex h={'10rem'} justifyContent={'center'} alignItems={'center'}><Spinner thickness='0.25rem' speed='0.55s' emptyColor='gray.200' color='primeBlue' size='xl' /></Flex>;
    if (error) return <div>Failed to load data</div>;

    return (
        <SimpleGrid columns={[1, 2, 2]} spacing={5}>
            {data.map((blog: BlogCardProps, index: number) => (
                <ServiceCard
                    key={index}
                    imageUrl={blog.image}
                    category={blog.category}
                    readTime={blog.readTime}
                    title={blog.title}
                    description={blog.description}
                    _id={blog._id}
                    news={true}
                />
            ))}
        </SimpleGrid>
    )
}

export default NewsGrid