/* eslint-disable jsx-a11y/anchor-is-valid */
import {
    Box,
    Flex,
    Spacer,
    Img,
    useDisclosure,
    Text,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Icon,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoIosMenu } from 'react-icons/io';
import headLinks from './_headLinks';

export default function HeaderNav() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const router = useRouter();

    const NavLinks = (): JSX.Element[] => {
        return headLinks.map((headLink) => (
            <Text as="span" key={headLink.title}>
                <Link href={headLink.url}>
                    <a className={router.pathname === headLink.url ? 'l-active' : 'test'}>
                        {headLink.title}
                    </a>
                </Link>
            </Text>
        ));
    };

    const desktopNavLinksStyle = {
        span: {
            color: '#a2a2a2',
            paddingLeft: '2.25rem',
            fontWeight: '500',
        },
        '.l-active': {
            color: '#1A202C',
        },
    };

    const mobileLinkStyles = {
        span: {
            color: '#a2a2a2',
            fontWeight: '500',
            display: 'block',
            paddingTop: '1rem',
            marginTop: '1rem',
            borderTop: '1px solid #e6e6e6',
            ':last-child': {
                paddingBottom: '1rem',
                marginBottom: '1rem',
                borderBottom: '1px solid #e6e6e6',
            },
        },
        '.l-active': {
            color: '#1A202C',
        },
    };

    return (
        <Box shadow="sm">
            <Box maxW="1200px" mx="auto" height="6rem">
                <Flex w="100%" h="100%" px="6" align="center">
                    <Box>
                        <Link href="/">
                            <a>
                                <Img w="151px" src="/logo.png" alt="Logo" />
                            </a>
                        </Link>
                    </Box>
                    <Spacer />
                    <Box>
                        <Box display={{ base: 'block', md: 'block' }} sx={desktopNavLinksStyle}>
                            {NavLinks()}
                        </Box>
                        <Box display={{ sm: 'block', md: 'none' }}>
                            <a href="#">
                                <Icon
                                    color="blue.700"
                                    w={8}
                                    h={8}
                                    ref={btnRef}
                                    as={IoIosMenu}
                                    onClick={onOpen}
                                />
                            </a>

                            <Drawer
                                isOpen={isOpen}
                                placement="right"
                                onClose={onClose}
                                finalFocusRef={btnRef}
                            >
                                <DrawerOverlay>
                                    <DrawerContent>
                                        <DrawerCloseButton />
                                        <DrawerHeader>Menu</DrawerHeader>
                                        <DrawerBody sx={mobileLinkStyles}>{NavLinks()}</DrawerBody>
                                    </DrawerContent>
                                </DrawerOverlay>
                            </Drawer>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}
