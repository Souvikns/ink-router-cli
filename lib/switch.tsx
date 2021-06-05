import React, { ReactElement } from 'react';
import { store } from './router'
import { Command } from './command';
import { SwitchProps, HelpCommands, HelpFlags } from './types';
import { Flag } from './flags';
import { NoMatch } from './nomatch';
import Help from './components/help';
import { useCli, useConfig } from './hooks';
import _ from 'lodash';

export const Switch = (props: SwitchProps) => {
    let cli = useCli();
    let config = useConfig();
    // TODO: check for noMatch case
    // TODO: check for flag case
    // TODO: check for command case
    const children = React.Children.toArray(props.children) as React.ReactElement[];
    let commandComponents = children.filter(c => c.type === Command);
    let flagComponent = children.filter(c => c.type === Flag);
    let noMatchComponent = children.filter(c => c.type === NoMatch);

    if (!_.isEmpty(cli.flags)) {
        // @ts-ignore
        Object.keys(cli.flags).forEach(el => {
            let flagComp = flagComponent.find(c => c.props.name === el || c.props.alias === el);
            if (flagComp && (flagComp.props.children || flagComp.props.component)) {
                return <>{flagComp}</>
            }
        })
    }


    if (cli.command) {
        let matchedCommand = commandComponents.find(c => c.props.name === cli.command);
        return <>{matchedCommand}</>
    }

    if (typeof cli.command === "undefined" && _.isEmpty(cli.flags)) {
        return <>{noMatchComponent}</>;
    }

    // let st: any = React.useContext(store);

    // let commands = children.filter(c => c.type === Command).map(c => ({
    //     name: c.props.name,
    //     description: c.props.description,
    //     flags: c.props.flags,
    //     inputs: c.props.inputs
    // }));
    // let flags = children.filter(c => c.type === Flag).map(c => ({
    //     name: c.props.name,
    //     alias: c.props.alias,
    //     description: c.props.description
    // }))

    // if (st.state.flags.help || st.state.flags.h) {
    //     return <Help commands={commands as Array<HelpCommands>} flags={flags as Array<HelpFlags>} />
    // }

    // let MatchedComponent = children.find(c => c.type === Command && st.state.inputs[0] === c.props.name);
    // let FlagComponent = children.find(
    //     c => c.type === Flag &&
    //         (
    //             Object.keys(st.state.flags).includes(c.props.name) ||
    //             Object.keys(st.state.flags).includes(c.props.alias)
    //         ))

    // if (FlagComponent) {
    //     return <>{FlagComponent}</>
    // }

    // return <>{MatchedComponent}</>;
    return <></>
}
