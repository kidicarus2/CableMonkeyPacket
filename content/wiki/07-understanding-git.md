---
title: "Understanding Git"
date: 2024-01-01
---

# Understanding Git

## Git Start Here

### Installation

Download Git: https://git-scm.com/downloads

### Setup

#### Create a GitHub account
https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github

#### Create an SSH key
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

#### Apply SSH key to GitHub Account
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

#### Test your connection to GitHub
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection

---

## The Scale-Network Repo - Contributors Guide

Now that you have git and ssh setup for the repo, follow this guide to make changes:

https://github.com/socallinuxexpo/scale-network/blob/master/CONTRIBUTING.md

---

## Trunk Based Workflow

The scale-network repo uses Trunk Based Development:

https://trunkbaseddevelopment.com/observed-habits/

---

## Useful Links

### Repositories

| Repository | URL |
|------------|-----|
| The Scale-Network Repo | https://github.com/socallinuxexpo/scale-network |
| Full Scale Repo | https://github.com/socallinuxexpo |

### Switch Configuration

Switch Configuration Types:
https://github.com/socallinuxexpo/scale-network/tree/master/switch-configuration/config/types

### Releases

Recent Network Config Release - Access most recent PDF info for Switch port layout:
https://github.com/socallinuxexpo/scale-network/releases

---

## Other Knowledge

### SSH Cookbook

- https://en.wikibooks.org/wiki/OpenSSH/Cookbook/Proxies_and_Jump_Hosts
- https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account

### Key Exchange

Video: https://www.youtube.com/watch?v=U62S8SchxX4

A simple demonstration of how two people can agree on a secret key, even though all of their communications are carried out in public.

---

## Quick Git Reference

### Basic Commands

```bash
# Clone repository
git clone git@github.com:socallinuxexpo/scale-network.git

# Create feature branch
git checkout -b feature-branch-name

# Check status
git status

# Add changes
git add filename
git add .  # Add all changes

# Commit changes
git commit -m "Description of changes"

# Push to remote
git push origin feature-branch-name

# Pull latest changes
git pull origin main
```

### Working with Branches

```bash
# List branches
git branch

# Switch branches
git checkout branch-name

# Merge branch
git merge branch-name

# Delete branch
git branch -d branch-name
```

### Reviewing Changes

```bash
# View diff
git diff

# View log
git log

# View specific file changes
git log -p filename
```

---

## Contribution Workflow

1. **Clone** the repository
2. **Create** a feature branch from master
3. **Make** your changes
4. **Commit** with descriptive messages
5. **Push** to your feature branch
6. **Create** a Pull Request with `[READY]` or `[WAIT]` prefix
7. **Wait** for review and approval
8. **Merge** after approval

See [CONTRIBUTING.md](https://github.com/socallinuxexpo/scale-network/blob/master/CONTRIBUTING.md) for full details.
