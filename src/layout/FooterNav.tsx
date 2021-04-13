/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function FooterNav() {
    return (
        <Box borderTop="1px solid" borderTopColor="blue.50" bgColor="gray.50">
            <Box maxW="1200px" mx="auto" height="4.5rem">
                <Flex w="100%" h="100%" px="6" align="center">
                    <Text color="gray.500" fontWeight="400" fontSize="12px">
                        Copyright &#169; 2021 KennethStarterNext | All rights reserved.
                    </Text>
                </Flex>
            </Box>
        </Box>
    );
}
