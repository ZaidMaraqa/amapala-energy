import ServiceCard from "@/components/serviceCard"
import { Flex, SimpleGrid, Text } from "@chakra-ui/react"
import { newsData } from "../../../../public/constants"
import "@fontsource/lexend";


const NewsSection = () => {
    return (
        <Flex direction={'column'} justifyContent={'flex-start'} gap={'2rem'} py={['2rem', '4rem', '6rem', '6rem']} px={['.5rem', '1rem', '2rem', '2rem']}>
            <Text fontFamily="'Lexend', sans-serif" fontSize={'1.5rem'} fontWeight={500} color={'#202122'}>
                Our News and Analysis
            </Text>
            <Text color={'primeBlue'} fontWeight={600} fontSize={['1.375rem', '2.775rem', '3.575rem', '4.375rem', '5.375rem']}>
                Stay <Text as={'span'} color={'black'}>Informed</Text> <br />
                <Text as={'span'} color={'black'}>Stay</Text> Ahead
            </Text>
            <SimpleGrid columns={[1, 2, 2]} spacing={5}>
                {newsData.map(article => (
                    <ServiceCard
                        key={article.id}
                        imagUrl={article.imagUrl}
                        title={article.title}
                        description={article.description}
                        category={article.category}
                        readTime={article.readTime}
                        news={true}
                    />
                ))}
            </SimpleGrid>
        </Flex>
    )
}

export default NewsSection