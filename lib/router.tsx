import React, { useReducer, createContext, FC } from 'react';

const store = createContext({});

const Router: FC<{}> = ({ children }) => {
    let [state, dispatch] = useReducer((state: any, action: any) => {
        switch (action.type) {

            default:
                return state
        }
    }, { name: "souvik" });
    return <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
}
