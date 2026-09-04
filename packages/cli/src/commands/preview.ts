import express from 'express';
import { readdir } from 'fs/promises';
import { join } from 'path';
import chalk from 'chalk';

interface PreviewOptions {
  port: string;
  open: boolean;
}

export async function startPreviewServer(options: PreviewOptions) {
  const port = parseInt(options.port, 10);
  const cwd = process.cwd();
  const distDir = join(cwd, 'dist');

  const app = express();

  // Serve static files from dist
  app.use(express.static(distDir));

  // Index page listing all emails
  app.get('/', async (_req, res) => {
    try {
      const files = await readdir(distDir);
      const htmlFiles = files.filter((f) => f.endsWith('.html'));

      const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>HTMplar Preview</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 800px;
      margin: 50px auto;
      padding: 20px;
    }
    h1 { color: #0066cc; }
    ul { list-style: none; padding: 0; }
    li { margin: 10px 0; }
    a {
      display: block;
      padding: 15px;
      background: #f4f4f4;
      border-radius: 8px;
      text-decoration: none;
      color: #333;
      transition: background 0.2s;
    }
    a:hover { background: #e0e0e0; }
  </style>
</head>
<body>
  <h1>📧 HTMplar Email Preview</h1>
  <p>${htmlFiles.length} email(s) built</p>
  <ul>
    ${htmlFiles.map((file) => `<li><a href="/${file}">${file}</a></li>`).join('')}
  </ul>
</body>
</html>
      `;

      res.send(html);
    } catch {
      res.status(500).send('Error reading dist directory');
    }
  });

  app.listen(port, () => {
    console.log('');
    console.log(chalk.green('✅ Preview server running!'));
    console.log('');
    console.log(chalk.cyan(`   ➜  Local:   http://localhost:${port}/`));
    console.log('');
    console.log(chalk.gray('   Press Ctrl+C to stop'));
    console.log('');
  });

  // Handle shutdown
  process.on('SIGTERM', () => process.exit(0));
  process.on('SIGINT', () => {
    console.log('');
    console.log(chalk.yellow('Stopping preview server...'));
    process.exit(0);
  });
}
