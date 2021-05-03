import React, { FC } from 'react';
import { Text } from 'ink';

const Error: FC<{ message: string }> = ({ message }) => {

    return <Text color="redBright">{message}</Text>
};


module.exports = Error;
export default Error;