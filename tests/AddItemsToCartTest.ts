import { userVariables } from 'testcafe';
import CartPage from '../pages/CheckoutPage';
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import InformationPage from '../pages/InformationPage';
import CheckoutPage from '../pages/CheckoutPage';
import OverviewPage from '../pages/OverviewPage';

//Declared variables.
const username = 'performance_glitch_user';
const password = 'secret_sauce';
const product  = 'Sauce Labs Fleece Jacket';
const productPrice = '$49.99';
const productId = 3;
const addtoCartItem1 = 0;
const addtoCartItem2 = 1;



fixture('Shopping Cart')
    .page('https://www.saucedemo.com/');
test('Add two items to cart and checkout', async (t) => {
    // Page objects.
    const loginpage = new LoginPage();
    const productsPage = new ProductsPage();
    const checkoutPage = new CheckoutPage();
    const infoPage = new InformationPage();
    const overviewPage = new OverviewPage();

    await loginpage.login(username, password);
    await productsPage.verifyPriceWithProduct(productId,product,productPrice);
    await productsPage.addToCart(addtoCartItem1,addtoCartItem2);
    await productsPage.selectCart();
    await checkoutPage.verifyItemsInCart(addtoCartItem1,addtoCartItem2);
    await checkoutPage.goToCheckout();
    await infoPage.generateInfomation();
    await infoPage.continueOder();
    await overviewPage.finishOder();

});
