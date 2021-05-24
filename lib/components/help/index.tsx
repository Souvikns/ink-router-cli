import React, { FC } from 'react';
import { Box, Text } from 'ink';
import { HelpCommands, HelpFlags, CommandInput as CommandInputInterface } from '../../types';
import { useConfig } from '../../hooks';

const CommandInput: FC<{ inputs: CommandInputInterface }> = ({ inputs }) => {
    const generateInputs = () => {
        let inps: Array<{ name: string, required: boolean }> = []
        for (const [name, command] of Object.entries(inputs)) {
            inps.push({
                name,
                required: command.requried
            })
        }

        return inps;
    }
    return <Text>{generateInputs().map(inp => <Text key={inp.name}>
        <Text>{(inp.required ? "<" : "[")}{inp.name}{(inp.required ? ">" : "]")} </Text>
    </Text>)}</Text>
}

const Help: FC<{
    commands?: Array<HelpCommands>,
    flags?: Array<HelpFlags>
}> = ({ flags, commands }) => {

    const config = useConfig();

    return <>
        <Box paddingX={2} paddingY={1}>
            <Text bold color="green">Usage</Text><Text>: </Text>
            <Text color="greenBright"> {config.name} </Text>
            <Text>[options] [commands]</Text>
        </Box>

        <Box paddingX={2} paddingY={1} flexDirection="column">
            <Text>
                <Text bold color="yellowBright">Options</Text><Text>: </Text>
            </Text>
            {flags?.map(flag => <Text key={flag.name}>
                <Text color="yellowBright">--{flag.name}</Text><Text>, </Text>
                <Text color="yellowBright">-{flag.alias}</Text>
                <Text> {flag.description}</Text>
            </Text>)}
        </Box>

        <Box paddingX={2} paddingY={1} flexDirection="column">
            <Text>
                <Text bold color="blue">Commands</Text><Text>: </Text>
            </Text>
            {commands?.map(command => <Text key={command.name}>
                <Text color="blue">{command.name} </Text>
                <Text>{(command.flags ? "[options]" : null)} </Text>
                {(command.inputs ? <CommandInput inputs={command.inputs} /> : null)}
                <Text>{command.description}</Text>
            </Text>)}

        </Box>
    </>
}

export default Help;
module.exports = Help;
