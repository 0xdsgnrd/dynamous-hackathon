# User Management Microservice

A Python microservice for user management built with FastAPI and Pydantic.

## Requirements

- Python 3.12+
- [uv](https://github.com/astral-sh/uv) (recommended) or pip

## Setup

```bash
# Install dependencies with uv
uv sync

# Or with pip
pip install -e ".[dev]"
```

## Development

```bash
# Start the development server
uv run uvicorn main:app --reload

# Run tests
uv run pytest

# Run linter
uv run ruff check .
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Root endpoint |
| GET | `/health` | Health check |
| POST | `/api/v1/users/` | Create a user |
| GET | `/api/v1/users/` | List all users |
| GET | `/api/v1/users/{id}` | Get a user |
| PATCH | `/api/v1/users/{id}` | Update a user |
| DELETE | `/api/v1/users/{id}` | Delete a user |

## Project Structure

```
user-management/
├── main.py          # FastAPI application entry point
├── models.py        # Pydantic models
├── routes.py        # API route handlers
├── pyproject.toml   # Project configuration
└── README.md        # This file
```
