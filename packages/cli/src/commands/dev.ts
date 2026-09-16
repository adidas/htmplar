import { createServer, ViteDevServer } from 'vite';
import react from '@vitejs/plugin-react';
import chalk from 'chalk';
import path from 'path';
import { readdir } from 'fs/promises';

interface DevOptions {
  port: string;
  open: boolean;
}

async function discoverEmailTemplates(): Promise<string[]> {
  const srcDir = path.join(process.cwd(), 'src');
  try {
    const files = await readdir(srcDir);
    return files
      .filter(
        (file) =>
          (file.endsWith('.tsx') || file.endsWith('.jsx')) &&
          file !== 'main.tsx' &&
          file !== 'main.jsx'
      )
      .map((file) => file.replace(/\.(tsx|jsx)$/, ''));
  } catch {
    return [];
  }
}

function createRoutingPlugin(templates: string[]) {
  return {
    name: 'htmplar-routing',
    configureServer(server: ViteDevServer) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url || '';

        // Root - show index with list of templates
        if (url === '/' || url === '/index.html') {
          const templateLinks = templates
            .map(
              (name) =>
                `<li style="margin: 10px 0;"><a href="/${name}" style="color: #0066cc; text-decoration: none; font-size: 16px;">📧 ${name}</a></li>`
            )
            .join('');

          const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTMplar Email Templates</title>
    <style>
      body {
        font-family: system-ui, -apple-system, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 40px 20px;
        background: #f9f9f9;
      }
      h1 { color: #333; }
      ul { list-style: none; padding: 0; }
      a:hover { text-decoration: underline !important; }
      .card {
        background: white;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>📧 HTMplar Email Templates</h1>
      <p style="color: #666; margin-top: 10px;">
        Click on a template below to preview it. Changes will hot reload automatically.
      </p>
      ${
        templates.length > 0
          ? `<ul style="margin-top: 30px;">${templateLinks}</ul>`
          : '<p style="color: #999; margin-top: 30px;">No email templates found. Create a .tsx file in the src/ directory.</p>'
      }
    </div>
  </body>
</html>`;

          res.setHeader('Content-Type', 'text/html');
          res.end(html);
          return;
        }

        // Template routes - serve dynamic preview
        const routeMatch = url.match(/^\/([^/?]+)/);
        if (routeMatch) {
          const templateName = routeMatch[1];
          if (templates.includes(templateName)) {
            const ext = await getTemplateExtension(templateName);
            const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${templateName} - HTMplar</title>
    <style>
      body { margin: 0; padding: 0; }
      #root { min-height: 100vh; }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
      import React from 'react';
      import { createRoot } from 'react-dom/client';
      import EmailComponent from '/src/${templateName}.${ext}';

      const root = createRoot(document.getElementById('root'));
      root.render(React.createElement(EmailComponent));
    </script>
  </body>
</html>`;

            res.setHeader('Content-Type', 'text/html');
            res.end(html);
            return;
          }
        }

        next();
      });
    },
  };
}

async function getTemplateExtension(name: string): Promise<string> {
  const srcDir = path.join(process.cwd(), 'src');
  const files = await readdir(srcDir);
  const file = files.find((f) => f === `${name}.tsx` || f === `${name}.jsx`);
  return file?.endsWith('.tsx') ? 'tsx' : 'jsx';
}

export async function startDevServer(options: DevOptions) {
  const port = parseInt(options.port, 10);

  try {
    // Disable telemetry
    process.env.VITE_TELEMETRY_DISABLED = '1';

    // Discover email templates
    const templates = await discoverEmailTemplates();

    // Create Vite dev server
    const server = await createServer({
      configFile: false,
      root: process.cwd(),
      server: {
        port,
        open: options.open,
      },
      plugins: [react(), createRoutingPlugin(templates)],
      resolve: {
        alias: {
          '@adidas/htmplar-core': path.resolve(process.cwd(), 'node_modules/@adidas/htmplar-core'),
          '@adidas/htmplar-renderer': path.resolve(
            process.cwd(),
            'node_modules/@adidas/htmplar-renderer'
          ),
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
