import React from 'react';
import { store } from './router';
import { Cli } from './types';


export const useCli = () => {
    const { state } = React.useContext(store) as { state: Cli };
    let [command, ...args] = state.inputs;
    return {
        command,
        arguments: args,
        flags: state.flags
    }
}