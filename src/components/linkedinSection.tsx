import { Button, ButtonGroup, Flex, IconButton, Link, Text } from "@chakra-ui/react"
import { FaLinkedinIn } from "react-icons/fa"
import "@fontsource/lexend";

const LinkedInSection = ({ black = false }) => {
    return (
        <Flex gap={'1rem'} alignItems={'center'}>
            {!black && (
                <Text fontFamily="'Lexend', sans-serif" color={'white'} fontWeight={300}>
                    Be sure to follow us on <Text as={'span'} fontWeight={700}>LinkedIn</Text> to stay up-to-date on job openings and opportunities
                </Text>
            )}

            <Link aria-label="linkedin" href={'https://www.linkedin.com/company/faulmata-energy-advisors/about/'} isExternal>
                {black ? (
                    <Flex alignItems={'center'} gap={'.5rem'}>
                    <Text fontWeight={700}>Follow us </Text>
                    <IconButton size={'xs'} bg={ '#0B66C2' } aria-label='Add to ' icon={<FaLinkedinIn color="white" />} borderRadius={2} />
                    </Flex>
                ): (

            <ButtonGroup size = 'sm' isAttached variant = 'outline' color = { 'white'}>
                    <IconButton bg = { '#0B66C2' } aria-label='Add to friends' icon={<FaLinkedinIn />} borderRadius={2} />
                <Button borderRadius={2}>Follow Us</Button>
            </ButtonGroup>
            )}

        </Link>
        </Flex >
    )
}

export default LinkedInSection;