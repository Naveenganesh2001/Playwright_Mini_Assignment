import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

  await page.goto('http://127.0.0.1:5500/LoginPage.html');

  await expect(page).toHaveTitle(/Login Page/);
});


test('has h2', async ({ page }) => {

  await page.goto('http://127.0.0.1:5500/LoginPage.html');

  await expect(page.locator('h2')).toHaveText('Login Page');

});



test('Invalid Email ID ', async ({ page }) => {

  await page.goto('http://127.0.0.1:5500/LoginPage.html');

  await page.locator("#username").fill("naveen");

  await page.locator("#password").fill("naveen123");

  await page.locator('//button[@type="submit"]').click();

  const errorMessage = await page.locator('(//div[@class="invalid-feedback"])[1]').textContent();

  await console.log(errorMessage);

 });


 test('Invalid Password ', async ({ page }) => {

  await page.goto('http://127.0.0.1:5500/LoginPage.html');

  await page.locator("#username").fill("naveen@gmail.com");

  await page.locator("#password").fill("naveen");

  await page.locator('//button[@type="submit"]').click();

  const errorMessage = await page.locator('(//div[@class="invalid-feedback"])[2]').textContent();

  await console.log(errorMessage);

 });


test('Valid Login', async ({ page }) => {

  await page.goto('http://127.0.0.1:5500/LoginPage.html');

  await page.locator("#username").fill("Naveen@gmail.com");

  await page.locator("#password").fill("Naveen123");

  await page.locator('//button[@type="submit"]').click();

  await expect(page).toHaveURL('http://127.0.0.1:5500/HomePage.html');

});

