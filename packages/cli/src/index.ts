/**
 * @adidas/htmplar-cli - Command line interface
 * @packageDocumentation
 */

export const version = '2.0.0-alpha.0';

// Export commands
export { startDevServer } from './commands/dev';
export { buildEmails } from './commands/build';
export { startPreviewServer } from './commands/preview';
export { initProject } from './commands/init';
