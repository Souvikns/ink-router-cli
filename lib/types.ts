import React from 'react';

export interface RouterProps {
    children: React.ReactNode,
    argv: string[]
}

export interface SwitchProps {
    children: React.ReactNode
}

export interface CommandProps {
    children?:React.ReactNode,
    name: string,
    description?: string,
    component?:React.ReactElement,
}

export interface Cli {
    inputs: string[],
    flags: any
}
