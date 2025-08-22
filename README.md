
# Jornada-Enem

Este projeto é uma aplicação desenvolvida com NestJS e Prisma, voltada para auxiliar estudantes na preparação para o ENEM.

## Funcionalidades
- Autenticação de usuários
- Gerenciamento de usuários
- Integração com banco de dados via Prisma
- Estrutura modular para fácil manutenção

## Estrutura do Projeto
```
jornada/
├── src/
│   ├── auth/           # Módulo de autenticação
│   ├── prisma/         # Serviço de acesso ao banco de dados
│   ├── users/          # Módulo de usuários
│   ├── main.ts         # Ponto de entrada da aplicação
│   └── app.module.ts   # Módulo principal
├── prisma/             # Migrations e schema do banco
├── package.json        # Dependências do projeto
├── tsconfig.json       # Configuração do TypeScript
```

## Como executar
1. Instale as dependências:
  ```bash
  npm install
  ```
2. Execute as migrations do Prisma:
  ```bash
  npx prisma migrate dev
  ```
3. Inicie o servidor:
  ```bash
  npm run start:dev
  ```

## Tecnologias Utilizadas
- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [PostergreSQL](https://www.postgresql.org/)
- [JWT e BCRYPT]

## Contribuição
Sinta-se à vontade para abrir issues e enviar pull requests.

## Autor
- Thulio Leal

## Contatos
Para mais informações:
- [Linkedin](https://www.linkedin.com/in/thulio-leal-e-silva-176339304/)
- [E-mail](thulioleal.silva@gmail.com)

## Licença
MIT License

Copyright (c) 2025 Biblioteca.Manager

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
