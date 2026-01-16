---
description: Quick-log an entry to the devlog
---

# Log Entry

Append a new entry to the development log.

## Usage

When the user runs `/log`, ask for:
1. **What happened?** (brief description)
2. **What was the prompt/input?** (if applicable)
3. **What was produced?** (outcome)
4. **Any decisions or iterations?**

Then append to `dev/devlog.md` in this format:

```markdown
### Entry N: [Title]

**Time:** [relative or actual]
**Action:** [what was done]

**Prompt:**
> [user's prompt if applicable]

**Result:**
[what was produced/changed]

**Notes:**
[any decisions, iterations, or observations]
```

Also append a structured entry to the latest session log in `dev/logs/`.

## Quick Log

For rapid logging during fast iteration, accept a one-liner:

```
/log "Added mobile nav menu after seeing hamburger was missing"
```

And create a minimal entry:

```markdown
### Entry N: Added mobile nav menu

**Note:** Hamburger menu was missing, added responsive nav.
```

## After Logging

Remind the user they can commit with a detailed message to capture the change in git history as well.
