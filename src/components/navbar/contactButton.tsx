'use client'

import { PAGES } from "@/config"
import { Button, Text } from "@chakra-ui/react"
import { useRouter } from "next/navigation"

const ContactUsButton = () => {
    const { push } = useRouter()
    
    return (
        <Button borderRadius={0} border={'1px solid'} borderColor={'primeBlue'} color={'black'} _hover={{ bg: 'primeBlue', color: 'white' }} onClick={() => push(PAGES.CONTACT_US)}>
            <Text>Contact Us</Text>
        </Button>
    )
}

export default ContactUsButton