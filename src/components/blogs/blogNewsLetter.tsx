import { Box, Flex, Text } from "@chakra-ui/react"

import NewsletterForm from "../home/newsLetter/newsLetterForm"
import LinkedInSection from "../linkedinSection"

const BlogNewsLetter = () => {
    return (
        <Flex direction={'column'}  gap={'1rem'}>
            <Text fontWeight={600} fontSize={'1.5rem'}>Like what you are seeing? Subscribe to our newsletter to stay updated with the latest articles, insights, and more!</Text>
            <Flex w={['100%', '75%', '50%', '50%']} gap={'1rem'} alignItems={'center'}>
                <NewsletterForm color="primeBlue" />
                <LinkedInSection black={true} />
            </Flex>
        </Flex>
    )
}

export default BlogNewsLetter