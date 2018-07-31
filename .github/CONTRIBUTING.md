# Contributing

Read the general [adidas contributing guidelines](https://github.com/adidas/adidas-contribution-guidelines/wiki/Contributing).

### Updating a package

Most of the rules have three states: enabled, disabled and warning.

- Disabled: `0`/`"off"`.
- Enabled: `2`/`"on"`.
- Warning: `1`/`"warn"`
    - The warning level is disallowed in any of the configurations.

Each configuration is inside the `packages` folder, and it is independent, so it requires:

- Updating the version of its own `package.json`.
    - If there are any packages with dependency on the modified one, check if they should update their version too.
- Adding the changelog information in its own `CHANGELOG.md` at the top of the file.

Root version and changelog should not be updated.

### Checking coding guidelines

ESLint is used to check the JavaScript coding style of the different configurations:

```
npm run lint
```

### Releasing a package

Once the version and changelog of either a package or several packages are updated, the publication script has to be executed.

```
npm run lerna:publish
```

There is a dry-run mode to test that everything works before executing the NPM publication:

```
DRY_RUN=true npm run lerna:publish
```