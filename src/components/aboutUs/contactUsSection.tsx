import { Button, ButtonGroup, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import "@fontsource/lexend";
import NewsletterForm from "../home/newsLetter/newsLetterForm";
import { GrLinkedin } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";

const ContactUsNewsLetter = () => {
    return (
        <Flex direction={'column'} bg={'primeBlue'} justifyContent={'center'} px={['3rem']} py={'6rem'}>
            <Flex direction={'column'} gap={'3rem'} alignItems={'start'}>
                <Flex direction={'column'} gap={'.5rem'}>
                    <Heading color={'white'} fontSize={['2.5rem', '4.5rem', '5rem', '6rem']} >Get Involved</Heading>
                    <Text fontFamily="'Lexend', sans-serif" color={'white'} fontWeight={300}>If you are interested in Latin America, the energy, or natural resource sectors—or all three—feel free to <Text as={'span'} textDecor={'underline'} fontWeight={700} color={'#FFC125'}>Contact Us</Text> to learn more.</Text>
                </Flex>
                <Flex direction={'column'} gap={'.5rem'}>
                    <Text color={'white'} fontFamily="'Lexend', sans-serif" fontWeight={300}>
                        Do not miss out on the latest updates, insights and more exclusive content!
                    </Text>
                    <Text color={'white'} fontWeight={700}>
                        Subscribe to Our Newsletter
                    </Text>
                    <NewsletterForm />
                </Flex>
                <Flex gap={'1rem'} alignItems={'center'}>
                <Text fontFamily="'Lexend', sans-serif" color={'white'} fontWeight={300}>
                    Be sure to follow us on <Text as={'span'} fontWeight={700}>LinkedIn</Text> to stay up-to-date on job openings and opportunities
                </Text>
                <ButtonGroup size='sm' isAttached variant='outline' color={'white'}>
                <IconButton bg={'#0B66C2'}  aria-label='Add to friends' icon={<FaLinkedinIn />} borderRadius={2}/>
                    <Button borderRadius={2}>Follow Us</Button>
                </ButtonGroup>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default ContactUsNewsLetter;
