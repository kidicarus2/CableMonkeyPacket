# Technical Floor Plans Site

A Hugo-based website for hosting and annotating technical floor plans with shared annotations.

## Features

- **PDF Viewing**: Interactive PDF viewer using Mozilla's PDF.js
- **Shared Annotations**: Annotations stored in database, available to all users
- **Reply to Annotations**: Threaded conversations on annotations
- **Admin Management**: Admin can delete annotations (password protected)
- **Responsive Design**: Works on desktop and mobile devices
- **Sidebar Toggle**: Show/hide annotations panel

## Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Run the server
npm start
```

Site available at **http://localhost:3000**

## Development Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm start` | Run server (port 3000) |
| `hugo` | Build static site |

## Directory Structure

```
site_floorplans/
├── archetypes/          # Content templates
├── content/
│   └── floorplans/     # Floor plan pages
├── layouts/            # Hugo templates
├── static/
│   └── pdfs/          # PDF files
├── server.js           # Express server with API
├── package.json        # Node dependencies
├── shell.nix          # Nix dependencies
├── hugo.toml          # Hugo config
└── annotations.json   # Database (auto-created)
```

## Adding New Documentation

To add a new document to the Wiki, simply create a Markdown file in `content/wiki/` and ensure it has frontmatter at the top. For example:

```yaml
---
title: "Your Document Title"
date: 2024-03-06
---
```

Write your content below the frontmatter.

## Adding Floor Plans

1. Add PDF to `static/pdfs/`
2. Create content file in `content/floorplans/`:

```yaml
---
title: "Floor Plan Name"
description: "Description"
pdf: "/pdfs/file.pdf"
category: "Commercial"
date: "2024-01-15"
---
```

## Admin Configuration

Set admin password in `hugo.toml`:

```toml
[params]
  adminPassword = "your-password"
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/annotations/:docSlug` | Get annotations |
| POST | `/api/annotations` | Create annotation |
| POST | `/api/annotations/:id/reply` | Add reply |
| DELETE | `/api/annotations/:id` | Delete annotation |

## Technical Stack

- **Frontend**: Hugo + PDF.js
- **Backend**: Node.js + Express
- **Database**: JSON file (annotations.json)

## Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Clear annotations
```bash
# Delete annotations.json and restart
rm annotations.json
```

### Rebuild static site
```bash
hugo --gc --minify
```
