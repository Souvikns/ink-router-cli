import * as React from 'react';
import { CommandProps } from './types';

/**
 * 
 * @param props 
 * 
 * ```typescript
 * <Command name="create" component={<Create />} />
 * ```
 */
export const Command = (props: CommandProps) => {
    if (props.component) {
        return props.component;
    }
    return <>{props.children}</>
}
