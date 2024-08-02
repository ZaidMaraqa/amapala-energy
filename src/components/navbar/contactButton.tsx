'use client'

import { PAGES } from "@/config"
import { Button, Text } from "@chakra-ui/react"
import { useRouter } from "next/navigation"

const ContactUsButton = () => {
    const { push } = useRouter()
    
    return (
        <Button bg={'primeBlue'} borderRadius={'10px'} color={'white'} _hover={{ bg: 'white', color: 'primeBlue' }} onClick={() => push(PAGES.CONTACT_US)} py={0} h={'2.3rem'}>
            <Text fontSize={'15px'}>Contact Us</Text>
        </Button>
    )
}

export default ContactUsButton