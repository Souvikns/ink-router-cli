import * as React from 'react';

export interface CommandProps {
    children?: React.ReactNode,
    name: string,
    description?: string,
    component?: React.ReactElement
    flags?: any
}

export const Command = (props: CommandProps) => {
    if (props.component) {
        return props.component;
    }
    return <>{props.children}</>
}