---
title: "Wiki"
---

# Cable Monkey Packet

This directory contains the Cable Monkey Packet - a comprehensive guide for SCaLE Tech team volunteers who help deploy and manage the network infrastructure during the conference.

## What is a Cable Monkey?

The Cable Monkey is a fearless field operator who runs lines and connects infrastructure wherever needed. They are quick, nimble, and adaptable, bridging gaps and linking devices under pressure. During teardown, they swing into action again, retrieving cables efficiently. They are the heartbeat of the wired front.

> See [01-cable-monkey-decree.md](./01-cable-monkey-decree.md) for our mission statement and core values.

---

## Quick Start

### New Volunteers

1. Read the [Cable Monkey Decree](./01-cable-monkey-decree.md) - Our mission and values
2. Review [Skills & Job Titles](./02-skills-job-titles.md) - Find your role
3. Study the [Event & Work Schedule](./03-event-work-schedule.md) - Know timeline

 the### Returning Volunteers

1. Review the [Setup & Breakdown Schedule](./11-setup-breakdown-schedule.md)
2. Check the [Hardware List](./10-hardware-list-2026.md) for any changes
3. Review [Do's and Don'ts](./04-dos-donts-hardware-deployment.md) for best practices

---

## Document Index

### Core Documents

| # | File | Description |
|---|------|-------------|
| 00 | [00-packet-document-list.md](./00-packet-document-list.md) | Complete document index |
| 01 | [01-cable-monkey-decree.md](./01-cable-monkey-decree.md) | Mission statement & values |
| 02 | [02-skills-job-titles.md](./02-skills-job-titles.md) | Roles and responsibilities |
| 03 | [03-event-work-schedule.md](./03-event-work-schedule.md) | Day-by-day timeline |
| 04 | [04-dos-donts-hardware-deployment.md](./04-dos-donts-hardware-deployment.md) | Best practices |
| 05 | [05-ports-purpose.md](./05-ports-purpose.md) | Device port reference |
| 06 | [06-terminology-cheat-sheet.md](./06-terminology-cheat-sheet.md) | Technical terms |
| 07 | [07-understanding-git.md](./07-understanding-git.md) | Git version control |

### Data & Reference

| # | File | Description |
|---|------|-------------|
| 10 | [10-hardware-list-2026.md](./10-hardware-list-2026.md) | Cable & room inventory |
| 10 | [10-ports-rooms-patch-list.md](./10-ports-rooms-patch-list.md) | Data jack patch info |
| 11 | [11-setup-breakdown-schedule.md](./11-setup-breakdown-schedule.md) | Task schedule |

---

## Directory Structure

```
Cable Monkey Packet/
├── 01-cable-monkey-decree.md      # Mission statement
├── 02-skills-job-titles.md        # Job descriptions
├── 03-event-work-schedule.md       # Main event schedule
├── 04-dos-donts-hardware-deployment.md
├── 05-ports-purpose.md            # Port reference
├── 06-terminology-cheat-sheet.md  # Technical glossary
├── 07-understanding-git.md        # Git guide
├── 10-hardware-list-2026.md       # Hardware inventory
├── 10-ports-rooms-patch-list.md   # Patch list
├── 11-setup-breakdown-schedule.md  # Setup schedule
│
├── 3 - Event and Work Schedule/   # Original schedule files
│   ├── SCaLE - Show Setup Plan.docx
│   └── RETIRED/                   # Old schedules
│
├── 8 - Maps/                      # Venue maps
│   └── PORTS & ROOMS PATCH LIST.xlsx
│
├── 9 - Hardware List/             # Hardware inventory
│   ├── SCaLE Cable & Room Inventory 2026.xlsx
│   └── RETIRED/                   # Previous years
│
├── EQUIPMENT PICTURES/            # Hardware photos
│   ├── 2025 deployed equipment/
│   │   └── AP Pictures/
│   └── JPEG/
│
├── RETIRED/                       # Deprecated documents
│   └── 08-switch-configurations-2020-deprecated.md
│
└── TRAINING VIDEOS/
    └── CABLE DEPLOY & WRAP DEMO.mp4
```

---

## Common Tasks

### Cable Deployment

1. Review [Do's and Don'ts](./04-dos-donts-hardware-deployment.md)
2. Check [Ports & Purpose](./05-ports-purpose.md) for device connections
3. Use the [Hardware List](./10-hardware-list-2026.md) to find cables
4. Reference the [Patch List](./10-ports-rooms-patch-list.md) for data jacks

### Access Point Setup

See [Ports & Purpose](./05-ports-purpose.md) for:
- OpenWRT One connections
- Old style AP connections
- Linksys/Belkin connections
- Raspberry Pi connections

### Switch Configuration

1. See [Switch Configurations (2020)](./RETIRED/08-switch-configurations-2020-deprecated.md) for reference
2. Current configs are generated from the repository
3. Port stickers are available from GitHub releases

---

## Important Links

- **Tech Mailing List**: tech@lists.linuxfests.org
- **IRC**: #scale-tech on irc.libera.chat
- **GitHub**: https://github.com/socallinuxexpo/scale-network
- **GitHub Releases**: https://github.com/socallinuxexpo/scale-network/releases

---

## Original Source Files

This directory contains both:
- **Markdown files** (.md) - Human-readable versions
- **Original files** (.docx, .xlsx, .pdf) - Preserved for reference

The Markdown versions are maintained for easier viewing in GitHub and development. The original files contain complete data and should be used for planning.

---

## Contributing

To propose changes to these documents:

1. Create a feature branch: `git checkout -b docs-update`
2. Make your changes to the Markdown files
3. Submit a pull request with `[READY]` prefix
4. Wait for review from a team member

See [07-understanding-git.md](./07-understanding-git.md) for Git setup instructions.

---

## Version

Current: SCaLE 23x (2026)

*Last updated: March 2026*
