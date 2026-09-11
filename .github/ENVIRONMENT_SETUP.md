# GitHub Environment Setup

The npm admin has configured trusted publishing with environment name: **`pro`**

This means the workflow must run in a GitHub Environment called "pro" to authenticate successfully.

## Creating the "pro" Environment

### Prerequisites
- Admin access to `adidas/htmplar` repository

### Steps

1. **Navigate to Environments**
   - Go to: https://github.com/adidas/htmplar/settings/environments
   - Or: Settings → Environments

2. **Create New Environment**
   - Click "New environment"
   - Name: `pro` (exactly as configured in npm)
   - Click "Configure environment"

3. **Configure Protection Rules** (Recommended)

   #### Required Reviewers (Optional but Recommended)
   - [x] **Required reviewers**: Add trusted maintainers
   - Number of reviewers: `1` or more
   
   **Why:** Adds manual approval gate before publishing to npm
   
   #### Wait Timer (Optional)
   - [ ] **Wait timer**: `0` minutes
   
   **Why:** Can add delay before deployment (usually not needed)
   
   #### Deployment Branches (Recommended)
   - [x] **Selected branches and tags**
   - Add rule: `master` branch only
   
   **Why:** Only allows publishing from master, blocks accidental publishes from feature branches

4. **Environment Variables** (Optional)
   
   You can add environment-specific variables here if needed in the future.
   Currently not required since we use workflow inputs.

5. **Save Configuration**
   - Click "Save protection rules"

## What This Means

### With Environment Protection

When someone triggers the publish workflow:

1. **Workflow starts**
2. **Waits for approval** (if required reviewers configured)
3. **Only runs from master** (if branch restriction configured)
4. **OIDC authenticates with npm** using environment="pro"
5. **Publishes packages**

### Without Environment Protection

Anyone with write access can publish immediately from any branch.

## Security Recommendations

### Minimal Protection (Good)
```
Environment: pro
- No reviewers
- Deployment branches: master only
```

**Pros:** Fast, automated  
**Cons:** Anyone with write access can publish

### Recommended Protection (Better)
```
Environment: pro
- Required reviewers: 1 (yourself or trusted maintainer)
- Deployment branches: master only
```

**Pros:** Manual approval gate, only from master  
**Cons:** Requires human approval every time

### Maximum Protection (Best)
```
Environment: pro
- Required reviewers: 2+ (multiple maintainers)
- Deployment branches: master only
- Wait timer: 5 minutes (optional cooldown)
```

**Pros:** Multiple approvals, cooldown period  
**Cons:** Slower, requires coordination

## Testing the Environment

### Test 1: Verify Environment Exists

```bash
# The workflow should reference environment
grep -A 3 "environment:" .github/workflows/publish.yml
```

Expected output:
```yaml
environment: pro # Required: matches npm trusted publishing config
```

### Test 2: Run Publish Workflow

1. Go to: https://github.com/adidas/htmplar/actions
2. Select "Publish to npm"
3. Click "Run workflow"
4. Select: Branch=master, npm-tag=alpha
5. Run workflow

**Expected:**
- If reviewers configured: Workflow waits for approval
- If no reviewers: Workflow runs immediately
- Workflow authenticates via OIDC with environment="pro"
- Packages publish successfully

## Troubleshooting

### Error: "Environment 'pro' not found"

**Cause:** Environment hasn't been created in GitHub

**Fix:** Follow steps above to create the environment

### Error: "Workflow requires approval"

**Cause:** Required reviewers are configured

**Fix:** A reviewer must approve the deployment in the Actions UI

### Error: "Branch not allowed to deploy"

**Cause:** Deployment branch restrictions are configured, and you're trying to publish from a feature branch

**Fix:** Only publish from `master` branch, or update environment settings

### Error: Still getting 404 from npm

**Cause:** npm trusted publishing environment name mismatch

**Fix:** 
1. Verify admin configured environment as "pro" in npm
2. Verify workflow has `environment: pro`
3. Ask admin to double-check npm configuration

## npm Admin Configuration Reference

The admin should have configured in npm:

```
Organization: @adidas
Repository: adidas/htmplar
Workflow: .github/workflows/publish.yml
Environment: pro           ← THIS MUST MATCH GitHub environment name
```

## Summary

✅ **Workflow updated** with `environment: pro`  
🔲 **GitHub environment** needs to be created (admin task)  
🔲 **Protection rules** should be configured (recommended)

Once the "pro" environment exists in GitHub, the workflow will:
1. Authenticate via OIDC
2. Match npm's trusted publishing configuration
3. Successfully publish packages

---

**Created:** 2026-09-11  
**Last Updated:** 2026-09-11
