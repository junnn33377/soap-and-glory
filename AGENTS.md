# Project Guidelines & Turbo Execution Rules

## 1. Speed & Execution Protocol
- **Minimize Tool Calls (Max 1-3 tool calls per task):** Do NOT perform speculative exploration, redundant file viewing, or chain multiple search calls when target files and symbols are already identifiable.
- **Direct Edits:** Make immediate, surgical edits to target files directly without round-trip re-reading.
- **Single Source of Truth:** All product catalog data is maintained strictly in `src/data/products.js`. Components must derive counts, filters, and prices dynamically—never hardcode catalog numbers in component markup.
- **No Unsolicited Browser Subagents:** NEVER spawn `browser_subagent` or run Playwright tests unless the user explicitly commands "test in browser" or "open browser". Browser emulation adds massive latency.
- **No Unsolicited Documentation Overhead:** Do NOT edit markdown QA checklists, test logs, or standard docs on minor fixes unless the user specifically asks for documentation updates.
- **Validation:** Validate code using a single fast `npm run build` at the end.
