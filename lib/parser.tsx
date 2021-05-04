import yargsParser from 'yargs-parser';
import React, { FC } from 'react';
import Error from './components/error';
import { render } from 'ink';

export interface ParserOption {
    helpComponent?: FC<{ message: string }>,
    option: {
        errorComponent?: FC<any>,
        disableHelp?: boolean
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

export const checkAndRenderHelpCommand = (
    isHelpDisabled: boolean | undefined,
    HelpComponent: FC<any> | undefined,
    ErrorComponent: FC<{ message: string }>
) => {
    if (!isHelpDisabled) {
        if (typeof HelpComponent !== "undefined") {
            render(<HelpComponent />)
            process.exit();
        } else {
            render(<ErrorComponent message="If help is not dissabled then pass a help component" />);
            process.exit();
        }
    }
}

export const checkForHelpFlags = (flags: any): boolean => {
    if (Object.keys(flags).includes("help") || Object.keys(flags).includes("h")) {
        return true
    }

    return false
}

const parser = (options: ParserOption) => {
    let ErrorComponent: FC<{ message: string }> = (options.option.errorComponent) ? options.option.errorComponent : Error
    let HelpComponent: FC<any> | undefined = (!options.option.disableHelp) ? options.helpComponent : undefined;

    let { inputs, flags } = getCli();

    (checkForHelpFlags(flags)) ? checkAndRenderHelpCommand(
        options.option.disableHelp,
        HelpComponent,
        ErrorComponent
    ) : null;

    return { inputs, flags };
}

export default parser;