# AGENTS.md

This file defines the available agents and their capabilities for this project.

## Available Agents

### Prime Agent
**Location**: `.claude/commands/prime.md`
**Purpose**: Understand the project structure and provide context

Use this agent when you need to:
- Get an overview of the project
- Understand the file structure
- Learn about available commands and workflows

### Development Workflows

#### Starting Development
1. Run the prime command to understand the project
2. Read the relevant README.md files
3. Start the development servers as needed

#### Adding New Features
1. Understand the existing code structure
2. Follow the code style guidelines in CLAUDE.md
3. Write tests for new functionality
4. Run linters before committing

## Project Layers

### Agentic Layer
Files that guide AI agent behavior:
- `CLAUDE.md` - Project-wide AI guidance
- `AGENTS.md` - Agent definitions (this file)
- `.claude/commands/` - Reusable command prompts

### Application Layer
Actual application code:
- `apps/user-management/` - Python microservice
- `apps/web/` - Next.js frontend
