/**
 * @adidas/htmplar-renderer - Email rendering engine
 * @packageDocumentation
 */

export const version = '2.0.0-alpha.0';

// Export rendering functions
export { renderToString, renderToEmail, wrapInDocument } from './render';
export type { RenderOptions } from './render';

// Export base styles
export { getBaseStyles } from './styles';

console.log(`@adidas/htmplar-renderer v${version} loaded`);
