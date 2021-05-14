import * as React from 'react';

export interface CommandProps {
    children: React.ReactNode,
    name: string
}

export const Command = (props: CommandProps) => {
    return <>{props.children}</>
}