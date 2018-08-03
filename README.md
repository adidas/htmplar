<p style="width: 100%; padding: 100px; text-align: center;">
  <img src="./.github/images/logo.png" width="250" align="right" alt="HTML Templar"/>
</p>

Templar
==========

Templar is a React to HTML converter. It is created for developer friendly e-mail template development. By leveraging the component structure with React, it composes a reusable and maintainable pipeline for the projects.

Benefits:

* Allow themable components with the help of React-JSS & Styled Components.
* Easy of use, instead of dealing with huge table based layouts, you are only dealing with small/simple React components.
* Automatic HTML conversion and e-mail friendly CSS creation.

## Use cases

The use case of this library is to create e-mail templates to improve the development process.

adidas is not responsible for the usage of this software for different purposes that the ones described in the use cases.

## Requirements and dependencies

You need [NodeJS/NPM](https://nodejs.org/) to install and run the tool.

## Installation

```
npm install htmplar --save
```

or

```
yarn add htmplar
```

Then in your **package.json**, add the following

```json
"scripts": {
  "serve": "htmplar serve",
  "develop": "htmplar dev"
}
```

All set, you can start to develop your emails by running `npm run develop` or `yarn run develop`

## Configuration

You can extend default configuration by creating a `htmplar` config file (`.htmplarrc`, `.htmplar.json`).

```json
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
| exclude | `[]` | Array of folder or file paths inside of your `source` folder. The matched files will be excluded from convertion.
| blocks | `{}` | An object for block definitions. Normally _htmplar_ converts all matched components to HTML. You can define a prefix and convert option. Then, _htmplar_ will look for, file names with a defined _prefix_ and convert these blocks along with the other components. The difference between normal conversion and block conversion is, block only converts the HTML of that component where normal convert, adds also _DOCTYPE_, _html_, _head_ and _body_ tags
| server | `{}` | An object for development server options like server port, assets path etc.
| logs   | `detailed` | The amount of logging visible in the CLI output. `detailed` will display logs for each file converted. `summary` will display only command starting and endings, `none` will display nothing.
| linting| `true` | Linting of the JS code with the help of the ESLint. You can create an `.eslintrc` file to define/overwrite defaults.

## Contributing

Check out the [CONTRIBUTING.md](.github/CONTRIBUTING.md) to know how to contribute to this project.

## License and Software Information

© adidas AG

adidas AG publishes this software and accompanied documentation (if any) subject to the terms of the MIT license with the aim of helping the community with our tools and libraries which we think can be also useful for other people. You will find a copy of the MIT license in the root folder of this package. All rights not explicitly granted to you under the MIT license remain the sole and exclusive property of adidas AG.

NOTICE: The software has been designed solely for the purpose of generating e-mail templates. The software is NOT designed, tested or verified for productive use whatsoever, nor or for any use related to high risk environments, such as health care, highly or fully autonomous driving, power plants, or other critical infrastructures or services.

If you want to contact adidas regarding the software, you can mail us at _software.engineering@adidas.com_.

For further information open the [adidas terms and conditions](https://github.com/adidas/adidas-contribution-guidelines/wiki/Terms-and-conditions) page.

### License

[MIT](LICENSE)
