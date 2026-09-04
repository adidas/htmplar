import { createServer } from 'vite';
import react from '@vitejs/plugin-react';
import chalk from 'chalk';
import path from 'path';

interface DevOptions {
  port: string;
  open: boolean;
}

export async function startDevServer(options: DevOptions) {
  const port = parseInt(options.port, 10);

  try {
    // Create Vite dev server
    const server = await createServer({
      configFile: false,
      root: process.cwd(),
      server: {
        port,
        open: options.open,
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@adidas/htmplar-core': path.resolve(process.cwd(), 'node_modules/@adidas/htmplar-core'),
          '@adidas/htmplar-renderer': path.resolve(process.cwd(), 'node_modules/@adidas/htmplar-renderer'),
        },
      },
    });

    await server.listen();

    console.log('');
    console.log(chalk.green('✅ Dev server running!'));
    console.log('');
    console.log(chalk.cyan(`   ➜  Local:   http://localhost:${port}/`));
    console.log('');
    console.log(chalk.gray('   Press Ctrl+C to stop'));
    console.log('');

    // Keep process alive
    process.on('SIGTERM', async () => {
      await server.close();
      process.exit(0);
    });

    process.on('SIGINT', async () => {
      console.log('');
      console.log(chalk.yellow('Stopping dev server...'));
      await server.close();
      process.exit(0);
    });
  } catch (error) {
    console.error(chalk.red('Failed to start dev server:'), error);
    throw error;
  }
}
