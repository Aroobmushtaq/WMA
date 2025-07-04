# Git 

Git is a version control system used by developers to track and manage changes in their code.

## 📘 What I’m Learning

- What is Git and GitHub
- How to initialize a repository
- How to create branches
- How to stage, commit, push, and pull changes
- How to merge branches using Pull Requests
- How to resolve merge conflicts

---

```bash
# 🔰 Basic Git Commands
git init                     # Initialize a new Git repository
git status                   # Show current status
git add .                    # Stage all changes
git commit -m "message"      # Commit staged changes with a message
git push origin branch       # Push changes to GitHub
git pull origin branch       # Pull latest changes from GitHub
git checkout branch          # Switch to another branch
git branch                   # View all branches
git merge branch             # Merge specified branch into current branch
git checkout -b branch-name     # Create and switch to a new branch
git checkout main               # Switch back to main branch
git branch -D branch-name       # Delete a branch (safe delete, only if merged)
```
---

# 🔄 Undoing Changes

```bash
git restore filename         # Undo changes in working directory (untracked or modified)
git restore --staged filename # Unstage a file (move from staging back to working dir)
git reset HEAD~1             # Undo last commit but keep the changes
git reset --hard HEAD~1      # Completely remove last commit and changes (⚠️ irreversible)
git reset commit hash                 # commited changes (for many commits)
```

---

## ✍️ Commit Message Guidelines (Conventional Commits)
We follow the Conventional Commits format for writing meaningful commit messages.

###  Format

type(optional scope): description

### Example 

feat(auth): add user login form with validation

## Common Types

- **feat**: Use when adding a new feature  
  _Example_: `feat(cart): add checkout button`

- **fix**: Use when fixing a bug  
  _Example_: `fix(api): correct response handling`

- **docs**: Use when making changes to documentation only  
  _Example_: `docs(readme): update installation steps`

- **style**: Use for code style changes (formatting, spaces, etc.)  
  _Example_: `style(home): fix indentation`

- **refactor**: Use for code refactoring (no new features or bug fixes)  
  _Example_: `refactor(nav): simplify logic`

- **test**: Use when adding or updating tests  
  _Example_: `test(user): add unit test for login`

- **chore**: Use for routine tasks like dependency updates or config changes  
  _Example_: `chore: update dependencies`