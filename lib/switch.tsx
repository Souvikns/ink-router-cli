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
        let flagComp = flagComponent.find(c =>
            Object.keys(cli.flags).includes(c.props.name) ||
            Object.keys(cli.flags).includes(c.props.alias)
        );

        if (flagComp) {
            return flagComp;
        }
    }


    if (cli.command) {
        let matchedCommand = commandComponents.find(c => c.props.name === cli.command);
        return <>{matchedCommand}</>
    }

    if (typeof cli.command === "undefined" && _.isEmpty(cli.flags)) {
        return <>{noMatchComponent}</>;
    }


    return <></>
}
