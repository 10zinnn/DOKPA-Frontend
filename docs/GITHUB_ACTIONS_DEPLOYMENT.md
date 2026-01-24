# GitHub Actions - Automated Deployment to Hostinger

This guide will help you set up automated deployment from GitHub to Hostinger using GitHub Actions.

## 🎯 What This Does

Every time you push code to the `main` branch:
1. GitHub Actions automatically builds your project
2. Uploads the built files to your Hostinger server via FTP
3. Your website is updated automatically

## 📋 Prerequisites

Before starting, you need:
- ✅ GitHub repository for your project
- ✅ Hostinger hosting account
- ✅ FTP credentials from Hostinger

## 🔧 Setup Instructions

### Step 1: Get Your Hostinger FTP Credentials

1. **Login to Hostinger**
   - Go to https://hpanel.hostinger.com
   - Login with your credentials

2. **Navigate to FTP Accounts**
   - Go to "Files" → "FTP Accounts"
   - Or search for "FTP" in the search bar

3. **Note Down These Details:**
   ```
   FTP Server: ftp.yourdomain.com (or IP address)
   Username: your_ftp_username
   Password: your_ftp_password
   ```

   **Example:**
   ```
   Server: ftp.dokpaexpeditions.com
   Username: u123456789
   Password: YourSecurePassword123
   ```

### Step 2: Add Secrets to GitHub Repository

1. **Go to Your GitHub Repository**
   - Navigate to your repository on GitHub
   - Example: `https://github.com/yourusername/DOKPA-Frontend`

2. **Open Settings**
   - Click on "Settings" tab (top right)

3. **Navigate to Secrets**
   - In the left sidebar, click "Secrets and variables"
   - Click "Actions"

4. **Add New Repository Secrets**
   
   Click "New repository secret" and add these three secrets:

   **Secret 1: FTP_SERVER**
   ```
   Name: FTP_SERVER
   Value: ftp.yourdomain.com
   ```

   **Secret 2: FTP_USERNAME**
   ```
   Name: FTP_USERNAME
   Value: your_ftp_username
   ```

   **Secret 3: FTP_PASSWORD**
   ```
   Name: FTP_PASSWORD
   Value: your_ftp_password
   ```

   ⚠️ **Important:** 
   - Secret names must be EXACTLY as shown (all caps)
   - Values should NOT have quotes
   - Click "Add secret" after each one

### Step 3: Verify Workflow File

The workflow file is already created at `.github/workflows/deploy.yml`

**Check these settings:**

```yaml
on:
  push:
    branches:
      - main  # Change to 'master' if needed
```

If your default branch is `master` instead of `main`, change it.

**Server directory:**
```yaml
server-dir: ./public_html/
```

If your Hostinger uses a different directory (like `public_html/yourdomain.com/`), update this.

### Step 4: Push to GitHub

1. **Commit the workflow file:**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions deployment workflow"
   git push origin main
   ```

2. **Watch the deployment:**
   - Go to your GitHub repository
   - Click "Actions" tab
   - You should see your workflow running

### Step 5: Verify Deployment

1. **Check GitHub Actions**
   - Green checkmark ✅ = Success
   - Red X ❌ = Failed (check logs)

2. **Check Your Website**
   - Visit your domain
   - Verify the changes are live

## 🎬 How It Works

### Automatic Deployment

```
You push code → GitHub detects push → Runs workflow → Builds project → Uploads to Hostinger
```

**Timeline:**
- Push code: 0 seconds
- Build starts: ~10 seconds
- Build completes: ~1-2 minutes
- Upload to Hostinger: ~30 seconds
- Total time: ~2-3 minutes

### Manual Deployment

You can also trigger deployment manually:

1. Go to "Actions" tab on GitHub
2. Click "Deploy to Hostinger" workflow
3. Click "Run workflow" button
4. Select branch and click "Run workflow"

## 📁 What Gets Deployed

Only the `dist/` folder contents are uploaded:
- `index.html`
- `assets/` (CSS, JS)
- Images from `public/`
- `.htaccess`

**NOT uploaded:**
- `node_modules/`
- `src/` (source code)
- `.git/` (git files)
- Development files

## 🔍 Troubleshooting

### Issue 1: Workflow Fails at "Deploy to Hostinger"

**Error:** `Failed to connect to FTP server`

**Solutions:**
1. Verify FTP credentials are correct
2. Check if FTP server address is correct
3. Ensure Hostinger FTP is enabled
4. Try using IP address instead of domain

**How to fix:**
- Go to GitHub → Settings → Secrets
- Update `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`
- Re-run the workflow

### Issue 2: Build Fails

**Error:** `npm run build failed`

**Solutions:**
1. Test build locally: `npm run build`
2. Fix any errors in your code
3. Commit and push fixes

### Issue 3: Files Not Updating on Server

**Solutions:**
1. Check `server-dir` path in workflow file
2. Verify FTP user has write permissions
3. Clear browser cache (Ctrl+Shift+R)
4. Check Hostinger file manager to confirm upload

### Issue 4: Wrong Directory

**Error:** Files uploaded to wrong location

**Solution:**
Update `server-dir` in `.github/workflows/deploy.yml`:

```yaml
# For root domain
server-dir: ./public_html/

# For subdomain
server-dir: ./public_html/subdomain/

# For addon domain
server-dir: ./public_html/yourdomain.com/
```

### Issue 5: Secrets Not Working

**Error:** `Error: Input required and not supplied: password`

**Solution:**
1. Verify secret names are EXACTLY:
   - `FTP_SERVER`
   - `FTP_USERNAME`
   - `FTP_PASSWORD`
2. No extra spaces or quotes
3. Re-add secrets if needed

## 🔒 Security Best Practices

### ✅ Do's

- ✅ Use GitHub Secrets for credentials
- ✅ Use strong FTP passwords
- ✅ Enable 2FA on GitHub account
- ✅ Regularly update FTP password
- ✅ Use SFTP if available (port 22)

### ❌ Don'ts

- ❌ Never commit FTP credentials in code
- ❌ Don't share secrets publicly
- ❌ Don't use weak passwords
- ❌ Don't disable security features

## 📊 Monitoring Deployments

### View Deployment History

1. Go to "Actions" tab
2. See all past deployments
3. Click any deployment to see logs

### Deployment Status

- 🟢 **Success:** Deployment completed
- 🟡 **In Progress:** Currently deploying
- 🔴 **Failed:** Check logs for errors
- ⚪ **Queued:** Waiting to start

### Email Notifications

GitHub sends emails for:
- Failed workflows
- Successful deployments (if enabled)

**Enable notifications:**
1. GitHub → Settings → Notifications
2. Enable "Actions" notifications

## 🚀 Advanced Configuration

### Deploy Only on Tag

Deploy only when you create a release tag:

```yaml
on:
  push:
    tags:
      - 'v*'  # Triggers on v1.0.0, v2.0.0, etc.
```

### Deploy to Multiple Environments

Create separate workflows for staging and production:

**`.github/workflows/deploy-staging.yml`**
```yaml
on:
  push:
    branches:
      - develop
```

**`.github/workflows/deploy-production.yml`**
```yaml
on:
  push:
    branches:
      - main
```

### Add Slack Notifications

Get notified in Slack when deployment completes:

```yaml
- name: Notify Slack
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

### Run Tests Before Deploy

Add testing step:

```yaml
- name: Run tests
  run: npm test

- name: Run linter
  run: npm run lint
```

## 📝 Workflow File Explained

```yaml
name: Deploy to Hostinger
# Name shown in GitHub Actions tab

on:
  push:
    branches:
      - main
# Triggers on push to main branch

  workflow_dispatch:
# Allows manual trigger

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
# Runs on Ubuntu server

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
# Downloads your code

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
# Installs Node.js 18

      - name: Install dependencies
        run: npm ci
# Installs packages (faster than npm install)

      - name: Build project
        run: npm run build
# Builds your project

      - name: Deploy to Hostinger
        uses: SamKirkland/FTP-Deploy-Action@v4.3.4
# Uploads to Hostinger via FTP
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
# Uses secrets you added
          local-dir: ./dist/
# Uploads dist folder
          server-dir: ./public_html/
# To public_html on server
```

## 🎯 Quick Reference

### Common Commands

```bash
# Test build locally
npm run build

# Check workflow syntax
# (Install act: https://github.com/nektos/act)
act -n

# View GitHub Actions logs
# Go to: https://github.com/username/repo/actions
```

### Important Files

```
.github/workflows/deploy.yml  # Workflow configuration
dist/                         # Built files (uploaded)
public_html/                  # Hostinger directory
```

### Useful Links

- **GitHub Actions Docs:** https://docs.github.com/en/actions
- **FTP Deploy Action:** https://github.com/SamKirkland/FTP-Deploy-Action
- **Hostinger Help:** https://support.hostinger.com

## ✅ Checklist

Before going live, verify:

- [ ] GitHub repository created
- [ ] FTP credentials obtained from Hostinger
- [ ] Three secrets added to GitHub (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD)
- [ ] Workflow file committed to repository
- [ ] Branch name correct in workflow (main vs master)
- [ ] Server directory path correct
- [ ] Test deployment successful
- [ ] Website accessible and working
- [ ] SSL certificate active (HTTPS)

## 🎉 Success!

Once set up, your deployment workflow is:

1. **Make changes** to your code
2. **Commit** changes: `git commit -m "Update feature"`
3. **Push** to GitHub: `git push origin main`
4. **Wait 2-3 minutes** for automatic deployment
5. **Visit your website** to see changes live!

No more manual FTP uploads! 🚀

---

## 💡 Pro Tips

1. **Test locally first:** Always run `npm run build` locally before pushing
2. **Use branches:** Develop in feature branches, merge to main when ready
3. **Check logs:** If deployment fails, check GitHub Actions logs
4. **Clear cache:** Use Ctrl+Shift+R to see latest changes
5. **Monitor:** Keep an eye on deployment status in Actions tab

## 🆘 Need Help?

If you encounter issues:

1. Check the troubleshooting section above
2. Review GitHub Actions logs
3. Verify FTP credentials in Hostinger
4. Test FTP connection with FileZilla
5. Contact Hostinger support if FTP issues persist

---

**Last Updated:** January 2025

**Deployment Status:** 
- Manual: ✅ Working
- Automated: ✅ Configured
- CI/CD: ✅ Active
