import { Selector, t } from 'testcafe';

export default class ProductsPage {
  public readonly cartButton: Selector;
  private readonly productDescription: Selector = Selector('.inventory_item_description');



  constructor() {
    this.cartButton = Selector('.shopping_cart_link');
  }

  // //Check the price of product, Sauce Labs Fleece Jacket is $49.99
  // public async verifyPriceWithProduct(prodNum: number, prodName: string, prodPrice: string): Promise<void> {
  //   const productFleeceJacket = Selector('.inventory_item_description').nth(prodNum).find('.inventory_item_name').innerText;
  //   const priceFleeceJacket = Selector('.inventory_item_description').nth(prodNum).find('.inventory_item_price').innerText;
  //   await t.expect(productFleeceJacket).eql(prodName)
  //   await t.expect(priceFleeceJacket).eql(prodPrice)

  // }

  //Add any two products into the cart 
  public async addToCart(item1: number, item2: number): Promise<void> {
    const addToCartButtons = Selector('.btn_primary.btn_inventory');
    await t.click(addToCartButtons.nth(item1)).click(addToCartButtons.nth(item2));
  }

  //Click cart icon in the top
  public async selectCart(): Promise<void> {
    await t.click(this.cartButton);
  }

  //Get the product name and price based on the index
  public async getProductDetails(index: number): Promise<{ name: string; price: string }> {
    const product = this.productDescription.nth(index);
    const name = await product.find('.inventory_item_name').innerText;
    const price = await product.find('.inventory_item_price').innerText;
    return { name, price };
  }
}
