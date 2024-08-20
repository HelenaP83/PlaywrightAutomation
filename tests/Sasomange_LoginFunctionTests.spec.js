import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'



const logindata = require('../testData/loginData.json');

test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await homePage.goToHomePage();
    await homePage.clickLnkUlogujSe();

});

test.afterEach(async ({ context }) => {
    await context.clearCookies();
});

test(`Login test with valid username`, async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const { email, password } = logindata.ValidSetdata[0];
    console.log('Email:', email);
    console.log('Password:', password);
    await loginPage.login(email, password);
    await expect(page).toHaveURL('https://sasomange.rs/');

    const isSuccessMsgDisplayed = await homePage.isMessageDisplayed();
    console.log('Is message displayed:', isSuccessMsgDisplayed); // Debugging output
    expect.soft(isSuccessMsgDisplayed).toBe(true);

});




test(`Login test with invalid mail: `, async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    for (const { email, password } of logindata.InvalidMailData) {
        console.log('Testing with:', email, password);
        await loginPage.login(email, password);
        await expect.soft(page).not.toHaveURL('https://sasomange.rs/');

        if (page.url() !== 'https://sasomange.rs/') {
            console.log('Test passed: Not on home page');
        } else {
            console.log('Test failed: Navigated to home page');
        }

        const isErrorMsgDisplayed = await loginPage.isMessageErrorDisplayed();
        console.log('Is message displayed:', isErrorMsgDisplayed); 
        expect.soft(isErrorMsgDisplayed).toBe(true);

        const errorMessageText = await loginPage.getErrorMessageText();
        expect.soft(errorMessageText).toContain('Pogrešan imejl ili lozinka');


    }

});

test(`Login test with invalid password: `, async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    for (const { email, password } of logindata.InvalidPasswordData) {
        console.log('Testing with:', email, password);
        await loginPage.login(email, password);
        await expect.soft(page).not.toHaveURL('https://sasomange.rs/');

        if (page.url() !== 'https://sasomange.rs/') {
            console.log('Test passed: Not on home page');
        } else {
            console.log('Test failed: Navigated to home page');
        }

        const isErrorMsgDisplayed = await loginPage.isMessageErrorDisplayed();
        console.log('Is message displayed:', isErrorMsgDisplayed); // Debugging output
        expect.soft(isErrorMsgDisplayed).toBe(true);

        const errorMessageText = await loginPage.getErrorMessageText();
        expect.soft(errorMessageText).toContain('Pogrešan imejl ili lozinka');


    }







});