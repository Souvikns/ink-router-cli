<p align="center">
<img src="./media/connection.svg" width="200" />
</p>

<h1 align="center">
INK-ROUTER-CLI
</h1>


## Installation 
ink-router-cli runs with [ink](https://github.com/vadimdemedes/ink) and is avaiable as a NPM package. 
```
npm install --save ink-router-cli
```

## Usage
ink-router-cli was heavily influenced by [react-router](https://reactrouter.com/), so most of the concepts are similiar with `react-route`.

```tsx
import {Router, Switch, Command} from 'ink-router-cli';
import {render, Text} from 'ink';

const App = () => {

    return <Router argv={process.argv}>
        <Switch>
            <Command name="create" component={<Text>Create Command</Text>}  />
        </Switch>
    </Router>
}

render(<App />)
```