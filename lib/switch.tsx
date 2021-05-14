import React from 'react';
import { store } from './router'
import { Command } from './command';
import { SwitchProps } from './types';


export const Switch = (props: SwitchProps) => {
    const children = React.Children.toArray(props.children) as React.ReactElement[];
    let st: any = React.useContext(store);
    let MatchedComponent = children.find(c => c.type === Command && st.state.inputs[0] === c.props.name);

    return <>{MatchedComponent}</>;
}