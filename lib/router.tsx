import React, { createContext, FC } from 'react';
import yargs from 'yargs-parser';

export const store = createContext({});

export const Router: FC<{argv: string[]}> = ({ children,argv }) => {
    let args = yargs(argv.splice(2));
    let inputs = args._;
    // @ts-ignore
    delete args._;
    let state = { inputs, flags: args }
    return <store.Provider value={{ state }}>{children}</store.Provider>
}