import React, { createContext } from 'react';
import { RouterProps, ContextState } from './types'
import meow from 'meow';

export const store = createContext({});

/**
 * 
 * @param argv 
 * @returns 
 */
const parse = (argv?: string[]): { input: string[], flags: any } => {
    let cli;
    if (argv) {
        cli = meow('', { autoHelp: false, autoVersion: false, argv: argv.splice(2) });
    } else {
        cli = meow('', { autoHelp: false, autoVersion: false });
    }
    let { input, flags } = cli;

    return { input, flags };
}

/**
 *
 * ```typescript
 * render(<Router argv={process.argv}>
 *  <App />
 * </Router)
 * ```
 */
export const Router = ({ children, argv, autoHelp, description, name, version }: RouterProps) => {
    let { input, flags } = parse(argv);
    let state: ContextState = {
        input,
        flags,
        config: {
            autoHelp,
            name,
            version,
            description
        }
    }
    return <store.Provider value={{ state }}>{children}</store.Provider>
}
