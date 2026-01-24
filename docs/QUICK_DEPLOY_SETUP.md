# Quick Deploy Setup - 5 Minutes

Get automated deployment from GitHub to Hostinger in 5 minutes.

## 🚀 Quick Steps

### 1. Get FTP Credentials (2 minutes)

1. Login to Hostinger: https://hpanel.hostinger.com
2. Go to **Files** → **FTP Accounts**
3. Copy these:
   ```
   Server: ftp.yourdomain.com
   Username: u123456789
   Password: YourPassword
   ```

### 2. Add Secrets to GitHub (2 minutes)

1. Go to your GitHub repo
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add:

   ```
   Name: FTP_SERVER
   Value: ftp.yourdomain.com
   ```

   ```
   Name: FTP_USERNAME
   Value: u123456789
   ```

   ```
   Name: FTP_PASSWORD
   Value: YourPassword
   ```

### 3. Push Workflow File (1 minute)

The workflow file is already created at `.github/workflows/deploy.yml`

Just push it:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add auto-deploy workflow"
git push origin main
```

### 4. Watch It Deploy! ✨

1. Go to **Actions** tab on GitHub
2. Watch your deployment run
3. Wait 2-3 minutes
4. Visit your website!

## 🎯 That's It!

Now every time you push to `main`:
- ✅ Automatic build
- ✅ Automatic upload
- ✅ Website updated

## 🔧 Troubleshooting

**Deployment failed?**
- Check FTP credentials are correct
- Verify secrets are named exactly: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`
- Check GitHub Actions logs for errors

**Need more help?**
See full guide: [GITHUB_ACTIONS_DEPLOYMENT.md](GITHUB_ACTIONS_DEPLOYMENT.md)

---

## 📊 Visual Guide

```
┌─────────────────────────────────────────────────┐
│  1. You push code to GitHub                     │
│     git push origin main                        │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│  2. GitHub Actions detects push                 │
│     Workflow starts automatically               │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│  3. Builds your project                         │
│     npm install && npm run build                │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│  4. Uploads to Hostinger via FTP                │
│     Uploads dist/ folder contents               │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│  5. Website is live! 🎉                         │
│     Visit yourdomain.com                        │
└─────────────────────────────────────────────────┘
```

## ⏱️ Timeline

- **0:00** - Push code
- **0:10** - GitHub Actions starts
- **0:30** - Installing dependencies
- **1:30** - Building project
- **2:00** - Uploading to Hostinger
- **2:30** - ✅ Deployment complete!

## 🎉 Benefits

- ✅ No manual FTP uploads
- ✅ No forgetting to build
- ✅ Consistent deployments
- ✅ Deployment history
- ✅ Rollback capability
- ✅ Team collaboration

## 💡 Pro Tip

Create a `.env` file for local development:

```env
VITE_API_URL=http://localhost:3000
```

Add to `.gitignore`:
```
.env
.env.local
```

Use GitHub Secrets for production environment variables.

---

**Ready to deploy?** Follow the 4 steps above! 🚀
