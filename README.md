# Komatsu Production Control

Sistema web de controle de produção para caldeiraria, com importação de base Excel, planejamento, replanejamento, gestão de materiais, dashboard, relatório e Gantt.

## Executar localmente

Requisitos: Node.js 20+ e npm.

Não é necessário configurar API key para a versão atual.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

O repositório está preparado para deploy automático pelo GitHub Actions. Em **Settings → Pages**, selecione **GitHub Actions** como origem.

> O sistema atual usa `localStorage`: os dados ficam no navegador e não são compartilhados entre computadores. A autenticação também é apenas de protótipo. Para uso corporativo, será necessário um backend e banco de dados.

## Observação

A base de produção é importada por Excel. Os planejamentos são identificados por Máquina + Série + Componente.
