# @htmplar/cli

Command line tool for @htmplar. For creating a Templar project, check [Getting Started](../../README.md#getting-started)


## Install

``` bash
npm install @htmplar/cli --global
```

## Usage

Run `htmplar help` for full help and usage samples

### Develop
Starts an express based web server, initially renders all content and watches the changes in your `source` folder

``` bash
htmplar develop
```

Options

```
-w, --watch   Enables or disables watch mode
-l, --lint    Enables or disables linting
```

### Serve
Without watching and rendering your `source` starts an express based web server to view your `content`

``` bash
htmplar serve
```

Options

```
-p, --port    Port number for the localhost
```

### Transform
Without watching and rendering your `source` starts an express based web server to view your `content`

``` bash
htmplar transform
```

Options

```
-s, --source    Folder for the source files
-o, --output    Folder for the output files
```

By default all options are available from default `.htmplarrc` 