# Bland AI Cookbooks

Bland is an enterprise voice AI platform for building, deploying, and monitoring AI voice agents for high-volume phone workflows. This repository holds worked examples that call the Bland API, each in its own folder with its own README.

## Start here

- Documentation: https://docs.bland.ai
- API quickstart: https://docs.bland.ai/quickstart
- Send a call with `POST /v1/calls`: https://docs.bland.ai/api-v1/post/calls
- Product overview: https://www.bland.ai/product
- Pricing: https://www.bland.ai/pricing
- Trust and security: https://www.bland.ai/trust-security

## Cookbooks

| Cookbook | What it covers |
|---|---|
| [Cookbook 1: Inbound lead qualification](inbound-lead-qualification) | An inbound phone agent that qualifies leads |

When you add a cookbook, give it its own folder and README and add one row to this table.

## Authentication

Bland REST requests use an organization API key sent as `Authorization: Bearer <key>`. Create and manage keys in the dashboard at https://app.bland.ai/dashboard/settings, and keep them out of source control. The MCP server accepts the authentication methods listed in its setup guide, linked below.

## Other ways to reach Bland from code

- Bland CLI: https://docs.bland.ai/sdks/cli
- MCP server: Bland hosts a Model Context Protocol server at `https://api.bland.ai/v1/mcp` over Streamable HTTP. Setup guides, including the supported authentication methods for each client, start at https://docs.bland.ai/integrations/mcp/overview
- Text to speech: the Bland Speech quickstart is at https://docs.bland.ai/tts/quickstart
