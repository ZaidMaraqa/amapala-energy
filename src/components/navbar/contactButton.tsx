'use client'

import { PAGES } from "@/config"
import { Button, Text } from "@chakra-ui/react"
import { useRouter } from "next/navigation"

const ContactUsButton = () => {
    const { push } = useRouter()
    
    return (
        <Button bg={'primeBlue'} borderRadius={'md'} border={'.0625rem solid'} borderColor={'primeBlue'} color={'white'} _hover={{ bg: 'transparent', color: 'primeBlue', border: '.0625rem solid', borderColor: 'primeBlue' }} onClick={() => push(PAGES.CONTACT_US)} py={0} >
            <Text fontSize={'.9375rem'}>Contact Us</Text>
        </Button>
    )
}

export default ContactUsButton