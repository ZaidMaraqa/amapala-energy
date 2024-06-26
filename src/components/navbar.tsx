import { ChevronDownIcon } from "@chakra-ui/icons"
import {
    Flex, Text, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
} from "@chakra-ui/react"

const NavBar = () => {
    return (
        <Flex as={'nav'} justifyContent={'space-between'} bg={'white'} alignItems={'center'} px={'1rem'} py={'.5rem'}>
            <Text fontWeight={500} fontSize={'2.125rem'} color={'black'}>Logo</Text>
            <Flex direction={'row'}>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Country Profiles
                    </MenuButton>
                    <MenuList>
                        <MenuItem>North America</MenuItem>
                        <MenuItem>Central America</MenuItem>
                        <MenuItem>South America</MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Insights
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Latest</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <Button borderRadius={'lg'} bg={'black'} color={'white'}>
                <Text>Subscribe</Text>
            </Button>
        </Flex>
    )
}

export default NavBar