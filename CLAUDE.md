# Series bible: Building Real Software with AI (AIUP + Book Nook)

This file is the single source of truth for names, decisions and writing rules.
Any AI assistant working in this repo must read it first. If a lesson contradicts
this file, this file wins until a decision record in `decisions/` changes it.

## What this is

A free, self-published tutorial site (Astro Starlight on GitHub Pages) that teaches
the AI Unified Process (AIUP) by building **Book Nook**, a small library application,
starting from an empty folder. No Medium. No starter code.

The reference implementation lives in a separate repo (`book-nook`), with one git tag
per lesson (`lesson-03-complete`, ...). Readers only use it to check their work.

## Attribution (non-negotiable)

- AIUP was created by Simon Martinelli. His Book Library example inspired Book Nook.
- Never claim something is "required by AIUP" unless it is in his published material.
  Link the source when making a claim about the method.
- Anything we added is marked with an aside titled `Our adaptation`.
- Never imply endorsement by Simon Martinelli unless he has given it in writing.

## Canonical names (do not rename without a decision record)

| Thing | Canonical form |
|---|---|
| App | Book Nook |
| Use cases | UC-001 Search Catalogue · UC-002 TODO · UC-003 TODO · UC-004 TODO · UC-005 TODO (Manage Catalogue?) |
| Business rules | BR-001 to BR-009 (as defined in Lesson 2) |
| Entities | Book, Member, Loan |
| Implementation order | UC-001, UC-005, UC-002, UC-003, UC-004 |

TODO: fill the UC names from the Lesson 2 draft, word for word.

## Technology stack (fixed for this series)

Java 25 · Spring Boot · Vaadin · jOOQ · PostgreSQL · Flyway · Maven · Claude Code with
the AIUP plugins. Exact versions go in `reference/versions.md` and are updated only when
the reference implementation is re-tested.

## Reader

Motivated beginner developers and students. Explain every concept the first time it is
used, in plain language. Never skip a step. Every command must be copyable.

## Voice

Simple English, friendly, professional. Short paragraphs. No hype, no "revolutionary",
no "in today's fast-paced world". Australian spelling.

## Prompt format (use for every AI prompt)

1. `:::tip[Purpose]` one or two sentences
2. A fenced `text` code block with a `title="Prompt N.M — ..."` attribute (the exact prompt)
3. `:::note[Expected result]` what a good answer looks like
4. `:::caution[Review before you accept]` a checklist the human must check
5. **Next action:** one line

## Honesty rules

- Never show an AI output as real unless it was really produced. Label illustrative
  outputs as "Example output (abridged)".
- Every lesson ends with a "Tested with" box: reference repo tag, tool versions, date.
- No productivity or quality claims about AIUP without a published source.

## Lesson status

Use `draft: true` in frontmatter until the lesson has been tested end to end against
the reference repo tag.
