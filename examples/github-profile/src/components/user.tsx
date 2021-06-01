import React, { useState, useEffect } from 'react';
import { Box, Text } from 'ink';
import Spinner from 'ink-spinner';
import Axios from 'axios';
import { useCli } from 'ink-router-cli';

const User = () => {
    let userName = useCli().arguments[0];

    if (!userName) {
        return <Text color="red">Please enter a valid username</Text>
    }

    const [isLoading, setLoading] = useState(false);
    const [user, setUser] = useState() as any;
    const [error, setError] = useState() as any;

    const fetchUserData = async () => {


        setLoading(true)
        try {
            let res = await Axios({
                url: `https://api.github.com/users/${userName}`,
                method: 'GET'
            })
            setUser(res.data);
            setLoading(false);
        } catch (error) {
            setError("Could'nt find this username");
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchUserData();
    }, [])

    if (isLoading) {
        return <Box paddingX={2} paddingY={1}>
            <Text>
                <Text color="green">
                    <Spinner type="dots" />
                </Text>
                {` Loading`}
            </Text>
        </Box>
    }

    if (user) {
        return <Box paddingX={2} paddingY={1}>
            <Box flexDirection="row" justifyContent="center" borderStyle="round" borderColor="green" paddingX={1}>
                <Text>
                    {user && <Text>{user.login}</Text>}
                </Text>
            </Box>

        </Box>
    }

    if (error) {
        return <Text color="red">{error}</Text>
    }

    return <></>

}

export default User;
module.exports = User;