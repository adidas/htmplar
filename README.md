<p style="width: 100%; padding: 100px; text-align: center;"><img src="./.github/images/logo.png" width="250" align="right" alt="HTML Templar" /></p>

Templar
==========
Templar is an e-mail oriented HTML generator. It is created for developer friendly e-mail template development. By leveraging the component structure with your favorite framework or no-framework, it composes a reusable and maintainable pipeline for the e-mail projects.

* [Getting Started](#getting-started)
* Core Modules
  * [@htmplar/cli](./packages/htmplar-cli)
  * [@htmplar/base](./packages/htmplar-base)
  * [@htmplar/renderer](./packages/htmplar-renderer)
  * [@htmplar/serve](./packages/htmplar-serve)
* Plugins
  * [@htmplar/react](./packages/htmplar-react)
* [Configure](#configure)
  * [.htmplarrc](#configuration-file)
  * [Configuration Options](#configuration-options)

# Getting Started
Templar has a cli tool (_@htmplar/cli_) for rendering you JS components to HTML and save them both single e-mail html and reusable e-mail content blocks.

Get @htmplar/cli by installing globally where commands become available as `htmplar <cmd>`

``` bash
# Install Template CLI globally
npm install @htmplar/cli -g
```

By creating a new project with a main dependency `@htmplar/base` and cli commands

``` bash
npm install @htmplar/base --save-dev
```

After that finishes installing, your `package.json` file should include:

``` json
"scripts": {
  "dev": "htmplar develop",
  "serve": "htmplar serve"
},
"devDependencies": {
  "@htmplar/base": "^1.0.0-beta.1"
}
```

Then you can choose renderer (you favorite framework) for your JS based components

``` bash
npm install @htmplar/plugin-react --save-dev
```

With this setup your project is ready for development. After you can start the development mode.

``` bash
npm run dev
```

When you run the `dev` script, CLI initially renders your component, create the static server folder, starts the server (default: http://localhost:3000) and watches your source files

# Configuration
According to your team setup and naming conventions, you can easily overwrite default configuration.

## Configuration File
You can extend default configuration by creating a `htmplar` config file (`.htmplarrc`, `.htmplarrc.json`). This configuration file is available for all base modules and plugins

``` json
{
  "source": "src",
  "output": "content",
  "assets": "assets",
  "extension": "html",
  "block": {
    "convert": true,
    "prefix": "block-"
  },
  "server": {
    "port": 3000
  },
  "renderer": "React",
  "logs": "detailed",
  "linting": [
    true,
    {
      "exitOnError": true
    }
  ]
}
```

### Configuration Options
| Option | Default  | Description
| ------ | -------- | ------------
| source | `src`      | The folder where your components' source files
| output | `content`  | The output folder where the converted HTML files will be saved
| extension | `html`  | The extension of the saved files
| exclude | `[]` | Array of folder or file paths inside of your `source` folder. The matched files will be excluded from conversion.
| blocks | `{}` | An object for block definitions. Normally _htmplar_ converts all matched components to HTML. You can define a prefix and convert option. Then, _htmplar_ will look for, file names with a defined _prefix_ and convert these blocks along with the other components. The difference between normal conversion and block conversion is, block only converts the HTML of that component where normal convert, adds also _DOCTYPE_, _html_, _head_ and _body_ tags
| server | `{}` | An object for development server options like server port, assets path etc.
| renderer | `React` | Base UI framework for components.
| logs   | `detailed` | The amount of logging visible in the CLI output. `detailed` will display logs for each file converted. `summary` will display only command starting and endings, `none` will display nothing.
| linting| `true` | Linting of the JS code with the help of the ESLint. You can create an `.eslintrc` file to define/overwrite defaults.