# My Agentic App

A monorepo demonstrating the "Agentic Layer" pattern for AI-assisted development.

## Project Structure

```
my-agentic-app/
├── .claude/                    # Agentic Layer
│   └── commands/
│       └── prime.md            # Project understanding command
├── apps/
│   ├── user-management/        # Python microservice (FastAPI)
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── routes.py
│   │   ├── pyproject.toml
│   │   └── README.md
│   └── web/                    # Next.js frontend
│       ├── src/app/
│       ├── package.json
│       └── README.md
├── AGENTS.md                   # Agent definitions
├── CLAUDE.md                   # AI agent guidance
└── README.md                   # This file
```

## Agentic Layer

This project uses an "Agentic Layer" to provide context and guidance to AI coding assistants:

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Project-wide guidance for AI agents |
| `AGENTS.md` | Agent definitions and workflows |
| `.claude/commands/prime.md` | Reusable command to understand the project |

## Getting Started

### Python Microservice

```bash
cd apps/user-management

# Install uv (if not already installed)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Install dependencies
uv sync

# Run development server
uv run uvicorn main:app --reload
```

### Next.js Frontend

```bash
cd apps/web

# Install dependencies
npm install

# Run development server
npm run dev
```

## Using with Claude Code

When working with this project in Claude Code, the AI agent will automatically read `CLAUDE.md` and `AGENTS.md` to understand:

- Project structure and conventions
- Available commands and scripts
- Code style guidelines
- Development workflows

Use the `/prime` command (via `.claude/commands/prime.md`) to have Claude analyze and report on the project structure.
