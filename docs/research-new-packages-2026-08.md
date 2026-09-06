# Awesome Pi 增量调研：2026-07-30 之后值得入选的 Package

调研日期：2026-08-19。本文只回答「上次收录之后，有没有新的、达到现有精选门槛的包」。

> **落地状态（2026-08-19）：** 建议入选已全部写入 `README.md` / `README.en.md`（含 6 个必加项、worktree / betterwright、第二梯队、补遗 `pi-sandbox` / `pi-interactive-shell`）。观察名单未进。

> **来源勘误（2026-09-06）：** 本文的“官方目录”指 Pi 官网提供的生态包目录，不代表其中的包由 Pi 官方发布或背书。`npm:` 和包名是否带 `@scope` 均不能用于判断官方身份；`pi-subagents` 是 [Nico Bailon 维护的社区扩展](https://github.com/nicobailon/pi-subagents)。其余调研数据保留 2026-08-19 的时间边界。

精选列表不是全量目录。官方目录约 5500+、npm `keywords:pi-package` 约 7788，绝大多数是主题、个人 fork、空壳 skill、第 N 个 todo。下面只推荐能对上现有 README 质量门槛的包。

## 1. 调研范围与截止点

| 项 | 值 | 来源 |
| --- | --- | --- |
| 上次实质性收录 | 2026-07-30，`64bc5f2` 新增 `@aliou/pi-guardrails`（closes #1） | 本仓库 `git log --format="%h %ad %s" --date=short` |
| 再上一笔 | 2026-06-20 新增 `@gintasz/pi-neuralyzer`（`616192f`，同日 `1fe6542` merge） | 同上 |
| README 页脚 | 仍写「最后更新于 2026 年 6 月」 | [`README.md`](../README.md) 文末 |
| 当时目录规模 | badge 写 `3300+` | [`README.md`](../README.md) |
| 今日官方目录 | `1-50 / 5569`（同日稍后抓取 `sort=recent` 页曾显示 5575） | [pi.dev/packages](https://pi.dev/packages) 本机 HTML，`packages-count` |
| 其中 extension | `1-50 / 3264 (of 5575)` | [pi.dev/packages?type=extension&sort=recent](https://pi.dev/packages?type=extension&sort=recent) |
| npm `pi-package` 检索量 | `total=7788` | [registry search API](https://registry.npmjs.org/-/v1/search?text=keywords:pi-package&size=1) |
| 窗口 | 严格看 **2026-07-30 之后新建或显著变值得收录**；同时覆盖 **6 月底–8 月中被漏掉的高质量包** | 见第 4、5 节 |

Pi 核心故意不内置 MCP、sub-agent、权限弹窗、plan mode、todo、后台 bash。官方站点写明：「No plan mode — Write plans to files, or build it with extensions, or install a package。」（[pi.dev](https://pi.dev/)，2026-08-19）因此「补官方缺口」的权重高于第 N 个主题或第 N 个 todo。

现有 README / README.en.md 已收录约 115 个可安装条目（`pi install npm:` / `git:`）。这些包一律排除，不再推荐。

## 2. 方法与一手来源

1. 官方目录 [pi.dev/packages](https://pi.dev/packages)：Recently published、`sort=downloads` 首页 / 第 2–3 页、`sort=recent` 第 1–4 页、`name=` 过滤（`plan` / `voice` / `sandbox` / `memory` / `worktree` / `compact` / `usage` / `webui` / `review` / `auth` 等）。页面是服务端 HTML，卡片带 `data-package-name`、`data-package-date`、`data-package-downloads`。
2. npm registry：`https://registry.npmjs.org/<name>` 的 `time.created` / `time.modified` / `versions` / `repository` / `pi` key；[downloads API](https://api.npmjs.org/downloads/point/last-month/) 取 `2026-07-17`–`2026-08-15` 月下载。
3. GitHub：`gh search repos`（`pi-package` / `pi coding agent extension`，`created:>=2026-06-20`）+ 已知作者（nicobailon、narumiruna、juicesharp、tintinweb、mitsuhiko、code-yeongyu、championswimmer、earendil-works、can1357、HazAT、tomsej、gotgenes、aliou）。
4. 候选包自己的 README、`package.json` 的 `pi` 字段、测试文件、CI。
5. 社区只作发现线索：r/PiCodingAgent 的 plan mode 帖、X 上 ponytail 讨论。功能声明回到 README / 源码 / npm。

未把 [shaftoe/awesome-pi-coding-agent](https://github.com/shaftoe/awesome-pi-coding-agent) 等二手目录当事实依据。

**排序原则**：缺口大小 × 可核验实现 × 维护信号。月下载单独看不够——官方首页曝光会抬高安装量，`star ≪ downloads` 时降权。主题包默认不进。

## 3. 生态变化（2026-06 → 2026-08）

- 官方目录从约 3300 涨到 **5569–5575**（约 +70%）。npm 带 `pi-package` keyword 的包约 **7788**，比官方目录多出约 2200，说明大量包未进或未留在目录。
- Recently published 几乎分钟级刷新。2026-08-19 当日卡片包括 `@lpb-work/pi-subagents`、`@trim21/personal-pi-extensions`、`recall-pi`、`@sunnyx11/pi-press`、`@galvinsan/pi-mentis*`、`pi-memsearch`。多数是当日新包或个人套件，不能当精选信号。
- 已形成现有列表几乎没覆盖的品类：
  - **Plan mode**（核心明确不内置）
  - **本机语音输入**
  - **Web UI / 远程监督会话**
  - **后台进程 / 不阻塞会话的长任务**
  - **Code-mode 可编程运行时**（一个工具里写 TypeScript/JS 编排）
  - **订阅额度 `/usage` 与多账号**
  - **OS 级 sandbox**（相对已有的权限策略 / 护栏）
  - **Cursor / 其它订阅当 provider**
- 已收录作者继续扩包：
  - `@narumitw/*` 不再是「11 个扩展」。上游 README 已按 Coding / Browser / Workflow / Accounts / Observability 分组，新增 `pi-plan-mode`、`pi-worktree`、`pi-usage`、`pi-accounts`、`pi-codex-compact`、`pi-starship` 等（[narumiruna/pi-extensions](https://github.com/narumiruna/pi-extensions)，365★，2026-08-19 仍在推）。
  - `@juicesharp/rpiv-*` 新增 `rpiv-voice`、`rpiv-warp`、`rpiv-args`（[juicesharp/rpiv-mono](https://github.com/juicesharp/rpiv-mono)，635★）。
  - `@gotgenes/*` monorepo 新增 `pi-permission-model-judge`、`pi-subagents-worktrees`、`pi-colgrep`、`pi-session-tools` 等（[gotgenes/pi-packages](https://github.com/gotgenes/pi-packages)）。
- 官方组织新仓库：`earendil-works/pi-review-loop`（2026-07-22，144★）、`earendil-works/pi-transcribe`（2026-08-13，164★）。后者尚未发 npm。
- `oh-my-pi`（can1357 fork）从列表里的 8.5k 涨到约 **25,752★**（[can1357/oh-my-pi](https://github.com/can1357/oh-my-pi)，2026-08-19）。npm 上另有一个无关的 `oh-my-pi@0.2.0`（acidsugarx），不要和发行版搞混。
- Pi 本体发布线已到 **0.84.x**。多个新包要求 `>=0.80` / `>=0.84`。README badge 仍写 `v0.44+`，已过时。

## 4. 建议入选

按「缺口大小 × 可核验质量」排序。下载量均为 npm last-month（2026-07-17–2026-08-15）。GitHub 数据为 2026-08-19 `gh api`。

### 4.1 强烈建议（优先写进 README）

#### `@narumitw/pi-plan-mode` — 建议分类：Task Management（或新开 Plan Mode）

| | |
| --- | --- |
| 作者 | narumiruna / `@narumitw`（列表已收录其 statusline / lsp / goal / subagents） |
| 首次发布 / 最近发布 | 2026-05-17 / 2026-08-05，v0.49.3，72 个版本，MIT |
| 仓库 | https://github.com/narumiruna/pi-extensions/tree/main/packages/pi-plan-mode |
| npm / Pi 目录页 | https://www.npmjs.com/package/@narumitw/pi-plan-mode · https://pi.dev/packages/@narumitw/pi-plan-mode |
| 月下载 | 19,389 |
| 实现信号 | 包内 47 个文件、15 个测试 |
| 一句话能力 | Codex 风格只读 `/plan`：探索、澄清、产出可实施计划后再改代码。 |
| 安装 | `pi install npm:@narumitw/pi-plan-mode` |

README 原文：Pi 核心故意不内置 plan mode；本包补上。默认启用只读内置工具、禁用扩展与自定义工具；拦截 `update_plan`、写文件、危险 bash；完成后可在当前会话实施，或开一个只携带已批准计划的新会话。需要 Pi `>=0.80.6`。

为何值得加：这是官方明确留空的功能。r/PiCodingAgent 已有人点名使用该包（[How do you use plan mode in Pi?](https://www.reddit.com/r/PiCodingAgent/comments/1vhtpky/how_do_you_use_plan_mode_in_pi/)）。已收录 `@plannotator/pi-extension` 是「计划注释 UI」，不是会话级只读 plan mode。`@bacnh85/pi-plan` 同类但 star/作者可信度更低，不必并列。

> 创建日早于 7-30，属于**上次漏收**。今天补上仍然值得。

#### `@quintinshaw/pi-dynamic-workflows` — 建议分类：Subagents 或 Task Management

| | |
| --- | --- |
| 作者 | QuintinShaw |
| 首次发布 / 最近发布 | 2026-05-30 / 2026-08-16，v3.6.0，51 个版本，MIT |
| 仓库 | https://github.com/QuintinShaw/pi-dynamic-workflows（427★） |
| 文档站 | https://quintinshaw.github.io/pi-dynamic-workflows/ |
| npm / Pi 目录页 | https://www.npmjs.com/package/@quintinshaw/pi-dynamic-workflows · https://pi.dev/packages/@quintinshaw/pi-dynamic-workflows |
| 月下载 | 27,843 |
| 实现信号 | 仓库约 179 blob、`tests/` 下数十个单测 |
| 一句话能力 | 把一次请求写成 JS 编排，扇出到隔离子代理，按任务路由模型并交叉校验。 |
| 安装 | `pi install npm:@quintinshaw/pi-dynamic-workflows` |

README：`agent()` / `parallel()` / `pipeline()` / `phase()`；中间结果留在脚本变量里，不塞满主对话。默认关键词 `workflow(s)` 触发，也可用 `/workflows run`。可选 git worktree 隔离。

为何值得加：star / 下载都高，独立文档站完整。和已收录 `@juicesharp/rpiv-workflow`（技能链式 pipeline）、`pi-agent-flow` 不是同一层——这边是「上百子代理 fan-out + code-mode」。

#### `pi-fabric` — 建议分类：Subagents / Loop Engineering，或新开 Code Mode

| | |
| --- | --- |
| 作者 | monotykamary |
| 首次发布 / 最近发布 | **2026-07-13** / 2026-08-17，v0.61.2，200 个版本，MIT |
| 仓库 | https://github.com/monotykamary/pi-fabric（124★，有 `.github/workflows/test.yml`） |
| npm / Pi 目录页 | https://www.npmjs.com/package/pi-fabric · https://pi.dev/packages/pi-fabric |
| 月下载 | 32,966 |
| 实现信号 | 约 500 blob、大量 `tests/*.test.ts` |
| 一句话能力 | 可编程工具运行时：在受检 TypeScript 里编排核心工具、MCP、agent 与工作流。 |
| 安装 | `pi install npm:pi-fabric` |

README：一个 `fabric_exec` 工具；默认跑在 QuickJS；支持 one-shot / 常驻 agent / actor / council / 有界递归。作者自称 Fabric 驱动的 agent 在 [ARC-AGI-3 scorecard](https://arcprize.org/scorecards/d4c56c67-136b-4643-b648-62ae28fe2a54) 上 25/25——这是作者自述，本调研未复跑，只作发现线索。需要 Node 24+、Pi `>=0.80.6`。

为何值得加：创建日在上次收录前约两周，7-30 的小补丁没扫到。和「再开一个子代理」不同，这是 code-mode 运行时。版本已到 0.61，不像周末原型。

#### `@juicesharp/rpiv-voice` — 建议分类：UI Enhancement，或新开 Voice

| | |
| --- | --- |
| 作者 | juicesharp（列表已收录 rpiv-todo / web-tools / advisor / ask-user 等） |
| 首次发布 / 最近发布 | 2026-05-11 / 2026-08-18，v2.6.2，51 个版本，MIT |
| 仓库 | https://github.com/juicesharp/rpiv-mono/tree/main/packages/rpiv-voice |
| npm / Pi 目录页 | https://www.npmjs.com/package/@juicesharp/rpiv-voice · https://pi.dev/packages/@juicesharp/rpiv-voice |
| 月下载 | 21,118 |
| 实现信号 | 包内 88 个文件、29 个 `*.test.ts`（mic / STT / hallucination filter / command） |
| 一句话能力 | `/voice` 本机 Whisper 听写，无云、无 API key。 |
| 安装 | `pi install npm:@juicesharp/rpiv-voice` |

README：overlay 听写；sherpa-onnx Whisper base multilingual int8；首次下载约 198 MB 模型到 `~/.pi/models/whisper-base/`；音频不离机。官方 `earendil-works/pi-transcribe`（164★，2026-08-13）是同类但尚未发 npm、仅 6 天，放观察。

为何值得加：列表里完全没有语音输入。作者套件已经是 🔥 级，这是同 monorepo 的独立新品类，测试密度高。

#### `@jmfederico/pi-web` — 建议新分类：Web UI / Remote

| | |
| --- | --- |
| 作者 | jmfederico |
| 首次发布 / 最近发布 | 2026-05-09 / 2026-08-11，v1.202608.1，28 个版本，MIT |
| 仓库 | https://github.com/jmfederico/pi-web（567★，watch=3，forks=114，有 CI） |
| 站点 | https://pi-web.dev/ |
| npm / Pi 目录页 | https://www.npmjs.com/package/@jmfederico/pi-web · https://pi.dev/packages/@jmfederico/pi-web |
| 月下载 | 7,866 |
| 一句话能力 | 浏览器监督跑在真实工作区里的 Pi 会话，断线不杀进程。 |
| 安装 | `pi install npm:@jmfederico/pi-web`（也支持 `npm i -g @jmfederico/pi-web` + `pi-web install`） |

README：浏览器是控制面，会话跑在本机/服务器真实仓库；多会话并行；可注册远程 machine / fleet；需要 Pi `>=0.84.0`、Node `>=22.19`。安全模型写明：信任用户、信任仓库、信任服务器路径。

为何值得加：现有列表只有编辑器集成（ACP / VS Code），没有「把 Pi 会话挂在真实仓库上、用浏览器远程盯」这一档。567★ + 独立站点 + CI，已经是产品级。同品类的 `pi-web-ui`（136★）、`@hyperdreamer/pi-webui`、`@chainingintention/pi-web-cn` 完成度更低，不必并列。

#### `@aliou/pi-processes` — 建议分类：新开 Background Tasks，或放 Dev Tools / Utilities

| | |
| --- | --- |
| 作者 | aliou（列表刚收录其 `@aliou/pi-guardrails`） |
| 首次发布 / 最近发布 | 2026-01-25 / 2026-08-12，v0.10.9，MIT |
| 仓库 | https://github.com/aliou/pi-processes（82★） |
| npm | https://www.npmjs.com/package/@aliou/pi-processes |
| 月下载 | 4,951 |
| 一句话能力 | 不阻塞会话的后台进程：dev server、test watcher、日志，带 `/ps` 面板。 |
| 安装 | `pi install npm:@aliou/pi-processes` |

README：就绪标记 / 错误 / 退出会把 Pi 拉回对话；`/ps`、`/ps:logs`、`/ps:dock`、`/ps:pin`、`/ps:kill`；可向 stdin 写。`package.json` 的 `pi` key 含 3 个 extension + skill。

为何值得加：官方不内置 background bash。作者刚被列表信任。实现比下载量更高的 `pi-background-tasks`（45,745 下载 / **9★ / 0 watch**）更克制、可审。后者公开面很大（Fusion、委托子代理、Anthropic 归因），star 与下载严重不成比例，见观察名单。

#### `@narumitw/pi-worktree` — 建议分类：Task Management 或 Utilities

| | |
| --- | --- |
| 作者 | narumiruna |
| 首次发布 / 最近发布 | **2026-07-21** / 2026-08-18，v0.51.2，22 个版本，MIT |
| 仓库 | https://github.com/narumiruna/pi-extensions/tree/main/packages/pi-worktree |
| npm / Pi 目录页 | https://www.npmjs.com/package/@narumitw/pi-worktree · https://pi.dev/packages/@narumitw/pi-worktree |
| 月下载 | 3,629 |
| 实现信号 | 包内 23 个文件、11 个测试 |
| 一句话能力 | 交互式 Git worktree：创建 / 切换 / 删除，并把 Pi 会话带到新工作区。 |
| 安装 | `pi install npm:@narumitw/pi-worktree` |

README 点出真实缺口：Pi 不能 `cd` 改父进程工作目录。本包用公开 session replacement API 切到 worktree 对应会话。argv 调 Git，不把用户输入拼进 shell。

为何值得加：创建日就在上次 commit 前 9 天，属于窗口内漏收。现有列表只在集合/编排包里顺带提到 worktree，没有独立、可审的 worktree 管理器。`name=worktree` 搜索能扫出几十个同类，多数 <1k 下载；这个作者已经在列表里。

#### `betterwright` — 建议分类：Browser Automation

| | |
| --- | --- |
| 作者 | BetterWright / curiosityos |
| 首次发布 / 最近发布 | **2026-07-14** / 2026-08-19，v1.9.6，53 个版本，MIT |
| 仓库 | https://github.com/BetterWright/betterwright（114★，有 CI / `release:check`） |
| npm / Pi 目录页 | https://www.npmjs.com/package/betterwright · https://pi.dev/packages/betterwright |
| 月下载 | 8,993 |
| 实现信号 | `package.json` 含 `pi.extensions`；约 76 个测试相关文件；`prepublishOnly` 跑 lint + typecheck + unit |
| 一句话能力 | 持久、策略守卫的 Playwright：网络策略、凭证保险库、证明截图。 |
| 安装 | `pi install npm:betterwright` |

README：压缩 snapshot 而不是整页 HTML；会话跨回合保持；同时提供 skill / MCP / JS API。Pi 安装段写明「native persistent tools, trusted login, approval-gated downloads」。

为何值得加：创建日在窗口内。已收录 `pi-chrome` / `pi-agent-browser-native` / `@narumitw/pi-chrome-devtools` 是「用你已登录的 Chrome / 暴露 agent-browser」。BetterWright 是另一层：带策略与凭证保险库的持久浏览器运行时。跨 harness，但 Pi 是一等公民。

### 4.2 建议入选（第二梯队，仍达门槛，可按篇幅取舍）

#### `@hypabolic/pi-hypa` — Context Management

- 创建 2026-06-01，v0.1.14，[Hypabolic/Hypa](https://github.com/Hypabolic/Hypa) 166★，月下载 11,271。
- 本地、确定性压缩嘈杂命令输出（`git` / `dotnet` / `kubectl` / `docker` 等 reducer），不是 LLM 摘要；证据进本地 SQLite。
- 和已收录 `pi-context-prune`（总结已完成 tool batch）、`pi-lean-ctx`（走 CLI）机制不同。
- 安装：`pi install npm:@hypabolic/pi-hypa`

#### `pi-memory`（jayzeng）— Persistent Memory

- 创建 2026-02-16，v0.4.2，[jayzeng/pi-memory](https://github.com/jayzeng/pi-memory) 121★，月下载 28,920。
- 长期事实写 `MEMORY.md`，另有 daily log / scratchpad，全部是可 `cat` 的 markdown；可选 [qmd](https://github.com/tobi/qmd) 做关键词 / 语义 / 混合检索。
- 记忆类已有 hermes / engram / `@samfp/pi-memory` / honcho。区分度是「纯 markdown + 可选语义搜索 + 下载量最高」。**包名无 scope，不要和已收录 `@samfp/pi-memory` 搞混。**
- 安装：`pi install npm:pi-memory`

#### `@narumitw/pi-usage` — Utilities

- 创建 **2026-07-21**，v0.52.0，月下载 9,828。
- 交互式 `/usage`，读当前运行时账号的 Codex 订阅窗口、GitHub Copilot 额度、OpenRouter key 限额；`/fast` 切 Codex Fast。需要 Pi `>=0.81.0`。
- 列表没有用量/额度包。同类 `@sreetej510/pi-usage` 只放观察。
- 安装：`pi install npm:@narumitw/pi-usage`

#### `@narumitw/pi-accounts` — Utilities（可挂在集合条目下）

- 创建 **2026-07-20**，v0.49.7。
- `/account` 切换 Codex / Anthropic / Copilot OAuth 账号。
- 安装：`pi install npm:@narumitw/pi-accounts`

#### `@tintinweb/pi-tasks` — Task Management

- 创建 2026-03-11，v0.8.0，[tintinweb/pi-tasks](https://github.com/tintinweb/pi-tasks) 178★，月下载 7,114。
- Claude Code 风格 task 工具、依赖、跨会话文件锁。作者已在列表。和 `@juicesharp/rpiv-todo` 重叠，但「CC 工具契约 + DAG」更重。README 仍写 Early release。
- 安装：`pi install npm:@tintinweb/pi-tasks`

#### `@mjasnikovs/pi-task` — Task Management

- 创建 2026-06-02，v0.38.12，[mjasnikovs/pi-task](https://github.com/mjasnikovs/pi-task) 74★，**AGPL-3.0**，月下载 23,282。
- 固定阶段 pipeline（refine → research → grill → compose → critique），面向本地小模型，状态落盘。下载高、许可证更严、和 `gentle-pi` / `zero-pi` 有重叠。第二梯队即可。
- 安装：`pi install npm:@mjasnikovs/pi-task`

#### `pi-claude-marketplace` — Utilities

- 创建 2026-05-12，v0.16.1，[acolomba/pi-claude-marketplace](https://github.com/acolomba/pi-claude-marketplace) 20★，有 CI，月下载 3,848。
- 从 Claude plugin marketplace 装 commands / skills / agents / 部分 hooks / MCP。品类独特，star 一般。
- 安装：`pi install npm:pi-claude-marketplace`

#### `pi-sandbox` — Security & Permission（窗口外遗漏）

- 创建 2026-02-19，v0.6.5，[carderne/pi-sandbox](https://github.com/carderne/pi-sandbox) 201★，月下载 6,339。
- OS 级 bash 沙箱（Anthropic sandbox-runtime fork）+ 文件 allow/deny；拦截时交互批准。比已收录 permission / guardrails 更底层。
- 不在 6 月底–8 月窗口内，但是明显漏收。篇幅紧可只写进「已收录缺口补遗」。
- 安装：`pi install npm:pi-sandbox`

#### `pi-interactive-shell` — Dev Tools（窗口外遗漏）

- 创建 2026-01-18，v0.15.0，[nicobailon/pi-interactive-shell](https://github.com/nicobailon/pi-interactive-shell) 560★，月下载 3,952。
- TUI overlay 里跑交互式 CLI（vim / psql / ssh / rebase），用户可随时接管。作者已是列表 🔥 级。
- 1 月就有，不属于本次窗口；质量上明确达门槛。建议在「补遗」里单独提，避免这次把 2026 上半年漏网都塞进来。
- 安装：`pi install npm:pi-interactive-shell`

## 5. 观察名单

太新、重叠、下载虚高、或维护信号不够，先不进精选。

| 包 | 创建 | 为何先看 |
| --- | --- | --- |
| `earendil-works/pi-review-loop` | 仓库 2026-07-22 | 官方组织，144★，增量 diff 审阅窗 + checkpoint。安装是 `pi install git:github.com/earendil-works/pi-review-loop`。**不要和 npm `pi-review-loop`（nicobailon，2026-01 创建、4 月后未更新）搞混。** 上次 push 2026-07-27，再观察是否持续维护。 |
| `earendil-works/pi-transcribe` | 仓库 2026-08-13 | 官方本机听写，164★，测试目录在。尚未发 npm（README 写 `pi install ssh://git@github.com/earendil-works/pi-transcribe`）。才 6 天，语音位先给成熟的 `rpiv-voice`。 |
| `@sunnyx11/pi-press` | **2026-08-09** | 后台预计算 compaction 摘要，有 [DESIGN.md](https://github.com/sunnyx11/pi-press/blob/main/docs/DESIGN.md) 和测试脚本。7★ / 553 下载。窗口内新品，再等两周。 |
| `@narumitw/pi-codex-compact` | **2026-08-03** | Codex Remote Compaction V2。作者可信，只服务 Codex 用户。 |
| `@narumitw/pi-tool` / `pi-fleet` / `pi-workflow` / `pi-recall` / `pi-chat` | 8 月 | 上游 README 标 Experimental 或 QoL，不必单列。 |
| `pi-background-tasks` | 2026-05-27 | 月下载 **45,745**（本次抽样最高），但仓库仅 **9★ / 0 watch**。公开面很大（后台 shell + 委托 + Fusion + Anthropic 归因）。下载可能被官方首页曝光放大。先看 star/讨论是否跟上。 |
| `pi-goal-list-loop-audit` | **2026-07-21** | 31,782 下载，10★，AGPL，一个月 177 个版本。隔离 auditor 的设计有意思，发布节奏过猛。 |
| `@galvinsan/pi-mentis*` | **2026-08-01** | 要求 Pi `>=0.84.0`，0★，当日仍在发版。 |
| `recall-pi` / `pi-memsearch` | 8 月中 | 跨 Claude/Codex/OpenCode/Pi 的本地知识库 / 语义回忆，各 1★。 |
| `pi-web-ui` / `@hyperdreamer/pi-webui` / `@chainingintention/pi-web-cn` / `@firstpick/pi-package-webui` | 7 月下旬–8 月 | 都是 Web UI，star/完成度低于 `@jmfederico/pi-web`。 |
| `@rahularya01/pi-cursor` / `pi-cursor-sdk` | 7 月 / 5 月 | Cursor 当 provider。新品类，两家竞争（5,222 / 约 10k 下载）。再看哪个 API 稳。 |
| `@langchain/langsmith-pi-extension` | 2026-06-09 | 官方 LangChain，9,032 下载，3★。已有 langfuse。厂商 tracing 再观察。 |
| `@braintrust/pi-extension` / `@raindrop-ai/pi-agent` | 4 月 | 同类可观测性。 |
| `@gotgenes/pi-anthropic-auth` | 2026-04-22 | 157★，OAuth 兼容。有用，但偏「让某家订阅能登录」，同类 provider/auth 包极多。 |
| `@dietrichgebert/ponytail` | 2026-06-24 | 「lazy senior」技能/扩展，43,334 下载。GitHub **105,601★ / 255 watch / 5,835 fork**（[API](https://api.github.com/repos/DietrichGebert/ponytail)）。watcher 与 star 严重不成比例，社交证明不可单独采信。理念接近已收录 `pi-caveman`，主题/技能门槛更高。X 上有人写 `pi install git:github.com/DietrichGebert/ponytail`。先观察，不因 star 入选。 |
| `pi-hashline-edit-pro` / `pi-readseek` | 6 月 | 行级 hash 锚定编辑（60★）。oh-my-pi 已把这做成发行版卖点。 |
| `pi-mega-compact` | 2026-07-14 | 15★，223 个版本。本地向量压缩，发布过密。 |
| `pi-extensible-workflows` | 2026-07-17 | 181★，和 dynamic-workflows 重叠。 |
| `pi-fovea` | **2026-08-06** | 同作者（monotykamary）的 token-budgeted repo map。太新。 |
| `pi-landstrip` | 2026-06-02 | 沙箱 bash。底层 [landstrip/pi-landstrip](https://github.com/landstrip/pi-landstrip) **已 archive**（2026-07-13）。 |
| `@erichll/pi-sandbox` + `pi-auto-review` | 2026-07-28 | 接 Sandbox Runtime，2★，Windows 不支持。已有 `pi-sandbox`。 |
| `@nklisch/pi-plugins` | 2026-07-18 | 插件市场 + 一键套件，0★。 |
| `@trim21/personal-pi-extensions` | **2026-08-01** | 包名写 personal；bwrap sandbox 有趣，不适合精选。 |
| `@lpb-work/pi-subagents` / `@ferris1225/pi-subagents` | 8 月 | 又一个 subagent fork。 |
| `@danypops/pi-*`（packed / papyrus / tickets / lector / pipes / web-spider / enigma） | 7 月中下旬 | daemon 套件，重、文档散。 |
| `pi-courier` | 2026-08-02 | Matrix（及多 messenger）RPC 桥。是独立服务，不是典型 `pi install` 扩展。 |
| `@companion-ai/feynman` | 2026-03-24 | 8,507★ 研究 CLI，独立安装器。更像 Alternative Distribution，不是 Package。 |
| `@selesai/code` | 2026-06-28 | 0★ 的 extension-first fork。 |
| `pi-cc-extensions` / `pi-code` | 7 月下旬 | Claude Code 兼容套件。7★ / 10★。 |
| `HazAT/pi-macos-harness` | **2026-08-18** | 4★，才 1 天。 |
| `pi-warm-cache` | **2026-08-06** | 0★。 |
| `@juicesharp/rpiv-warp` | 2026-05-08 | Warp 终端通知。已有 mitsuhiko `notify`。 |
| `@narumitw/pi-langfuse` | 2026-07-13 | 与已收录 `@ravan08/pi-langfuse` 重复。 |
| `nowledge-mem-pi` | 2026-04-01 | 跨工具记忆，734 下载。源码在 [nowledge-co/community](https://github.com/nowledge-co/community)。区分度有，用量不够。 |
| `pi-zentui` | 2026-04-08 | 56★，9,446 下载。UI 类已挤（statusline / powerline / pi-ext）。 |
| `@bacnh85/pi-extensions` | 2026-07-02 | 8★ 的大集合，单包与已收录功能大量重叠。 |

## 6. 已收录条目需要修正

即使这次一个新包都不加，README 也有过时处。

| 条目 | 问题 | 证据 |
| --- | --- | --- |
| Packages badge `3300+` | 官方目录已是 5569–5575 | [pi.dev/packages](https://pi.dev/packages) 2026-08-19 |
| Pi badge `v0.44+` | 当前发布线 0.84.x，不少新包要求 0.80+ | 各包 README；npm `@earendil-works/pi-coding-agent` |
| 文末「最后更新于 2026 年 6 月」 | 实际 git 收到 2026-07-30 | `64bc5f2` |
| Contents 缺 Editor Integration | 正文有该节，目录没链 | [`README.md`](../README.md) |
| `@narumitw/pi-extensions`「11 个生产级扩展」 | 上游已远不止 11，且按 5 组分类 | [narumiruna/pi-extensions README](https://github.com/narumiruna/pi-extensions/blob/main/README.md) |
| `@narumitw/pi-sync` 描述只写 R2/S3 | 上游现支持 Git、WebDAV、R2、S3 | 同上 |
| `@juicesharp/rpiv-pi`「12 个 npm 包」 | monorepo 已多 voice / warp / args | [rpiv-mono](https://github.com/juicesharp/rpiv-mono) `packages/` |
| `oh-my-pi`「⭐8.5k」 | 2026-08-19 约 25,752★ | GitHub API `can1357/oh-my-pi` |
| `pi-caveman` 链到 [v2nic/pi-caveman](https://github.com/v2nic/pi-caveman) | 该仓 45★，最后推送 2026-04-07。npm `pi-caveman@1.0.8` 的 repository 是 [jonjonrankin/pi-caveman](https://github.com/jonjonrankin/pi-caveman)（93★，2026-08-05 仍在推）。安装可写 `pi install npm:pi-caveman` | registry `time.modified=2026-08-03` |
| `@gotgenes/pi-permission-system` 链到 MasuRii | npm 最新 v26.3.0 的 repository 是 [gotgenes/pi-packages](https://github.com/gotgenes/pi-packages)。MasuRii 仓仍在（140★）但是无 scope 的 `pi-permission-system@0.8.0`，最后 2026-07-03 | 两个 registry 记录 |
| `pi-btw` 写成「官方 / nicopreme 原版」 | npm `pi-btw@0.4.1` 的仓库是 [dbachelder/pi-btw](https://github.com/dbachelder/pi-btw)（172★，最后 2026-06-09）。`nicobailon/pi-btw` 已 404 | registry + GitHub API |
| `pi-memory-honcho` | 最后发布 2026-04-11，v0.3.3，疑似停更 | registry `time.modified` |
| `pi-toolbox` / `pi-workstation` | 各只发过 1 个版本（4 月 / 3 月），集合条目可能已冻 | registry |
| `@gintasz/pi-neuralyzer` | 收录后无新版本（2026-06-20 v0.1.1） | registry |
| `@samfp/pi-memory` | 最后 2026-06-16 | registry |
| `context-mode` | 最后 2026-06-29 | registry |
| `pi-agent-bus` | 最后 2026-06-05 | registry |
| `pi-acp` | 628★，最后推送正好 2026-07-30，之后无更新 | GitHub API |
| npm 上的 `oh-my-pi` | 不是 can1357 发行版 | registry `acidsugarx/oh-my-pi` |

## 7. 明确不推荐（这次）

- **纯主题 / 欢迎屏 / 节日皮肤**：`sort=recent` 里大量当日主题。现有 Featured/Tools 门槛是「设计理念独特」（kanagawa / theme-sync），新主题默认不进。
- **subagent 第 5、第 6 个 fork**（`@lpb-work/*`、`@ferris1225/*`、`wj-pi-subagents`）。列表已有 Nico Bailon 的社区包 `pi-subagents`、tintinweb、gotgenes、narumitw、interactive、roach-pi。
- **包名带 personal、无仓库、无 README 的 npm 包**。
- **用异常 star 当唯一质量信号**（`ponytail`：10.5 万★ vs 255 watch）。
- **只把已收录包再发一个 scope**。
- **provider / OAuth 长尾**（Kimi、Kiro、Grok、Antigravity、Volcengine……）。`name=auth` 一页 149 个匹配，几乎没有一个达到「显著优于已有、可复用缺口」的门槛。
- **已 archive 的实现**（`landstrip/pi-landstrip`）。
- **独立产品冒充 Package**：Feynman、Selesai Code 更接近 Alternative Distributions，且后者 0★。

## 8. 结论

**有，而且不止一两个。** 上次 7-30 只加了 guardrails，不是全量重扫。这约 7 周官方目录涨了约 2200 个包；真正达精选门槛的大约 **8 个强烈建议 + 若干第二梯队**。8 月上旬才出现的 press / mentis / recall / memsearch **先观察**，不要因为出现在 Recently published 就收。

若只改 README 一次、控制增量，先加这 6 条（缺口最大、证据最硬）：

1. `@narumitw/pi-plan-mode` — 官方明确不做的 plan mode
2. `@quintinshaw/pi-dynamic-workflows` — 427★ 的 fan-out / code-mode
3. `pi-fabric` — 窗口内出现的可编程运行时
4. `@juicesharp/rpiv-voice` — 本机语音，测试完整
5. `@jmfederico/pi-web` — 567★ 的远程 Web UI
6. `@aliou/pi-processes` — 可信作者的后台进程

然后视篇幅加 `@narumitw/pi-worktree`、`betterwright`。`pi-memory`、`@hypabolic/pi-hypa`、`@narumitw/pi-usage` 放第二梯队。

英文 README 应对齐同一批条目后再改，避免中英分叉。

### 可粘贴的 README 草稿（中文）

```markdown
### Plan Mode

Pi 核心不内置 plan mode，用扩展补。

- 🔥 [@narumitw/pi-plan-mode](https://github.com/narumiruna/pi-extensions) - Codex 风格只读 `/plan`：探索、澄清、产出可实施计划后再改代码。`pi install npm:@narumitw/pi-plan-mode`

### Background Tasks

- [@aliou/pi-processes](https://github.com/aliou/pi-processes) - 不阻塞会话的后台进程：dev server、test watcher、日志，带 `/ps` 面板。`pi install npm:@aliou/pi-processes`

### Web UI

- 🔥 [@jmfederico/pi-web](https://github.com/jmfederico/pi-web) - 浏览器监督跑在真实工作区里的 Pi 会话，断线不杀进程。[pi-web.dev](https://pi-web.dev/) `pi install npm:@jmfederico/pi-web`

### UI Enhancement（追加）

- 🔥 [@juicesharp/rpiv-voice](https://github.com/juicesharp/rpiv-mono) - `/voice` 本机 Whisper 听写，无云、无 API key。`pi install npm:@juicesharp/rpiv-voice`

### Subagents / Loop Engineering（追加）

- 🔥 [pi-fabric](https://github.com/monotykamary/pi-fabric) - 可编程工具运行时：在受检 TypeScript 里编排工具、MCP、agent 与工作流。`pi install npm:pi-fabric`
- 🔥 [@quintinshaw/pi-dynamic-workflows](https://github.com/QuintinShaw/pi-dynamic-workflows) - 把一次请求扇出到隔离子代理，按任务路由模型并交叉校验。`pi install npm:@quintinshaw/pi-dynamic-workflows`

### Browser Automation（追加）

- [betterwright](https://github.com/BetterWright/betterwright) - 持久、策略守卫的 Playwright：网络策略、凭证保险库、证明截图。`pi install npm:betterwright`

### Task Management（追加）

- [@narumitw/pi-worktree](https://github.com/narumiruna/pi-extensions) - 交互式 Git worktree，并把 Pi 会话切到新工作区。`pi install npm:@narumitw/pi-worktree`

### Context Management（追加，第二梯队）

- [@hypabolic/pi-hypa](https://github.com/Hypabolic/Hypa) - 本地确定性压缩嘈杂命令输出，再进上下文。`pi install npm:@hypabolic/pi-hypa`

### Persistent Memory（追加，第二梯队）

- [pi-memory](https://github.com/jayzeng/pi-memory) - 纯 markdown 长期记忆 + daily log + scratchpad，可选 qmd 语义搜索。`pi install npm:pi-memory`

### Utilities（追加，第二梯队）

- [@narumitw/pi-usage](https://github.com/narumiruna/pi-extensions) - `/usage` 读当前账号的 Codex / Copilot / OpenRouter 额度。`pi install npm:@narumitw/pi-usage`
```

## 9. 来源索引

- 官方目录：https://pi.dev/packages （2026-08-19 本机多次抓取；Recently published 当时包括 `@lpb-work/pi-subagents`、`recall-pi`、`@sunnyx11/pi-press`、`@galvinsan/pi-mentis*`、`pi-memsearch`）
- 官方过滤：`?name=plan|voice|sandbox|memory|worktree|compact|usage|webui|review|auth`、`?sort=recent`、`?type=extension`
- 包文档：https://github.com/earendil-works/pi/tree/main/packages/coding-agent/docs/packages.md
- npm 关键词：https://www.npmjs.com/search?q=keywords%3Api-package
- npm search API：https://registry.npmjs.org/-/v1/search?text=keywords:pi-package&size=250 （`total=7788`）
- 月下载：https://api.npmjs.org/downloads/point/last-month/<name> （窗口 2026-07-17–2026-08-15）
- 各包 README / GitHub / npm 链接见第 4、5、6 节表格
- 社区线索：[r/PiCodingAgent plan mode](https://www.reddit.com/r/PiCodingAgent/comments/1vhtpky/how_do_you_use_plan_mode_in_pi/)；X 上 ponytail 讨论（功能声明未采信二手转述）
- 本仓库截止点：`git log`，最新收录 commit `64bc5f2`（2026-07-30）
