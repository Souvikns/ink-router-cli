import React from 'react';
import Error from '../error';
import { render } from 'ink-testing-library';
import chalk from 'chalk';

describe('Error Component', () => {
    it("should render bright red error message", () => {
        let { lastFrame } = render(<Error message="Missing Flags" />)
        expect(lastFrame()).toMatch(chalk`Missing Flags`);
    })
})
