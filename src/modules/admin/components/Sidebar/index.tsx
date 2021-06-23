import {
    Box,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerContent,
    VStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

import {MinusIcon,AddIcon} from "@chakra-ui/icons";


interface Props {
    onClose: any
    isOpen: boolean
    variant: 'drawer' | 'sidebar'
}

const SidebarContent = ({onClick}: { onClick: any }) => (
    <VStack>
        <Accordion allowMultiple>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                            Section 1 title
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                {({isExpanded}) => (
                    <>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    Section 2 title
                                </Box>
                                {isExpanded ? (
                                    <MinusIcon fontSize="12px"/>
                                ) : (
                                    <AddIcon fontSize="12px"/>
                                )}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        </Accordion>
    </VStack>
)

const Sidebar = ({isOpen, variant, onClose}: Props) => {
    return variant === 'sidebar' ? (
        <Box
            position="fixed"
            left={0}
            p={5}
            w="200px"
            top={0}
            h="100%"
            bg="#dfdfdf"
        >
            <SidebarContent onClick={onClose}/>
        </Box>
    ) : (
        <Drawer isOpen={isOpen}
                placement="left"
                onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Chakra-UI</DrawerHeader>
                    <DrawerBody>
                        <SidebarContent onClick={onClose}/>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}

export default Sidebar
