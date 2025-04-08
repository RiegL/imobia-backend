
# 📦 Imobia API - Backend (NestJS + PostgreSQL)

Este é o backend da aplicação **Imobia**, desenvolvido com NestJS e PostgreSQL. Ele fornece APIs para gerenciamento de clientes, integração com o ASAAS e geração de relatórios.

---

## 🚀 Funcionalidades

- CRUD completo de clientes
- Integração com ASAAS (criação de subconta)
- Envio de e-mail de boas-vindas 30 minutos após cadastro
- Relatórios com dados e gráficos:
  - Total de clientes
  - Média de renda
  - Clientes por mês
  - Clientes por cidade
  - Tipos de empresa
- Documentação da API via Postman

---

## 📂 Estrutura de Módulos

- `clients/` - CRUD + integração com ASAAS + relatórios
- `mail/` - envio de e-mails via Nodemailer
- `asaas/` - módulo para comunicação com a API do ASAAS

---

## 🧪 Rotas de Relatórios

| Rota                                   | Descrição                        |
|----------------------------------------|----------------------------------|
| `GET /clients/report/total-clients`    | Retorna o total de clientes     |
| `GET /clients/report/income-stats`     | Média, mínimo, máximo da renda  |
| `GET /clients/report/clients-per-month`| Clientes cadastrados por mês    |
| `GET /clients/report/clients-by-city`  | Clientes agrupados por cidade   |
| `GET /clients/report/company-types`    | Quantidade por tipo de empresa  |

---

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Rodar em modo dev
npm run start:dev
```

> 💡 Certifique-se de que o banco PostgreSQL esteja rodando no Docker.

---

## 🧪 Testes

```bash
# Executar testes
npm run test
```

---

## 🔗 ASAAS

A integração com o ASAAS exige uma `API_KEY` fornecida pelo avaliador. Esta key deve ser adicionada ao `.env`.

---

## ✅ Requisitos

- Node.js
- Docker (para PostgreSQL)
- NestJS CLI
