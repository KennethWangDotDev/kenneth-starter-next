/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider, Box } from '@chakra-ui/react';
import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0';
import HeaderNav from '../layout/HeaderNav';
import FooterNav from '../layout/FooterNav';

export default function App({ Component, pageProps }) {
    const globalStyling = {
        fontFamily: "'Roboto', sans-serif;",
    };

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <UserProvider>
                <ChakraProvider>
                    <Box sx={globalStyling}>
                        <HeaderNav />
                        <Component {...pageProps} />
                        <FooterNav />
                    </Box>
                </ChakraProvider>
            </UserProvider>
        </>
    );
}
