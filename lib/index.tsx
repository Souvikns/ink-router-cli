import React, { FC } from 'react';
import { Text, render } from 'ink';

const App: FC<any> = () => {

    return <>
    <Text backgroundColor="red"> Hello World </Text>
    </>
}


render(<App />)