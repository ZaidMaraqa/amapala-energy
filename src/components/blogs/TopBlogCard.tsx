import { Box, Card, CardBody, CardFooter, Flex, IconButton, Image, Text } from "@chakra-ui/react"
import "@fontsource/lexend";
import { FaChevronRight } from "react-icons/fa";
import CardHeader from "../cardHeader";
import Link from "next/link";
import { PAGES } from "@/config";

export interface BlogCardProps {
    image: string;
    category: string;
    readTime: number;
    title: string;
    description: string;
    id: number
}

const TopBlogCard = ({ image,
    category,
    readTime,
    title,
    description,
    id
}: BlogCardProps) => {
    return (
        <Link href={`${PAGES.BLOG}/${id}`}>
            <Card direction={'row'} bg={'transparent'} boxShadow={0} role="group" _hover={{ cursor: 'pointer' }}>
                <CardBody>
                    <Flex direction={'column'} gap={'8px'}>
                        <CardHeader readTime={readTime} category={category} />
                        <Text fontWeight={600} fontSize={'44px'} color={'black'}>{title}</Text>
                        <Text fontFamily="'Lexend', sans-serif" color={'#696D70'} fontWeight={400} fontSize={'24px'} >{description}</Text>
                    </Flex>
                    <CardFooter px={0} pb={0} pt={'80px'}>
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
                <Image src={image} alt="blog image" w={['240px', '240px', '200px', '240px']} display={['none', 'none', 'flex', 'flex']} />
            </Card>
        </Link>
    )
}

export default TopBlogCard