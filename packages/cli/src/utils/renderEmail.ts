import { renderToEmail, getBaseStyles } from '@adidas/htmplar-renderer';
import type { ReactElement } from 'react';
import { inlineCss } from './inlineCss.js';

interface RenderEmailOptions {
  includeBaseStyles?: boolean;
  inlineCss?: boolean;
  minify?: boolean;
}

export async function renderEmailFromFile(
  filePath: string,
  options: RenderEmailOptions = {}
): Promise<string> {
  const { includeBaseStyles = true, inlineCss: shouldInline = true } = options;

  try {
    // Dynamically import the email component
    const module = await import(filePath);
    const Component = module.default || module;

    if (typeof Component !== 'function') {
      throw new Error(`File ${filePath} does not export a valid React component`);
    }

    // Create element
    const element = Component({}) as ReactElement;

    // Render to email HTML
    let html = renderToEmail(element, {
      styles: includeBaseStyles ? getBaseStyles() : '',
      includeDoctype: true,
    });

    // Inline CSS for email compatibility
    if (shouldInline) {
      html = inlineCss(html, {
        removeStyleTags: false, // Keep style tags for media queries
        preserveMediaQueries: true,
        preserveFontFaces: true,
      });
    }

    return html;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to render ${filePath}: ${error.message}`);
    }
    throw error;
  }
}
