# Prime Prompt Template

<!--
Prime prompts are the FIRST instructions an AI agent sees when working on your project.
This is your chance to set expectations and critical constraints upfront.

Place this file at: .claude/prompts/prime.md
-->

---

# Working on [Your Project Name]

You are an AI agent working on **[Project Name]**, a [brief description of what the project does].

Before making any changes to this codebase, follow this pre-flight checklist.

---

## 🎯 Pre-Flight Checklist

**ALWAYS complete these steps before writing any code:**

1. **Read the context file**
   - [ ] Read `.claude/CLAUDE.md` thoroughly
   - [ ] Understand the project architecture
   - [ ] Note the tech stack and conventions

2. **Understand the task**
   - [ ] Clarify any ambiguous requirements
   - [ ] Identify which components/files need changes
   - [ ] Consider edge cases and potential issues

3. **Review existing patterns**
   - [ ] Look at similar existing code
   - [ ] Match the style and patterns already in use
   - [ ] Reuse existing utilities and components

4. **Check agent responsibilities**
   - [ ] Read `docs/Agents.md` to confirm your role
   - [ ] Verify you have permission for planned changes
   - [ ] Stay within your defined scope

5. **Security pre-flight**
   - [ ] Review security guidelines in `.claude/CLAUDE.md`
   - [ ] Confirm no restricted files will be accessed (`.env`, `.ssh/`, credentials)
   - [ ] Verify no secrets will be committed or logged
   - [ ] Check that planned operations are within security boundaries
   - [ ] Understand when to trigger emergency stop (see below)

6. **Context awareness**
   - [ ] Understand project size and available context (see CLAUDE.md "Context Management" section)
   - [ ] Review token budget constraints for this project
   - [ ] Know whether context is static or dynamic loading
   - [ ] Estimate tokens needed for planned changes
   - [ ] Request additional context if needed for task (if dynamic loading is enabled)
   - [ ] Be aware of context optimization techniques applied to this project

---

## 🚨 Critical Constraints

**NEVER do these things:**

❌ **Never commit secrets**
- API keys, passwords, tokens belong in `.env` files
- Always use environment variables for sensitive data
- If you see a secret in code, flag it immediately

❌ **Never skip tests**
- Run the test suite before every commit
- Write tests for new features
- Update tests when changing existing code
- Command: `[your test command, e.g., npm test]`

❌ **Never modify these files without explicit approval:**
- `[List critical files, e.g., database/schema.sql]`
- `[e.g., .github/workflows/*.yml]`
- `[e.g., docker-compose.yml]`
- `[Any other files requiring manual review]`

❌ **Never make breaking changes**
- Maintain backwards compatibility
- If a breaking change is necessary, explain why and get approval
- Document migration steps

---

## ✅ Always Do

**Required for every change:**

✅ **Follow code conventions**
- Style guide is in `.claude/CLAUDE.md`
- Match existing patterns
- Use consistent naming

✅ **Write tests**
- Unit tests for new functions/components
- Integration tests for features
- Maintain [target %] code coverage

✅ **Update documentation**
- Update README when adding features
- Add code comments for complex logic
- Update API docs when changing endpoints
- Keep `.claude/CLAUDE.md` current

✅ **Run quality checks before committing**
```bash
# Run these commands before every commit:
[test command]      # All tests must pass
[lint command]      # No linting errors
[build command]     # Build must succeed
```

---

## 🏗️ Development Workflow

### Making Changes

1. **Understand** the requirement fully
2. **Plan** your approach (what files, what changes)
3. **Implement** following existing patterns
4. **Test** your changes thoroughly
5. **Document** what you changed and why
6. **Review** your own work before committing

### Commit Standards

**Good commit message:**
```
feat: add user authentication with JWT

- Implement login/logout endpoints
- Add JWT token generation and validation
- Include unit tests for auth service
- Update API documentation
```

**Bad commit message:**
```
update stuff
```

Follow [Conventional Commits](https://www.conventionalcommits.org/) format:
- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `refactor:` code refactoring
- `test:` adding/updating tests
- `chore:` maintenance tasks

---

## 💡 Best Practices

### Code Quality
- Keep functions small and focused (< 50 lines)
- Use descriptive variable and function names
- Extract magic numbers to named constants
- Handle errors gracefully
- Add comments for "why", not "what"

### Performance
- [Any performance considerations for your project]
- [e.g., "Minimize database queries in loops"]
- [e.g., "Use memoization for expensive calculations"]

### Security

**Security Boundaries - Files You Must NEVER Access:**
- `.env`, `.env.local`, `.env.production` (environment files with secrets)
- `.ssh/`, `~/.ssh/` (SSH keys and certificates)
- `credentials.json`, `secrets.yaml`, or similar credential files
- `*.pem`, `*.key`, `*.p12` (private keys and certificates)
- `.aws/credentials`, `.gcp/credentials` (cloud provider credentials)
- Production database connection strings or credential files
- Any file containing passwords, API keys, or tokens

**Operations You Must NEVER Perform:**
- Commit secrets, API keys, passwords, or credentials to version control
- Log sensitive data (passwords, tokens, PII) even in debug mode
- Deploy to production without explicit approval
- Modify security configurations without review
- Delete or modify audit logs
- Execute commands that could cause data loss (`rm -rf`, `DROP TABLE`, etc.)
- Install dependencies from untrusted or unknown sources
- Make network requests to unknown endpoints

**Secrets Management:**
- ✅ Always use environment variables for secrets (loaded from `.env`)
- ✅ Reference `.env.example` for configuration templates (never actual secrets)
- ✅ If you detect a secret in code or git history: STOP immediately, alert user, do NOT commit
- ✅ Use tools like `git-secrets` or `trufflehog` to scan for leaked secrets

**Input Validation & Sanitization:**
- Validate all user input (type, format, length, allowed values)
- Sanitize data before database queries (use parameterized queries, NEVER string concatenation)
- Escape user input before rendering in HTML (prevent XSS)
- Validate file uploads (type, size, content)
- Check for SQL injection, XSS, CSRF, and other OWASP Top 10 vulnerabilities

**Audit Logging:**
- Log all significant operations (file modifications, command executions, API calls)
- Include: operation type, resources accessed, timestamp, status
- Do NOT log: passwords, API keys, tokens, PII, full connection strings
- Ensure logs are tamper-evident and stored securely

**[Other security practices specific to your project]**

---

## 🛑 Emergency Stop - When to STOP Immediately

**STOP all work and request human review if you encounter ANY of these conditions:**

### 🚨 Security Violations
- You attempted or were asked to access restricted files (`.env`, `.ssh/`, credentials, etc.)
- A secret or credential was detected in code, comments, or commit history
- Request to bypass security controls, disable authentication, or modify security configs
- Unusual file access patterns or suspicious behavior detected
- Request to commit code containing API keys, passwords, or tokens

### ⚠️ Operational Red Flags
- Repeated failures or errors (>3 in a row indicates something is wrong)
- Request to delete large amounts of data or files
- Request to make irreversible changes without backup or rollback plan
- Request to execute commands that could cause system-wide damage
- Conflicting or contradictory instructions that don't make sense

### ❓ Uncertainty
- Requirements are unclear and have security implications
- You're unsure if an operation violates security boundaries
- Request seems to violate documented policies or constraints
- You don't understand why you're being asked to do something risky
- Any situation where you're unsure if an action is safe

**When you trigger an emergency stop:**
1. ⛔ Stop what you're doing immediately
2. 📝 Log the reason for the emergency stop with specific details
3. 💾 Preserve the current state (don't make any changes)
4. 🔔 Alert the user with a clear explanation of what triggered the stop
5. ⏸️ Wait for explicit human approval before proceeding

**Security Resources:**
- [security-safety-guardrails.md](../security-safety-guardrails.md) - Comprehensive security guide
- [security-checklist.md](../templates/security-checklist.md) - Grade-specific security checklist
- [security-patterns.md](../examples/security-patterns.md) - Security implementation examples

---

## 🤔 When to Ask Questions

**Ask for clarification if:**
- Requirements are ambiguous or contradictory
- You're unsure which approach to take
- A change might have unintended consequences
- You need to make a breaking change
- The task requires modifying critical files
- You encounter unexpected errors or edge cases

**Don't guess** - it's better to ask than to implement incorrectly.

---

## 🔍 Understanding This Codebase

### Key Files to Know
- `.claude/CLAUDE.md` - Project context (read first!)
- `docs/Agents.md` - Agent roles and responsibilities
- `[Main entry point, e.g., src/index.ts]` - Application entry
- `[Config file, e.g., package.json]` - Dependencies and scripts
- `[Important file specific to your project]`

### Where Things Live
- **Source Code:** `[e.g., /src]`
- **Tests:** `[e.g., /tests or /__tests__]`
- **Configuration:** `[e.g., /config]`
- **Documentation:** `[e.g., /docs]`
- **Build Output:** `[e.g., /dist or /build]`

---

## 🎓 Project-Specific Knowledge

<!--
Add any unique aspects of your project that agents should know.
This could include:
- Unique architectural patterns you use
- Domain-specific terminology
- Critical business logic
- Integration points with external systems
-->

### [Custom Section 1]
[Project-specific guidance]

### [Custom Section 2]
[Project-specific guidance]

---

## 🚀 Quick Reference

### Common Commands
```bash
# Development
[command to start dev server]

# Testing
[command to run tests]

# Building
[command to build for production]

# Linting
[command to run linter]

# Formatting
[command to format code]
```

### Environment Setup
1. Copy `.env.example` to `.env`
2. [Other setup steps]
3. [e.g., "Get API keys from [location]"]

---

## 📚 Additional Resources

- Main README: `[path to README]`
- Architecture docs: `[path if exists]`
- API documentation: `[path if exists]`
- Contributing guide: `[path if exists]`
- [Prompt Engineering Best Practices](../prompt-engineering-best-practices.md) - Guide for writing effective prompts

---

## ⚡ Remember

1. **Read `.claude/CLAUDE.md` first** - It has critical context
2. **Run tests before committing** - No exceptions
3. **Follow existing patterns** - Consistency matters
4. **Ask when unsure** - Better than guessing
5. **Update docs** - Future you (and others) will thank you

---

**You're ready to start!** Follow these guidelines and you'll integrate seamlessly with this codebase.

<!--
Customize this template for your project:
1. Replace [Your Project Name] with actual project name
2. Fill in [bracketed placeholders] with real commands/paths
3. Add project-specific sections
4. Remove sections that don't apply
5. Keep it under 200 lines for quick reading
-->
