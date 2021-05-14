import React, { useReducer, createContext, FC } from 'react';
import yargs from 'yargs-parser';

export const store = createContext({});

export const Router: FC<{}> = ({ children }) => {
    let args = yargs(process.argv.splice(2));
    let inputs = args._;
    // @ts-ignore
    delete args._;
    let [state, dispatch] = useReducer((state: any, action: any) => {
        switch (action.type) {

            default:
                return state
        }
    }, {inputs, flags: args});
    return <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
}