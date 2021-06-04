import React, { createContext } from 'react';
import { RouterProps, ContextState } from './types'
import meow from 'meow';

export const store = createContext({});

/**
 *
 * ```typescript
 * render(<Router argv={process.argv}>
 *  <App />
 * </Router)
 * ```
 */
export const Router = ({ children, argv, autoHelp, description, name }: RouterProps) => {
    let { input, flags } = meow('', { autoHelp: false, argv: argv.splice(2) });
    let state: ContextState = { input, flags, config: { autoHelp, name, description } }
    return <store.Provider value={{ state }}>{children}</store.Provider>
}
