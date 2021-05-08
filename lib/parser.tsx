import yargsParser from 'yargs-parser';
import React, { FC } from 'react';
import Error from './components/error';
import { render } from 'ink';

export type OptionType = "boolean" | "string" | "number"

export interface OptionFlags {
    [name: string]: {
        required?: boolean,
        type?: OptionType,
        alias: string
    }
}

export interface ParserOption {
    helpComponent?: FC<{ message: string }>,
    flags?: OptionFlags
    option?: {
        errorComponent?: FC<any>,
    }
}

export const getCli = (): { inputs: string[], flags: any } => {
    let args = yargsParser(process.argv.slice(2));
    let inputs: string[] = args._;
    // @ts-ignore
    delete args._;
    let flags: any = args;

    return { inputs, flags };
}

export const renderHelpComponent = (HelpComponent: FC<any>) => {
    render(<HelpComponent />);
    process.exit();
}

export const checkForHelpFlags = (flags: any): boolean => {
    if (Object.keys(flags).includes("help") || Object.keys(flags).includes("h")) {
        return true
    }

    return false
}

export const checkRequiredFlags = (flags: any, flagOptions: OptionFlags) => {
    let found = false
    for (const [key, value] of Object.entries(flagOptions)) {
        if (value.required) {
            let fnd = Object.keys(flags).includes(key) || Object.keys(flags).includes(value.alias);
            if (!fnd) found = true;
        }
    }

    return found
}

export const checkFlags = (flags: any, flagOptions: OptionFlags | undefined) => {
    if (flagOptions) {
        let hasAllRequiredFlags = checkRequiredFlags(flags, flagOptions);
        if (hasAllRequiredFlags) {
            render(<Error message="Missing required flags" />);
            process.exit();
        }
    }
}

const parser = (options?: ParserOption) => {
    let ErrorComponent: FC<{ message: string }> | undefined = options?.option?.errorComponent || Error;
    let HelpComponent: FC<any> | undefined = options?.helpComponent;

    let { inputs, flags } = getCli();

    // TODO: If cli do not has -h or --help flag then we will perform checks if any
    if (HelpComponent && checkForHelpFlags(flags)) {
        renderHelpComponent(HelpComponent);
    }

    if(options){
        checkFlags(flags, options.flags)
    }

    return { inputs, flags };
}

export default parser;