# CLAUDE.md

This file provides guidance to AI agents when working with this codebase.

## Project Overview

A monorepo containing multiple applications:
- **user-management**: A Python microservice built with FastAPI and uv (Astral)
- **web**: A Next.js frontend application with TypeScript and Tailwind CSS

## Commands

### Python Microservice (apps/user-management)
- `uv run dev` - Start development server
- `uv run test` - Run pytest suite
- `uv run lint` - Run ruff linter

### Next.js App (apps/web)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## Code Style

### Python
- Use Python 3.12+ features
- Follow PEP 8 conventions
- Type hints required for all functions
- Use Pydantic for data validation

### TypeScript/React
- Use TypeScript strict mode
- Prefer functional components with hooks
- Use Tailwind CSS for styling
- Follow Next.js App Router conventions
