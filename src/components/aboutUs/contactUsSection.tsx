import { Flex, Heading, Text } from "@chakra-ui/react";
import "@fontsource/lexend";
import NewsletterForm from "../home/newsLetter/newsLetterForm";
import LinkedInSection from "../linkedinSection";
import Link from "next/link";
import { PAGES } from "@/config";

const ContactUsNewsLetter = () => {
    return (
        <Flex direction={'column'} bg={'primeBlue'} justifyContent={'center'} px={['.5rem', '1rem', '3rem', '3rem']} py={['1.5rem', '2rem', '3rem', '6rem']}>
            <Flex direction={'column'} gap={'3rem'} alignItems={'start'}>
                <Flex direction={'column'} gap={'.5rem'}>
                    <Heading color={'white'} fontSize={['2.5rem', '4.5rem', '5rem', '6rem']} >Get Involved</Heading>
                    <Text fontFamily="'Lexend', sans-serif" color={'white'} fontWeight={300}>If you are interested in Latin America, energy and natural resources and/ or the intersection between the two, feel free to <Link href={PAGES.CONTACT_US} aria-label="contact us link"><Text as={'span'} textDecor={'underline'} fontWeight={700} color={'#FFC125'}>Contact Us</Text></Link> to learn more.</Text>
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
                <LinkedInSection />
            </Flex>
        </Flex>
    );
}

export default ContactUsNewsLetter;
