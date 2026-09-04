# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added (v2.0.0)

#### Core Components (@htmplar/core)
- **NEW**: 11 email-safe React components
  - Layout: `Block`, `Container`, `Row`, `Column`
  - Content: `Text`, `Heading`, `Image`, `Link`
  - Utility: `Button`, `Spacer`, `Divider`
- Full TypeScript support with comprehensive type definitions
- Email-safe table-based layouts for maximum compatibility
- MSO conditional comments for Outlook support
- VML buttons for bulletproof rendering in Outlook
- Responsive mobile-first design
- Dark mode support built-in

#### Renderer (@htmplar/renderer)
- **NEW**: `renderToEmail()` - Convert React components to email-safe HTML
- **NEW**: `renderToString()` - Core rendering function
- **NEW**: `getBaseStyles()` - Email resets and base styles
- HTML entity decoding for email compatibility
- MSO conditional comment support
- Responsive styles with media queries

#### CLI (@htmplar/cli)
- **NEW**: `htmplar dev` - Development server with hot reload (Vite)
- **NEW**: `htmplar build` - Build emails to static HTML
- **NEW**: `htmplar preview` - Preview built emails in browser
- **NEW**: `htmplar init` - Scaffold new email project
- Automatic CSS inlining with juice library
- Colored output and progress spinners
- Recursive file scanning for email templates

#### Infrastructure
- **NEW**: Monorepo with Turborepo + npm workspaces
- TypeScript strict mode across all packages
- ESM + CJS dual package exports
- Modern build system (tsup)
- ESLint 9 + Prettier for code quality
- Vitest + Testing Library for testing
- GitHub Actions CI/CD pipeline

### Changed

- **BREAKING**: Complete rewrite from v1
- **BREAKING**: New component API (not backward compatible)
- **BREAKING**: Requires React 18+
- **BREAKING**: Requires Node.js 18+
- Modern TypeScript (5.6+) with strict mode
- Improved email client compatibility
- Faster build times with Turborepo
- Better developer experience with hot reload

### Removed

- Old v1 component API
- jQuery dependencies
- Legacy build system
- Gulp-based workflow

## [1.x] - Legacy

See git history for v1.x releases.

---

## Migration Guide

### From v1 to v2

**1. Update dependencies:**

```bash
npm install @htmplar/core@^2.0.0 @htmplar/renderer@^2.0.0
npm install -D @htmplar/cli@^2.0.0
```

**2. Update imports:**

```tsx
// v1
import { Container, Row, Col } from 'htmplar';

// v2
import { Block, Row, Column } from '@htmplar/core';
```

**3. Update component names:**

- `Container` → `Block` or `Container`
- `Col` → `Column`
- `Btn` → `Button`
- `Img` → `Image`

**4. Use new CLI:**

```bash
# v1
gulp build

# v2
htmplar build
```

See full [Migration Guide](docs/MIGRATION.md) for details.
