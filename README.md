# 🛡️ Sistema de Seguros – Backend (Node.js + NestJS)

Este projeto é uma **API RESTful** desenvolvida em **Node.js** utilizando **NestJS** e **TypeORM**, com o objetivo de gerenciar um **sistema de seguros**, incluindo usuários, seguros e categorias.

O projeto foi desenvolvido com foco em **boas práticas de arquitetura**, **relacionamentos entre entidades** e **organização de código**, sendo ideal para fins de estudo e portfólio.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **TypeORM**
- **MySQL**
- **Class-validator**
- **TypeScript**

---

## 📚 Estrutura do Domínio

O sistema é composto por três entidades principais:

### 👤 Usuário
- Representa os usuários do sistema
- Um usuário pode possuir **vários seguros**

### 🛡️ Seguro
- Representa uma apólice de seguro
- Cada seguro pertence a:
  - **um usuário**
  - **uma categoria**
- Possui controle de status:
  - `Em análise`
  - `Ativo`
  - `Inativo`

### 🗂️ Categoria
- Classifica os seguros
- Uma categoria pode possuir **vários seguros**

---

## 🔗 Relacionamentos entre Entidades

- **Usuário (1) → (N) Seguro**
- **Categoria (1) → (N) Seguro**
- **Seguro (N) → (1) Usuário**
- **Seguro (N) → (1) Categoria**

Representação simplificada:

