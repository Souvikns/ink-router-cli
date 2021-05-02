import parser from './index';
import React, { FC } from 'react';
import { Text, Newline } from 'ink';

const Help: FC<any> = () => {

    return <>
        <Text backgroundColor="greenBright" bold inverse> USAGE </Text>
        <Text>$ cli-command {"<command>"} [options]</Text>
        <Newline />
        <Text backgroundColor="cyanBright" bold inverse>COMMANDS</Text>
        <Text><Text color="cyanBright">new</Text> creates a new file</Text>
        <Text><Text color="cyanBright">duplicate</Text> duplicates a existing file</Text>
        <Newline />
        <Text backgroundColor="yellowBright" bold inverse>OPTIONS</Text>
        <Text><Text color="yellowBright">--random</Text> prints random data</Text>
    </>
}

let cli = parser(Help);

describe('fake test', () => {
    it("should run help command", () => {
        let cli = parser(Help);

    })
})
