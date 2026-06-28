@AGENTS.md

## Notes

- JSX-only React 18, no TypeScript and no test/lint scripts, so verify changes by running `npm run dev` / `npm run build`.
- Single-page app: no router; navigation is scroll-to-section wired through `App.jsx` refs. Edit section components under `src/components/`.

## Compaction

When compacting, preserve: current task, files modified this session, failing checks/build errors, and decisions + rationale. Drop exploratory reads. Write durable state to `HANDOFF.md` before compacting.
