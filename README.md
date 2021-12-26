# isensei-monorepo

Monorepo for all isensei related projects

## Commit messages

This repository follows conventional commits specification

The commit messages structure is as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements:

- **fix**: a commit of the _type_ `fix` patches a bug in your codebase (this correlates with `PATCH` in Semantic Versioning).
- **feat**: a commit of the _type_ `feat` introduces a new feature to the codebase (this correlates with `MINOR` in Semantic Versioning).
- **BREAKING CHANGE**: a commit that has a footer `BREAKING CHANGE`:, or appends a `!` after the type/scope, introduces a breaking API change (correlating with `MAJOR` in Semantic Versioning). A BREAKING CHANGE can be part of commits of any _type_.
- A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., `feat(parser): add ability to parse arrays`.

- other available commit types are: `build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test`
