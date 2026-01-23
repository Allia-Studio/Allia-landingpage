---
name: commit
description: >
  Professional git commits following conventional-commits format.
  Trigger: When creating commits, after completing code changes, when user asks to commit.
license: Apache-2.0
metadata:
  author: allia-studio
  version: "1.0"
  scope: [root]
  auto_invoke: "Create git commit, commit changes"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---

## Commit Format

```
type(scope): concise description

- Key change 1
- Key change 2
- Key change 3
```

## Types

| Type | Use When |
|------|----------|
| `feat` | New feature or functionality |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `chore` | Maintenance, dependencies, configs |
| `refactor` | Code change without feature/fix |
| `test` | Adding or updating tests |
| `perf` | Performance improvement |
| `style` | Formatting, no code change |

## Common Scopes

| Scope | When |
|-------|------|
| `components` | UI components |
| `pages` | Page files |
| `api` | API routes or endpoints |
| `lib` | Utilities, helpers |
| `styles` | CSS/styling changes |
| `config` | Configuration files |
| `deps` | Dependencies |
| *omit* | Multiple scopes or root-level |

## Rules

```
✅ DO:
- Keep title under 72 characters
- Use imperative mood ("add" not "added")
- Be concise and clear
- Ask user confirmation before committing

❌ DON'T:
- Include counts ("6 files", "3 components")
- Add implementation details in title
- Use git push --force
- Commit without user request
```

## Examples

### Good

```bash
feat(components): add service card component
fix(api): resolve authentication timeout
chore(deps): update dependencies
docs: update installation guide
refactor: simplify form validation logic
```

### Bad

```bash
feat(components): add service card component with hover animation and 3 variants  # Too long
fix: fixed bug  # Vague, past tense
update stuff  # No type, vague
```

## Workflow

1. **Check status**
   ```bash
   git status
   git diff --stat HEAD
   ```

2. **Draft message** - Choose type, scope, write title + bullets

3. **Confirm with user** - Show files and proposed message

4. **Execute**
   ```bash
   git add <files>
   git commit -m "type(scope): description"
   ```

## Multi-line Commit

```bash
git commit -m "$(cat <<'EOF'
feat(components): add card component

- Add hover state animation
- Implement responsive layout
- Include loading skeleton
EOF
)"
```

## Decision Tree

```
Single file changed?     → Title only, no body
Multiple files?          → Include body with key changes
Multiple scopes?         → Omit scope: `feat: description`
Single scope?            → Include: `feat(scope): description`
```

## Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- Related skill: `changelog`
