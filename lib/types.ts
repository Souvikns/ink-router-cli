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

export type inputType = "string" | "boolean" | "number"

export interface CommandFlags {
    [name: string]: {
        alias: string,
        type: inputType
    }
}

export interface CommandInput {
    [name: string]: {
        type: inputType,
        requried: boolean
    }
}

export interface HelpProp {

}

export interface HelpCommands {
    name: string,
    description?: string,
    inputs?: CommandInput,
    flags?: CommandFlags
}

export interface HelpFlags {
    name: string,
    alias: string,
    description?: string
}
