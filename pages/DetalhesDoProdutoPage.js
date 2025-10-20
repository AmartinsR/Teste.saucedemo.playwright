
class DetalhesDoProdutoPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.inventory_details_name');
    this.description = page.locator('.inventory_details_desc');
    this.price = page.locator('.inventory_details_price');
    this.addToCartButton = page.locator('button[id^="add-to-cart"]');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}
module.exports = DetalhesDoProdutoPage;
