
# POC de Automação com Playwright - SauceDemo

## Requisitos
- Baixar Node.js
- Playwright


## Instalação dependências
```bash
npm init -y
npm install -D @playwright/test
npx playwright install
```

## Execução dos Testes
```bash
npx playwright test
npx playwright test --headed --debug (para visualizar em tempo real) abrira a interface do playwright e o site a ser testado
```

## Estrutura
- Arquitetura Page Object Model (POM)
- Teste completo do fluxo de compra
- Teste desenvolvido no Intelijj (idé)
- Classe .package-lock.json - Gerencia as dependências
- Classe: fluxoTest.spec.js - Com o fluxo dos testes 

## Credenciais
- Usuário: `standard_user`
- Senha: `secret_sauce`

##Massa
- 'Amanda', 'Martins', '00012345'

## Decisões
- Produto selecionado: primeiro da lista
- Dados de checkout: preenchidos com dados fictícios
