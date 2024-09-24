import { Button, ButtonGroup, Flex, IconButton, Link, Text } from "@chakra-ui/react"
import { FaLinkedinIn } from "react-icons/fa"
import "@fontsource/lexend";

const LinkedInSection = ({ black = false}) => {
    return (
        <Flex gap={'1rem'} alignItems={'center'}>
            <Text fontFamily="'Lexend', sans-serif" color={black ? 'black' : 'white'} fontWeight={300}>
                Be sure to follow us on <Text as={'span'} fontWeight={700}>LinkedIn</Text> to stay up-to-date on job openings and opportunities
            </Text>
            <Link aria-label="linkedin" href={'https://www.linkedin.com/company/faulmata-energy-advisors/about/'} isExternal>
                <ButtonGroup size='sm' isAttached variant='outline'>
                    <IconButton bg={'#0B66C2'} color={'white'} border={black ? 0 : '1px solid white'} aria-label='Add to friends' icon={<FaLinkedinIn />} borderRadius={2}  />
                    <Button borderRadius={2} color={black ? 'black': 'white'}>Follow Us</Button>
                </ButtonGroup>
            </Link>
        </Flex>
    )
}

export default LinkedInSection;