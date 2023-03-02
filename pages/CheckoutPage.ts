import { Selector, t } from 'testcafe';

export default class CheckoutPage {
  public readonly cartItemNames: Selector;
  public readonly checkoutButton: Selector;


  constructor() {
    this.cartItemNames = Selector('.inventory_item_name');
    this.checkoutButton = Selector('.btn_action.checkout_button');
  }

  //Get the name of two products which are available in the cart
  public async verifyItemsInCart(firstProd: number, secondProd: number): Promise<{ product1: string; product2: string }> {
    const firstProductInCart = Selector('.cart_item').nth(firstProd).find('.inventory_item_name').innerText;
    const secondProductInCart = Selector('.cart_item').nth(secondProd).find('.inventory_item_name').innerText;
    return { product1: await firstProductInCart, product2: await secondProductInCart };

  }


  //Click checkout button
  public async goToCheckout(): Promise<void> {
    await t.click(this.checkoutButton);


  }
}
