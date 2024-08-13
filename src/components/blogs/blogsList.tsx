'use client';

import { Flex, Input, SimpleGrid, Spinner, Text } from "@chakra-ui/react";

import FilterPopover from "./filterPopover";
import Paginator from "../paginator";
import ServiceCard from "../home/serviceCard";
import getBlogs from "@/hooks/getAllBlogs";
import { useDebounce } from "use-debounce";
import { useState } from "react";

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const [debouncedSearch] = useDebounce(search, 600);

  const { data, error, isLoading } = getBlogs(currentPage, debouncedSearch, category, country);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1); 
  };

  if (isLoading) return <Flex h={'10rem'} justifyContent={'center'} alignItems={'center'}><Spinner thickness='0.25rem' speed='0.55s' emptyColor='gray.200' color='primeBlue' size='xl' /></Flex>;
  if (error) return <div>Failed to load data</div>;

  const totalPosts = data?.total_posts || 0;
  const totalPages = Math.floor(totalPosts / 8);

  return (
    <Flex direction={'column'} gap={'1.5rem'} bg="primeGray" py={'5rem'} px={['.5rem', '3rem', '3rem', '3rem']}>
      <Flex direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Flex direction={'column'} gap={'1.5rem'} flex={2}>
          <Text fontFamily="'Lexend', sans-serif" fontSize={'1.5rem'} fontWeight={500} color={'#202122'}>
            News and Analysis
          </Text>
          <Text color={'primeBlue'} fontWeight={600} fontSize={['1.375rem', '2.775rem', '3.575rem', '4.375rem', '5.375rem']}>
            Discover <Text as={'span'} color={'black'}>The </Text>
            <Text as={'span'} color={'black'}>Latest</Text> <br />Insights
          </Text>
        </Flex>
        <Flex direction={'row'} gap={'.5rem'} flex={1}>
          <Input
            placeholder={`Search articles... (${totalPosts} posts)`}
            value={search}
            onChange={handleSearchChange}
            borderColor="primeBlue"
            borderRadius={0}
            _placeholder={{ color:'#484848', fontSize: '.85rem', fontWeight: 400 }}
            _hover={ 'none' }
            display={'flex'}
            borderWidth={'.125rem'}
          />
          <FilterPopover setCountry={setCountry} setCategory={setCategory} />
        </Flex>
      </Flex>
      <SimpleGrid columns={[1, 1, 2, 3, 3]} spacing={10} mt={'1rem'}>
        {data?.blogs.map((blog: any, index: number) => (
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
      <Flex justifyContent="center" mt="2rem">
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Flex>
    </Flex>
  );
};

export default BlogList;
