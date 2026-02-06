# Requisitos do Sistema

## Requisitos funcionais

### Autenticação e usuários
- Cadastro e login de usuários.
- Recuperação de senha por e-mail.
- Cada usuário pode cadastrar **até 3 empresas**.
- Isolamento de dados por usuário (multi-tenant).

### Módulo de empresas
Cadastro com:
- Nome da empresa e nome fantasia.
- CNPJ ou CPF.
- Inscrição estadual (opcional).
- Endereço completo.
- Telefone e WhatsApp.
- E-mail e site (opcional).
- Logo da empresa.
- Nome do responsável.
- Observações padrão para orçamentos.
- Configurações fiscais (opcional).

### Módulo de clientes
Cadastro com:
- Tipo: Pessoa Física ou Jurídica.
- Nome/Razão social.
- CPF/CNPJ.
- Telefone e WhatsApp.
- E-mail.
- Endereço completo.
- Observações internas.
- Histórico de orçamentos, pedidos e contratos vinculados.

### Módulo de orçamentos
- Criar orçamento manualmente ou a partir de modelo.
- Selecionar empresa emissora e cliente.
- Numeração automática (exemplo: 453212123301).
- Datas de emissão e validade.
- Status: Rascunho, Enviado, Aguardando cliente, Aceito, Rejeitado, Em revisão, Expirado.
- Itens do orçamento com descrição, quantidade, valor unitário, desconto, impostos, subtotal e total geral.

### Modelos de orçamento
- Criar, editar e excluir modelos.
- Definir layout visual, textos padrões, cláusulas e rodapé personalizado.

### Sistema de revisões
- Revisões automáticas (ex.: 453212123301_rev01).
- Histórico completo de versões.
- Comentários do cliente em cada revisão.

### Link público do orçamento
- URL segura com token.
- Visualização, download em PDF, aceite, rejeição e solicitação de revisão.
- Atualização automática do status no painel do usuário.

### Solicitação pública de orçamento (cliente)
- Cada empresa pode gerar um link público exclusivo para clientes solicitarem orçamento.
- Formulário público coleta: nome da empresa do cliente, nome do solicitante, endereço, e-mail, telefone, CPF/CNPJ e itens solicitados.
- Itens enviados pelo cliente são cadastrados como produtos/sugestões na área de produtos do usuário.
- Envio gera um **pré-orçamento** com status inicial específico (ex.: Pré-orçamento).
- Usuário finaliza o pré-orçamento definindo valores, condições de pagamento, termos e demais campos padrão do orçamento.
- Fluxo equivalente ao orçamento manual (mesmas validações e permissões).

### Exportação e compartilhamento
- Download em PDF profissional.
- Envio por e-mail e WhatsApp.
- Compartilhamento via link público sem login.

### Módulo de pedidos
- Conversão automática ao aceitar orçamento.
- Criação manual de pedidos.
- Campos: número, cliente, empresa, itens, total.
- Status: Em aberto, Em execução, Finalizado, Cancelado.

### Módulo de contratos
- Geração automática a partir do pedido.
- Modelos personalizáveis com campos dinâmicos.
- Download em PDF e envio por e-mail.
- Histórico por cliente.

### Dashboard
- Total de orçamentos criados.
- Orçamentos aceitos, rejeitados e pendentes.
- Total faturado.
- Pedidos ativos.
- Contratos gerados.
- Gráficos mensais e anuais.

### Configurações gerais
- Gerenciar empresas.
- Gerenciar modelos de orçamento e contrato.
- Preferências visuais.
- Numeração automática (orçamentos, pedidos e contratos).
- Observações padrão.
- Termos e condições.

### Funcionalidades extras
- Duplicar orçamento.
- Clonar modelos.
- Filtros avançados.
- Busca global.
- Tags em orçamentos.
- Status com cores.
- Notificações internas.
- Expiração automática de orçamentos.

## Requisitos não funcionais
- Interface moderna, profissional e responsiva (desktop, tablet e mobile).
- Segurança: autenticação segura, autorização por usuário, tokens públicos com expiração.
- Logs de ações e confirmação antes de exclusões.
- Arquitetura escalável para SaaS.
- Geração de PDF server-side.
