---
description: Steps to deploy the Vite/React application to Hostinger
---

# Deploying to Hostinger (Manual Upload)

Follow these steps to deploy your website to Hostinger.

## Step 1: Generate the Production Build
Run the following command in your terminal:

```bash
npm run build
```

This will create a `dist` folder in your project directory containing all the optimized static files.

## Step 2: Add .htaccess for SPA Support (Optional but Recommended)
If you use React Router or want to ensure clean URLs, create a file named `.htaccess` inside the `dist` folder with the following content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

## Step 3: Upload via Hostinger File Manager
1. Log in to your **Hostinger hPanel**.
2. Go to **Websites** and click **Manage** on your domain.
3. Find and click **File Manager**.
4. Navigate to the `public_html` directory.
5. **Delete any existing files** (like `default.php` or `index.php`) if it's a fresh install.
6. Upload all files and folders **from inside the `dist` folder** into `public_html`.

## Step 4: Verify
Visit your domain (e.g., `https://yourdomain.com`) to ensure everything is working correctly.
