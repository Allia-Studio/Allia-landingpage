---
name: changelog
description: >
  Changelog management following keepachangelog.com format.
  Trigger: When creating PRs, adding changelog entries, or updating CHANGELOG.md.
license: Apache-2.0
metadata:
  author: allia-studio
  version: "1.0"
  scope: [root]
  auto_invoke: "Add changelog entry, update CHANGELOG"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---

## Section Order (Always)

```markdown
## [Unreleased]

### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
```

## Section Usage

| Section | Use For |
|---------|---------|
| **Added** | New features, components, pages |
| **Changed** | Modifications to existing functionality |
| **Deprecated** | Features marked for future removal |
| **Removed** | Deleted features (MAJOR versions only) |
| **Fixed** | Bug fixes |
| **Security** | Security patches |

## Entry Format

```markdown
### Added

- Service card component with expandable details
- User authentication flow

### Fixed

- Navigation scroll behavior on mobile
- Form validation error messages
```

## Rules

```
✅ DO:
- Blank line after section header
- Blank line between sections
- Be specific about what changed
- Use present tense

❌ DON'T:
- End entries with period
- Start with redundant verbs ("Added new...")
- Be vague ("Fixed bug")
```

## Good vs Bad

```markdown
# Good
- Service card component with hover animation
- Navigation responsive breakpoints
- Authentication timeout on slow connections

# Bad
- Fixed bug.                    # Vague, has period
- Added new feature for users   # Redundant "Added"
- Updates                       # Too vague
```

## Semantic Versioning

| Change Type | Version Bump | Example |
|-------------|--------------|---------|
| Bug fixes | PATCH (x.y.**Z**) | 1.0.0 → 1.0.1 |
| New features | MINOR (x.**Y**.0) | 1.0.1 → 1.1.0 |
| Breaking changes | MAJOR (**X**.0.0) | 1.1.0 → 2.0.0 |

## Template

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

### Changed

### Fixed

---

## [1.0.0] - YYYY-MM-DD

### Added

- Initial release
```

## Workflow

1. **Determine section** - Added, Changed, Fixed, etc.
2. **Write entry** - Specific, no period, no redundant verb
3. **Add to [Unreleased]** - Under correct section
4. **On release** - Move entries to versioned section with date

## Resources

- [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
- [Semantic Versioning](https://semver.org/)
- Related skill: `commit`
