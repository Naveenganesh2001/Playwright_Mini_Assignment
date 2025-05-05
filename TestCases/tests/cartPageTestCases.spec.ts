import {test} from './myfixtures';


test('Test Case 1 - Cart Page Title', async ({ todoPage }) => {

    await todoPage.goToWebsite('http://127.0.0.1:5500/cartPage.html');

    await todoPage.isUserIsOnCartPage();

    await todoPage.toHaveTitle("Cart Page");
});


test('Test Case 2 - Heading', async ({ todoPage }) => {

    await todoPage.goToWebsite('http://127.0.0.1:5500/cartPage.html');

    await todoPage.isUserIsOnCartPage();

    await todoPage.toHaveHeading('Your Cart');
});


test('Test Case 3 - Add the Products to the Cart', async ({ todoPage }) => {

    await todoPage.goToWebsite('http://127.0.0.1:5500/homePage.html');

    await todoPage.isUserIsOnHomePage();

    await todoPage.clickOnAddToCartButton();

    await todoPage.clickOnMenuButton();

    await todoPage.clickOnCartLink();

    await todoPage.isUserIsOnCartPage();

    await todoPage.checkProductsInTheCart();
});


test('Test Case 4 - Remove the Products from the Cart', async ({ todoPage }) => {

    await todoPage.goToWebsite('http://127.0.0.1:5500/homePage.html');

    await todoPage.isUserIsOnHomePage();

    await todoPage.clickOnAddToCartButton();

    await todoPage.clickOnMenuButton();

    await todoPage.clickOnCartLink();

    await todoPage.isUserIsOnCartPage();

    await todoPage.checkProductsInTheCart();

    await todoPage.clickOnRemoveFromCartButton();

});


test('Test Case 5 - Checkout Link', async ({ todoPage }) => {

    await todoPage.goToWebsite('http://127.0.0.1:5500/homePage.html');

    await todoPage.isUserIsOnHomePage();

    await todoPage.clickOnAddToCartButton();

    await todoPage.clickOnMenuButton();

    await todoPage.clickOnCartLink();

    await todoPage.isUserIsOnCartPage();

    await todoPage.checkProductsInTheCart();

    await todoPage.clickOnCheckoutButton();

    await todoPage.toHaveURL('http://127.0.0.1:5500/checkoutPage.html');

});