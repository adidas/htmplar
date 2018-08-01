// lint

const CLIEngine = require('eslint').CLIEngine;
const defaultLinting = require('../../lib/eslint-defaults');
const { logger: { log, warn, info } } = require('../utils');

const lint = (source, cliOptions) => {
  const options = {
    baseConfig: defaultLinting,
    envs: [ 'browser' ],
    fix: true
  };

  const lintingOptions = {};

  if (cliOptions) {
    cliOptions.forEach((option, index) => {
      if (option.startsWith('--')) {
        lintingOptions[option.replace('--', '')] = cliOptions[index + 1];
      }
    });
  }

  const cli = new CLIEngine(options);

  const report = cli.executeOnFiles([ source ]);
  const formatter = CLIEngine.getFormatter();

  log(formatter(report.results));

  // stop all remaining process when error occurred
  if (report.errorCount > 0 && lintingOptions.exitOnError === 'true') {
    warn('Further commands stopped due to errors in linting. Please fix them in order to continue!');
    info('If you do not want to stop process due to the errors, you can set "exitOnError: false" in linting options.');
    process.exit(1);
  }
};

module.exports = lint;
