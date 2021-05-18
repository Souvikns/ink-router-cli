import React, { FC } from 'react';

const Help: FC<{
    commands: [{
        name: string,
        description: string,
        inputs: {
            [name: string]: {
                required: string,
                type: string
            }
        },
        flags: {
            [name: string]: {
                alias: string,
                description: string
            }
        }
    }],
    flags: {
        [name: string]: {
            alias: string,
            description: string
        }
    }
}> = () => {

    return <></>
}


export default Help;
module.exports = Help;