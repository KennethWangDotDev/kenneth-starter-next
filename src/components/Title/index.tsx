/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Text } from '@chakra-ui/react';

export default function Title({ children }) {
    return (
        <Text as="h2" fontWeight="700" mb={[2, 4, 6, 8]} fontSize={[24, 28, 30, 36]}>
            {children}
        </Text>
    );
}
