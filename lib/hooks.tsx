import React from 'react';
import { store } from './router';
import { ContextState, CommandInput, CommandFlags } from './types';


export const useCli = () => {
    const { state } = React.useContext(store) as { state: ContextState };
    let [command, ...args] = state.input;
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

export type HelpType = "root" | "command";

export interface useHelpConfig {
    name: string,
    inputs?: CommandInput,
    flags?: CommandFlags
}

export interface useHelpProp {
    type: HelpType,
    config: useHelpConfig
}

export const useHelp = (prop: useHelpProp) => {

    const Help = () => {
        return <></>
    }

    return Help;
}