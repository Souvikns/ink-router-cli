import React from 'react';
import { Command } from './command';
import { SwitchProps } from './types';
import { Flag } from './flags';
import { NoMatch } from './nomatch';
import { useCli } from './hooks';
import _ from 'lodash';

export const Switch = (props: SwitchProps) => {
    let cli = useCli();
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
