# Guia de Resolução de Erros de Deploy

## O Problema
O deploy falhou anteriormente com `Error: Command "pnpm install" exited with 1`.
Isso aconteceu porque existiam arquivos (`pnpm-lock.yaml`) que faziam a Vercel pensar que o projeto usava `pnpm`, quando na verdade estamos usando `npm`.

## A Solução Realizada
1. Removidos os arquivos de conflito: `pnpm-lock.yaml` e `pnpm-workspace.yaml`.
2. Configurado `vercel.json` para **forçar** o uso do npm (`npm install`).

## Como Fazer o Deploy Agora
Basta rodar o comando abaixo. Se a Vercel perguntar sobre sobrescrever configurações, responda **N** (No) para manter as configurações do arquivo `vercel.json` que acabamos de criar.

```bash
npx vercel --prod
```
