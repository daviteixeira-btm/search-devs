<h1 align="center"> Search d_evs </h1>

<p align="center">
  <a href="#Introducao"> 🧩 Introdução </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Dependencias"> 🧪 Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Aplicacao"> 🚀 Aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Scripts"> 📖 Scripts</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<a id="Introducao"></a>
## 🧩 Introdução

### No projeto proposto, o objetivo é construir uma aplicação React que busque o perfil de desenvolvedores na API pública do GitHub e exiba seus dados em uma página de perfil.

### Histórias

<ul>
  <li>Ao entrar na home page, é possível conseguir pesquisar o usuário pelo seu username do GitHub e ter os dados do usuário exibidos corretamente na página de perfil.</li>
  <li>Na página de perfil, os repositórios são ordenados com o seguinte critério: dos que têm mais estrelas, para os que têm menos estrelas.</li>
  <li>Os nomes dos repositórios são links que levam ao repositório original do GitHub.</li>
  <li>Caso o usuário pesquisado possua um site nas informações de seu perfil, deve haver um link que ao clicar para que abra aquele site. O mesmo deve acontecer caso o usuário pesquisado tenha uma conta no twitter em seu perfil.</li>
  <li>O botão de "Ver Perfil Completo" deve levar para a página do GitHub do usuário.</li>
</ul>

<a id="Dependencias"></a>
## 🧪 Dependencias
> Requisitos para rotar o código.

<ul>
  <li>
    <a href="https://nodejs.org/en">Node</a>
  </li>
  <li>
    <a href="https://www.npmjs.com/">npm</a>
  </li>
  <li>
    <a href="https://www.primefaces.org/primereact-v5/#/">PrimeReact</a>
  </li>
  <li>
    <a href="https://www.typescriptlang.org/">TypeScript</a>
  </li>
  <li>
    <a href="https://vitejs.dev/">ViteJS</a>
  </li>
  <li>
    <a href="https://date-fns.org/">date-fns</a>
  </li>
  <li>
    <a href="https://react.dev/">React</a>
  </li>
</ul>

<a id="Aplicacao"></a>
## 🚀 Aplicação

### Instalação e inicialização do projeto

### ```COMANDOS```

#### Para instalar as dependências
```
 npm install
```

#### Para rodar o projeto
```
 npm run dev
```

#### Para rodar o build
```
 npm run build
```
> Porém, o site já esta com deploy feito na Vercel, basta acessar o link abaixo:
<a href="https://search-devs-steel.vercel.app/">Site Link</a>

<a id="Scripts"></a>
## 📖 Scripts

```JSON
"scripts": {
  "dev": "npm run dev",
   "build": "npm run build",
   "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
   "preview": "vite preview"
}
```

### 📖 Dependencies 

```JSON
"dependencies": {
  "date-fns": "^2.30.0",
  "primeicons": "^6.0.1",
  "primereact": "^9.3.1",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.11.1",
  "react-transition-group": "^4.4.5",
}

```

### 📖 devDependencies

```JSON
"devDependencies": {
  "@types/react": "^18.0.28",
  "@types/react-dom": "^18.0.11",
  "@typescript-eslint/eslint-plugin": "^5.57.1",
  "@typescript-eslint/parser": "^5.57.1",
  "@vitejs/plugin-react": "^4.0.0",
  "eslint": "^8.38.0",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.3.4",
  "typescript": "^5.0.2",
  "vite": "^4.3.2"
}

```

<p align="center">Feito com ❤️ por Davi Teixeira</p>
