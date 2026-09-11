# Publishing Guide

This document explains how to publish HTMplar packages to npm using GitHub Actions with Trusted Publishing (OIDC).

## 🔐 Authentication: Trusted Publishing (OIDC)

### ✅ Already Configured!

This repository uses **npm Trusted Publishing** with GitHub OIDC configured by the @adidas npm organization admin.

**What this means:**
- ✅ No npm tokens needed
- ✅ More secure than token-based auth
- ✅ Automatic authentication via GitHub identity
- ✅ Cryptographic provenance (proof packages came from this repo)

**How it works:**
1. GitHub provides an OIDC token proving the workflow's identity
2. npm verifies the token against trusted publisher configuration
3. Packages published with provenance signatures
4. Users can verify packages came from official adidas/htmplar repo

## 🚀 How to Publish

### Method 1: GitHub Release (Recommended)

**Best for:** Official releases, version milestones

1. **Go to Releases**
   - https://github.com/adidas/htmplar/releases/new

2. **Create Release**
   - **Tag**: `v2.0.0-alpha.0` (or your version)
   - **Title**: `v2.0.0-alpha.0`
   - **Description**: Copy from CHANGELOG.md
   - **Pre-release**: Check this for alpha/beta versions
   - Click **"Publish release"**

3. **Automatic Publishing**
   - Workflow automatically triggers
   - Builds all packages
   - Publishes to npm with provenance
   - Check: https://github.com/adidas/htmplar/actions

### Method 2: Manual Trigger

**Best for:** Quick publishes, testing, specific npm tags

1. **Go to Actions**
   - https://github.com/adidas/htmplar/actions
   - Select "Publish to npm"

2. **Run Workflow**
   - Click "Run workflow"
   - **Branch**: `master`
   - **npm dist-tag**: Choose:
     - `alpha` - Early development (default)
     - `beta` - Feature complete, testing
     - `next` - Pre-release
     - `latest` - Stable production
   - Click "Run workflow"

3. **Monitor**
   - Watch the workflow run
   - Check summary for published packages

## 📦 What Gets Published

All 4 packages are published simultaneously:

| Package | Description |
|---------|-------------|
| `@adidas/htmplar-core` | React components for emails |
| `@adidas/htmplar-renderer` | Server-side rendering engine |
| `@adidas/htmplar-cli` | Command-line interface |
| `@adidas/create-htmplar` | Project scaffolder |

**Current version:** `2.0.0-alpha.0`

## 🏷️ npm Tags Explained

| Tag | When to Use | Install Command |
|-----|-------------|-----------------|
| `alpha` | Early development, unstable API | `npm i @adidas/htmplar-core@alpha` |
| `beta` | Feature complete, testing phase | `npm i @adidas/htmplar-core@beta` |
| `next` | Pre-release, near stable | `npm i @adidas/htmplar-core@next` |
| `latest` | Stable production release | `npm i @adidas/htmplar-core` |

## ✅ After Publishing

### Verify Packages

Check packages are live on npm:

```bash
npm view @adidas/htmplar-core
npm view @adidas/htmplar-renderer
npm view @adidas/htmplar-cli
npm view @adidas/create-htmplar
```

### Test Installation

```bash
# Create test project
mkdir test-htmplar && cd test-htmplar
npm init -y

# Install packages
npm install @adidas/htmplar-core@alpha @adidas/htmplar-renderer@alpha

# Test CLI
npx @adidas/create-htmplar test-project
```

### Verify Provenance

Check the provenance signature (proof of origin):

1. Go to: https://www.npmjs.com/package/@adidas/htmplar-core
2. Look for "Provenance" badge
3. Click to see build details from GitHub Actions

## 🐛 Troubleshooting

### "Workflow not found"

**Fix:** Make sure you're in the `adidas/htmplar` repo, not your fork.

### "Permission denied" during publish

**Possible causes:**
1. Not running from `adidas/htmplar` (must be upstream, not fork)
2. Trusted publishing not configured for this repo
3. Running from wrong branch

**Fix:** Contact @adidas npm org admin to verify trusted publishing setup.

### Packages not appearing on npm

**Wait time:** npm CDN takes 1-2 minutes to update globally.

**Check:**
- Workflow completed successfully
- No errors in workflow logs
- Search directly: https://www.npmjs.com/package/@adidas/htmplar-core

### Publishing to wrong tag

**Fix:** Tags can be updated after publishing:

```bash
# Move a version to different tag
npm dist-tag add @adidas/htmplar-core@2.0.0-alpha.0 beta

# Remove from wrong tag
npm dist-tag rm @adidas/htmplar-core alpha
```

## 📋 Pre-Publish Checklist

Before publishing:

- [ ] All tests passing locally
- [ ] CI checks passing on GitHub
- [ ] Version number updated in package.json files
- [ ] CHANGELOG.md updated with release notes
- [ ] README.md reflects current state
- [ ] Built packages locally: `npm run build`
- [ ] Tested scaffolding: `node packages/cli/dist/bin.mjs init test`

## 🎓 Best Practices

1. **Use GitHub Releases for versions**
   - Creates git tags automatically
   - Generates release notes
   - Triggers publish workflow
   - Better visibility for users

2. **Test with alpha first**
   - Publish as `alpha` initially
   - Test installation and usage
   - Promote to `beta` → `latest` when stable

3. **Semantic Versioning**
   - `patch` (2.0.1): Bug fixes
   - `minor` (2.1.0): New features, backward compatible
   - `major` (3.0.0): Breaking changes

4. **Document changes**
   - Update CHANGELOG.md before publishing
   - Clear release notes in GitHub Release
   - Mention breaking changes prominently

5. **Announce releases**
   - Post in team channels
   - Update project README
   - Social media for major versions

## 🔒 Security Notes

**Trusted Publishing Benefits:**
- ✅ No long-lived tokens to leak
- ✅ Cannot be used outside GitHub Actions
- ✅ Scoped to specific repository
- ✅ Automatic expiration after workflow
- ✅ Provenance proves package origin

**What this prevents:**
- ❌ Token theft from developer machines
- ❌ Credential leaks in logs
- ❌ Unauthorized publishes from other repos
- ❌ Supply chain attacks

## 🆘 Need Help?

- **Workflow issues**: Check GitHub Actions logs
- **npm errors**: See Troubleshooting section above
- **Trusted publishing**: Contact @adidas npm org admin
- **General questions**: Open an issue

## 📚 Resources

- npm Trusted Publishing: https://docs.npmjs.com/generating-provenance-statements
- GitHub OIDC: https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect
- Package provenance: https://github.blog/2023-04-19-introducing-npm-package-provenance/
