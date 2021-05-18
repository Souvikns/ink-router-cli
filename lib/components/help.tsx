import React, { FC } from 'react';
import { Text } from 'ink';
import { HelpCommands, HelpFlags } from '../types';

const Help: FC<{
    commands: Array<HelpCommands>,
    flags: Array<HelpFlags>
}> = () => {

    return <Text>Hello</Text>
}


export default Help;
module.exports = Help;