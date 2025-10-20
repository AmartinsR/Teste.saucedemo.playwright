
class CadastroEfetivacaoPage {

constructor(page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.confirmationMessage = page.locator('.complete-header');
  }

  async fillCheckoutForm(first, last, zip) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);
    await this.continueButton.click();
    await this.finishButton.click();
  }

  async isOrderComplete() {
    await this.confirmationMessage.waitFor();
    const text = await this.confirmationMessage.textContent();
    return text.includes('Thank you for your order');
  }
}

module.exports = CadastroEfetivacaoPage;
