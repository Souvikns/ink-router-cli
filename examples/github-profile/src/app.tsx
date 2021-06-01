import React from 'react';
import { Router, Switch, Command } from 'ink-router-cli';

import User from './components/user';

const App = () => {

    return <Router argv={process.argv} name="gh" >
        <Switch>
            <Command name="user" component={<User />} />
        </Switch>
    </Router>
}

module.exports = App;
export default App;
