#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .name('htmplar')
  .description('HTMplar - Modern email development with React')
  .version('2.0.0-alpha.0');

// Dev command
program
  .command('dev')
  .description('Start development server with hot reload')
  .option('-p, --port <port>', 'Port to run the server on', '3000')
  .option('-o, --open', 'Open browser automatically', false)
  .action(async (options) => {
    console.log(chalk.blue('🚀 Starting HTMplar dev server...'));
    console.log(chalk.gray(`   Port: ${options.port}`));

    try {
      const { startDevServer } = await import('./commands/dev.js');
      await startDevServer(options);
    } catch (error) {
      console.error(chalk.red('❌ Failed to start dev server:'), error);
      process.exit(1);
    }
  });

// Build command
program
  .command('build')
  .description('Build emails to static HTML')
  .option('-o, --output <dir>', 'Output directory', 'dist')
  .option('--clean', 'Clean output directory before build', false)
  .action(async (options) => {
    console.log(chalk.blue('📦 Building emails...'));

    try {
      const { buildEmails } = await import('./commands/build.js');
      await buildEmails(options);
      console.log(chalk.green('✅ Build complete!'));
    } catch (error) {
      console.error(chalk.red('❌ Build failed:'), error);
      process.exit(1);
    }
  });

// Preview command
program
  .command('preview')
  .description('Preview built emails')
  .option('-p, --port <port>', 'Port to run preview server', '3001')
  .option('-o, --open', 'Open browser automatically', false)
  .action(async (options) => {
    console.log(chalk.blue('👀 Starting preview server...'));

    try {
      const { startPreviewServer } = await import('./commands/preview.js');
      await startPreviewServer(options);
    } catch (error) {
      console.error(chalk.red('❌ Failed to start preview:'), error);
      process.exit(1);
    }
  });

// Init command
program
  .command('init [name]')
  .description('Initialize a new HTMplar project')
  .action(async (name) => {
    console.log(chalk.blue('🎉 Initializing new HTMplar project...'));

    try {
      const { initProject } = await import('./commands/init.js');
      await initProject(name);
      console.log(chalk.green('✅ Project initialized!'));
    } catch (error) {
      console.error(chalk.red('❌ Initialization failed:'), error);
      process.exit(1);
    }
  });

program.parse();
