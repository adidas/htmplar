/**
 * React to static HTML rendering
 */
import { renderToStaticMarkup } from 'react-dom/server';
import type { ReactElement } from 'react';

export interface RenderOptions {
  /**
   * Pretty print the output HTML
   * @default false
   */
  pretty?: boolean;
  /**
   * Add email-safe doctype and wrapper
   * @default true
   */
  includeDoctype?: boolean;
}

/**
 * Render a React component to static HTML string
 */
export function renderToString(component: ReactElement, options: RenderOptions = {}): string {
  const { pretty = false } = options;

  // Render React component to static HTML
  let html = renderToStaticMarkup(component);

  // Decode HTML entities that React escapes for email compatibility
  html = html
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&amp;/g, '&');

  if (pretty) {
    // Basic pretty printing (we'll use a library for this later)
    html = html.replace(/></g, '>\n<');
  }

  return html;
}

/**
 * Wrap content in email-safe HTML document structure
 */
export function wrapInDocument(content: string, styles = ''): string {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!--[if gte mso 15]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  <title>Email</title>
  ${styles ? `<style type="text/css">\n${styles}\n</style>` : ''}
</head>
<body style="margin: 0; padding: 0; width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <center>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
      <tr>
        <td align="center" valign="top">
          ${content}
        </td>
      </tr>
    </table>
  </center>
</body>
</html>`;
}

/**
 * Render a React component to complete email HTML
 */
export function renderToEmail(
  component: ReactElement,
  options: RenderOptions & { styles?: string } = {}
): string {
  const { includeDoctype = true, styles = '', ...renderOptions } = options;

  const html = renderToString(component, renderOptions);

  if (includeDoctype) {
    return wrapInDocument(html, styles);
  }

  return html;
}
