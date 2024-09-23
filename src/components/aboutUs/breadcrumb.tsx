import "@fontsource/lexend";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"

import { FaChevronRight } from "react-icons/fa"
import { PAGES } from "@/config"

const AboutBreadCrumb = () => {
    return (
        <Breadcrumb
            spacing='.5rem'
            fontFamily="'Lexend', sans-serif"
            separator={<FaChevronRight color='gray.500' />}
            color={'#202122'}
            fontWeight={700}
            >
            <BreadcrumbItem>
                <BreadcrumbLink href={PAGES.HOME}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>About Us</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default AboutBreadCrumb