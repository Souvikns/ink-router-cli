import React, { createContext } from 'react';
import yargs from 'yargs-parser';
import { RouterProps, ContextState } from './types'

export const store = createContext({});

export const Router = ({ children, argv, autoHelp, description, name }: RouterProps) => {
    let args = yargs(argv.splice(2));
    let inputs = args._;
    // @ts-ignore
    delete args._;
    let state: ContextState = { inputs, flags: args, config: { autoHelp, name, description } }
    return <store.Provider value={{ state }}>{children}</store.Provider>
}
