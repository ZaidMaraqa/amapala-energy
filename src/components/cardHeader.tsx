import { Box, Flex, Text } from "@chakra-ui/react"

interface CardHeaderProps {
    category: string;
    readTime: number;
}

const CardHeader = ({ category, readTime } : CardHeaderProps) => {
    return (
        <Flex direction={'row'} fontSize={'1.25rem'} lineHeight={'24px'} fontWeight={600} gap={'8px'} alignItems={'center'}>
            <Box bg={'primeBlue'} borderRadius={'5px'} p={'8px'}>
                <Text color={'white'}>{category}</Text>
            </Box>
            <Text color={'black'}>{readTime}</Text>
        </Flex>
    )
}

export default CardHeader