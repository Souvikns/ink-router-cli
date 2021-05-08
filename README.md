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
ink-cli-parser is a cli parser tool that is built just for [ink](https://github.com/vadimdemedes/ink). You can pass in you custom ink help component and error component. 


## Table Of Contents
- [Getting Started](#getting-started)
    - [Installation](#installation)
- [Usage](#usage)
- [Api reference](#api-reference)


## Getting Started
To install `ink-cli-parser`, ensure that you have Node.js >=10. [Install nodejs from here](https://nodejs.org/en/)


### Installation
The easiest way to install `ink-cli-parser` is using NPM. If you have Node.js installed, it is most likely that you have NPM installed as well

```
$ npm install ink-cli-parser
```

## Usage

```tsx
import parser from 'ink-cli-parser';
import React, { FC } from 'react';
import { Text, Newline } from 'ink';

const Help: FC<any> = () => {

    return <>

        <Text backgroundColor="greenBright" bold color="white" > USAGE </Text>
        <Newline />
        <Text>$ cli-command {"<command>"} [options]</Text>
        <Newline />
        <Text backgroundColor="cyanBright" bold color="white" > COMMANDS </Text>
        <Newline />
        <Text><Text color="cyanBright">new</Text> creates a new file</Text>
        <Text><Text color="cyanBright">duplicate</Text> duplicates a existing file</Text>
        <Newline />
        <Text backgroundColor="yellowBright" bold color="black" > OPTIONS </Text>
        <Newline />
        <Text><Text color="yellowBright">--random</Text> prints random data</Text>
        
    </>
}

let cli = parser({helpComponent: Help});

console.log(cli)
// {inputs: [], flags: {h: true}}
}

```

![ss](https://github.com/Souvikns/ink-cli-parser/blob/main/ss.PNG)


--- 

## Api Reference

### `parser(options?: object)`

retuns an object with 
- `inputs` (Array) - non-flag arguments
- `flags` (Object) - flag arguments

|Parameter|Description|Required|type|
|---------|-----------|--------|----|
|options  |Pass this object to control the behaviour of the parser|false|Object|
|options.helpComponent|Pass custom ink component to render at `-h` or `--help` argument|false|`FC<any>`
|options.flags|Parser checks for the passed flagoption and then return inputs and flags|false|[`OptionFlags`](#optionflags)
|options.errorComponent|Pass custom error ink compoennt to change the default.|false|`FC<{message: string}>`

#### `OptionFlags`

Type: 
```ts
[name:string]: {
    required?: boolean,
    type?: "string" | "boolean" | "number",
    alias: string
}
```
Example:
```ts
watch: {
    alias: "w",
    type: "boolean",
    required: true
}
```
|parameter|requried|default|
|---------|--------|-------|
|alias    | true   | `null`|
|required | false  | false |
|type     | false  | boolean|

