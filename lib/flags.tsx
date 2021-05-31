import React from 'react';
import { FlagProps } from './types';

/**
 * 
 * @param props 
 * ```typescript
 * <Flag name="help" alias="h" />
 * ``` 
 */
export const Flag = (props: FlagProps) => {
    if (props.component) {
        return props.component
    }
    return <>{props.children}</>
}
