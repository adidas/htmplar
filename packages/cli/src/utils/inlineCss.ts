import juice from 'juice';

export interface InlineCssOptions {
  removeStyleTags?: boolean;
  preserveMediaQueries?: boolean;
  preserveFontFaces?: boolean;
}

/**
 * Inline CSS styles in HTML for email compatibility
 * Uses juice library to convert <style> tags to inline styles
 */
export function inlineCss(html: string, options: InlineCssOptions = {}): string {
  const {
    removeStyleTags = false,
    preserveMediaQueries = true,
    preserveFontFaces = true,
  } = options;

  try {
    return juice(html, {
      removeStyleTags,
      preserveMediaQueries,
      preserveFontFaces,
      applyWidthAttributes: true,
      applyHeightAttributes: true,
      insertPreservedExtraCss: true,
    });
  } catch (error) {
    console.warn('CSS inlining failed, returning original HTML:', error);
    return html;
  }
}
