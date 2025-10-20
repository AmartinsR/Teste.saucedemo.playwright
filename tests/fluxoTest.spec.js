//Classe de estrututa dos testes cada chamada

const { test, expect } = require('@playwright/test');
const RealizaLoginPage = require('../pages/RealizaLoginPage');
const EscolhaProductsPage = require('../pages/EscolhaProductsPage');
const DetalhesDoProdutoPage = require('../pages/DetalhesDoProdutoPage');
const ConfirmacaoValidacaoPage = require('../pages/ConfirmacaoValidacaoPage');
const CadastroEfetivacaoPage = require('../pages/CadastroEfetivacaoPage');

test('Fluxo completo de compra no SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const loginPage = new RealizaLoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');

  const productsPage = new EscolhaProductsPage(page);
  await productsPage.selectFirstProduct();

  const productDetailsPage = new DetalhesDoProdutoPage(page);
  await productDetailsPage.addToCart();

  const cartPage = new ConfirmacaoValidacaoPage(page);
  await cartPage.goToCart();
  await cartPage.proceedToCheckout();

  const checkoutPage = new CadastroEfetivacaoPage(page);
  await checkoutPage.fillCheckoutForm('Amanda', 'Martins', '00012345');

  expect(await checkoutPage.isOrderComplete()).toBeTruthy();
});