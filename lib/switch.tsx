import React from 'react';
import { store } from './router'
import { Command } from './command';
import { SwitchProps, HelpCommands, HelpFlags } from './types';
import { Flag } from './flags';
import Help from './components/help';
import { useCli } from './hooks';


export const Switch = (props: SwitchProps) => {
    let cli = useCli();
    // TODO: check for noMatch case
    // TODO: check for flag case
    // TODO: check for command case
    const children = React.Children.toArray(props.children) as React.ReactElement[];
    let st: any = React.useContext(store);

    let commands = children.filter(c => c.type === Command).map(c => ({
        name: c.props.name,
        description: c.props.description,
        flags: c.props.flags,
        inputs: c.props.inputs
    }));
    let flags = children.filter(c => c.type === Flag).map(c => ({
        name: c.props.name,
        alias: c.props.alias,
        description: c.props.description
    }))

    if (st.state.flags.help || st.state.flags.h) {
        return <Help commands={commands as Array<HelpCommands>} flags={flags as Array<HelpFlags>} />
    }

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
