import React from 'react';
import { store } from './router';
export const useHistory = () => {
    const { state } = React.useContext(store) as { state: { inputs: string[], flags: any } };
    let [command, ...args] = state.inputs;
    return {
        command,
        arguments: args,
        flags: state.flags
    }
}