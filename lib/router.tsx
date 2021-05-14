import React, { createContext } from 'react';
import yargs from 'yargs-parser';
import { RouterProps } from './types'

export const store = createContext({});

export const Router = ({ children, argv }: RouterProps) => {
    let args = yargs(argv.splice(2));
    let inputs = args._;
    // @ts-ignore
    delete args._;
    let state = { inputs, flags: args }
    return <store.Provider value={{ state }}>{children}</store.Provider>
}