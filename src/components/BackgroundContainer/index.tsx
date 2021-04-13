/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Box } from '@chakra-ui/react';
import React from 'react';
import LayoutContainer from '../LayoutContainer';

export default function BackgroundContainer({ color, children }) {
    return (
        <Box backgroundColor={color} py="3rem">
            <LayoutContainer my="0">{children}</LayoutContainer>
        </Box>
    );
}
