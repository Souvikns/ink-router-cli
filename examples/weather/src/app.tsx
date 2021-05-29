import React from 'react';
import { Router, Switch, Command } from 'ink-router-cli';

import Temp from './components/temp';

const App = () => {

    return <Router argv={process.argv} name="weather" >
        <Switch>
            <Command name="temp" component={<Temp />} />
        </Switch>
    </Router>
}

module.exports = App;
export default App;