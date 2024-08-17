import {test, expect}from'@playwright/test';

import{HomePage} from '../pages/HomePage';
import{LoginPage} from '../pages/LoginPage';

test('Sasomange_loginFunction', async({page})=> {
 const homePage = new HomePage(page);
 const loginPage = new LoginPage(page);

await homePage.goToHomePage();
await homePage.clickLnkUlogujSe();
await expect(page).toHaveURL('https://sasomange.rs/uloguj-se');
await loginPage.login('helena83p@yahoo.com', 'Test1234');
await expect(page).toHaveURL('https://sasomange.rs/');

const isDisplayed = await homePage.isMessageDisplayed();
    console.log('Is message displayed:', isDisplayed); // Debugging output
    expect(isDisplayed).toBe(true);


})


