# NBA Player Search

Aplicação desenvolvida como parte do Projeto 1 da disciplina de **Programação Web Fullstack**, com foco em React.js, consumo de API JSON e SPA (Single Page Application).

## Descrição

O projeto permite buscar jogadores da NBA por nome, utilizando a API pública **[balldontlie.io](https://www.balldontlie.io/)**. O usuário insere o nome do jogador, e os resultados são listados dinamicamente na tela. A aplicação inclui validação de campos, gerenciamento de estado global com Context API, uso de hooks especializados e deploy em servidor web.

## Funcionalidades

-  Busca de jogadores da NBA por nome
-  Validação de input (campo obrigatório + mínimo de 3 letras)
-  Gerenciamento global com Context API (`useContext`)
-  Listagem dos jogadores encontrados
-  Mensagem de erro clara quando nenhum jogador for encontrado
-  Estilo limpo e responsivo com CSS
-  Uso do hook especializado (`useMemo`) para otimizar renderização da lista

## Tecnologias usadas

- React.js + Vite
- React Hook Form
- Context API (`useContext`)
- Fetch API
- CSS
- Hook especializado: (`useMemo`)

## Estrutura do projeto

```
meu-projeto-nba/
├── public/
├── src/
│   ├── assets/          # Imagens como logo da NBA e ícone de busca
│   ├── components/      # Header, PlayerSearch, PlayerList
│   ├── contexts/        # PlayerContext
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## API utilizada

[balldontlie.io](https://www.balldontlie.io) – API gratuita com dados de jogadores e times da NBA.

> Exemplo de uso:  
> `https://api.balldontlie.io/v1/players?search=lebron`

## Autor

Mateus Chicoli Pedreira  
[GitHub](https://github.com/MChicoli)

## Como rodar o projeto

```bash
npm install
npm run dev
```
