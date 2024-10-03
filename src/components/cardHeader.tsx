import { Box, Flex, Text } from "@chakra-ui/react"

interface CardHeaderProps {
    category: string;
    readTime: number;
}

const CardHeader = ({ category, readTime } : CardHeaderProps) => {
    return (
        <Flex direction={'row'} fontSize={'1rem'} lineHeight={'24px'} fontWeight={600} gap={'.5rem'} alignItems={'center'}>
            <Box bg={'primeBlue'} borderRadius={'.3125rem'} py={'.25rem'} px={'.5rem'}>
                <Text color={'white'}>{category}</Text>
            </Box>
            <Text color={'black'}>{readTime}</Text>
        </Flex>
    )
}

export default CardHeader