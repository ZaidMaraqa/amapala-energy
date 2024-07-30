import { PAGES } from "@/config"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { FaChevronRight } from "react-icons/fa"

const ContactBreadCrumb = () => {
    return (
        <Breadcrumb
            spacing='.5rem'
            separator={<FaChevronRight color='gray.500' />}
            color={'#021526'}
            fontWeight={500}
            fontSize={'1.1875rem'} >
            <BreadcrumbItem>
                <BreadcrumbLink href={PAGES.HOME}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default ContactBreadCrumb