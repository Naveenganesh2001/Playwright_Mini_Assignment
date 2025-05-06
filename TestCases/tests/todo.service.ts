import {  Locator, Page } from "@playwright/test";
import { expect as playwrightExpect } from "@playwright/test";


export class TodoPage {

    private readonly loginPageElement: Locator;
    private readonly emailID: Locator;
    private readonly password: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage1: Locator;
    private readonly errorMessage2: Locator;

    private readonly homePageElement: Locator;
    private readonly menuButton: Locator;
    private readonly profileLink: Locator;
    private readonly cartLink: Locator;
    private readonly logoutLink: Locator;
    private readonly addToCartButton: Locator;
    private readonly listOfProductsTitle: Locator;

    private readonly cartPageElement: Locator;
    private readonly productChecker: Locator;
    private readonly removeFromCartButton: Locator;

    private readonly checkOutButton: Locator;
    private readonly confirmAndPayButton: Locator;

    private readonly profilePageElement: Locator;
    private readonly name: Locator;
    private readonly age: Locator;  
    private readonly phone: Locator;
    private readonly address: Locator;
    private readonly submitButton: Locator;
    private readonly successMessage: Locator;

    private readonly paymentPageElement: Locator;
    private readonly giftWrapOption: Locator;
    private readonly confirmOrderButton: Locator;
    private readonly orderConfirmationMessage: Locator;
    private readonly goToHomeButton: Locator;
    

    constructor(public readonly page: Page) {

        this.loginPageElement = page.locator('//h2[@class="text-center mb-4"]');
        this.emailID = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.locator('//button[@type="submit"]');
        this.errorMessage1 = page.locator('(//div[@class="invalid-feedback"])[1]');
        this.errorMessage2 = page.locator('(//div[@class="invalid-feedback"])[2]');

        this.homePageElement = page.locator('//div[@class="col-md-8 text-center"]');
        this.menuButton = page.locator('//button[@class="btn btn-primary"]');
        this.profileLink = page.locator('//li[@class="list-group-item"]//a[contains(text(),"Profile")]');
        this.cartLink = page.locator('//li[@class="list-group-item"]//a[contains(text(),"Cart")]');
        this.logoutLink = page.locator('//li[@class="list-group-item"]//a[contains(text(),"Logout")]');
        this.addToCartButton = page.locator('(//button[@class="btn btn-success"])[1]');
        this.listOfProductsTitle = page.locator('//h5[@class="card-title"]');

        this.cartPageElement = page.locator('//div[@class="container mt-5"]');
        this.productChecker = page.locator('#cartMessage');
        this.removeFromCartButton = page.locator('//button[@class="btn btn-danger"]');

        this.checkOutButton = page.locator('#checkoutBtn');
        this.confirmAndPayButton = page.locator('#confirmPayBtn');

        this.profilePageElement = page.locator('#profileForm');
        this.name = page.locator('#name');
        this.age = page.locator('#age');
        this.phone = page.locator('#phone');
        this.address = page.locator('#address');
        this.submitButton = page.locator('//button[@type="submit"]');
        this.successMessage = page.locator('#successMessage');

        this.paymentPageElement = page.locator('//div[@class="container mt-5"]');
        this.giftWrapOption = page.locator('#giftWrap');
        this.confirmOrderButton = page.locator('//button[@class="btn btn-success" and contains(text(),"Confirm Order")]');
        this.orderConfirmationMessage = page.locator('//div[@id="orderSuccessPopup"]//h4');
        this.goToHomeButton = page.locator('//button[@class="btn btn-primary" and contains(text(),"Go to Home")]');
        
    };


    async goToWebsite(url: string) {

        await this.page.goto(url);
    };


    async isUserIsOnLoginPage(){

        const isVisible = await this.loginPageElement.isVisible();

        if (isVisible) {

            console.log("User is on Login page");
        } 
        else {

            console.log("User is not on Login page");
        }
    };


    async toHaveTitle(title: string) {

        const pageTitle = await this.page.title();

        console.log(pageTitle);

        playwrightExpect(pageTitle).toMatch(title);
    };


    async toHaveHeading(heading: string) {

        const headingMessage = await this.page.locator(`//h2[contains(text(), "${heading}")]`).textContent();

        console.log(headingMessage);
        
        if (headingMessage && headingMessage.includes(heading)) {

            console.log("Heading is present on the page");
        } 
        else {

            console.log("Heading is not present on the page");
        }
    };


    async enterEmailID(email: string) {

        await this.emailID.fill(email);

        const emailValue = await this.emailID.inputValue();

        console.log(emailValue);

        playwrightExpect(emailValue).toMatch(email);
    };


    async enterPassword(password: string) {

        await this.password.fill(password);

        const passwordValue = await this.password.inputValue();

        console.log(passwordValue);

        playwrightExpect(passwordValue).toMatch(password);    
    };


    async clickLoginButton() {

        await this.loginButton.click();
    };


    async displayErrorMessage1() {

        const errMsg1 = await this.errorMessage1.textContent();

        console.log(errMsg1);
    };

    
    async displayErrorMessage2() {

        const errMsg2 = await this.errorMessage2.textContent();

        console.log(errMsg2);
    };


    async toHaveURL(url: string) {

        const currentURL = this.page.url();

        console.log(currentURL);

        playwrightExpect(currentURL).toMatch(url);
    };


    async isUserIsOnHomePage() {

        const isVisible = await this.homePageElement.isVisible();

        if (isVisible) {

            console.log("User is on Home page");
        } 
        else {

            console.log("User is not onHome page");
        }
    };


    async clickOnMenuButton() {

        await this.menuButton.click();
    };


    async clickOnProfileLink() {

        await this.profileLink.click();
    };


    async clickOnCartLink() {

        await this.cartLink.click();
    };


    async clickOnLogoutLink() {

        await this.logoutLink.click();

        console.log("User is logged out successfully");

    };


    async isUserIsOnCartPage() {

        const isVisible = await this.cartPageElement.isVisible();

        if (isVisible) {

            console.log("User is on Cart page");
        } 
        else {

            console.log("User is not on Cart page");
        }
    };


    async clickOnAddToCartButton() {

        await this.addToCartButton.click();
    };


    async checkProductsInTheCart() {

        const isVisible = await this.productChecker.isVisible();

        if (isVisible) {

            console.log("Products are not present in the Cart");
        } 
        else {

            console.log("Products are present in the Cart");
        }
    };


    async clickOnRemoveFromCartButton() {

        await this.removeFromCartButton.click();

        const isVisible = await this.productChecker.isVisible();

        if (isVisible) {    

            console.log("Products are not present in the Cart");
        }
        else {

            console.log("Products are present in the Cart");
        }
    };


    async clickOnCheckoutButton() {

        await this.checkOutButton.click();
    };


    async printProductsTitle() {

        const count = await this.listOfProductsTitle.count();
    
        for (let i = 0; i < count; i++) {

            const productTitle = await this.listOfProductsTitle.nth(i).textContent();

            console.log(productTitle?.trim());

        }
    };


    async isUserIsOnProfilePage() {

        const isVisible = await this.profilePageElement.isVisible();

        if (isVisible) {
            console.log("User is on Profile page");
        } else {
            console.log("User is not on Profile page");
        }  

    };


    async enterUserDetails(name: string, age: number, phone: number, address: string) {

        await this.name.fill(name);

        await this.age.fill(age.toString());

        await this.phone.fill(phone.toString());

        await this.address.fill(address);

    };


    async clickSubmitButton() {

        await this.submitButton.click();

        const successMsg = await this.successMessage.textContent();

        console.log(successMsg);
    };


    async clickOnConfirmAndPayButton() {  

        await this.confirmAndPayButton.click();     
    };


    async isUserIsOnPaymentPage() {

        const isVisible = await this.paymentPageElement.isVisible();
        if (isVisible) {

            console.log("User is on Payment page");
        } 
        else {

            console.log("User is not on Payment page");
        }   

    };


    async userSelectsGiftWrapOption() {

        const totalPrice = await this.page.locator('#totalPrice').textContent();

        await this.giftWrapOption.click();

        const isChecked = await this.giftWrapOption.isChecked();

        if (isChecked) {

            console.log("Gift Wrap option is selected");

            console.log("Total Price before Gift Wrap: " + totalPrice);

            const giftWrapTotalPrice = await this.page.locator('#totalPrice').textContent();

            console.log("Total Price after Gift Wrap: " + giftWrapTotalPrice);
        }

        else {

            console.log("Gift Wrap option is not selected");
        }

    };


    async clickOnConfirmOrderButton() {

        await this.confirmOrderButton.click();

    };


    async printSuccessMessage() {

        const successMsg = await this.orderConfirmationMessage.textContent();

        console.log(successMsg);
       
    };


    async clickOnGoToHomeButton() {

        await this.goToHomeButton.click();

    };


}


