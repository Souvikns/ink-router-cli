import React from 'react';
import { useCli } from 'ink-router-cli';
import { Text } from 'ink';

const Temp = () => {
    let place = useCli().arguments[0];
    return <Text>{place}</Text>
}

module.exports =  Temp;
export default Temp;
