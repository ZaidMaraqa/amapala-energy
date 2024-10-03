import { Flex, Text } from "@chakra-ui/react"
import NewsGrid from "./newsGrid";
import "@fontsource/lexend";

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
        </Flex>
    )
}

export default NewsSection