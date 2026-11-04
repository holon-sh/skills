---
name: holon
description: Build, run, deploy, and troubleshoot Holon apps and MCP servers. Use for Holon projects, app composition, identity and access rules, or Holon Cloud and self-hosted installations.
metadata:
  author: holon-sh
  version: "0.0.1-dev.1"
---

# Holon

Holon runs applications for humans and agents, with shared identity, authorization,
and MCP access. Use the existing project and selected installation as context.

## Find the relevant guide

Read the relevant [Holon docs](https://holon-labs.dev/docs/) before implementing
version-sensitive details. Use authenticated browser access or the Docs MCP
resources when needed; do not invent behavior if the docs are unavailable.

- Install the CLI or select Cloud/local Holon: [Installation](https://holon-labs.dev/docs/#installation).
- Build an app or MCP App: [Build an app](https://holon-labs.dev/docs/#build-an-app).
- Compose apps with an agent: [Build an agent](https://holon-labs.dev/docs/#build-an-agent).
- Generate typed app clients: [Typed clients](https://holon-labs.dev/docs/#typed-clients).
- Configure sign-in and verified identity: [Identity](https://holon-labs.dev/docs/#configure-identity).
- Set app and tool access rules: [Authorization](https://holon-labs.dev/docs/#configure-authorization).
- Configure outbound connections: [Outbound access](https://holon-labs.dev/docs/#limit-outbound-access).
- Connect external MCP servers: [External apps](https://holon-labs.dev/docs/#add-external-apps).
- Operate a self-hosted production installation: [Kubernetes](https://holon-labs.dev/docs/#deploy-on-kubernetes).
- Develop, deploy, inspect apps, or manage configuration: [CLI](https://holon-labs.dev/docs/#cli-reference).
- Edit project/server manifests or installation values: [Project](https://holon-labs.dev/docs/#config/project), [server](https://holon-labs.dev/docs/#config/server), [Helm](https://holon-labs.dev/docs/#config/helm).

## Resolve the target

Inspect `holon.yaml`/`holon.yml`, app dependencies, and the user's selected origin.
Use `holon --version` and command `--help` to check the installed CLI before
following examples; the website may document a newer version.

Cloud and self-hosted installations share app workflows. Apply only the relevant
installation guidance: Cloud manages the platform; local/self-hosted operation
may require Docker, Kubernetes, Helm, DNS, and identity-provider configuration.
Replace example origins with the selected origin. Ask if the target remains
ambiguous before changing a deployment.

## Work in the project

Follow the project's language and existing MCP SDK conventions. Declare app
dependencies in server metadata and use generated typed clients for app calls.
Use verified request identity for authorization. Preserve intended app/tool
access and outbound rules when changing manifests.

Use `holon dev` for development and `holon deploy` for persistent deployment.
Prefer named apps when updating part of an installation: an unqualified deploy
replaces the deployment's app set. Before deploying, resolve the target origin
and app set from the user's request and project. Check the relevant types and
verify the changed app through its browser or MCP interface.
