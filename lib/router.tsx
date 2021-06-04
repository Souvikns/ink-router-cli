import React, { createContext } from 'react';
import { RouterProps, ContextState } from './types'
import meow from 'meow';
import { Text } from 'ink';

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
    if (autoHelp) {
        if (!name) {
            return <Text color="red">Pass name prop if you are auto generating help!</Text>
        }
    }
    return <store.Provider value={{ state }}>{children}</store.Provider>
}
