import React from 'react';
import { store } from './router'
import { Command } from './command';
import { SwitchProps } from './types';
import { Flag } from './flags';


export const Switch = (props: SwitchProps) => {
    const children = React.Children.toArray(props.children) as React.ReactElement[];
    let st: any = React.useContext(store);
    let MatchedComponent = children.find(c => c.type === Command && st.state.inputs[0] === c.props.name);
    let FlagComponent = children.find(
        c => c.type === Flag &&
            (
                Object.keys(st.state.flags).includes(c.props.name) ||
                Object.keys(st.state.flags).includes(c.props.alias)
            ))

    if (FlagComponent) {
        return <>{FlagComponent}</>
    }

    return <>{MatchedComponent}</>;
}