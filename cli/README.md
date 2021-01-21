@wolox/cookbook-cli
===================

Wolox Cookbook CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@wolox/cookbook-cli.svg)](https://npmjs.org/package/@wolox/cookbook-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@wolox/cookbook-cli.svg)](https://npmjs.org/package/@wolox/cookbook-cli)
[![License](https://img.shields.io/npm/l/@wolox/cookbook-cli.svg)](https://github.com/Wolox/frontend-cookbook/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @wolox/cookbook-cli
$ cookbook COMMAND
running command...
$ cookbook (-v|--version|version)
@wolox/cookbook-cli/0.0.0 darwin-x64 node-v10.15.3
$ cookbook --help [COMMAND]
USAGE
  $ cookbook COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cookbook hello [FILE]`](#cookbook-hello-file)
* [`cookbook help [COMMAND]`](#cookbook-help-command)

## `cookbook hello [FILE]`

describe the command here

```
USAGE
  $ cookbook hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ cookbook hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/Wolox/frontend-cookbook/blob/v0.0.0/src/commands/hello.ts)_

## `cookbook help [COMMAND]`

display help for cookbook

```
USAGE
  $ cookbook help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_
<!-- commandsstop -->
