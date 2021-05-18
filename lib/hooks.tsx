import React from 'react';
import { store } from './router';
import { ContextState } from './types';


export const useCli = () => {
    const { state } = React.useContext(store) as { state: ContextState };
    let [command, ...args] = state.inputs;
    return {
        command,
        arguments: args,
        flags: state.flags
    }
}

export const useConfig = () => {
    const { state } = React.useContext(store) as { state: ContextState };

    return state.config;
}
