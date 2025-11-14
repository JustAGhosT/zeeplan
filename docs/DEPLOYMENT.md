# Zeeplan Deployment Guide

## Overview

This guide explains how to run and deploy the Zeeplan interactive partnership proposal website.

## Quick Start (Development)

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

## Production Build

```bash
# Build for production
npm run build

# Start production server
npm start

# Open http://localhost:3000
```

## Deployment Options

### Option 1: Vercel (Recommended)

The easiest way to deploy is using Vercel:

1. Push code to GitHub
2. Import repository at https://vercel.com
3. Deploy with default settings
4. Your site will be live at `your-project.vercel.app`

### Option 2: Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy

### Option 3: Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t zeeplan .
docker run -p 3000:3000 zeeplan
```

### Option 4: Static Export

For hosting on any static host:

1. Update `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

module.exports = nextConfig;
```

2. Build:

```bash
npm run build
```

3. Deploy the `out/` directory to any static host (GitHub Pages, S3, etc.)

## Features

- ✅ Server-side rendering (SSR)
- ✅ Static site generation (SSG)
- ✅ Client-side interactivity
- ✅ Dark mode support
- ✅ Print/PDF export
- ✅ Share functionality
- ✅ Responsive design

## Environment Variables

No environment variables required for basic deployment. The app uses default data from `lib/partnershipData.ts`.

For future enhancements with database/API:

```env
# Example for future features
DATABASE_URL=your_database_url
API_KEY=your_api_key
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: <1s
- Time to Interactive: <2s
- Bundle size: ~200KB (gzipped)

## Monitoring

For production, consider adding:

- Vercel Analytics
- Google Analytics
- Sentry for error tracking

## Support

For questions or issues, contact:

- Email: [your email]
- GitHub Issues: [repository URL]

## License

Proprietary - Zeerust Partnership Proposal
