import { Box, Button, Flex, Input, Text } from "@chakra-ui/react"

const NewsLetter = () => {
    return (
        <Flex direction={'column'} gap={'1rem'} bg={'primeBlue'} alignItems={'center'} justifyContent={'center'} py={'3rem'}>
                <Text color={'white'} fontWeight={600} fontSize={'8rem'} lineHeight={'9.5625rem'} letterSpacing={'-3%'} textAlign={'center'}> Stay Informed with   <br />
                    Amapala's news letter.
                </Text>
                <Flex direction={'row'} gap={'.5rem'} >
                    <Input borderColor={'white'} placeholder="Enter your email" borderRadius={0} />
                    <Button border={'1px solid white'} borderRadius={0} color={'white'}>
                        Subscribe
                    </Button>
                </Flex>
        </Flex>
    )
}

export default NewsLetter