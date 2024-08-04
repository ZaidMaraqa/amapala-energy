import { Box, Card, CardBody, CardFooter, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react"
import { FaChevronRight } from "react-icons/fa";
import { ServiceCardProps } from "./serviceCard.interface";
import "@fontsource/lexend";

const ServiceCard = ({
    imagUrl,
    title,
    description,
    news,
    blog,
    category,
    readTime,
}: ServiceCardProps) => {
    return (
        <Card
            boxShadow={0}
            bg={'transparent'}
            _hover={{ bg: news ? 'primeGray' : 'white', cursor: 'pointer' }}
            p={'1rem'}
            role="group"
        >
            <CardBody display={'flex'} flexDirection={'column'} gap={'1.5rem'}>
                <Image
                    src={imagUrl}
                    alt='service image'
                    h={'300px'}
                    w={'100%'}
                    objectFit={'cover'}
                />
                <Flex direction={'column'} gap={'1.5rem'} mt={'1rem'}>
                    {blog && (
                        <Flex direction={'row'} fontSize={'1.25rem'} lineHeight={'1.5rem'} fontWeight={600} gap={'.5rem'} alignItems={'center'}>
                            <Box bg={'primeBlue'} borderRadius={'.3125rem'} p={'.5rem'}>
                                <Text color={'white'}>{category}</Text>
                            </Box>
                            <Text color={'black'}>{readTime}</Text>
                        </Flex>
                    )}
                    <Heading color={'black'} fontWeight={600} fontSize={'1.5rem'}>{title}</Heading>
                    <Text color={'#202122'} fontFamily="'Lexend', sans-serif" fontSize={'1rem'}>
                        {description}
                    </Text>
                </Flex>
            </CardBody>
            <CardFooter display={'flex'} alignItems={'center'} gap={'.5rem'}>
                {blog && (
                    <Text fontSize={'1rem'} color={'black'} fontWeight={600}>Read More</Text>
                )}
                <IconButton
                    borderRadius={'50%'}
                    _groupHover={{ bg: 'primeBlue', borderColor: 'primeBlue', color: 'white' }}
                    border={'1px solid'}
                    borderColor={'primeBlue'}
                    bg={'transparent'}
                    icon={<FaChevronRight />}
                    aria-label="go to article"
                />
            </CardFooter>
        </Card>
    )
}

export default ServiceCard