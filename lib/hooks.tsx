import React from 'react';
import { store } from './router';
export const useCli = () => {
    const { state } = React.useContext(store) as { state: { inputs: string[], flags: any } };
    let [command, ...args] = state.inputs;
    return {
        command,
        arguments: args,
        flags: state.flags
    }
}