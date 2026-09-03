---
title: 'AI Connector Connecting smart-me to an AI assistant'
slug: '/schnittstellen/ai-connector'
description: 'smart-me runs a connector that lets an AI assistant work inside your smart-me account.'
sidebar_label: 'AI Connector Connecting smart-me to an AI assistant'
---
smart-me runs a connector that lets an AI assistant work inside your smart-me account. Claude, ChatGPT and other assistants can use it. You connect it once, then ask for what you want in ordinary language instead of clicking through the portal:

"How much did the heat pump use last month, and what did that cost at the current tariff?"

Technically it is an MCP server (Model Context Protocol, an open standard for giving an assistant access to a tool or a data source) at [https://mcp.smart-me.com/mcp](https://mcp.smart-me.com/mcp). There is nothing to install and no API key to create.

It acts in your name with your own permissions, it asks before it changes anything, and it stores nothing: no password, no token, no copy of your data.

## What you need

- a smart-me account

- an assistant that supports MCP connectors: Claude (web, desktop, mobile), ChatGPT, or another MCP client

- a Professional licence for load profiles and long series of values. Everything else works on any account.


## Connecting it

In Claude:

Settings → Connectors → Add custom connector. In ChatGPT: Settings → Connectors → Add. Either way, enter:

[https://mcp.smart-me.com/mcp](https://mcp.smart-me.com/mcp)

The smart-me sign-in page opens. Sign in as you always do and confirm the access. Your password is never given to the assistant.

## What you can ask

In any language, not just English.

Meters and consumption

- "Which meters are in my account, and what do they read right now?"

- "Give me the quarter-hourly load profile of the main meter for last Tuesday and tell me when the peak was."


Charging stations

- "Is anything charging right now, and how much is the whole group drawing?"

- "Show me the charging sessions of the station in the garage this month."


Self-consumption billing (ZEV)

- "Check the configuration of my property before I make the first invoice."

- "Here is a list of 14 meter serial numbers with apartment numbers and tenants. Set the property up."


The last one is what the connector was built for. Setting up a ZEV by hand is an afternoon of clicking; described in one message it is a couple of minutes and a list of confirmations.

## What it changes, and what it asks

Most of it only reads. Everything that writes (renaming, moving, switching a relay, current limits, tariffs, billing properties, deleting) is shown to you first and waits for your confirmation.

Deleting a folder or a charging station takes two steps: the first shows what would go, the second needs its exact name. Meters are never deleted. They keep their values and move to the top of your tree.

## Privacy

The connector stores nothing about you and acts with your own permissions. What it does mean is that the answers to your questions go to the assistant you connected, and therefore to that provider. That includes your tenants' addresses if you ask about a property, so read the smart-me data protection declaration before you connect one with real tenant data.

## What it reads, and where to find it

Reads: every meter in the account and its current readings, quarter-hourly load profiles and daily series, the folder tree of a site, charging stations with their sessions and settings, load management groups, and the tariffs, invoice positions and consumption of a billing property.

You do not have to add it by hand: the connector is officially published and listed in several directories — the Claude connectors directory, the official MCP registry as com.smart-me/smart-me, Glama, and the Raycast MCP registry. The ChatGPT review is in progress.

In short: smart-me exposes the meters of an account through an MCP server at https://mcp.smart-me.com/mcp. An AI assistant such as Claude or ChatGPT can read electricity, heat and water meters, quarter-hourly load profiles, charging stations and ZEV billing straight out of the user's own account, and change them after confirmation — no installation, no API key, with the permissions of the signed-in user.
