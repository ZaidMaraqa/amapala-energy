import { Box, Card, CardBody, CardFooter, Flex, IconButton, Image, Text } from "@chakra-ui/react"
import "@fontsource/lexend";
import { FaChevronRight } from "react-icons/fa";

export interface BlogCardProps {
    image: string;
    category: string;
    readTime: string;
    title: string;
    description: string;
    link: string;
}

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
                <Flex direction={'column'} gap={'8px'}>
                    <Flex direction={'row'} fontSize={'1.25rem'} lineHeight={'24px'} fontWeight={600} gap={'8px'} alignItems={'center'}>
                        <Box bg={'primeBlue'} borderRadius={'5px'} p={'8px'}>
                            <Text color={'white'}>{category}</Text>
                        </Box>
                        <Text color={'black'}>{readTime}</Text>
                    </Flex>
                    <Text fontWeight={600} fontSize={'44px'} color={'black'}>{title}</Text>
                    <Text fontFamily="'Lexend', sans-serif" color={'#696D70'} fontWeight={400} fontSize={'24px'} >{description}</Text>
                </Flex>
                <CardFooter px={0} pb={0} pt={'80px'}>
                    <Flex gap={'16px'} alignItems={'center'} justifyContent={'flex-start'} role="group" _hover={{ cursor: 'pointer'}}>
                        <Text color={'black'} fontSize={'24px'} fontWeight={600} _groupHover={{textDecoration: 'underline'}}>Read Full Article</Text>
                        <IconButton
                            borderRadius={'50%'}
                            color={'white'}
                            bg={'primeBlue'}
                            icon={<FaChevronRight fontSize={'16px'} />}
                            _groupHover={{ border: '.0625rem solid', bg:'transparent', borderColor:'primeBlue', color:'primeBlue'}}
                            aria-label="go to article"
                        />
                    </Flex>
                </CardFooter>
            </CardBody>
            <Image src={image} alt="blog image" w={['240px', '240px', '200px', '240px']} display={['none', 'none', 'flex', 'flex']} />
        </Card>
    )
}

export default TopBlogCard