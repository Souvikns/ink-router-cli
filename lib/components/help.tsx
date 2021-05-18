import React, { FC } from 'react';
import { Text, Newline } from 'ink';
import { HelpCommands, HelpFlags } from '../types';
import { useConfig } from '../hooks';

const Help: FC<{
    commands?: Array<HelpCommands>,
    flags?: Array<HelpFlags>
}> = ({ flags, commands }) => {

    let config = useConfig();

    return <>
        <Text><Text color="blueBright"> Usage </Text>: {config.name} [options] {(commands) ? "[command]" : null}</Text>
        <Newline />
        <Text>Options: </Text>
        {flags?.map(el => <Text key={el.name}>-{el.alias}, --{el.name}</Text>)}
        <Newline />
        <Text>Commands: </Text>
        {commands?.map(command => <Text key={command.name}>{command.name} {(command.flags) ? "[options]" : null} {command.description}</Text>)}
    </>
}


export default Help;
module.exports = Help;