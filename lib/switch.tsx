import React, { FC, ReactNode, useContext } from 'react';
import { store } from './router'

export const Switch: FC<{
    children: {
        commands: {
            [name: string]: ReactNode
        }
    }
}> = ({ children }) => {
    let st: any = useContext(store);

    for (const [key, values] of Object.entries(children.commands)) {
        if (st.state.inputs[0] === key) {
            return <>{values}</>
        }
    }

    return <></>
}