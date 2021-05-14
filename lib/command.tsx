import * as React from 'react';
import { CommandProps } from './types';


export const Command = (props: CommandProps) => {
    if (props.component) {
        return props.component;
    }
    return <>{props.children}</>
}
