/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Box } from '@chakra-ui/react';
import React from 'react';

export default function LayoutContainer({ children, my = '3rem', mw = '1200px' }) {
    return (
        <Box maxW={mw} mx="auto" my={my}>
            <Box px="6">{children}</Box>
        </Box>
    );
}
