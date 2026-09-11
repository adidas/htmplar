# Branch Protection Configuration Guide

This document describes the branch protection rules configured for `adidas/htmplar`.

## Protected Branch: `master`

### Configuration Steps

**Prerequisites:** Admin access to `adidas/htmplar` repository

### 1. Navigate to Settings

1. Go to: https://github.com/adidas/htmplar/settings/branches
2. Click "Add branch protection rule" or edit existing rule for `master`

### 2. Branch Name Pattern

```
master
```

### 3. Protection Rules

#### ✅ Require Pull Request Before Merging

**Enable:**
- [x] **Require a pull request before merging**
  - [x] **Require approvals**: `1` (minimum)
  - [x] **Dismiss stale pull request approvals when new commits are pushed**
  - [x] **Require review from Code Owners** (optional, for sensitive files)
  - [ ] Require approval of the most recent reviewable push

**Why:** Enforces peer review process, catches issues before they reach production.

---

#### ✅ Require Status Checks to Pass

**Enable:**
- [x] **Require status checks to pass before merging**
  - [x] **Require branches to be up to date before merging**
  
**Required status checks** (select all 4):
- `Lint`
- `Type Check`
- `Test`
- `Build`

**Why:** Ensures all CI checks pass before code is merged. Prevents broken code from entering master.

---

#### ✅ Require Conversation Resolution

**Enable:**
- [x] **Require conversation resolution before merging**

**Why:** Ensures all review comments are addressed before merge.

---

#### ✅ Require Signed Commits (Recommended)

**Enable:**
- [x] **Require signed commits**

**Why:** Verifies commit authenticity, prevents spoofing.

**Setup required:**
```bash
# Configure Git to sign commits
git config --global commit.gpgsign true
git config --global user.signingkey YOUR_GPG_KEY_ID
```

*Optional: Can enable later if it creates friction*

---

#### ✅ Require Linear History (Optional)

**Enable:**
- [x] **Require linear history**

**Why:** Keeps git history clean (no merge commits), enforces rebase/squash.

*Note: This prevents merge commits. Only enable if team prefers rebase workflow.*

---

#### ✅ Include Administrators

**Enable:**
- [x] **Do not allow bypassing the above settings**
- [ ] Include administrators

**Why:** Rules apply to everyone, including admins. Prevents accidental bypasses.

*Can uncheck "Include administrators" if you need emergency access.*

---

#### ✅ Restrict Push Access

**Enable:**
- [x] **Restrict who can push to matching branches**
  - Select: `Repository admins only` or specific teams

**Why:** Prevents direct pushes to master. All changes must go through PRs.

---

#### ✅ Allow Force Pushes

**Disable:**
- [ ] **Allow force pushes** (KEEP UNCHECKED)

**Why:** Prevents history rewriting on master, protects against data loss.

---

#### ✅ Allow Deletions

**Disable:**
- [ ] **Allow deletions** (KEEP UNCHECKED)

**Why:** Prevents accidental deletion of master branch.

---

### 4. Additional Repository Settings

#### Auto-Delete Head Branches

**Location:** Settings → General → Pull Requests

**Enable:**
- [x] **Automatically delete head branches**

**Why:** Cleans up feature/fix branches after merge, keeps repo tidy.

---

#### Dependabot Security Updates

**Location:** Settings → Code security and analysis → Dependabot

**Enable:**
- [x] **Dependabot alerts**
- [x] **Dependabot security updates**
- [x] **Dependabot version updates** (optional)

**Configure:** `.github/dependabot.yml`

---

## Branch Naming Convention

### Required Prefixes

All feature branches must follow this convention:

| Prefix | Purpose | Example |
|--------|---------|---------|
| `feature/` | New features | `feature/email-templates` |
| `fix/` | Bug fixes | `fix/render-crash` |
| `chore/` | Maintenance | `chore/update-deps` |
| `docs/` | Documentation | `docs/api-guide` |
| `refactor/` | Refactoring | `refactor/clean-imports` |
| `test/` | Tests | `test/add-coverage` |
| `ci/` | CI/CD | `ci/optimize-workflows` |

### Enforcement (Optional)

Can be enforced with a GitHub Action or pre-commit hook.

**Example branch name validation:**
```regex
^(feature|fix|chore|docs|refactor|test|ci)/[a-z0-9-]+$
```

---

## Workflow: Creating and Merging PRs

### 1. Create Feature Branch

```bash
# Sync with master
git checkout master
git pull upstream master

# Create feature branch
git checkout -b feature/my-new-feature

# Make changes, commit
git add .
git commit -m "feat: add new feature"

# Push to your fork
git push origin feature/my-new-feature
```

### 2. Open Pull Request

1. Go to: https://github.com/adidas/htmplar/compare
2. **Base**: `master`
3. **Compare**: `your-fork:feature/my-new-feature`
4. Fill in PR template
5. Request reviewers
6. Assign yourself

### 3. Wait for CI

- All 4 checks must pass: ✅ Lint, Type Check, Test, Build
- Fix any failures
- Push fixes to same branch (auto-updates PR)

### 4. Code Review

- At least 1 approval required
- Address all comments
- Mark conversations as resolved

### 5. Merge

Once all checks pass and approved:

**Merge options:**
- **Squash and merge** (recommended) - Clean history, one commit per feature
- **Rebase and merge** - Preserves commits, linear history
- **Merge commit** - Creates merge commit (if linear history not required)

### 6. Cleanup

Branch auto-deletes after merge (if enabled).

---

## Emergency Procedures

### Bypassing Protection (Admins Only)

**When needed:**
- Critical production hotfix
- Broken CI that needs fixing
- Emergency security patch

**How:**
1. Temporarily disable branch protection
2. Make direct push
3. Re-enable protection immediately
4. Document why in commit message

**Better approach:**
- Keep admin bypass enabled
- Use `git push --force-with-lease` only when absolutely necessary

---

## Enforcement via GitHub Actions (Optional)

### Branch Name Validation

Create `.github/workflows/branch-naming.yml`:

```yaml
name: Branch Naming

on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  check-branch-name:
    runs-on: ubuntu-latest
    steps:
      - name: Check branch naming convention
        run: |
          BRANCH="${{ github.head_ref }}"
          if [[ ! $BRANCH =~ ^(feature|fix|chore|docs|refactor|test|ci)/ ]]; then
            echo "❌ Branch name '$BRANCH' does not follow convention"
            echo "Required format: feature/*, fix/*, chore/*, docs/*, refactor/*, test/*, ci/*"
            exit 1
          fi
          echo "✅ Branch name follows convention"
```

---

## Testing Branch Protection

### Verify Rules Work

**Test 1: Direct Push to Master**
```bash
git checkout master
echo "test" >> README.md
git commit -am "test"
git push upstream master
# Expected: ❌ Rejected
```

**Test 2: Merge Without Approval**
- Create PR
- Try to merge immediately
- Expected: ❌ Blocked (needs approval)

**Test 3: Merge With Failing CI**
- Create PR with intentional lint error
- Try to merge after approval
- Expected: ❌ Blocked (CI failed)

**Test 4: Force Push to Master**
```bash
git push --force upstream master
# Expected: ❌ Rejected
```

---

## Summary

### Enabled Protections ✅

- [x] Require PR before merge
- [x] Require 1 approval minimum
- [x] Require all 4 CI checks to pass
- [x] Require branch up-to-date before merge
- [x] Require conversation resolution
- [x] Prevent force push
- [x] Prevent deletion
- [x] Restrict direct push access
- [x] Auto-delete merged branches

### Optional Protections

- [ ] Require signed commits (can add later)
- [ ] Require linear history (team preference)
- [ ] Branch naming enforcement (via workflow)
- [ ] Code owners approval (for sensitive files)

---

## Additional Resources

- GitHub Branch Protection: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches
- Signed Commits: https://docs.github.com/en/authentication/managing-commit-signature-verification
- Dependabot: https://docs.github.com/en/code-security/dependabot

---

**Last Updated:** 2026-09-11  
**Maintained By:** @berkandirim
