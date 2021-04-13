/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Subtitle from '../Subtitle';

export default function CardSection({ children, title }) {
    return (
        <Box mb="3rem">
            <Box
                backgroundColor="white"
                padding="2rem"
                boxShadow="rgb(35 38 45 / 5%) 0px 0.125rem 0.25rem;"
            >
                <Subtitle>{title}</Subtitle>
                {children}
            </Box>
        </Box>
    );
}
