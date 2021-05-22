<h1 align="center">ink-cli-parser
<br> <br>
<p align="center">

<a href="https://github.com/Souvikns/ink-cli-parser/actions/workflows/node.js.yml"><img alt="GitHub license" src="https://github.com/Souvikns/ink-cli-parser/actions/workflows/node.js.yml/badge.svg"></a>
<a href="https://github.com/Souvikns/ink-cli-parser/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/Souvikns/ink-cli-parser"></a>
<a href="https://deepscan.io/dashboard#view=project&tid=8580&pid=17016&bid=374285"><img src="https://deepscan.io/api/teams/8580/projects/17016/branches/374285/badge/grade.svg" alt="DeepScan grade"></a>
<img alt="npm" src="https://img.shields.io/npm/dw/ink-cli-parser">

</p>

</h1>

## ink-cli-parser

ink-cli-parser is a cli parser tool that is built just for
[ink](https://github.com/vadimdemedes/ink). You can pass in you custom ink help
component and error component.

## Table Of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
- [Api reference](#api-reference)

## Getting Started

To install `ink-cli-parser`, ensure that you have Node.js >=10.
[Install nodejs from here](https://nodejs.org/en/)

### Installation

The easiest way to install `ink-cli-parser` is using NPM. If you have Node.js
installed, it is most likely that you have NPM installed as well

```
$ npm install ink-cli-parser
```

## Usage

```tsx
import React, { FC } from "react";
import { Router, Switch, Command } from "ink-cli-router";
import { render, Text } from "ink";

const Create = () => {
  return <Text>{"Creating file"}</Text>;
};

const App: FC<{ any }> = () => {
  return (
    <Router argv={process.argv}>
      <Switch>
        <Command name="create" component={<Create />} />
      </Switch>
    </Router>
  );
};

render(<App />);
```

![ss](https://github.com/Souvikns/ink-cli-parser/blob/main/ss.PNG)

---

## Api Reference

### Components

### `<Router>`

A `<Router>` that uses react context to keep the UI sync with the CLI argument
and falgs

`argv`: string[] <br> `name`?: string <br> `description`?: string <br>
`autoHelp`?: boolean

### `<Switch>`

Renders only the command and flags that match the CLI arguments

### `<Command>`

`name`: string <br> `description`?: string <br> `component`?: React.ReactElement

### `<Flags>`

`name`: string <br> `alias`: string <br> `component`?: React.ReactElement <br>
`description`?: string <br>

### Hooks

#### `useCli`

Use this hook to get the CLI arguments

returns

```ts
{
    command: string | undefined
    arguments: string[] | undefined
    flags: any
}
```
