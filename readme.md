# Configurando o Jest

## Inicie um projeto do Node.js

Vá até o diretório raiz e digite o comando:

bash
npm init -y


Instale o pacote `cross-env`:

bash
npm install cross-env


Agora instale a ferrament de testes _Jest_, em **ambiente de desenvolvimento**...

bash
npm install jest --save-dev


... e, em seguida, gere o arquivo de configuração do Jest:

bash
npx jest --init


## Configurando o arquivo `package.json`

Abra o arquivo `package.json` e altere/adicione as linhas conforme destacado a seguir:

json
{
  ...
  "scripts": {
    "test": "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest --runInBand --config ./jest.config.js",
    "test:watch": "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest --runInBand --config ./jest.config.js --watch"
  },
  ...,
  "type": "module",
  "devDependencies": {
    "jest": "^29.7.0"
  },
  "dependencies": {
    "cross-env": "^7.0.3"
  }
}


## Executando os testes

Após realizar todas as configurações, experimente executar os testes disponíveis na pasta:

bash
npm test


Ou, para executar um arquivo de teste específico:

bash
npm test example.test.js


Para que o Jest permaneça _monitorando_ as alterações nos arquivos de teste, execute os comandos abaixo:

bash
npm test:watch                  # monitora todos os testes existentes
npm test:watch example.test.js  # monitora arquivo(s) de teste específico(s)


---
# Referências

## Jest
- [ECMAScript Modules](https://jestjs.io/docs/ecmascript-modules)
- [Mastering Jest Config for your JavaScript projects](https://phillcode.io/jest-config)

## Node.js
- [NPM - cross-env](https://www.npmjs.com/package/cross-env)
- ['NODE_OPTIONS' is not recognized as an internal or external command (Stack Overflow)](https://stackoverflow.com/questions/53948521/node-options-is-not-recognized-as-an-internal-or-external-command)

---
[Mark Down - Sintaxe Básica](https://www.markdownguide.org/basic-syntax/)