import { Box, Card, CardBody, CardFooter, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react"
import { FaChevronRight } from "react-icons/fa";
import { ServiceCardProps } from "./serviceCard.interface";
import "@fontsource/lexend";
import CardHeader from "../cardHeader";

const ServiceCard = ({
    imageUrl,
    title,
    description,
    news,
    blog,
    category,
    readTime,
    _id
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
                    src={imageUrl}
                    alt='service image'
                    h={'18.75rem'}
                    w={'100%'}
                    objectFit={'cover'}
                />
                <Flex direction={'column'} gap={'1.5rem'} mt={'1rem'}>
                    {blog && category && readTime && (
                        <CardHeader category={category} readTime={readTime} />
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