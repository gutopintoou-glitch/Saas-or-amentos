# Modelo de dados (relacional)

> Sugestão de esquema para PostgreSQL.

## Tabelas principais

### users
- id (PK)
- nome
- email (unique)
- senha_hash
- criado_em

### companies
- id (PK)
- user_id (FK users)
- nome
- nome_fantasia
- documento (CNPJ/CPF)
- inscricao_estadual (nullable)
- endereco
- telefone
- whatsapp
- email
- site (nullable)
- logo_url (nullable)
- responsavel_nome
- observacoes_padrao (nullable)
- configuracoes_fiscais (jsonb, nullable)
- criado_em

### clients
- id (PK)
- user_id (FK users)
- tipo (PF/PJ)
- nome_razao
- documento (CPF/CNPJ)
- telefone
- whatsapp
- email
- endereco
- observacoes (nullable)
- criado_em

### public_quote_requests
- id (PK)
- user_id (FK users)
- company_id (FK companies)
- nome_empresa_cliente
- nome_solicitante
- documento (CPF/CNPJ)
- email
- telefone
- endereco
- status (novo/em_analise/finalizado)
- criado_em

### public_quote_request_items
- id (PK)
- request_id (FK public_quote_requests)
- descricao
- quantidade
- observacoes (nullable)

### quotes
- id (PK)
- user_id (FK users)
- company_id (FK companies)
- client_id (FK clients)
- numero
- status
- data_emissao
- data_validade
- total
- desconto_total (nullable)
- imposto_total (nullable)
- revisao_atual (nullable)
- origem (manual/public_request)
- public_request_id (FK public_quote_requests, nullable)
- criado_em

### quote_items
- id (PK)
- quote_id (FK quotes)
- descricao
- quantidade
- valor_unitario
- desconto
- imposto
- subtotal

### quote_revisions
- id (PK)
- quote_id (FK quotes)
- numero_revisao
- comentario_cliente (nullable)
- snapshot (jsonb)
- criado_em

### public_quote_links
- id (PK)
- quote_id (FK quotes)
- token (unique)
- expira_em (nullable)
- criado_em

### orders
- id (PK)
- user_id (FK users)
- company_id (FK companies)
- client_id (FK clients)
- quote_id (FK quotes, nullable)
- numero
- status
- total
- criado_em

### contracts
- id (PK)
- user_id (FK users)
- company_id (FK companies)
- client_id (FK clients)
- order_id (FK orders)
- quote_id (FK quotes)
- numero
- status
- conteudo (text/json)
- criado_em

### templates
- id (PK)
- user_id (FK users)
- tipo (quote/contract)
- nome
- layout
- textos_padrao
- clausulas
- rodape
- criado_em

### audit_logs
- id (PK)
- user_id (FK users)
- entidade
- entidade_id
- acao
- detalhes (jsonb)
- criado_em

## Observações
- Todos os dados são isolados por `user_id`.
- Limite de 3 empresas por usuário validado em regra de negócio.
- `snapshot` guarda a versão completa do orçamento revisado.
