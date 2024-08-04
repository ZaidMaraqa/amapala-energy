import { Box, Flex, Text } from "@chakra-ui/react"
import NewsletterForm from "../home/newsLetter/newsLetterForm"

const BlogNewsLetter = () => {
    return (
        <Flex direction={'column'} pt={'5rem'} gap={'1rem'}>
            <Text fontWeight={600} fontSize={'1.5rem'}>Like what you're seeing? Subscribe to our newsletter to stay updated with the latest articles, insights, and more!</Text>
            <Box w={['100%', '75%', '50%', '50%']}>
                <NewsletterForm color="primeBlue" />
            </Box>
        </Flex>
    )
}

export default BlogNewsLetter