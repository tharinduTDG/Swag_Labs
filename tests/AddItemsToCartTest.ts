import { userVariables, Selector } from 'testcafe';
import CartPage from '../pages/CheckoutPage';
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import InformationPage from '../pages/InformationPage';
import CheckoutPage from '../pages/CheckoutPage';
import OverviewPage from '../pages/OverviewPage';
import * as fs from 'fs';




const productId = 3;
const addtoCartItem1 = 0;
const addtoCartItem2 = 1;

// Read the .tetcaferc.js file 
const configFile = fs.readFileSync('./.testcaferc.js', 'utf-8');
const config = eval(configFile);


fixture('Shopping Cart')
    .page(config.baseUrl);
test('Add two items to cart and checkout', async (t) => {
    // Page objects.
    const loginpage = new LoginPage();
    const productsPage = new ProductsPage();
    const checkoutPage = new CheckoutPage();
    const infoPage = new InformationPage();
    const overviewPage = new OverviewPage();

    //Login to the system
    await loginpage.login(config.credentials.username, config.credentials.password);


    //Check the price of product, Sauce Labs Fleece Jacket is $49.99
    const product = await productsPage.getProductDetails(productId);
    await t.expect(product.name).eql('Sauce Labs Fleece Jacket');
    await t.expect(product.price).eql('$49.99');

    //Add two items to the cart
    await productsPage.addToCart(addtoCartItem1, addtoCartItem2);
    await productsPage.selectCart();

    //Verify if the selected items are in the cart
    const checkout = checkoutPage.verifyItemsInCart(addtoCartItem1, addtoCartItem2);
    await t.expect((await checkout).product1).eql('Sauce Labs Backpack')
        .expect((await checkout).product2).eql('Sauce Labs Bolt T-Shirt');
    await checkoutPage.goToCheckout();

    //Provide a random firstname, lastname and a zip code in the next page
    await infoPage.generateInfomation();
    await infoPage.continueOder();
    await overviewPage.finishOder();

});
