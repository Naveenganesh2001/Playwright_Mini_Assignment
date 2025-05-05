import {test} from './myfixtures';


test('Test Case 1 - Home Page Title', async ({ todoPage }) => {

    await todoPage.goToWebsite('http://127.0.0.1:5500/HomePage.html');

    await todoPage.isUserIsOnHomePage();

    await todoPage.toHaveTitle("Home Page");
});


test('Test Case 2 - Heading', async ({ todoPage }) => {

    await todoPage.goToWebsite('http://127.0.0.1:5500/HomePage.html');

    await todoPage.isUserIsOnHomePage();

    await todoPage.toHaveHeading('Welcome to the Home Page!');
});


test('Test Case 3 - Profile link', async ({ todoPage }) => {

    await todoPage.goToWebsite('http://127.0.0.1:5500/HomePage.html');

    await todoPage.isUserIsOnHomePage();

    await todoPage.clickOnMenuButton();

    await todoPage.clickOnProfileLink();

    await todoPage.toHaveURL('http://127.0.0.1:5500/profilePage.html');

});


test('Test Case 4 - Cart link', async ({ todoPage }) => {

    await todoPage.goToWebsite('http://127.0.0.1:5500/HomePage.html');

    await todoPage.isUserIsOnHomePage();

    await todoPage.clickOnMenuButton();

    await todoPage.clickOnCartLink();

    await todoPage.toHaveURL('http://127.0.0.1:5500/cartPage.html');

});


test('Test Case 5 - Logout link', async ({ todoPage }) => {

    await todoPage.goToWebsite('http://127.0.0.1:5500/HomePage.html');

    await todoPage.isUserIsOnHomePage();

    await todoPage.clickOnMenuButton();

    await todoPage.clickOnLogoutLink();

    await todoPage.toHaveURL('http://127.0.0.1:5500/loginPage.html');

});


test('Test Case 6 - Print All Products Title', async ({ todoPage }) => {
    
    await todoPage.goToWebsite('http://127.0.0.1:5500/HomePage.html');

    await todoPage.isUserIsOnHomePage();

    await todoPage.printProductsTitle();
});