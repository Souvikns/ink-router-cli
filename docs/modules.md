[ink-cli-parser](README.md) / Exports

# ink-cli-parser

## Table of contents

### Interfaces

- [Cli](interfaces/cli.md)
- [CommandFlags](interfaces/commandflags.md)
- [CommandInput](interfaces/commandinput.md)
- [CommandProps](interfaces/commandprops.md)
- [ContextState](interfaces/contextstate.md)
- [FlagProps](interfaces/flagprops.md)
- [HelpCommands](interfaces/helpcommands.md)
- [HelpFlags](interfaces/helpflags.md)
- [HelpProp](interfaces/helpprop.md)
- [RouterProps](interfaces/routerprops.md)
- [SwitchProps](interfaces/switchprops.md)

### Type aliases

- [inputType](modules.md#inputtype)

### Functions

- [Command](modules.md#command)
- [Router](modules.md#router)
- [Switch](modules.md#switch)
- [useCli](modules.md#usecli)
- [useConfig](modules.md#useconfig)

## Type aliases

### inputType

Ƭ **inputType**: ``"string"`` \| ``"boolean"`` \| ``"number"``

Defined in: [types.ts:45](https://github.com/Souvikns/ink-cli-parser/blob/e7f88e8/lib/types.ts#L45)

## Functions

### Command

▸ `Const` **Command**(`props`: [*CommandProps*](interfaces/commandprops.md)): *Element*

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [*CommandProps*](interfaces/commandprops.md) |

**Returns:** *Element*

Defined in: [command.tsx:5](https://github.com/Souvikns/ink-cli-parser/blob/e7f88e8/lib/command.tsx#L5)

___

### Router

▸ `Const` **Router**(`__namedParameters`: [*RouterProps*](interfaces/routerprops.md)): *Element*

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [*RouterProps*](interfaces/routerprops.md) |

**Returns:** *Element*

Defined in: [router.tsx:7](https://github.com/Souvikns/ink-cli-parser/blob/e7f88e8/lib/router.tsx#L7)

___

### Switch

▸ `Const` **Switch**(`props`: [*SwitchProps*](interfaces/switchprops.md)): *Element*

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [*SwitchProps*](interfaces/switchprops.md) |

**Returns:** *Element*

Defined in: [switch.tsx:9](https://github.com/Souvikns/ink-cli-parser/blob/e7f88e8/lib/switch.tsx#L9)

___

### useCli

▸ `Const` **useCli**(): *object*

**Returns:** *object*

| Name | Type |
| :------ | :------ |
| `arguments` | *string*[] |
| `command` | *string* |
| `flags` | *any* |

Defined in: [hooks.tsx:6](https://github.com/Souvikns/ink-cli-parser/blob/e7f88e8/lib/hooks.tsx#L6)

___

### useConfig

▸ `Const` **useConfig**(): *object*

**Returns:** *object*

| Name | Type |
| :------ | :------ |
| `autoHelp?` | *boolean* |
| `description?` | *string* |
| `name?` | *string* |

Defined in: [hooks.tsx:16](https://github.com/Souvikns/ink-cli-parser/blob/e7f88e8/lib/hooks.tsx#L16)
