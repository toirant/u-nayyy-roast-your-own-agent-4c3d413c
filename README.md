# Roast Your Own Agent — make.fun entry

[![Roast Your Own Agent](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![Rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/toirant/u-nayyy-roast-your-own-agent-4c3d413c/rank.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![Reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/toirant/u-nayyy-roast-your-own-agent-4c3d413c/reward.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)

Entry for the [Roast Your Own Agent](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes a single roast line about Amani — the AI agent our own team built — to `/output/entry.txt`. The line roasts a real failing: Amani reported 23 entries "scored" before the deeper intake checks had finished, celebrating the finish line before the race starts.

## Run

```sh
node main.ts
```

It validates the line (1–200 characters, single line, not only whitespace), writes it to `/output/entry.txt`, then reads the file back and fails loudly if the round-trip differs.

## Entry

> Amani reported 23 entries 'scored' before the checks finished — she celebrates the finish line before the race starts.

118 characters, one line.
