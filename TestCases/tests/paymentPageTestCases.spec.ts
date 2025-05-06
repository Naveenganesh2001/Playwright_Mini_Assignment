import {test} from './myfixtures';


test('Test Case 1 - Payment Page Title', async ({ todoPage }) => {

    await todoPage.goToWebsite('http://127.0.0.1:5500/paymentPage.html');

    await todoPage.isUserIsOnPaymentPage();

    await todoPage.toHaveTitle("Payment Page");

});


test('Test Case 2 - Heading', async ({ todoPage }) => {

    await todoPage.goToWebsite('http://127.0.0.1:5500/paymentPage.html');

    await todoPage.isUserIsOnPaymentPage();

    await todoPage.toHaveHeading('Payment Page');

});


test('Test Case 3 - Gift Wrap Price', async ({ todoPage }) => {

    await todoPage.goToWebsite('http://127.0.0.1:5500/homePage.html');

    await todoPage.isUserIsOnHomePage();

    await todoPage.clickOnAddToCartButton();

    await todoPage.clickOnMenuButton();

    await todoPage.clickOnCartLink();

    await todoPage.isUserIsOnCartPage();

    await todoPage.checkProductsInTheCart();

    await todoPage.clickOnCheckoutButton();

    await todoPage.toHaveURL('http://127.0.0.1:5500/checkoutPage.html');

    await todoPage.clickOnConfirmAndPayButton();

    await todoPage.isUserIsOnPaymentPage();

    await todoPage.userSelectsGiftWrapOption();

});


test ('Test Case 4 - Confirm Order Message', async ({ todoPage }) => {
    
    await todoPage.goToWebsite('http://127.0.0.1:5500/homePage.html');

    await todoPage.isUserIsOnHomePage();

    await todoPage.clickOnAddToCartButton();

    await todoPage.clickOnMenuButton();

    await todoPage.clickOnCartLink();

    await todoPage.isUserIsOnCartPage();

    await todoPage.checkProductsInTheCart();

    await todoPage.clickOnCheckoutButton();

    await todoPage.toHaveURL('http://127.0.0.1:5500/checkoutPage.html');

    await todoPage.clickOnConfirmAndPayButton();

    await todoPage.isUserIsOnPaymentPage();

    await todoPage.clickOnConfirmOrderButton();

    await todoPage.printSuccessMessage();

});


test ('Test Case 5 - Redirect to Home page', async ({ todoPage }) => {
    
    await todoPage.goToWebsite('http://127.0.0.1:5500/homePage.html');

    await todoPage.isUserIsOnHomePage();

    await todoPage.clickOnAddToCartButton();

    await todoPage.clickOnMenuButton();

    await todoPage.clickOnCartLink();

    await todoPage.isUserIsOnCartPage();

    await todoPage.checkProductsInTheCart();

    await todoPage.clickOnCheckoutButton();

    await todoPage.toHaveURL('http://127.0.0.1:5500/checkoutPage.html');

    await todoPage.clickOnConfirmAndPayButton();

    await todoPage.isUserIsOnPaymentPage();

    await todoPage.userSelectsGiftWrapOption();

    await todoPage.clickOnConfirmOrderButton();

    await todoPage.printSuccessMessage();

    await todoPage.clickOnGoToHomeButton();

    await todoPage.isUserIsOnHomePage();
    
});




