import "@fontsource/lexend";

import { Card, CardBody, CardFooter, Flex, IconButton, Image, Text } from "@chakra-ui/react"
import { PAGES } from "@/config";

import CardHeader from "../cardHeader";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

export interface BlogCardProps {
    image: string;
    category: string;
    readTime: number;
    title: string;
    description: string;
    country: string;
    country_code: string;
    article_type: string;
    _id: string
}

const TopBlogCard = ({ image,
    category,
    readTime,
    title,
    description,
    country,
    country_code,
    article_type,
    _id,
}: BlogCardProps) => {
    return (
        <Link href={`${PAGES.BLOG}/${_id}`}>
            <Card direction={'row'} bg={'transparent'} boxShadow={0} role="group" _hover={{ cursor: 'pointer' }}>
                <CardBody>
                    <Flex direction={'column'} gap={'8px'}>
                        <CardHeader readTime={readTime} category={category} country={country} country_code={country_code} />
                        <Text fontWeight={600} fontSize={'23px'} color={'black'}>{title}</Text>
                        <Text fontFamily="'Lexend', sans-serif" color={'#696D70'} fontWeight={400} fontSize={'20px'} >{description}</Text>
                    </Flex>
                    <CardFooter px={0} pb={0} pt={'2.5rem'}>
                        <Flex gap={'16px'} alignItems={'center'} justifyContent={'flex-start'}>
                            <Text color={'black'} fontSize={'24px'} fontWeight={600} _groupHover={{ textDecoration: 'underline' }}>Read Full Article</Text>
                            <IconButton
                                borderRadius={'50%'}
                                color={'white'}
                                bg={'primeBlue'}
                                icon={<FaChevronRight fontSize={'16px'} />}
                                _groupHover={{ border: '.0625rem solid', bg: 'transparent', borderColor: 'primeBlue', color: 'primeBlue' }}
                                aria-label="go to article"
                            />
                        </Flex>
                    </CardFooter>
                </CardBody>
                <Image src={image} alt="blog image" w={'300px'}  objectFit={'contain'} display={['none', 'none', 'flex', 'flex']} />
            </Card>
        </Link>
    )
}

export default TopBlogCard