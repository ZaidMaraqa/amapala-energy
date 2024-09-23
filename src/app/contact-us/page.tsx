import {
    Flex,
    Text,
} from "@chakra-ui/react"
import "@fontsource/lexend";
import NavBar from "@/components/navbar";
import ContactUsForm from "@/components/contactUs/contactUsForm";
import ContactBreadCrumb from "@/components/contactUs/contactBreadCrumb";
import Footer from "@/components/footer";

const ContactUsPage = () => {
    return (
        <Flex direction={'column'} h={'100vh'} w={'100vw'} bg={'primeGray'} overflow={'auto'}>
            <NavBar noBorderRadius={true} />
            <Flex flex={1} gap={'1rem'} direction={'column'} p={['.5rem', '1rem', '3rem', '3rem']}>
                <ContactBreadCrumb />
                <Text
                    fontFamily="'Lexend', sans-serif"
                    fontSize={'1.875rem'}
                    fontWeight={400}
                    color={'#021526'}>
                    Contact us
                </Text>
                <ContactUsForm />
            </Flex>
            <Footer />
        </Flex>
    )
}

export default ContactUsPage