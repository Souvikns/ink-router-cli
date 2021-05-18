import React from 'react';

export interface ContextState {
    inputs: string[],
    flags: any,
    config: {
        autoHelp?: boolean,
        name?: string,
        description?: string
    }
}

export interface RouterProps {
    children: React.ReactNode,
    argv: string[],
    name?: string,
    description?: string,
    autoHelp?: boolean
}

export interface SwitchProps {
    children: React.ReactNode
}

export interface CommandProps {
    children?: React.ReactNode,
    name: string,
    description?: string,
    component?: React.ReactElement,
}

export interface Cli {
    inputs: string[],
    flags: any
}

export interface FlagProps {
    name: string,
    alias: string,
    children?: React.ReactNode,
    component?: React.ReactElement
    description?: string
}
