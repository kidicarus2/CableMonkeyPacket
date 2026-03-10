## 🛠️ The Git Essentials Cheatsheet

### 1. Navigation & State

| Command | What it does |
| --- | --- |
| `git status` | See what has changed and what is staged. |
| `git log --oneline --graph` | View a compact, visual history of commits. |
| `git diff` | See changes in your working directory (not yet staged). |
| `git diff --staged` | See changes that are ready to be committed. |

### 2. The Staging Area

| Command | What it does |
| --- | --- |
| `git add <file>` | Stage a specific file. |
| `git add -p` | **Pro Tip:** Interactively stage parts of a file (hunks). |
| `git commit -m "msg"` | Create a new commit with a message. |
| `git commit --amend` | Add staged changes to the *last* commit (great for typos). |

### 3. Branching & Merging

| Command | What it does |
| --- | --- |
| `git checkout -b <name>` | Create and switch to a new branch. |
| `git switch <name>` | The modern way to switch branches. |
| `git merge <branch>` | Merge another branch into your current one. |
| `git branch -d <name>` | Delete a local branch after merging. |

### 4. Fixing Mistakes (The "Panic" Section)

| Command | What it does |
| --- | --- |
| `git checkout -- <file>` | Discard changes in a file and revert to the last commit. |
| `git reset HEAD~1` | Undo the last commit but keep the changes in your files. |
| `git stash` | Temporarily "hide" changes to work on something else. |
| `git stash pop` | Bring your hidden changes back. |

---

## 🚀 The `gh pr` Cheat Sheet

### Creating & Managing

| Task | Command |
| --- | --- |
| **Create a PR** | `gh pr create` (Follows interactive prompts) |
| **Quick Create** | `gh pr create --title "Fix bug" --body "Issue #12"` |
| **List Open PRs** | `gh pr list` |
| **Check PR Status** | `gh pr status` |
| **View PR in Browser** | `gh pr view --web` |

### Reviewing & Testing

| Task | Command |
| --- | --- |
| **Checkout a PR** | `gh pr checkout <number>` |
| **View Diff** | `gh pr diff` |
| **Approve a PR** | `gh pr review --approve` |
| **Request Changes** | `gh pr review --comment -b "Check the logic on line 42"` |

### Merging & Cleaning Up

| Task | Command |
| --- | --- |
| **Merge PR** | `gh pr merge` (Interactive: Choose Merge, Squash, or Rebase) |
| **Auto-Merge** | `gh pr merge --auto --squash` (Merges once CI passes) |
| **Close PR** | `gh pr close <number>` |

### 💡 Pro-Tips for Your Workflow

* **The "Draft" Shortcut:** If you aren't ready for a full review yet, use `gh pr create --draft`.
* **Chain Commands:** You can create and immediately view it to double-check formatting:
`gh pr create --title "Update" --body "Docs" && gh pr view`
* **Shell Aliases:** If `gh pr create` feels too long, add this to your `.bashrc` or `.zshrc`:
```bash
alias gpc='gh pr create'
alias gps='gh pr status'

```

---

## 🤖 Automating PR Templates

GitHub CLI automatically detects any pull request templates you have in your repository. To set this up so you never have to manually type a description again:

1. **Create the template file:** Place a file at `.github/PULL_REQUEST_TEMPLATE.md`.
2. **Add your structure:**
```markdown
## Summary
- What does this change?
- Why is it necessary?

## Testing
- [ ] Ran local build
- [ ] Verified on NixOS VM

## Related Issues
Fixes #

```


3. **The "Magic" Command:** When you run `gh pr create`, it will pre-fill the body with this markdown. If you want to skip the editor and just use the template as-is, use:
```bash
gh pr create --fill

```


*This uses your commit titles for the PR title and the template for the body.*

---

## 🛠️ Example Workflow: Adding a "Dark Mode" Feature

Here is a standard, efficient workflow for adding a feature to a website using the terminal.

### 1. Sync and Branch

Always start from a fresh state to avoid merge conflicts.

```bash
git checkout main
git pull origin main
git checkout -b feature/dark-mode

```

### 2. Implementation

Open your editor or file manager (like **Yazi**) to make your changes. For a website feature, this might involve updating a NixOS module or a CSS file.

```bash
# Example: editing a site config
yazi site/config.nix 

```

### 3. Verification

Before pushing, run your local build or tests. If you are using a declarative setup, this might look like:

```bash
# Verify the build locally
nixos-rebuild build --flake .#my-website

```

### 4. Commit and Push

```bash
git add .
git commit -m "feat: add high-contrast dark mode support"
git push -u origin feature/dark-mode

```

### 5. Create the PR via `gh`

Instead of clicking around the GitHub UI, finalize it right here:

```bash
gh pr create --title "feat: Dark Mode Support" --body "Implements local-first theme persistence." --assignee "@me" --label "enhancement"

```

### 6. Review and Merge

Once the CI passes (you can check with `gh pr status`), merge it and clean up:

```bash
gh pr merge --squash --delete-branch

```

### 💡 Pro Tip: The "One-Liner" Alias

If you find yourself doing this often, you can add an alias to your shell configuration to handle the push and PR creation in one go:

```bash
# In your home-manager or .zshrc config:
alias gpp='git push -u origin $(git branch --show-current) && gh pr create --fill'

```

---

To set vim as your default editor for the GitHub CLI, you have three main ways to do it—ranging from a quick command to a permanent, declarative NixOS configuration.

## 1. The Quick Command

Run this directly in your terminal to update the `gh` configuration file (usually located at `~/.config/gh/config.yml`):

```bash
gh config set editor vim

```

## 2. The Declarative Way (Home Manager)

Since you use **NixOS** and **Home Manager**, the most robust way to handle this is to define it in your `home.nix` or a dedicated `gh.nix` module. This ensures your editor preference persists across reinstalls.

```nix
# In your home-manager configuration
programs.gh = {
  enable = true;
  settings = {
    editor = "vim";
    # Optional: Use SSH for git protocols
    git_protocol = "ssh";
  };
};

```

## 3. The Global Environment Variable

If you want **all** CLI tools (Git, `gh`, `kubectl`, etc.) to use Neovim, you can set the `EDITOR` environment variable. GitHub CLI will respect `GH_EDITOR` first, then `VISUAL`, then `EDITOR`.

**In your shell config (`.zshrc`, `.bashrc`, or via Nix):**

```bash
export EDITOR="vim"

```

**Or via Home Manager:**

```nix
home.sessionVariables = {
  EDITOR = "vim";
  VISUAL = "vim";
};

```

## 🚀 How it looks in practice

Now, when you run `gh pr create` or `gh pr edit`, instead of a basic text prompt or falling back to Nano, Neovim will launch inside your **Kitty** terminal.

* **To Save and Exit:** Press `Esc` then type `:wq` and hit `Enter`. The PR will be submitted immediately.
* **To Abort:** Press `Esc` then type `:cq` (exit with an error code). The GitHub CLI will see the non-zero exit and ask if you want to discard the PR.

### 💡 Pro Tip: Customizing the vim UI for PRs

If you want Neovim to open with specific settings just for GitHub (like enabling spellcheck or word wrap), you can pass flags in the config:

```bash
gh config set editor "vim -c 'set spell wrap'"

```

---

## 🚦 Conventional Commits Automation

To keep your history clean and readable (e.g., `feat:`, `fix:`, `docs:`), you can create a Git alias. This makes it easier to follow the standard without having to remember the exact syntax every time.

### The Home Manager Setup

Add this to your `home.nix` to make it permanent across your NixOS systems:

```nix
programs.git = {
  enable = true;
  aliases = {
    # Usage: git feat "add dark mode"
    feat = "!f() { git commit -m \"feat: $1\"; }; f";
    # Usage: git fix "broken navbar"
    fix = "!f() { git commit -m \"fix: $1\"; }; f";
    # Usage: git docs "update readme"
    docs = "!f() { git commit -m \"docs: $1\"; }; f";
    # Usage: git refactor "clean up api logic"
    refactor = "!f() { git commit -m \"refactor: $1\"; }; f";
  };
};

```

### How to use it:

Instead of typing the long string, you just run:

```bash
git add .
git feat "implement local-first theme persistence"

```

---
