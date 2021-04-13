import dynamic from 'next/dynamic';
import React from 'react';

// eslint-disable-next-line react/prop-types
const NoSSR = ({ children }) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSSR), {
    ssr: false,
});
