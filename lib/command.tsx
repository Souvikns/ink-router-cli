import * as React from 'react';
import { store } from './router';

export const Command: React.FC<{name?: string}> = ({ children }) => {
    let red: any = React.useContext(store);
    return <>{children}</>
}