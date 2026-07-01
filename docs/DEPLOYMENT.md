# Deployment Guide

Detailed procedures for staging and production hosting.

## Frontend
- Host: Vercel, Netlify, or Cloudflare Pages.
- Command: `npm run build`
- Environment Variables: `VITE_API_URL`

## Backend
- Host: Render, Railway, or VPS (DigitalOcean).
- Command: `npm run build && npm run start`
- Environment Variables: `PORT`, `DATABASE_URL`, `JWT_SECRET`, etc.
