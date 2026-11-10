# Holon Skills

[Agent Skill](https://agentskills.io/) for building, running, deploying, and
troubleshooting [Holon](https://holonlabs.ai).

## Install

### Setup prompt

Paste this into your agent:

```text
Fetch and execute the appropriate instructions to set me up for Holon from https://holonlabs.ai/agent-setup/prompt.md
```

### Agent Skills

```sh
npx skills add holon-sh/skills --skill holon
```

<details>
<summary><h4>Codex</h4></summary>

```sh
codex plugin marketplace add holon-sh/skills
codex plugin add holon@holon-skills
```

See the [Codex marketplace guide](https://developers.openai.com/plugins/build/plugins).

</details>

<details>
<summary><h4>Cursor</h4></summary>

In **Dashboard → Plugins & MCPs → Team Marketplaces → Add Marketplace**, choose
**Import from Repo** and enter `https://github.com/holon-sh/skills`.

See the [Cursor plugin guide](https://cursor.com/docs/plugins).

</details>

<details>
<summary><h4>Devin</h4></summary>

```sh
devin plugins install holon-sh/skills
```

See the [Devin plugin guide](https://docs.devin.ai/cli/extensibility/plugins/overview).

</details>

<details>
<summary><h4>Claude</h4></summary>

```sh
claude plugin marketplace add holon-sh/skills
claude plugin install holon@holon-skills
```

See the [Claude marketplace guide](https://code.claude.com/docs/en/plugin-marketplaces).

</details>

### MCP

Connect to [Holon Docs](https://registry.modelcontextprotocol.io/v0.1/servers/io.github.holon-sh%2Fdocs/versions/latest)
at `https://holonlabs.ai/mcp/docs` with a client that supports the
[MCP Skills extension](https://modelcontextprotocol.io/extensions/skills/overview).

## Community

Ask questions and share what you're building on the [Holon Discord](https://discord.gg/jXExyBdy).
