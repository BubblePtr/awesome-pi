English | [中文](./README.md)

# Awesome Pi [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of [Pi Coding Agent](https://pi.dev) packages. Pi is a terminal AI coding harness by earendil-works with a thriving package ecosystem.

[![Pi](https://img.shields.io/badge/Pi-v0.44+-blue.svg)](https://pi.dev)
[![Packages](https://img.shields.io/badge/Packages-3300+-green.svg)](https://pi.dev/packages)
[![License](https://img.shields.io/badge/License-CC0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

[Pi Coding Agent](https://pi.dev) is a terminal AI coding harness that supports Extensions, Skills, Themes, and Prompt Templates through its Package system. This list curates the best community packages to help developers build an efficient AI-powered coding environment.

```
# Install Pi AgentOS/Linux)
curl -fsSL https://pi.dev/install.sh | sh

# Install a Pi Page
pi install npm:context-mode

# List installed Pi Pages
pi list
```

---

## Contents

- [Packages](#packages)
  - [Web Access & Search](#web-access--search)
  - [MCP Adapter](#mcp-adapter)
  - [Subagents](#subagents)
  - [UI Enhancement](#ui-enhancement)
  - [Security & Permission](#security--permission)
  - [Dev Tools & Code Intelligence](#dev-tools--code-intelligence)
  - [Persistent Memory](#persistent-memory)
  - [Context Management](#context-management)
  - [Code Review](#code-review)
  - [Task Management](#task-management)
  - [Browser Automation](#browser-automation)
  - [Communication & Collaboration](#communication--collaboration)
  - [Utilities](#utilities)
  - [Package Collections](#package-collections)
- [Themes](#themes)
  - [Dark Themes](#dark-themes)
  - [Light Themes](#light-themes)
  - [Theme Packs](#theme-packs)
  - [Featured Themes](#featured-themes)
  - [Theme Tools](#theme-tools)
- [Alternative Distributions](#alternative-distributions)

---

## Packages

### Web Access & Search

Web search and content fetching packages that give Pi access to internet information.

- 🔥 [pi-web-access](https://github.com/nicobailon/pi-web-access) - Web search, URL fetching, GitHub cloning, PDF extraction, and YouTube video understanding. Zero config, intelligent fallback chain. `pi install npm:pi-web-access`
- 🔥 [@juicesharp/rpiv-web-tools](https://github.com/juicesharp/rpiv-mono) - Pluggable web search (Brave, Tavily, Serper, Exa, Jina, Firecrawl, SearXNG, Ollama). `pi install npm:@juicesharp/rpiv-web-tools`
- 🔥 [@ollama/pi-web-search](https://pi.dev/packages/@ollama/pi-web-search) - Ollama web search and fetch API integration. `pi install npm:@ollama/pi-web-search`
- [pi-smart-fetch](https://github.com/Thinkscape/agent-smart-fetch) - Desktop browser TLS emulation, batch fetching, multi-format output (markdown/html/text/json). `pi install npm:pi-smart-fetch`
- [@narumitw/pi-firecrawl](https://github.com/narumiruna/pi-extensions) - Firecrawl-powered web scraping, crawling, URL discovery, and web search. `pi install npm:@narumitw/pi-firecrawl`
- [@code-yeongyu/pi-webfetch](https://github.com/code-yeongyu/pi-webfetch) - URL content fetching with markdown/plain text/raw HTML support. `pi install npm:@code-yeongyu/pi-webfetch`
- [@code-yeongyu/pi-websearch](https://github.com/code-yeongyu/pi-websearch) - Provider-backed web search with configuration gating and TUI status. `pi install npm:@code-yeongyu/pi-websearch`

---

### MCP Adapter

MCP (Model Context Protocol) adapter packages for connecting to external tool ecosystems.

- 🔥 [pi-mcp-adapter](https://github.com/nicobailon/pi-mcp-adapter) - MCP adapter that replaces hundreds of MCP tool definitions with ~200 token proxy tools. Supports lazy startup, metadata caching, and direct connect tools. `pi install npm:pi-mcp-adapter`

> MCP ecosystem integration: [Bright Data Web MCP](https://github.com/earendil-works/pi/discussions/76), [Scrapeless MCP](https://github.com/earendil-works/pi/discussions/74), and any MCP-compatible server.

---

### Subagents

Subagent packages for task delegation, parallel execution, and multi-agent orchestration.

- 🔥 [pi-subagents](https://github.com/nicobailon/pi-subagents) - Official subagent extension with chain, parallel execution, and TUI clarification. `pi install npm:pi-subagents`
- 🔥 [@tintinweb/pi-subagents](https://github.com/tintinweb/pi-subagents) - Claude Code-style subagents with parallel background agents, real-time widgets, and Git worktree isolation. `pi install npm:@tintinweb/pi-subagents`
- 🔥 [@gotgenes/pi-subagents](https://pi.dev/packages/@gotgenes/pi-subagents) - Friendly fork of tintinweb's subagents. `pi install npm:@gotgenes/pi-subagents`
- [@narumitw/pi-subagents](https://github.com/narumiruna/pi-extensions) - Subagents with single/parallel/chain execution modes. `pi install npm:@narumitw/pi-subagents`
- [pi-interactive-subagents](https://github.com/HazAT/pi-interactive-subagents) - Async interactive subagents, fully non-blocking with multiplexer support. `pi install git:github.com/HazAT/pi-interactive-subagents`
- [pi-agent-bus](https://github.com/kylebrodeur/pi-agent-bus) - Agent orchestration runtime based on MessageBus pub/sub. `pi install npm:pi-agent-bus`
- [roach-pi](https://github.com/tmdgusya/roach-pi) - Strict engineering discipline multi-agent orchestration suite (clarify→goal→verifier→subagent→review→LSP→MCP). `pi install git:github.com/tmdgusya/roach-pi`

---

### UI Enhancement

Terminal UI enhancement packages for better interactive experience.

- 🔥 [@narumitw/pi-statusline](https://github.com/narumiruna/pi-extensions) - Rich status bar showing model, tools, git branch, context usage, token totals, cost, and time. `pi install npm:@narumitw/pi-statusline`
- 🔥 [pi-powerline-footer](https://pi.dev/packages/pi-powerline-footer) - Powerline-style status bar extension. `pi install npm:pi-powerline-footer`
- 🔥 [pi-btw](https://pi.dev/packages/pi-btw) - `/btw` side question command without polluting the main conversation. Multiple versions available (nicopreme, juicesharp, Naru). `pi install npm:pi-btw`
- [pi-caveman](https://github.com/v2nic/pi-caveman) - Makes Pi talk like a caveman, reducing output tokens by ~75%. `pi install git:github.com/v2nic/pi-caveman`
- [whimsical](https://github.com/mitsuhiko/agent-stuff) - Replaces "thinking..." with fun random phrases (e.g., "Hiking through the headers..."). `pi install git:github.com/mitsuhiko/agent-stuff`
- [notify](https://github.com/mitsuhiko/agent-stuff) - Desktop notification on agent completion (OSC 777). `pi install git:github.com/mitsuhiko/agent-stuff`
- [@narumitw/pi-caffeinate](https://github.com/narumiruna/pi-extensions) - Cross-platform sleep prevention, keeps system awake during long prompts. `pi install npm:@narumitw/pi-caffeinate`
- [pi-ext](https://github.com/tomsej/pi-ext) - Comprehensive UI suite: leader-key floating panel, powerline footer, tool pill tags, telescope fuzzy finder. `pi install git:github.com/tomsej/pi-ext`
- [@juicesharp/rpiv-btw](https://github.com/juicesharp/rpiv-mono) - Juicesharp's btw side conversation variant. `pi install npm:@juicesharp/rpiv-btw`

---

### Security & Permission

Security and permission control packages.

- 🔥 [@gotgenes/pi-permission-system](https://github.com/MasuRii/pi-permission-system) - Three-tier permission states (allow/deny/ask), lifecycle hook integration, subagent permission forwarding, audit logs. `pi install npm:@gotgenes/pi-permission-system`
- [pi-permission-system](https://pi.dev/packages/pi-permission-system) - Permission enforcement extension. `pi install npm:pi-permission-system`
- [@vigolium/piolium](https://pi.dev/packages/@vigolium/piolium) - Multi-phase security audit with specialized subagents, isolated context windows, and concurrency limits. `pi install npm:@vigolium/piolium`
- [pi-hooks/permission](https://github.com/prateekmedia/pi-hooks) - Four-tier permission control (Minimal/Low/Medium/High). `pi install npm:pi-hooks`
- [filter-output](https://github.com/michalvavra/agents) - Automatically captures sensitive values and redacts them before sending to the AI. `pi install git:github.com/michalvavra/agents`
- [security](https://github.com/michalvavra/agents) - Blocks dangerous commands (e.g., sudo) requiring explicit user approval. `pi install git:github.com/michalvavra/agents`

---

### Dev Tools & Code Intelligence

Development tools and code intelligence packages.

- 🔥 [pi-lens](https://github.com/apmantza/pi-lens) - Real-time code feedback — LSP, linters, formatters, type checking, structural analysis. `pi install npm:pi-lens`
- 🔥 [pi-simplify](https://pi.dev/packages/pi-simplify) - Reviews recently changed code for clarity, consistency, and maintainability. `pi install npm:pi-simplify`
- 🔥 [@nitra/cursor](https://pi.dev/packages/@nitra/cursor) - CLI to download Cursor rules into local repositories. `pi install npm:@nitra/cursor`
- 🔥 [@narumitw/pi-lsp](https://github.com/narumiruna/pi-extensions) - Configurable LSP diagnostics and source fixes, routed by file extension. `pi install npm:@narumitw/pi-lsp`
- [pi-chrome](https://pi.dev/packages/pi-chrome) - Lets Pi use your already-logged-in Chrome profile. `pi install npm:pi-chrome`
- [@narumitw/pi-chrome-devtools](https://github.com/narumiruna/pi-extensions) - Native Chrome DevTools Protocol tools — list tabs, navigate pages, execute JS, take screenshots. `pi install npm:@narumitw/pi-chrome-devtools`
- [@ff-labs/pi-fff](https://pi.dev/packages/@ff-labs/pi-fff) - FFF-powered fuzzy file and content search. `pi install npm:@ff-labs/pi-fff`
- [@narumitw/pi-retry](https://github.com/narumiruna/pi-extensions) - Retry support on provider response failures. `pi install npm:@narumitw/pi-retry`
- [@code-yeongyu/pi-lsp-client](https://github.com/code-yeongyu/pi-lsp-client) - LSP integration: rename, go-to-definition, find references, diagnostics. `pi install git:github.com/code-yeongyu/pi-lsp-client`
- [@code-yeongyu/pi-ast-grep](https://github.com/code-yeongyu/pi-ast-grep) - AST-aware code search/replace supporting 25 languages. `pi install git:github.com/code-yeongyu/pi-ast-grep`

---

### Persistent Memory

Persistent memory packages for retaining information across sessions.

- 🔥 [pi-hermes-memory](https://github.com/chandra447/pi-hermes-memory) - Persistent memory + session search + secret scanning. SQLite FTS5 search, auto-consolidation, 368 tests. `pi install npm:pi-hermes-memory`
- [gentle-engram](https://pi.dev/packages/gentle-engram) - Local or cloud-based brain shared across sessions, compactions, and MCP agents. `pi install npm:gentle-engram`
- [@samfp/pi-memory](https://pi.dev/packages/@samfp/pi-memory) - Learns corrections, preferences, and patterns from sessions and injects them into future conversations. `pi install npm:@samfp/pi-memory`
- [pi-memory-honcho](https://github.com/acsezen/pi-memory-honcho) - Honcho-backed persistent memory with cross-workspace memory sharing. `pi install npm:pi-memory-honcho`

---

### Context Management

Context management packages for optimizing token usage.

- 🔥 [context-mode](https://pi.dev/packages/context-mode) - MCP plugin that saves 98% of context window with sandboxed code execution and FTS5 knowledge base. `pi install npm:context-mode`
- [pi-context-prune](https://github.com/championswimmer/pi-context-prune) - Summarizes completed tool call batches and prunes raw output from LLM context. 5 pruning modes. `pi install npm:pi-context-prune`
- [pi-cache-graph](https://github.com/championswimmer/pi-cache-graph) - Real-time graphical display of provider prefix cache hits and misses. `pi install npm:pi-cache-graph`
- [pi-lean-ctx](https://pi.dev/packages/pi-lean-ctx) - Routes commands through lean-ctx CLI to save tokens. `pi install npm:pi-lean-ctx`

---

### Code Review

Code review packages for improving code quality.

- 🔥 [@plannotator/pi-extension](https://pi.dev/packages/@plannotator/pi-extension) - Interactive plan review and annotation with code/PR markup support. `pi install npm:@plannotator/pi-extension`
- 🔥 [pi-simplify](https://pi.dev/packages/pi-simplify) - Reviews code for clarity, consistency, and maintainability. `pi install npm:pi-simplify`
- [review](https://github.com/mitsuhiko/agent-stuff) - Code review command (worktrees, PR-style diffs, commits, custom instructions). `pi install git:github.com/mitsuhiko/agent-stuff`
- [@juicesharp/rpiv-advisor](https://github.com/juicesharp/rpiv-mono) - Model can request a second opinion from a stronger review model before taking action. `pi install npm:@juicesharp/rpiv-advisor`
- [pi-ext/review](https://github.com/tomsej/pi-ext) - Multi-mode code review (GitHub PR, branch diff, uncommitted changes). `pi install git:github.com/tomsej/pi-ext`

---

### Task Management

Task management and goal tracking packages.

- 🔥 [@juicesharp/rpiv-todo](https://github.com/juicesharp/rpiv-mono) - Model todo list with real-time overlay, 4-state machine, and dependency tracking. `pi install npm:@juicesharp/rpiv-todo`
- 🔥 [gentle-pi](https://pi.dev/packages/gentle-pi) - Transforms Pi into an advanced architecture development tool with SDD/OpenSpec and strict TDD. `pi install npm:gentle-pi`
- [@narumitw/pi-goal](https://github.com/narumiruna/pi-extensions) - `/goal` mode that keeps the agent working until the task is complete. `pi install npm:@narumitw/pi-goal`
- [@juicesharp/rpiv-workflow](https://pi.dev/packages/@juicesharp/rpiv-workflow) - Chains skills into typed multi-stage pipelines with `/wf` command. `pi install npm:@juicesharp/rpiv-workflow`
- [goal](https://github.com/mitsuhiko/agent-stuff) - Persistent goal tracking with state control and model tools. `pi install git:github.com/mitsuhiko/agent-stuff`
- [@narumitw/pi-sync](https://github.com/narumiruna/pi-extensions) - Sync Pi settings, skills, themes, and extensions via Cloudflare R2 or S3. `pi install npm:@narumitw/pi-sync`
- [pi-agent-flow](https://pi.dev/packages/pi-agent-flow) - Agent workflow orchestration tool. `pi install npm:pi-agent-flow`
- [@gonrocca/zero-pi](https://pi.dev/packages/@gonrocca/zero-pi) - Spec-driven development workflow (explore→plan→build→verify). `pi install npm:@gonrocca/zero-pi`

---

### Browser Automation

Browser automation packages.

- 🔥 [pi-chrome](https://pi.dev/packages/pi-chrome) - Uses your already-logged-in Chrome profile. `pi install npm:pi-chrome`
- 🔥 [pi-agent-browser-native](https://github.com/fitchmultz/pi-agent-browser-native) - Exposes agent-browser as native tools with compact page snapshots, interactive references, and screenshots. `pi install npm:pi-agent-browser-native`
- [@narumitw/pi-chrome-devtools](https://github.com/narumiruna/pi-extensions) - Native Chrome DevTools Protocol tools. `pi install npm:@narumitw/pi-chrome-devtools`

---

### Communication & Collaboration

Communication and collaboration packages.

- 🔥 [pi-crew](https://pi.dev/packages/pi-crew) - Coordinated AI teams, workflows, worktrees, and async task orchestration. `pi install npm:pi-crew`
- [pi-intercom](https://pi.dev/packages/pi-intercom) - Subagents can request decisions from the parent session. `pi install npm:pi-intercom`
- [@cryptolibertus/pi-peer](https://pi.dev/packages/@cryptolibertus/pi-peer) - Local Pi-to-Pi peer messaging, slash commands, tools, and runtime transport. `pi install npm:@cryptolibertus/pi-peer`
- [@llblab/pi-telegram](https://pi.dev/packages/@llblab/pi-telegram) - Telegram runtime adapter. `pi install npm:@llblab/pi-telegram`
- [agent-comms](https://pi.dev/packages/agent-comms) - LLM agent cross-harness communication mesh — rooms, DMs, presence. `pi install npm:agent-comms`

---

### Utilities

Other utility packages.

- 🔥 [@juicesharp/rpiv-ask-user-question](https://github.com/juicesharp/rpiv-mono) - Interactive ask_user tool with searchable split-pane selection UI, multi-select, and free input. `pi install npm:@juicesharp/rpiv-ask-user-question`
- 🔥 [pi-markdown-preview](https://pi.dev/packages/pi-markdown-preview) - Renders markdown + LaTeX previews with terminal, browser, and PDF output. `pi install npm:pi-markdown-preview`
- 🔥 [pi-studio](https://pi.dev/packages/pi-studio) - Dual-pane browser workspace with prompt/response editing, annotations, and live preview. `pi install npm:pi-studio`
- [pi-ask-user](https://pi.dev/packages/pi-ask-user) - Interactive ask_user tool. `pi install npm:pi-ask-user`
- [pi-rules](https://github.com/code-yeongyu/pi-rules) - Auto-discovers rule files like .claude/rules, .cursor/rules, AGENTS.md, etc. `pi install npm:@code-yeongyu/pi-rules`
- [pi-langfuse](https://github.com/saravananravi08/pi-langfuse-extension) - Langfuse observability, tracking tokens, cost, model, and tool calls. `pi install npm:@ravan08/pi-langfuse`
- [pi-venice](https://github.com/tunnckoCore/pi-venice) - Venice.AI extension supporting text/image/video models. `pi install npm:pi-venice`
- [@juicesharp/rpiv-i18n](https://pi.dev/packages/@juicesharp/rpiv-i18n) - Localization foundation for rpiv-* extensions. `pi install npm:@juicesharp/rpiv-i18n`
- [@a5c-ai/babysitter-pi](https://pi.dev/packages/@a5c-ai/babysitter-pi) - AI babysitter extension. `pi install npm:@a5c-ai/babysitter-pi`

---

### Package Collections

Curated package collections and suites — install multiple tools at once.

- 🔥 [@narumitw/pi-extensions](https://github.com/narumiruna/pi-extensions) - Monorepo of 11 production-grade extensions (statusline, btw, lsp, firecrawl, goal, subagents, sync, etc.). `pi install npm:@narumitw/pi-extensions`
- 🔥 [juicesharp/rpiv-mono](https://github.com/juicesharp/rpiv-mono) - Pipeline system of 12 npm packages (research→design→plan→implement→validate). `pi install npm:@juicesharp/rpiv-pi`
- [mitsuhiko/agent-stuff](https://github.com/mitsuhiko/agent-stuff) - Armin Ronacher's 15+ extension collection (review, btw, goal, whimsical, notify, todos, etc.). `pi install git:github.com/mitsuhiko/agent-stuff`
- [tomsej/pi-ext](https://github.com/tomsej/pi-ext) - Comprehensive UI and workflow tools (leader-key, telescope, powerline footer, semantic git, etc.). `pi install git:github.com/tomsej/pi-ext`
- [code-yeongyu/senpi](https://github.com/code-yeongyu/senpi) - 15+ extensions ported from OMO (lsp-client, ast-grep, websearch, sandbox, etc.). `pi install git:github.com/code-yeongyu/senpi`
- [jayshah5696/pi-agent-extensions](https://github.com/jayshah5696/pi-agent-extensions) - 15+ extension collection (sessions, ask_user, handoff, powerline-footer, etc.). `pi install git:github.com/jayshah5696/pi-agent-extensions`
- [pi-toolbox](https://github.com/indydevdan/pi-toolbox) - Comprehensive toolkit with 17 extensions + 11 themes + skills and agent orchestration templates. `pi install npm:pi-toolbox`
- [pi-workstation](https://github.com/marv1nnnnn/pi-workstation) - 9 handcrafted themes (avant-garde theatre, cyberpunk, Hokusai style, etc.) + extensions. `pi install npm:pi-workstation`

---

## Themes

### Dark Themes

Curated dark themes for comfortable long coding sessions.

- 🔥 [pi-tokyo-night](https://github.com/MitoroMisaka/pi-tokyo-night) - Deep navy background with Tokyo blue accents, includes custom ASCII art header extension. `pi install npm:pi-tokyo-night`
- 🔥 [@sherif-fanous/pi-catppuccin](https://github.com/sherif-fanous/pi-catppuccin) - Catppuccin Mocha dark variant with soft, warm pastel tones. `pi install npm:@sherif-fanous/pi-catppuccin`
- 🔥 [pi-themes-rose-pine](https://github.com/samfoy/pi-rose-pine) - Original Rosé Pine dark variant with soft pastel rose tones. `pi install npm:pi-themes-rose-pine`
- 🔥 [pi-theme-synthwave-84](https://github.com/robzolkos/pi-theme-synthwave-84) - Neon Synthwave '84 theme with 80s retro-futuristic aesthetics. `pi install npm:pi-theme-synthwave-84`
- [pi-code-theme](https://github.com/ElieMessieCode/pi-code-theme) - Warm dark theme with burnt orange and gold accents. `pi install npm:@eliemessiecode/pi-code-theme`
- [pi-remembra-theme](https://pi.dev/packages/@m64/pi-remembra-theme) - Refined purple-blue gradient with carefully balanced text colors. `pi install npm:@m64/pi-remembra-theme`
- [@codella/pi-theme-cyberpunk](https://github.com/codella/pi-packages) - Neon cyberpunk theme with futuristic urban aesthetics. `pi install npm:@codella/pi-theme-cyberpunk`
- [@javiportillo/pi-hackerman](https://github.com/javierportillo/pi-hackerman) - Neon hacker style inspired by the Hackerman theme. `pi install npm:@javiportillo/pi-hackerman`
- [pi-theme-flexoki](https://github.com/markacianfrani/pi-theme-flexoki) - Flexoki dark theme inspired by analog ink and warm paper. `pi install npm:pi-theme-flexoki`
- [pi-digital-rust-theme](https://pi.dev/packages/pi-digital-rust-theme) - Warm tech-dystopian palette inspired by damaged hardware. `pi install npm:pi-digital-rust-theme`
- [@gravewhisper/pi-theme-monokai-classic](https://pi.dev/packages/@gravewhisper/pi-theme-monokai-classic) - Monokai Classic with softer borders and balanced code colors. `pi install npm:@gravewhisper/pi-theme-monokai-classic`
- [pi-cursor-theme](https://github.com/dkmnx/pi-cursor-theme) - Dark theme inspired by the Cursor IDE. `pi install npm:pi-cursor-theme`
- [@baretread/pi-forge](https://pi.dev/packages/@baretread/pi-forge) - Matte graphite and molten copper Forge theme. `pi install npm:@baretread/pi-forge`
- [@codella/pi-theme-candy](https://github.com/codella/pi-packages) - Bright neon candy theme. `pi install npm:@codella/pi-theme-candy`

---

### Light Themes

Light themes for bright environments.

- 🔥 [@sherif-fanous/pi-catppuccin](https://github.com/sherif-fanous/pi-catppuccin) - Catppuccin Latte light variant with creamy background. `pi install npm:@sherif-fanous/pi-catppuccin`
- [pi-themes-rose-pine](https://github.com/samfoy/pi-rose-pine) - Rosé Pine Dawn light variant with paper-like calm elegance. `pi install npm:pi-themes-rose-pine`
- [pi-theme-flexoki](https://github.com/markacianfrani/pi-theme-flexoki) - Flexoki light theme with ink-on-paper feel. `pi install npm:pi-theme-flexoki`

---

### Theme Packs

Theme collection packs — install multiple color schemes at once.

- 🔥 [@spences10/pi-themes](https://github.com/spences10/my-pi) - 11 themes: Catppuccin Mocha, Dracula, Gruvbox Dark, Night Owl, Neon Noir, Nord, Rosé Pine, Tokyo Night, and more. `pi install npm:@spences10/pi-themes`
- 🔥 [@victor-software-house/pi-curated-themes](https://github.com/victor-software-house/pi-curated-themes) - Massive 65-theme collection adapted from iTerm2: Adventure, Aura, Catppuccin, Dracula+, Everforest, Gruvbox, Jellybeans, Kanagawa, Nord, Tomorrow Night, and more. `pi install npm:@victor-software-house/pi-curated-themes`
- [@ifi/oh-pi-themes](https://pi.dev/packages/@ifi/oh-pi-themes) - 6 themes: Catppuccin Mocha, Cyberpunk, Gruvbox Dark, Nord, Tokyo Night. `pi install npm:@ifi/oh-pi-themes`
- [hasit/pi-community-themes](https://github.com/hasit/pi-community-themes) - Community curated: atom-one, catppuccin (4 variants), dracula, gruvbox (6 variants), nord, solarized. `pi install git:github.com/hasit/pi-community-themes`
- [@smoose/pi-themes](https://github.com/smoose/pi-themes) - Light/dark pairing toggle: Everforest, Tundra, Rosé Pine, OneDark, Gruvbox, and more. `pi install npm:@smoose/pi-themes`
- [my-pi-themes](https://pi.dev/packages/my-pi-themes) - 14 themes: monokai-pro, onedark-pro, tokyo-dark, e-ink/e-ink-dark, gruvbox-light, and more. `pi install npm:my-pi-themes`
- [@matyah00/openpi](https://github.com/heyhuynhgiabuu/openpi) - 11 bundled themes + multi-agent orchestration. `pi install npm:@matyah00/openpi`
- [pi-toolbox](https://github.com/indydevdan/pi-toolbox) - Comprehensive toolkit with 17 extensions + 11 themes. `pi install npm:pi-toolbox`

---

### Featured Themes

Featured themes with unique design concepts and purposes.

- 🔥 [pi-kanagawa](https://github.com/earendil-works/pi-kanagawa) - Inspired by Hokusai's "The Great Wave off Kanagawa", deep blue and warm gold with wave animations and git branch widgets. `pi install npm:pi-kanagawa`
- [pi-terminal-theme](https://github.com/mavam/pi-terminal-theme) - Uses ANSI 0-15 colors, letting the terminal provide the actual colors. `pi install npm:pi-terminal-theme`
- [pi-ansi-themes](https://github.com/leblancfg/pi-ansi-themes) - Standard 16-color ANSI themes to avoid conflicts with terminal themes. `pi install git:github.com/leblancfg/pi-ansi-themes`
- [my-pi-themes/e-ink](https://pi.dev/packages/my-pi-themes) - E-ink friendly theme with high contrast and low color. `pi install npm:my-pi-themes`
- [pi-peacock](https://pi.dev/packages/pi-peacock) - Peacock-style workspace coloring for unique color identity per workspace. `pi install npm:pi-peacock`
- [@codella/pi-theme-christmas](https://pi.dev/packages/@codella/pi-theme-christmas) - Festive Christmas theme. `pi install npm:@codella/pi-theme-christmas`
- [@codella/pi-theme-grayscale](https://pi.dev/packages/@codella/pi-theme-grayscale) - Minimal grayscale theme. `pi install npm:@codella/pi-theme-grayscale`
- [@taterdoge/pi-ayu](https://pi.dev/packages/@taterdoge/pi-ayu) - Ayu-inspired dark and light themes. `pi install npm:@taterdoge/pi-ayu`
- [pi-workstation](https://github.com/marv1nnnnn/pi-workstation) - 9 artistic themes: avant-garde theatre, Serial Experiments Lain, 90s internet café, Hokusai style, and more. `pi install npm:pi-workstation`

---

### Theme Tools

Theme tools and utility packages.

- 🔥 [@sherif-fanous/pi-theme-sync](https://github.com/sherif-fanous/pi-theme-sync) - Auto-syncs Pi theme with terminal or OS appearance, supporting DEC mode 2031 real-time notifications. `pi install npm:@sherif-fanous/pi-theme-sync`
- [pi-theme-switcher](https://github.com/milanglacier/pi-theme-switcher) - Automatically switches between light and dark themes based on environment variables, THEME_MODE, or time of day. `pi install npm:pi-theme-switcher`
- [pi-theme-flip](https://github.com/adstastic/pi-theme-flip) - Adds a command to toggle between light and dark themes. `pi install npm:pi-theme-flip`
- [pi-system-theme](https://pi.dev/packages/pi-system-theme) - Syncs Pi theme with macOS light/dark appearance. `pi install npm:pi-system-theme`
- [pi-macos-theme-sync](https://pi.dev/packages/pi-macos-theme-sync) - macOS theme sync without polling. `pi install npm:pi-macos-theme-sync`
- [@ogulcancelik/pi-ghostty-theme-sync](https://github.com/ogulcancelik/pi-extensions) - Syncs Pi theme with Ghostty terminal colors. `pi install npm:@ogulcancelik/pi-ghostty-theme-sync`

---

### Editor Integration

Editor integration packages for embedding Pi into IDEs.

- [pi-acp](https://github.com/svkozak/pi-acp) - Pi's ACP (Agent Client Protocol) adapter, bridging to editors like Zed. `npm install -g pi-acp`
- [VS Code Pi Chat Provider](https://marketplace.visualstudio.com/items?itemName=tintinweb.vscode-pi-model-chat-provider) - VS Code language model chat provider integration. `pi install npm:@tintinweb/vscode-pi-model-chat-provider`
- [pi-vscode-extension](https://github.com/Zetaphor/pi-vscode-extension) - Embeds Pi as a VS Code extension. `pi install git:github.com/Zetaphor/pi-vscode-extension`

> Zed editor natively supports Pi via the ACP Registry: configure `"agent_servers": { "pi-acp": { "type": "registry" } }`.


## Alternative Distributions

Fork/alternative distributions of Pi with enhanced out-of-the-box experiences.

- [oh-my-pi](https://github.com/can1357/oh-my-pi) - A feature-rich fork with 40+ providers, 32 built-in tools, LSP/DAP, Python runtime, and browser automation. Standalone CLI — not a Pi package. `curl -fsSL https://omp.sh/install | sh`


## Contributing

Contributions are welcome! Here's how you can help:

1. **Submit a PR** — Add new packages or resource links
2. **Report issues** — Found a broken link or inaccurate description? Open an issue
3. **Share your config** — Share your Pi configuration and favorite package combinations

### Contribution Guidelines

- Each entry should include name, link, description, and install command (where applicable)
- Organize by functional category and maintain consistent formatting
- Prefer resources with GitHub repositories or official documentation
- Include author information where available

### npm Scope Migration Note

On 2026-05-07, Pi migrated from `@mariozechner` to `@earendil-works` npm scope. Old packages are deprecated but will not be deleted. Run `pi update` to automatically migrate.

| Old Package | New Package |
|-------------|-------------|
| `@mariozechner/pi-coding-agent` | `@earendil-works/pi-coding-agent` |
| `@mariozechner/pi-agent-core` | `@earendil-works/pi-agent-core` |
| `@mariozechner/pi-ai` | `@earendil-works/pi-ai` |
| `@mariozechner/pi-tui` | `@earendil-works/pi-tui` |

---

## License

This list is licensed under [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/).

> Data sourced from [pi.dev/packages](https://pi.dev/packages), GitHub, npm, and community public resources.
> Individual projects are copyright of their respective authors and follow their own license terms.

---

*Last updated: June 2026. The Pi ecosystem is constantly evolving — check [pi.dev/packages](https://pi.dev/packages) for the latest.*
