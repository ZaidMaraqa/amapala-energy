import {
    Flex,
    Text,
} from "@chakra-ui/react"
import "@fontsource/lexend";
import NavBar from "@/components/navbar";
import ContactUsForm from "@/components/contactUs/contactUsForm";
import ContactBreadCrumb from "@/components/contactUs/contactBreadCrumb";

const ContactUsPage = () => {
    return (
        <Flex direction={'column'} h={'100vh'} w={'100vw'} bg={'primeGray'}>
            <NavBar />
            <Flex flex={1} gap={'1rem'} direction={'column'} p={'3rem'}>
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
        </Flex>
    )
}

export default ContactUsPage