import React from 'react';
import Error from '../error';
import { render } from 'ink-testing-library';
import chalk from 'chalk';

describe('Error Component', () => {
    it("should render bright red error message", () => {
        let errorMessage: string = "Missing Flags"
        let { lastFrame } = render(<Error message={errorMessage} />)
        expect(lastFrame()).toMatch(chalk.redBright(errorMessage));
    })
})
