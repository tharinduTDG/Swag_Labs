import { Selector, t } from 'testcafe';

export default class CheckoutPage {
  public readonly cartItemNames: Selector;
  public readonly checkoutButton: Selector;


  constructor() {
    this.cartItemNames = Selector('.inventory_item_name');
    this.checkoutButton = Selector('.btn_action.checkout_button');
  }

  //Verify if the selected items are in the cart.
  public async verifyItemsInCart(firstProd: number, secondProd: number): Promise<void> {
    const firstProductInCart = Selector('.cart_item').nth(firstProd).find('.inventory_item_name').innerText;
    const secondProductInCart = Selector('.cart_item').nth(secondProd).find('.inventory_item_name').innerText;
    await t.expect(firstProductInCart).eql('Sauce Labs Backpack')
      .expect(secondProductInCart).eql('Sauce Labs Bolt T-Shirt');

  }


  //Click checkout button
  public async goToCheckout(): Promise<void> {
    await t.click(this.checkoutButton);


  }
}
