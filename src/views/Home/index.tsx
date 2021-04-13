/* eslint-disable react/prop-types */
import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';
import Title from '../../components/Title';
import BackgroundContainer from '../../components/BackgroundContainer';

export default function Home() {
    return (
        <Box>
            <Head>
                <title>Page Title</title>
            </Head>
            <BackgroundContainer color="#f5f5f5">
                <Title>Kenneth Starter Next</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </BackgroundContainer>
        </Box>
    );
}
