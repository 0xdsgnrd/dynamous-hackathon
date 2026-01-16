# I Built a Landing Page in 43 Minutes Using AI — Here's Exactly How

*A behind-the-scenes look at the Dynamous Community Hackathon and the system I used to ship fast without sacrificing quality.*

---

## The Challenge

The prompt was deliciously meta: **Build a landing page that showcases how you build landing pages with AI.**

One hour. Deployed URL required. Judged on visual polish (40%), content quality (40%), and creativity (20%).

The twist? The page itself would be proof of the process.

---

## The Problem with "Just Ask AI"

Here's what happens when you tell an AI coding assistant "make me a landing page":

- Dark background (#0a0a0f)
- Purple gradient accents
- System fonts
- Centered layouts
- Generic tech aesthetic

I know because that's exactly what I got on my first attempt. It looked like every other AI-generated site. Forgettable. Safe. *Slop.*

The judges would scroll past it in seconds.

---

## The System That Changed Everything

Instead of prompting harder, I stepped back and built a system. Three components:

### 1. The PIV Loop

**Plan → Implement → Validate**

Before asking for code, I give the AI context. What am I building? What's the aesthetic direction? What files exist? This isn't overhead — it's the difference between generic output and distinctive work.

### 2. The /frontend-design Skill

I wrote a reusable "skill" — essentially a detailed instruction set that encodes my design taste:

- Commit to BOLD aesthetic directions (brutalist, editorial, maximalist — pick a lane)
- Avoid anti-patterns: purple gradients, Inter font, predictable layouts
- Focus on typography, color, motion, spatial composition
- Match implementation complexity to the vision

This skill isn't magic. It's documented taste. My judgment, made reusable.

### 3. Documentation as Content

I logged everything: every prompt, every iteration, every decision. The devlog became source material for the page itself. Meta documentation enabled a meta landing page.

---

## The Build: 43 Minutes, 10 Commits

Here's the actual timeline, verifiable on GitHub:

| Time | What Happened |
|------|---------------|
| 12:23 | Started with `/prime` to load project context |
| 12:24 | Created the `/frontend-design` skill |
| 12:29 | Complete redesign — "editorial brutalist" direction |
| 12:44 | Added my name, avatar, personalization |
| 12:52 | Accessibility improvements for non-technical readers |
| 13:00 | Easter egg + commit counter |
| 13:06 | Final tweaks, deployed |

**Total: 43 minutes from first commit to live URL.**

---

## The Redesign: From Generic to Distinctive

### Version 1 (The "AI Slop" Version)
- Dark theme
- Purple gradients
- System fonts
- Centered, symmetrical layouts
- *Looked like everyone else's*

### Version 2 (Editorial Brutalist)
- Warm cream background (#FFFDF8)
- Coral accent (#FF6B4A)
- Instrument Serif + Sora + JetBrains Mono
- Exposed 2px borders
- Asymmetric 12-column grid
- *Looks intentionally designed*

The difference? **Specificity.**

I didn't say "make it look good." I said "editorial brutalist, warm cream, coral accent, serif headlines, exposed borders."

---

## Key Insights

### 1. Specificity is the Secret

Vague prompts get vague output. "Editorial brutalist with warm cream #FFFDF8 background and coral #FF6B4A accents" gets something distinctive.

### 2. Encode Your Taste

The `/frontend-design` skill took 10 minutes to write. It'll save hours across every future project. Your judgment, documented and reusable.

### 3. Light Mode is Contrarian

Everyone defaults to dark themes. A warm cream background immediately stood out in the hackathon submissions.

### 4. The Loop Matters

Plan → Implement → Validate isn't bureaucracy. It's how you keep AI on track and catch issues before they compound.

### 5. Document Everything

Every prompt, every iteration. The documentation became content. The process proved itself.

---

## The Easter Egg

Click "Editorial Brutalist" in the footer.

You'll see what the page *would have looked like* without the system: purple gradients, dark mode, generic everything.

Then click back to the good version.

That's the whole point, visualized.

---

## The Result

**Live site:** [dynamous-hackathon.vercel.app](https://dynamous-hackathon.vercel.app)

**Verified build time:** [GitHub commit history](https://github.com/0xdsgnrd/dynamous-hackathon/commits/main)

A meta landing page that showcases how I build pages — built using the exact workflow it describes, in 43 minutes, with cryptographic proof of the timeline.

---

## Try It Yourself

The system isn't proprietary. Here's what you need:

1. **An AI coding assistant** (Claude Code, Cursor, etc.)
2. **A project context file** (CLAUDE.md or similar)
3. **A design skill** (your taste, documented)
4. **The PIV loop** (Plan → Implement → Validate)

Start specific. Stay specific. Document everything.

The AI does the typing. You do the thinking.

---

*Built by Kris Kutayiah at the Dynamous Community Hackathon, January 16, 2026.*
