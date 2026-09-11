# Adding NPM_TOKEN to GitHub Secrets

The @adidas npm admin has provided an npm access token. This will be used instead of OIDC for now.

## Steps to Add the Token

### 1. Go to Repository Secrets

**URL**: https://github.com/adidas/htmplar/settings/secrets/actions

Or navigate:
- Repository → Settings
- Security → Secrets and variables → Actions
- Click "Secrets" tab

### 2. Create New Secret

1. Click **"New repository secret"**

2. Fill in the form:
   - **Name**: `NPM_TOKEN` (exactly this - case sensitive)
   - **Value**: Paste the token provided by admin (starts with `npm_...`)

3. Click **"Add secret"**

### 3. Verify It Was Added

You should see:
```
NPM_TOKEN
Updated: now
```

**Security note:** The token value is hidden and cannot be viewed again. Only the name is visible.

## How the Workflow Uses It

The workflow is already configured to use `NPM_TOKEN`:

```yaml
- name: Publish to npm with provenance
  run: npm publish --workspaces --access public --tag alpha --provenance
  env:
    NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}  # ← Uses the token
```

When `NODE_AUTH_TOKEN` is set, npm uses it for authentication instead of OIDC.

## Testing After Adding Token

1. **Verify secret exists**:
   - Go to: https://github.com/adidas/htmplar/settings/secrets/actions
   - Confirm `NPM_TOKEN` is listed

2. **Run publish workflow**:
   - Go to: https://github.com/adidas/htmplar/actions
   - Select "Publish to npm"
   - Click "Run workflow"
   - Branch: `master`
   - npm-tag: `alpha`
   - Click "Run workflow"

3. **Expected result**:
   - ✅ Workflow runs
   - ✅ Authenticates with token
   - ✅ Publishes all 4 packages
   - ✅ No 404 error

## What About the "pro" Environment?

The workflow still references `environment: pro`, but with `NODE_AUTH_TOKEN` set, the OIDC authentication is bypassed, so the environment doesn't need to exist.

**Two options:**

### Option A: Keep Environment Line (Recommended)
- Workflow continues to work with token
- If OIDC gets properly configured later, it will work automatically
- No changes needed

### Option B: Remove Environment Line
- Remove `environment: pro` from workflow
- Slightly simpler
- Would need to add it back if OIDC is configured later

**I recommend Option A** - keep it as-is. It doesn't hurt anything and keeps the option open for OIDC in the future.

## Token Security

### What the Admin Should Configure

The token should have:
- ✅ **Type**: Automation (not Classic)
- ✅ **Scope**: Publish to `@adidas/*` packages
- ✅ **Permissions**: Publish (read-write)

### GitHub Secret Security

- ✅ Secret is encrypted at rest
- ✅ Only visible to Actions
- ✅ Not exposed in logs
- ✅ Can be rotated anytime
- ✅ Can be deleted if compromised

### Best Practices

**Regular rotation:**
- Rotate token every 6-12 months
- Admin generates new token
- Update GitHub secret
- Old token is revoked

**If token is compromised:**
1. Admin revokes token on npmjs.com immediately
2. Generate new token
3. Update GitHub secret
4. Investigate how it was leaked

## Troubleshooting

### Still Getting 404 After Adding Token

**Check:**
1. Secret name is exactly `NPM_TOKEN` (case-sensitive)
2. Token was pasted correctly (no extra spaces)
3. Token hasn't expired
4. Admin's account has publish access to `@adidas/*`

**Test token manually:**
```bash
# On your local machine (DO NOT commit this)
export NPM_TOKEN="npm_xxxxxxxxxxxx"
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc
npm publish packages/core --dry-run --access public
```

If local test works, token is valid. Check GitHub secret setup.

### Token Not Found in Workflow

**Error**: `npm error code ENEEDAUTH`

**Cause**: Secret not accessible to workflow

**Fix**:
- Verify secret exists in repository settings (not organization settings)
- Check secret name is exactly `NPM_TOKEN`
- Ensure workflow has permission to access secrets

### Permission Denied

**Error**: `npm error 403 Forbidden`

**Cause**: Token lacks publish permissions or @adidas org access

**Fix**: Ask admin to verify token permissions in npm

## Summary

✅ **NPM_TOKEN is the easiest solution**  
✅ **Already configured in workflow**  
✅ **Just add to GitHub Secrets**  
✅ **Will work immediately**

OIDC trusted publishing can be investigated later if desired, but token-based publishing is perfectly fine and widely used.

---

**Created**: 2026-09-11  
**Last Updated**: 2026-09-11
