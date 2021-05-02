import yargsParser from 'yargs-parser'
import { render } from 'ink';
import React, { FC } from 'react';

const parser = (HelpComponent: FC<any>) => {
    let args = yargsParser(process.argv.splice(2));
    let inputs = args._;
    // @ts-ignore
    delete args._;
    let flags = args;

    if (Object.keys(flags).includes("help") || Object.keys(flags).includes("h")) {
        render(<HelpComponent />);
        process.exit()
    }

    return { inputs, flags };
}


module.exports = parser;