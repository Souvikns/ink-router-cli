<h1 align="center">ink-cli-parser
<br> <br>
<p align="center">

<a href="https://github.com/Souvikns/ink-cli-parser/actions/workflows/node.js.yml"><img alt="GitHub license" src="https://github.com/Souvikns/ink-cli-parser/actions/workflows/node.js.yml/badge.svg"></a>
<a href="https://github.com/Souvikns/ink-cli-parser/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/Souvikns/ink-cli-parser"></a>
<a href="https://deepscan.io/dashboard#view=project&tid=8580&pid=17016&bid=374285"><img src="https://deepscan.io/api/teams/8580/projects/17016/branches/374285/badge/grade.svg" alt="DeepScan grade"></a>
</p>

</h1>
A cli parser built using ink



## Installation
The easiest way to install Poki is using NPM. If you have Node.js installed, it is most likely that you have NPM installed as well

```
$ npm install ink-cli-parser
```

## Usage

```tsx
import parser from './index';
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

let cli = parser(Help);

console.log(cli)
// {inputs: [], flags: {h: true}}
}

```

![ss](https://github.com/Souvikns/ink-cli-parser/blob/main/ss.PNG)
