
class CheckoutCompraPage {
  constructor(page) {
    this.page = page;
    this.completeHeader = page.locator('.complete-header');
  }

  async isOrderComplete() {
    return await this.completeHeader.isVisible();
  }
}
module.exports = CheckoutCompraPage;
