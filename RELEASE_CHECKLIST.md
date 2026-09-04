# Release Checklist - HTMplar v2.0.0-alpha

This is your step-by-step guide to release HTMplar v2.0 to npm.

## ✅ Pre-Release (DONE)

- [x] Monorepo structure complete
- [x] All packages build successfully
- [x] All tests passing (8/8)
- [x] Linting clean
- [x] Code formatted
- [x] TypeScript strict mode
- [x] CI/CD workflows configured
- [x] Migration guide in README
- [x] Publishing workflows created
- [x] Documentation complete
- [x] Git remotes configured (origin + upstream)

## 🚀 Release Steps

### Step 1: Push to Your Fork

```bash
# Push current branch to your fork
git push origin rewrite/monorepo-setup
```

**Expected**: Branch pushed to `berkandirim/htmplar`

### Step 2: Create Pull Request

1. Go to https://github.com/berkandirim/htmplar
2. Click "Compare & pull request" for `rewrite/monorepo-setup`
3. **Base repository**: `adidas/htmplar`
4. **Base branch**: `master` or create new `v2.0` branch
5. **Title**: "feat: HTMplar v2.0 - Complete TypeScript rewrite"
6. **Description**: Link to MODERNIZATION_PLAN.md, highlight:
   - Complete rewrite with TypeScript
   - Monorepo with 4 packages
   - Modern tooling (Vite, Turborepo, Vitest)
   - All tests passing, CI ready
   - Breaking changes (v1 → v2 migration guide)
7. Create PR

### Step 3: Review and Merge

- Wait for CI checks to pass
- Get review/approval (if needed)
- Merge PR to `adidas/htmplar`

### Step 4: Setup npm Token

**Only needs to be done once:**

1. **Generate npm token**:
   ```bash
   # Login to npm (if not already)
   npm login
   ```
   
2. **Go to**: https://www.npmjs.com/settings/YOUR_USERNAME/tokens

3. **Create "Automation" token**
   - Click "Generate New Token"
   - Select "Automation" type
   - Copy the token (starts with `npm_...`)

4. **Add to GitHub**:
   - Go to: https://github.com/adidas/htmplar/settings/secrets/actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Paste your token
   - Save

### Step 5: Publish to npm (TEST FIRST)

1. **Go to GitHub Actions**:
   - Repository: `adidas/htmplar`
   - URL: https://github.com/adidas/htmplar/actions

2. **Select "Manual Publish to npm"**

3. **Run workflow (DRY RUN)**:
   - Branch: `master` (or wherever you merged)
   - Version bump: (leave empty - already 2.0.0-alpha.0)
   - npm tag: `alpha`
   - **Dry run: `true`** ✅

4. **Check output**:
   - Review what packages would be published
   - Verify versions are correct
   - Check for any errors

5. **Run workflow (REAL PUBLISH)**:
   - Same settings, but:
   - **Dry run: `false`** ✅

### Step 6: Verify Published Packages

```bash
# Wait 1-2 minutes for npm CDN

# Check packages are live
npm view @adidas/htmplar-core@alpha
npm view @adidas/htmplar-renderer@alpha
npm view @adidas/htmplar-cli@alpha
npm view @adidas/create-htmplar@alpha

# Test installation
mkdir /tmp/test-htmplar-install && cd /tmp/test-htmplar-install
npm init -y
npm install @adidas/htmplar-core@alpha @adidas/htmplar-renderer@alpha
```

### Step 7: Test End-to-End

```bash
# Test project scaffolding
cd /tmp
npx @adidas/htmplar-cli@alpha init my-test-project
cd my-test-project
npm install
npm run build
```

### Step 8: Announce Release

Once verified:

1. **GitHub Release**:
   - Create release on GitHub
   - Tag: `v2.0.0-alpha.0`
   - Title: "v2.0.0-alpha.0 - Complete TypeScript Rewrite"
   - Description: Copy from CHANGELOG.md

2. **Update README** (if needed):
   - Remove "Coming Soon" from installation section
   - Update with actual npm install commands

3. **Announce**:
   - Team Slack/Discord
   - Twitter/social media
   - GitHub Discussions

## 📋 Post-Release

- [ ] Sync your fork:
  ```bash
  git checkout master
  git fetch upstream
  git merge upstream/master
  git push origin master
  ```

- [ ] Update local branch:
  ```bash
  git branch -d rewrite/monorepo-setup  # Delete old branch
  git checkout -b v2.0-dev               # Create new dev branch
  ```

- [ ] Start Phase 2 development (core functionality)

## 🔍 Troubleshooting

### PR Creation Issues

**Problem**: Can't create PR to adidas/htmplar

**Solution**: 
- Check you have contributor access
- Try creating PR from GitHub web UI manually
- Contact repo admin for access

### npm Token Issues

**Problem**: `ENEEDAUTH` error in GitHub Actions

**Solution**:
- Verify `NPM_TOKEN` secret is set in adidas/htmplar
- Regenerate token if expired
- Check token has "Automation" type

### Publish Fails

**Problem**: 403 Forbidden when publishing

**Solution**:
1. Check you have publish access to `@htmplar` scope
2. Create the scope on npm if it doesn't exist:
   - Go to https://www.npmjs.com/org/create
   - Create organization `@htmplar`
   - Add yourself as owner/publisher

**Problem**: Package name conflicts

**Solution**: All `@htmplar/*` names are available (verified with 404s)

## 📚 Key Documents

- [PUBLISHING.md](./PUBLISHING.md) - Detailed publishing guide
- [MODERNIZATION_PLAN.md](./MODERNIZATION_PLAN.md) - Architecture decisions
- [README.md](./README.md) - Main documentation with migration guide
- [CHANGELOG.md](./CHANGELOG.md) - Release notes

## 🎯 Current Status

**Branch**: `rewrite/monorepo-setup`  
**Local commits**: 4 commits ahead of origin  
**Ready to push**: ✅ Yes  
**Ready to publish**: ✅ Yes (after PR merge)

### Commits Ready to Push:

1. `68a182a` - Add GitHub Actions workflows for npm publishing
2. `522325f` - Fix code formatting across all packages
3. `4357714` - Add v1.0 to v2.0 migration guide to README
4. `af0d311` - Fix GitHub Actions CI failures

## 🎉 Next Steps

**Right Now**:
```bash
# Push to your fork
git push origin rewrite/monorepo-setup
```

**Then**: Follow Steps 2-8 above

**Questions?**: Check [PUBLISHING.md](./PUBLISHING.md) or open an issue
