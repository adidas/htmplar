# Contributing to HTMplar

Thank you for contributing to HTMplar! This guide will help you get started.

## 🚀 Quick Start

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone git@github.com:YOUR_USERNAME/htmplar.git
cd htmplar

# 3. Add upstream remote
git remote add upstream git@github.com:adidas/htmplar.git

# 4. Install dependencies
npm install --legacy-peer-deps

# 5. Build packages
npm run build

# 6. Run tests
npm test
```

## 📋 Workflow

### 1. Create a Feature Branch

**Branch naming convention** (required):

```bash
feature/  - New features
fix/      - Bug fixes
chore/    - Maintenance tasks
docs/     - Documentation changes
refactor/ - Code refactoring
test/     - Test additions
ci/       - CI/CD changes
```

**Example:**
```bash
git checkout master
git pull upstream master
git checkout -b feature/add-email-preview
```

### 2. Make Your Changes

```bash
# Write code
# ...

# Run checks locally
npm run lint          # Check code style
npm run typecheck     # Check TypeScript types
npm run test          # Run tests
npm run build         # Build packages

# Format code
npm run format
```

### 3. Commit Your Changes

```bash
git add .
git commit -m "feat: add email preview feature"
```

**Commit message format:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `chore:` Maintenance
- `refactor:` Code refactoring
- `test:` Tests
- `ci:` CI/CD changes

### 4. Push to Your Fork

```bash
git push origin feature/add-email-preview
```

### 5. Open a Pull Request

1. Go to https://github.com/adidas/htmplar
2. Click "Compare & pull request"
3. Fill in the PR template
4. Request reviewers
5. Wait for CI checks to pass

### 6. Code Review

- Address reviewer comments
- Push new commits to same branch
- Mark conversations as resolved
- Wait for approval

### 7. Merge

Once approved and CI passes, a maintainer will merge your PR.

Your branch will be automatically deleted after merge.

## 🛠️ Development Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Build all packages |
| `npm run dev` | Start development mode (watch) |
| `npm run lint` | Lint all packages |
| `npm run lint:fix` | Fix lint errors automatically |
| `npm run typecheck` | Type check all packages |
| `npm run test` | Run all tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run clean` | Remove build artifacts |

## 📦 Monorepo Structure

```
htmplar/
├── packages/
│   ├── core/              # React components
│   ├── renderer/          # Rendering engine
│   ├── cli/               # CLI tool
│   └── create-htmplar/    # Project scaffolder
├── .github/
│   ├── workflows/         # CI/CD workflows
│   ├── CODEOWNERS         # Auto reviewer assignment
│   └── BRANCH_PROTECTION.md
└── docs/                  # Documentation
```

## ✅ Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Branch name follows convention (`feature/`, `fix/`, etc.)
- [ ] Code is formatted (`npm run format`)
- [ ] All linting passes (`npm run lint`)
- [ ] Type checking passes (`npm run typecheck`)
- [ ] All tests pass (`npm test`)
- [ ] Build succeeds (`npm run build`)
- [ ] Commit messages are descriptive
- [ ] PR template is filled out
- [ ] Breaking changes are documented

## 🔒 Branch Protection Rules

The `master` branch is protected:

- ✅ Requires PR before merge
- ✅ Requires 1 approval
- ✅ Requires all CI checks to pass
- ✅ Prevents force push
- ✅ Prevents deletion
- ❌ No direct pushes allowed

See [BRANCH_PROTECTION.md](./.github/BRANCH_PROTECTION.md) for details.

## 🧪 Testing

### Running Tests

```bash
# All packages
npm test

# Watch mode
npm run test:watch

# Specific package
cd packages/core
npm test
```

### Writing Tests

- Use Vitest for all tests
- Place tests in `tests/` directory
- Name test files: `*.test.ts` or `*.test.tsx`
- Follow existing test patterns

**Example:**
```typescript
import { describe, it, expect } from 'vitest';
import { MyComponent } from '../src/MyComponent';

describe('MyComponent', () => {
  it('should render correctly', () => {
    expect(MyComponent).toBeDefined();
  });
});
```

## 📝 Documentation

### Updating Documentation

- Update README.md for user-facing changes
- Update CHANGELOG.md for all changes
- Add JSDoc comments for public APIs
- Update type definitions

### Documentation Location

- **User docs**: README.md, CHANGELOG.md
- **API docs**: JSDoc in source files
- **Developer docs**: CONTRIBUTING.md, BRANCH_PROTECTION.md
- **Architecture**: MODERNIZATION_PLAN.md

## 🐛 Reporting Bugs

1. Check existing issues first
2. Use issue templates
3. Provide minimal reproduction
4. Include version information
5. Add relevant logs/screenshots

## 💡 Suggesting Features

1. Open an issue with `[Feature Request]` prefix
2. Describe the problem you're solving
3. Propose your solution
4. Consider alternatives
5. Be open to discussion

## 🎯 Code Style

### TypeScript

- Use strict mode
- Prefer explicit types over `any`
- Use interfaces for public APIs
- Document complex types

### React

- Use functional components
- Use hooks, not classes
- Keep components small and focused
- Prop types should be explicit

### General

- Follow ESLint rules
- Use Prettier for formatting
- Write descriptive variable names
- Keep functions small
- Add comments for complex logic only

## 🔧 Troubleshooting

### Common Issues

**npm install fails:**
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**Tests fail locally:**
```bash
npm run build  # Ensure packages are built first
npm test
```

**Type errors:**
```bash
npm run build  # Build dependencies first
npm run typecheck
```

**Lint errors:**
```bash
npm run lint:fix  # Auto-fix
```

## 📞 Getting Help

- Open an issue for bugs
- Open a discussion for questions
- Check existing docs first
- Tag maintainers if urgent

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Every contribution helps make HTMplar better. We appreciate your time and effort!

---

**Need more details?**
- [Branch Protection Guide](./.github/BRANCH_PROTECTION.md)
- [Modernization Plan](./MODERNIZATION_PLAN.md)
- [Publishing Guide](./PUBLISHING.md)
