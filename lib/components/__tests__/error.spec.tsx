import React from 'react';
import Error from '../error';
import { render } from 'ink-testing-library';

describe('Error Component', () => {
    it("should render bright red error message", () => {
        let { lastFrame } = render(<Error message="Missing Flags" />)
        expect(lastFrame()).toMatch(/Missing Flags/);
    })
})
