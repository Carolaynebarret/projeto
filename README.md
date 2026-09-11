# Projeto Final — POO (UERN)

![GitHub last commit](https://img.shields.io/github/last-commit/Carolaynebarret/site-institucional-poo-uern)
![GitHub top language](https://img.shields.io/github/languages/top/Carolaynebarret/site-institucional-poo-uern)
![GitHub package.json version](https://img.shields.io/github/package-json/v/Carolaynebarret/site-institucional-poo-uern?filename=frontend%2Fpackage.json)
![License](https://img.shields.io/github/license/Carolaynebarret/site-institucional-poo-uern)

Aplicação web front-end desenvolvida como projeto final da disciplina de **Programação Orientada a Objetos (POO)** da UERN. A aplicação apresenta um site institucional com navegação entre páginas, um formulário de coleta de dados pessoais e um dashboard com gráficos de exemplo.

> Repositório: [`Carolaynebarret/site-institucional-poo-uern`](https://github.com/Carolaynebarret/site-institucional-poo-uern)

## Funcionalidades

- **Home** (`/`): página inicial de apresentação do projeto, com chamada para o formulário.
- **Formulário** (`/Formulario`): formulário de dados pessoais (nome, idade, gênero, telefone, e-mail, endereço, formação, qualificação, experiência e situação laboral). O formulário é apenas visual — os campos não são persistidos nem enviados a um backend (não há integração com API nesta versão).
- **Dashboard** (`/dashboard`): página com dois gráficos de exemplo (pizza e barras), renderizados com dados estáticos de demonstração via `react-google-charts`.
- **Contatos** (`/contatos`): página com os links de GitHub dos integrantes da equipe.
- Navegação client-side (SPA) entre as páginas via `react-router-dom`.

## Tecnologias

- [React 17](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Create React App](https://create-react-app.dev/) (`react-scripts`)
- [React Router DOM v5](https://v5.reactrouter.com/)
- [react-google-charts](https://www.react-google-charts.com/)
- [Bootstrap 5](https://getbootstrap.com/) (estilização)
- [Yarn](https://yarnpkg.com/) como gerenciador de pacotes

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior (testado com Node 16 e Node 24)
- [Yarn](https://yarnpkg.com/) 1.x (`npm install -g yarn`, caso não tenha)

## Instalação

```bash
git clone https://github.com/Carolaynebarret/site-institucional-poo-uern.git
cd site-institucional-poo-uern/frontend
yarn install
```

## Como executar

Todos os comandos abaixo devem ser executados dentro da pasta `frontend/`.

```bash
yarn start
```

A aplicação sobe em modo de desenvolvimento em [http://localhost:3000](http://localhost:3000).

Para gerar a build de produção (pasta `frontend/build`):

```bash
yarn build
```

## Como rodar os testes

```bash
yarn test
```

> **Nota:** o projeto ainda não possui testes automatizados (`yarn test` finaliza sem encontrar nenhum arquivo de teste). Os pacotes de `@testing-library` já estão instalados como dependência, prontos para quando os primeiros testes forem escritos.

## Estrutura de pastas

```
site-institucional-poo-uern/
├── docs/
│   └── images/          # Screenshots do app (ver README da pasta)
├── frontend/             # Aplicação React (Create React App)
│   ├── public/           # HTML base e assets estáticos
│   └── src/
│       ├── assets/       # CSS e imagens
│       ├── components/   # Componentes reutilizáveis (NavBar, Footer, Form, gráficos)
│       ├── pages/        # Páginas roteadas (Home, Forms, dashboard, Contatos)
│       ├── App.tsx        # Componente raiz
│       ├── Routes.tsx     # Definição das rotas (react-router-dom)
│       └── index.tsx      # Ponto de entrada da aplicação
├── LICENSE
└── README.md
```

## Roadmap / melhorias futuras

- [ ] Persistir os dados enviados pelo formulário (hoje o formulário não envia dados a lugar nenhum) e alimentar o dashboard com esses dados reais, em vez dos dados estáticos de demonstração.
- [ ] Adicionar um backend (API) caso a persistência acima seja implementada. Não existe nenhum backend ou endpoint no projeto atual, portanto **não há mecanismo de autenticação a completar** — se um backend for criado no futuro, autenticação deve ser avaliada como parte desse trabalho.
- [ ] Escrever testes automatizados (unitários e de integração) — atualmente o projeto não possui nenhum.
- [ ] Adicionar capturas de tela reais em `docs/images/` (ver checklist em `docs/images/README.md`).
- [ ] Avaliar migração do Create React App (já em modo de manutenção) para uma alternativa mais moderna, como Vite.

## Contribuição

Contribuições são bem-vindas. Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua alteração (`git checkout -b minha-feature`).
3. Commit suas mudanças (`git commit -m 'Minha alteração'`).
4. Envie para o seu fork (`git push origin minha-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
