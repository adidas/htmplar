import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import chalk from 'chalk';
import ora from 'ora';

export async function initProject(name?: string) {
  const projectName = name || 'my-emails';
  const spinner = ora(`Creating project: ${projectName}`).start();

  try {
    const projectDir = join(process.cwd(), projectName);

    // Create directories
    await mkdir(join(projectDir, 'src'), { recursive: true });
    await mkdir(join(projectDir, 'dist'), { recursive: true });

    // Create package.json
    const packageJson = {
      name: projectName,
      version: '1.0.0',
      private: true,
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
        typescript: '^5.6.2',
      },
    };

    await writeFile(join(projectDir, 'package.json'), JSON.stringify(packageJson, null, 2));

    // Create example email
    const exampleEmail = `import React from 'react';
import { Block, Text, Button } from '@adidas/htmplar-core';

export default function WelcomeEmail() {
  return (
    <Block backgroundColor="#f4f4f4" padding={40}>
      <Block backgroundColor="#ffffff" padding={30} maxWidth={600}>
        <Text fontSize={24} fontWeight="bold" align="center">
          Welcome to HTMplar!
        </Text>

        <Block padding={20}>
          <Text fontSize={16} color="#666666">
            Start building amazing emails with React and TypeScript.
          </Text>
        </Block>

        <Block padding={20}>
          <Button href="https://github.com/adidas/htmplar">
            Get Started
          </Button>
        </Block>
      </Block>
    </Block>
  );
}
`;

    await writeFile(join(projectDir, 'src', 'welcome.tsx'), exampleEmail);

    // Create README
    const readme = `# ${projectName}

HTMplar email project

## Getting Started

\`\`\`bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build emails
npm run build

# Preview built emails
npm run preview
\`\`\`

## Project Structure

- \`src/\` - Email source files (React components)
- \`dist/\` - Built HTML files
`;

    await writeFile(join(projectDir, 'README.md'), readme);

    spinner.succeed(chalk.green('Project created!'));

    console.log('');
    console.log(chalk.cyan('Next steps:'));
    console.log('');
    console.log(`  cd ${projectName}`);
    console.log('  npm install');
    console.log('  npm run dev');
    console.log('');
  } catch (error) {
    spinner.fail('Failed to create project');
    throw error;
  }
}
