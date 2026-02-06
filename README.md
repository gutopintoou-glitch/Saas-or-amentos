# SaaS de Orçamentos, Pedidos e Contratos

Aplicação web (SaaS) para pequenas e médias empresas, com foco em produtividade, controle comercial e geração de documentos profissionais. Todo o conteúdo e exemplos estão em **Português Brasileiro (pt-BR)** e valores em **Real Brasileiro (R$)**.

## Visão geral

O sistema permite:
- Gestão multiempresa (até 3 empresas por usuário)
- Cadastro de clientes (PF/PJ)
- Criação e revisão de orçamentos com aceite online
- Solicitação pública de orçamento por empresa (link para clientes)
- Conversão de orçamentos em pedidos
- Geração automática de contratos
- Exportação em PDF e compartilhamento por link público

## Estrutura do repositório

- `docs/requirements.md`: requisitos funcionais e não funcionais
- `docs/user-flows.md`: fluxos principais da aplicação
- `docs/database-schema.md`: modelo de dados relacional
- `docs/api.md`: endpoints REST sugeridos

## Próximos passos

1. Definir stack (ex.: Next.js + API REST + PostgreSQL).
2. Implementar autenticação e multi-tenant por usuário.
3. Construir módulos principais: empresas, clientes, orçamentos, pedidos e contratos.
4. Integrar geração de PDF server-side.

> Este repositório inicia a base documental para a implementação completa do SaaS.
