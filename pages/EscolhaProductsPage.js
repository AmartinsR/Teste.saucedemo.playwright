
class EscolhaProductsPage {
  constructor(page) {

this.page = page;
    this.productItem = page.locator('.inventory_item').first();
    this.productTitle = this.productItem.locator('.inventory_item_name');
    this.productPrice = this.productItem.locator('.inventory_item_price');

    this.productLink = this.productItem.locator('[data-test="item-4-title-link"]');
  }

  async selectFirstProduct() {
    await this.productLink.click();
  }
}

module.exports = EscolhaProductsPage;

