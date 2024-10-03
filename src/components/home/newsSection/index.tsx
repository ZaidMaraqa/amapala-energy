import { Button, Flex, Text } from "@chakra-ui/react"
import NewsGrid from "./newsGrid";
import "@fontsource/lexend";
import Link from "next/link";
import { PAGES } from "@/config";
import { FaArrowRight } from "react-icons/fa";

const NewsSection = () => {
    return (
        <Flex direction={'column'} justifyContent={'flex-start'} gap={'2rem'} py={['2rem', '4rem', '4rem', '6rem']} px={['.5rem', '1rem', '2rem', '2rem']}>
            <Text fontFamily="'Lexend', sans-serif" fontSize={'1.5rem'} fontWeight={500} color={'#202122'}>
                Our News and Analysis
            </Text>
            <Text color={'primeBlue'} fontWeight={600} fontSize={['2.75rem', '2.775rem', '3.575rem', '3.8rem', '5.375rem']}>
                Stay <Text as={'span'} color={'black'}>Informed</Text> <br />
                <Text as={'span'} color={'black'}>Stay</Text> Ahead
            </Text>
            <NewsGrid />   
            <Flex justifyContent={'center'} mt={'.5rem'}>
                <Link href={PAGES.BLOGS} passHref aria-label="blogs page">
                    <Button
                        color={'primeBlue'}
                        fontWeight={600}
                        fontSize={'1rem'}
                        variant={'outline'}
                        borderRadius={'full'}
                        px={'1rem'}
                        py={'1.5rem'}
                        rightIcon={<FaArrowRight />}
                    >
                        View All
                    </Button>
                </Link>
            </Flex> 
        </Flex>
    )
}

export default NewsSection