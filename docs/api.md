# API REST (proposta)

Base URL: `/api`

## Auth
- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/forgot-password`
- `POST /auth/reset-password`

## Empresas
- `GET /companies`
- `POST /companies`
- `GET /companies/:id`
- `PUT /companies/:id`
- `DELETE /companies/:id`

## Clientes
- `GET /clients`
- `POST /clients`
- `GET /clients/:id`
- `PUT /clients/:id`
- `DELETE /clients/:id`

## Orçamentos
- `GET /quotes`
- `POST /quotes`
- `GET /quotes/:id`
- `PUT /quotes/:id`
- `POST /quotes/:id/send`
- `POST /quotes/:id/duplicate`
- `POST /quotes/:id/revision`
- `POST /quotes/:id/expire`
- `POST /quotes/:id/finalize` (pré-orçamento)

## Itens do orçamento
- `POST /quotes/:id/items`
- `PUT /quotes/:id/items/:itemId`
- `DELETE /quotes/:id/items/:itemId`

## Link público
- `GET /public/quotes/:token`
- `POST /public/quotes/:token/accept`
- `POST /public/quotes/:token/reject`
- `POST /public/quotes/:token/revision`
- `GET /public/quotes/:token/pdf`

## Solicitação pública de orçamento
- `GET /public/companies/:companyId/quote-request` (formulário)
- `POST /public/companies/:companyId/quote-request`
- `GET /quote-requests`
- `GET /quote-requests/:id`
- `POST /quote-requests/:id/convert` (gera pré-orçamento)

## Pedidos
- `GET /orders`
- `POST /orders`
- `GET /orders/:id`
- `PUT /orders/:id`
- `POST /orders/:id/close`

## Contratos
- `GET /contracts`
- `POST /contracts`
- `GET /contracts/:id`
- `POST /contracts/:id/pdf`
- `POST /contracts/:id/send`

## Modelos
- `GET /templates`
- `POST /templates`
- `PUT /templates/:id`
- `DELETE /templates/:id`

## Dashboard
- `GET /dashboard/summary`
- `GET /dashboard/charts`
