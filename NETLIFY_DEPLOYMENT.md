# Netlify Deployment Guide

This document explains how to properly deploy this React portfolio to Netlify, with a focus on making the email functionality work correctly.

## Steps to Deploy on Netlify

1. **Push your code to GitHub**
   Ensure your code is in a GitHub repository.

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com/)
   - Sign up or log in
   - Click "New site from Git"
   - Select GitHub and authorize Netlify
   - Choose your repository

3. **Configure Build Settings**
   - Build command: `CI=false NODE_OPTIONS=--openssl-legacy-provider npm run build`
   - Publish directory: `build`

4. **Set Environment Variables**
   - In Netlify dashboard, go to Site settings > Build & deploy > Environment
   - Add the following environment variables:
     ```
     REACT_APP_EMAILJS_SERVICE_ID=service_bhrmg9a
     REACT_APP_EMAILJS_TEMPLATE_ID=template_l1u786j
     REACT_APP_EMAILJS_USER_ID=Nj5IfpPes_srPk0F1
     ```
   - Make sure to use your actual EmailJS values if they differ from these

5. **Deploy the Site**
   - Click "Deploy site"
   - Wait for the build to complete

6. **Trigger New Deployment After Setting Environment Variables**
   - Go to Deploys tab
   - Click "Trigger deploy" > "Deploy site"

## Troubleshooting

If email sending still doesn't work:

1. **Check browser console for errors**
   - Open developer tools in your browser
   - Look for any errors related to EmailJS

2. **Verify EmailJS Configuration**
   - Ensure your EmailJS service, template, and user IDs are correct
   - Test your EmailJS configuration with their sandbox tool

3. **Check Netlify Build Logs**
   - Go to the Deploys tab in your Netlify dashboard
   - Click on a deploy to see the build log
   - Look for any errors during build

## Node.js Version

This app has been configured to use Node.js 16 in the Netlify environment. If you need to use a different version, update the `NODE_VERSION` value in the `netlify.toml` file. 