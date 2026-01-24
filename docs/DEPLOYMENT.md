# Deployment Guide - Dokpa Expeditions

## Prerequisites

- Node.js 18+ installed
- Access to hosting server (Hostinger)
- FTP/SFTP client or cPanel File Manager

## Build Process

### 1. Install Dependencies
```bash
npm install
```

### 2. Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 3. Test Production Build Locally
```bash
npm run preview
```

Visit http://localhost:4173 to test the production build.

## Deployment to Hostinger

### Method 1: Using cPanel File Manager

1. **Login to cPanel**
   - Go to your Hostinger cPanel
   - Navigate to File Manager

2. **Prepare Directory**
   - Navigate to `public_html` (or your domain's root)
   - Delete existing files (backup first!)

3. **Upload Files**
   - Upload all contents from the `dist` folder
   - Make sure `.htaccess` is included
   - Verify all image files are uploaded

4. **Set Permissions**
   - Ensure files have 644 permissions
   - Ensure directories have 755 permissions

### Method 2: Using FTP/SFTP

1. **Connect via FTP Client** (FileZilla, Cyberduck, etc.)
   - Host: ftp.yourdomain.com
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21 (FTP) or 22 (SFTP)

2. **Upload Files**
   - Navigate to `public_html`
   - Upload all files from `dist` folder
   - Overwrite existing files

3. **Verify Upload**
   - Check that all files are present
   - Verify `.htaccess` is uploaded

## Post-Deployment Checklist

- [ ] Homepage loads correctly
- [ ] Navigation works (all links)
- [ ] Theme toggle functions
- [ ] Mobile menu works
- [ ] Images load properly
- [ ] Contact form submits
- [ ] Destinations page loads
- [ ] 404 page works for invalid routes
- [ ] Browser back/forward buttons work
- [ ] SEO meta tags are present (view source)

## Troubleshooting

### Issue: Blank page after deployment
**Solution:** Check browser console for errors. Usually a path issue.
- Verify `base: './'` in `vite.config.js`
- Check that all assets are uploaded

### Issue: 404 on page refresh
**Solution:** Ensure `.htaccess` is uploaded and mod_rewrite is enabled
- Contact Hostinger support to enable mod_rewrite
- Verify `.htaccess` is in the root directory

### Issue: Images not loading
**Solution:** Check image paths and case sensitivity
- Linux servers are case-sensitive
- Verify all images are in the `public` folder
- Check image file names match exactly

### Issue: CSS not applying
**Solution:** Clear browser cache and check file paths
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check that CSS files are uploaded
- Verify no 404 errors in Network tab

## Performance Optimization

### Enable Gzip Compression
Already configured in `.htaccess`. Verify it's working:
```bash
curl -H "Accept-Encoding: gzip" -I https://yourdomain.com
```

### Enable Browser Caching
Already configured in `.htaccess` for static assets.

### CDN Setup (Optional)
Consider using Cloudflare for:
- Global CDN
- DDoS protection
- SSL certificate
- Additional caching

## SSL Certificate

1. **Get Free SSL from Hostinger**
   - Go to cPanel > SSL/TLS
   - Install Let's Encrypt certificate
   - Enable "Force HTTPS Redirect"

2. **Verify SSL**
   - Visit https://yourdomain.com
   - Check for padlock icon
   - Test at https://www.ssllabs.com/ssltest/

## Domain Configuration

### Point Domain to Hostinger
1. Update nameservers at your domain registrar:
   - ns1.dns-parking.com
   - ns2.dns-parking.com

2. Wait for DNS propagation (up to 48 hours)

3. Verify with: `nslookup yourdomain.com`

## Monitoring

### Check Website Status
- Use UptimeRobot or similar service
- Set up email alerts for downtime

### Analytics
- Add Google Analytics to `index.html`
- Monitor traffic and user behavior

### Error Logging
- Check cPanel error logs regularly
- Set up error monitoring (Sentry, etc.)

## Backup Strategy

### Before Each Deployment
1. Backup current live files
2. Export database (if applicable)
3. Keep local copy of previous build

### Automated Backups
- Enable cPanel automatic backups
- Download backups monthly
- Store off-site (Google Drive, Dropbox)

## Rollback Procedure

If deployment fails:
1. Restore previous backup from cPanel
2. Or re-upload previous `dist` folder
3. Clear browser cache
4. Test thoroughly

## Contact Support

**Hostinger Support:**
- Live Chat: Available 24/7
- Email: support@hostinger.com
- Knowledge Base: https://support.hostinger.com

**Developer Contact:**
- Email: expeditions@dokpa.com

---

## Quick Deploy Checklist

```bash
# 1. Build
npm run build

# 2. Test locally
npm run preview

# 3. Upload dist/* to public_html

# 4. Verify .htaccess is present

# 5. Test live site

# 6. Clear CDN cache (if using)
```

---

**Last Updated:** January 2025
