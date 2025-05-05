import {test} from './myfixtures';


test('Test Case 1 - Profile Page Title', async ({ todoPage }) => {

    await todoPage.goToWebsite('http://127.0.0.1:5500/profilePage.html');

    await todoPage.isUserIsOnProfilePage();

    await todoPage.toHaveTitle("Profile Page");

});


test('Test Case 2 - Heading', async ({ todoPage }) => {

    await todoPage.goToWebsite('http://127.0.0.1:5500/profilePage.html');

    await todoPage.isUserIsOnProfilePage();

    await todoPage.toHaveHeading('Update Profile');
});


test('Test Case 3 - Edit The Profile', async ({ todoPage }) => {

    await todoPage.goToWebsite('http://127.0.0.1:5500/profilePage.html');

    await todoPage.isUserIsOnProfilePage();

    await todoPage.enterUserDetails("Naveen", 23, 7094373317, "358, Sukravarpet Street, Coimbatore-641001");

    await todoPage.clickSubmitButton();

});