import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';
import ora from 'ora';
import inquirer from 'inquirer';

interface ProjectConfig {
  name: string;
  path: string;
  packageManager: 'npm' | 'yarn' | 'pnpm';
  typescript: boolean;
}

export async function scaffold() {
  console.log(chalk.bold.cyan('\n✨ Welcome to HTMplar!\n'));

  const projectName = process.argv[2];

  // If project name is provided via CLI and not in interactive terminal, use defaults
  const isInteractive = process.stdin.isTTY;

  let config: ProjectConfig;

  if (projectName && !isInteractive) {
    // Non-interactive mode - use defaults
    config = {
      name: projectName,
      path: join(process.cwd(), projectName),
      packageManager: 'npm',
      typescript: true,
    };
    console.log(chalk.dim(`Creating project: ${projectName}`));
    console.log(chalk.dim('Using defaults: npm, TypeScript\n'));
  } else {
    // Interactive mode - prompt for options
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project name:',
        default: projectName || 'my-emails',
        validate: (input: string) => {
          if (!input || input.trim() === '') {
            return 'Project name cannot be empty';
          }
          if (!/^[a-z0-9-_]+$/i.test(input)) {
            return 'Project name can only contain letters, numbers, dashes, and underscores';
          }
          return true;
        },
      },
      {
        type: 'list',
        name: 'packageManager',
        message: 'Package manager:',
        choices: ['npm', 'yarn', 'pnpm'],
        default: 'npm',
      },
      {
        type: 'confirm',
        name: 'typescript',
        message: 'Use TypeScript?',
        default: true,
      },
    ]);

    config = {
      name: answers.name,
      path: join(process.cwd(), answers.name),
      packageManager: answers.packageManager,
      typescript: answers.typescript,
    };
  }

  await createProject(config);
}

async function createProject(config: ProjectConfig) {
  const spinner = ora(`Creating project: ${config.name}`).start();

  try {
    // Create directories
    await mkdir(join(config.path, 'src'), { recursive: true });
    await mkdir(join(config.path, 'dist'), { recursive: true });

    spinner.text = 'Creating package.json...';
    await createPackageJson(config);

    spinner.text = 'Creating configuration files...';
    if (config.typescript) {
      await createTsConfig(config);
    }
    await createGitIgnore(config);
    await createReadme(config);

    spinner.text = 'Creating example email...';
    await createExampleEmail(config);

    spinner.text = 'Creating dev server files...';
    await createIndexHtml(config);
    await createMainFile(config);

    spinner.succeed(chalk.green('Project created!'));

    // Install dependencies
    console.log('');
    const installSpinner = ora('Installing dependencies...').start();
    try {
      const installCmd = getInstallCommand(config.packageManager);
      execSync(installCmd, {
        cwd: config.path,
        stdio: 'pipe',
      });
      installSpinner.succeed(chalk.green('Dependencies installed!'));
    } catch (error) {
      installSpinner.fail(
        chalk.yellow('Failed to install dependencies automatically')
      );
      console.log(
        chalk.dim(
          `\nYou can install them manually by running: ${getInstallCommand(config.packageManager)}`
        )
      );
    }

    // Success message
    console.log('');
    console.log(chalk.bold.green('🎉 All done!'));
    console.log('');
    console.log(chalk.cyan('Next steps:'));
    console.log('');
    console.log(`  ${chalk.bold(`cd ${config.name}`)}`);
    console.log(
      `  ${chalk.bold(getDevCommand(config.packageManager))} - Start dev server`
    );
    console.log(
      `  ${chalk.bold(getBuildCommand(config.packageManager))} - Build emails`
    );
    console.log('');
  } catch (error) {
    spinner.fail('Failed to create project');
    throw error;
  }
}

async function createPackageJson(config: ProjectConfig) {
  const packageJson = {
    name: config.name,
    version: '1.0.0',
    private: true,
    type: 'module',
    scripts: {
      dev: 'htmplar dev',
      build: 'htmplar build',
      preview: 'htmplar preview',
    },
    dependencies: {
      '@adidas/htmplar-core': '^2.0.0-alpha.0',
      '@adidas/htmplar-renderer': '^2.0.0-alpha.0',
      react: '^18.3.1',
      'react-dom': '^18.3.1',
    },
    devDependencies: {
      '@adidas/htmplar-cli': '^2.0.0-alpha.0',
      '@types/react': '^18.3.8',
      '@types/react-dom': '^18.3.0',
      ...(config.typescript ? { typescript: '^5.6.2' } : {}),
    },
  };

  await writeFile(
    join(config.path, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
}

async function createTsConfig(config: ProjectConfig) {
  const tsConfig = {
    compilerOptions: {
      target: 'ES2022',
      lib: ['ES2022', 'DOM'],
      module: 'ESNext',
      moduleResolution: 'bundler',
      jsx: 'react-jsx',
      strict: true,
      esModuleInterop: true,
      skipLibCheck: true,
      forceConsistentCasingInFileNames: true,
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
    },
    include: ['src/**/*'],
    exclude: ['node_modules', 'dist'],
  };

  await writeFile(
    join(config.path, 'tsconfig.json'),
    JSON.stringify(tsConfig, null, 2)
  );
}

async function createGitIgnore(config: ProjectConfig) {
  const gitignore = `# Dependencies
node_modules/

# Build output
dist/

# Environment variables
.env
.env.local

# Editor
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
`;

  await writeFile(join(config.path, '.gitignore'), gitignore);
}

async function createReadme(config: ProjectConfig) {
  const runPrefix = getRunPrefix(config.packageManager);
  const installCmd = getInstallCommand(config.packageManager);

  const readme = `# ${config.name}

Email templates built with HTMplar.

## Getting Started

\`\`\`bash
# Install dependencies
${installCmd}

# Start development server with hot reload
${runPrefix}dev

# Build production-ready HTML emails
${runPrefix}build

# Preview built emails in browser
${runPrefix}preview
\`\`\`

## Project Structure

- \`src/\` - Email source files (React components)
- \`dist/\` - Built HTML files (generated)

## Creating Emails

Create a new \`.tsx\` file in the \`src/\` directory:

\`\`\`tsx
import React from 'react';
import { Block, Text, Button } from '@adidas/htmplar-core';

export default function MyEmail() {
  return (
    <Block backgroundColor="#ffffff" padding={40}>
      <Text fontSize={24}>Hello World!</Text>
      <Button href="https://example.com">
        Click me
      </Button>
    </Block>
  );
}
\`\`\`

## Documentation

- [HTMplar Documentation](https://github.com/adidas/htmplar)
- [Component Reference](https://github.com/adidas/htmplar#components)

## License

MIT
`;

  await writeFile(join(config.path, 'README.md'), readme);
}

async function createExampleEmail(config: ProjectConfig) {
  const ext = config.typescript ? 'tsx' : 'jsx';

  const exampleEmail = `import React from 'react';
import { Block, Text, Button } from '@adidas/htmplar-core';

export default function WelcomeEmail() {
  return (
    <Block backgroundColor="#f4f4f4" padding={40}>
      <Block backgroundColor="#ffffff" padding={30} maxWidth={600}>
        <Text fontSize={24} fontWeight="bold" align="center">
          Welcome to HTMplar!
        </Text>

        <Block marginTop={20}>
          <Text fontSize={16} color="#666666" align="center">
            Start building amazing email templates with React and TypeScript.
          </Text>
        </Block>

        <Block marginTop={30}>
          <Button
            href="https://github.com/adidas/htmplar"
            backgroundColor="#000000"
            color="#ffffff"
            padding="12px 24px"
            fullWidth
          >
            View Documentation
          </Button>
        </Block>

        <Block marginTop={30}>
          <Text fontSize={14} color="#999999" align="center">
            Edit src/welcome.${ext} to get started
          </Text>
        </Block>
      </Block>
    </Block>
  );
}
`;

  await writeFile(join(config.path, 'src', `welcome.${ext}`), exampleEmail);
}

function getInstallCommand(pm: ProjectConfig['packageManager']): string {
  switch (pm) {
    case 'yarn':
      return 'yarn';
    case 'pnpm':
      return 'pnpm install';
    default:
      return 'npm install';
  }
}

function getRunPrefix(pm: ProjectConfig['packageManager']): string {
  switch (pm) {
    case 'yarn':
      return 'yarn ';
    case 'pnpm':
      return 'pnpm ';
    default:
      return 'npm run ';
  }
}

function getDevCommand(pm: ProjectConfig['packageManager']): string {
  return `${getRunPrefix(pm)}dev`;
}

function getBuildCommand(pm: ProjectConfig['packageManager']): string {
  return `${getRunPrefix(pm)}build`;
}

async function createIndexHtml(config: ProjectConfig) {
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTMplar Dev - Email Templates</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.${config.typescript ? 'tsx' : 'jsx'}"></script>
  </body>
</html>
`;

  await writeFile(join(config.path, 'index.html'), html);
}

async function createMainFile(config: ProjectConfig) {
  const ext = config.typescript ? 'tsx' : 'jsx';

  const mainFile = `import React from 'react';
import { createRoot } from 'react-dom/client';
import WelcomeEmail from './welcome';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <h1>📧 HTMplar Email Templates</h1>
      <p style={{ color: '#666', marginTop: '10px' }}>
        Preview your email templates below. Changes will hot reload automatically.
      </p>

      <div style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '15px' }}>Welcome Email</h2>
        <div style={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <WelcomeEmail />
        </div>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root')${config.typescript ? '!' : ''});
root.render(<App />);
`;

  await writeFile(join(config.path, 'src', `main.${ext}`), mainFile);
}
