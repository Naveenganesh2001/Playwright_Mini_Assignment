/*import {test} from './myfixtures';


test('Test Case 1 - Login page Title', async ({ todoPage }) => {

  await todoPage.goToWebsite('http://127.0.0.1:5500/LoginPage.html');

  await todoPage.isUserIsOnLoginPage();
  
  await todoPage.toHaveTitle("Login Page");
    
});


test('Test Case 2 - Heading', async ({ todoPage }) => {

  await todoPage.goToWebsite('http://127.0.0.1:5500/LoginPage.html');

  await todoPage.isUserIsOnLoginPage();

  await todoPage.toHaveHeading('Login Page');

});


test('Test Case 3 - Invalid Email ID', async ({ todoPage }) => {

  await todoPage.goToWebsite('http://127.0.0.1:5500/LoginPage.html');

  await todoPage.isUserIsOnLoginPage();

  await todoPage.enterEmailID("Naveen");

  await todoPage.enterPassword("Naveen123");

  await todoPage.clickLoginButton();

  await todoPage.displayErrorMessage1();

});


test('Test Case 4 - Invalid Password', async ({ todoPage }) => {

  await todoPage.goToWebsite('http://127.0.0.1:5500/LoginPage.html');

  await todoPage.isUserIsOnLoginPage();

  await todoPage.enterEmailID("naveen@gmail.com");

  await todoPage.enterPassword("naveen");

  await todoPage.clickLoginButton();

  await todoPage.displayErrorMessage2();

});


test('Test Case 5 - Valid Credentials', async ({ todoPage }) => {

  await todoPage.goToWebsite('http://127.0.0.1:5500/LoginPage.html');

  await todoPage.isUserIsOnLoginPage();

  await todoPage.enterEmailID("naveen@gmail.com");

  await todoPage.enterPassword("Naveen123");

  await todoPage.clickLoginButton();

  await todoPage.toHaveURL('http://127.0.0.1:5500/HomePage.html');

});*/
