# 📦 Imobia - API (Back-end)

Este é o back-end da aplicação **Imobia**, desenvolvido com [NestJS](https://nestjs.com/) e [PostgreSQL](https://www.postgresql.org/). A API gerencia os clientes e integra com o serviço de subcontas da [Asaas](https://www.asaas.com/).

---

## 🚀 Funcionalidades

- ✅ CRUD de clientes
- ✅ Integração com a API ASAAS (criação de subcontas)
- ✅ Relatórios e métricas (clientes por cidade, total, etc.)
- ✅ Envio de e-mail de boas-vindas após cadastro
- ✅ Documentação da API
- ✅ Testes automatizados em pontos-chave

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/imobia-backend.git
cd imobia-backend

# Instale as dependências
npm install

# Crie o arquivo .env
cp .env.example .env
# Edite o .env com suas configurações

# Suba o PostgreSQL (caso esteja usando Docker)
docker-compose up -d

# Rode as migrations do Prisma
npx prisma migrate dev

# Inicie a API
npm run start:dev
```

---

## 🧪 Testes

```bash
npm run test
```

---

## 📫 API Endpoints

- `POST /clients` – Cadastra cliente e cria subconta ASAAS
- `GET /clients` – Lista todos os clientes
- `PUT /clients/:id` – Atualiza um cliente
- `DELETE /clients/:id` – Remove um cliente
- `GET /reports/*` – Relatórios com dados

---

## 🔐 Variáveis de Ambiente

```env
DATABASE_URL=postgresql://user:password@localhost:5432/imobia
ASAAS_API_KEY=sua-chave-aqui
EMAIL_SERVICE_USER=seuemail@gmail.com
EMAIL_SERVICE_PASS=sua-app-password
```

---

## 👨‍💻 Autor

Desenvolvido por [Seu Nome](https://github.com/seu-usuario)