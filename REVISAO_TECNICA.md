# Revisão técnica — Komatsu Production Control

## O que foi preservado

- Dashboard e indicadores.
- Importação e exportação de Excel.
- Planejamento/replanejamento.
- Status de produção.
- Gestão de falta de material e resolução.
- Relatórios, filtros e impressão.
- Gantt e backlog.
- Autenticação local.
- Painel administrativo.
- Tema claro/escuro.

## Correções desta versão

1. Corrigidos imports locais de `types.ts`.
2. Corrigidos contratos TypeScript que não correspondiam ao uso real (`password`, papéis, `DependenciaId` e `Processo`).
3. Impedida a sobrescrita dos dados salvos durante a hidratação inicial do `localStorage`.
4. Leitura do `localStorage` passou a ser tolerante a JSON corrompido.
5. Importação Excel passou a validar arquivo/planilha e ignorar linhas totalmente vazias.
6. Datas numéricas do Excel passaram a ser convertidas com `XLSX.SSF.parse_date_code`.
7. Filtros de status consideram todos os planejamentos de uma Máquina + Série, em vez do primeiro registro encontrado.
8. Indicador total foi renomeado para `Total Registros`, pois o dashboard mistura planejamentos e itens ainda sem planejamento.
9. Reabertura de um problema de material limpa corretamente a marcação de resolução anterior.
10. Alterações de planejamento/status registram `AtualizadoPor` quando há usuário logado.
11. Administrador conectado não pode excluir a própria conta pela tela administrativa.
12. Removido `importmap` redundante e referência a `index.css` inexistente.
13. Configuração Vite simplificada e preparada para GitHub Pages.
14. Adicionado workflow de deploy automático.
15. Arquivos auxiliares foram normalizados para `.gitignore` e `.env.example`.

## Pontos que continuam deliberadamente como estão

### Autenticação
O login ainda é local e as credenciais ficam no `localStorage`. Isso não deve ser considerado segurança corporativa. Resolver isso corretamente exige backend, hash de senha, sessão/token e banco.

### Persistência
Os dados continuam no navegador. Dois computadores não compartilham a mesma produção.

### Componentes/Processos
Existem tipos para processos e subconjuntos que ainda não possuem fluxo completo na interface. Eles foram mantidos para não apagar intenção funcional do projeto original.

### Estrutura TSX
Ainda há lógica concentrada no `App.tsx`. Isso foi mantido nesta rodada para reduzir risco de regressão. Uma segunda etapa pode extrair serviços, utilitários e hooks sem alterar a interface.
