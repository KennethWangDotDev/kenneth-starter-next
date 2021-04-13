/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Text } from '@chakra-ui/react';

export default function Subtitle({ children }) {
    return (
        <Text as="h3" fontWeight="700" mb="2rem" fontSize={[22, 24, 26, 28]}>
            {children}
        </Text>
    );
}
