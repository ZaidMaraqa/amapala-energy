import { Box, Card, CardBody, CardFooter, Flex, IconButton, Image, Text } from "@chakra-ui/react"
import { BlogCardProps } from "../blogCard/blogCard.interface"
import "@fontsource/lexend";
import { FaChevronRight } from "react-icons/fa";

const TopBlogCard = ({ image,
    category,
    readTime,
    title,
    description,
    link,
}: BlogCardProps) => {
    return (
        <Card direction={'row'} bg={'transparent'} boxShadow={0}>
            <CardBody>
                <Flex direction={'column'} gap={'.5rem'}>
                    <Flex direction={'row'} fontSize={'1.25rem'} lineHeight={'1.5rem'} fontWeight={600} gap={'.5rem'} alignItems={'center'}>
                        <Box bg={'primeBlue'} borderRadius={'.3125rem'} p={'.5rem'}>
                            <Text color={'white'}>{category}</Text>
                        </Box>
                        <Text color={'black'}>{readTime}</Text>
                    </Flex>
                    <Text fontWeight={600} fontSize={'2.75rem'} color={'black'}>{title}</Text>
                    <Text fontFamily="'Lexend', sans-serif" color={'#696D70'} fontWeight={400} fontSize={'1.5rem'} >{description}</Text>
                </Flex>
                <CardFooter px={0} pb={0} pt={'5rem'}>
                    <Flex gap={'1rem'} alignItems={'center'} justifyContent={'flex-start'}>
                        <Text color={'black'} fontSize={'1.5rem'} fontWeight={600}>Read Full Article</Text>
                        <IconButton
                            borderRadius={'50%'}
                            color={'white'}
                            bg={'primeBlue'}
                            icon={<FaChevronRight />}
                            aria-label="go to article"
                        />
                    </Flex>
                </CardFooter>
            </CardBody>
            <Image src={image} alt="blog image" w={'15rem'} />
        </Card>
    )
}

export default TopBlogCard