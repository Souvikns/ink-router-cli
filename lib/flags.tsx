import React from 'react';
import { FlagProps } from './types';

export const Flag = (props: FlagProps) => {
    if (props.component) {
        return props.component
    }
    return <>{props.children}</>
}