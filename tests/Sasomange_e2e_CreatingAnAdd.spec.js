import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { IzborKategorijePage } from '../pages/IzborKategorijePage';
import { HomePage } from '../pages/HomePage';
import { O_OglasuPage } from '../pages/O_OglasuPage';
import { O_OglasivacuPage } from '../pages/O_oglasivacuPage';



test('Sasomange_e2e_Creating an add filling mandatory fields.spec.js', async ({ browser }) => {
  
  const context = await browser.newContext();
  const page = await context.newPage();

  test.setTimeout(5 * 60 * 1000);
  const loginPage = new LoginPage(page);
  const izborKategorijepage = new IzborKategorijePage(page);
  const homePage = new HomePage(page);
  const o_OglasuPage = new O_OglasuPage(page);
  const o_OglasivacuPage = new O_OglasivacuPage(page);

  await homePage.goToHomePage();
  await homePage.clickLnkUlogujSe();
  await expect(page).toHaveURL('https://sasomange.rs/uloguj-se');
  await loginPage.login('hpapantidis@gmail.com', 'Test1234');
  await homePage.clickBtnDodajOglas();
  await expect(page).toHaveURL('https://sasomange.rs/moj-sasomange/dodaj-oglas');

  const step1CrumbIsActive = await izborKategorijepage.step1Element.getAttribute('class');
  expect(step1CrumbIsActive).not.toContain('disabled');

  await izborKategorijepage.setMenuRucnaKategorija();
  await izborKategorijepage.clickNastaviButton();

  const step2CrumbIsActive = await o_OglasuPage.step2Element.getAttribute('class');
  expect(step2CrumbIsActive).not.toContain('disabled');

  await o_OglasuPage.clickBarCodeCloseBtn();
  await o_OglasuPage.uploadPhoto();
  const successMessage = page.locator('.input-photo-label');
  await expect(successMessage).toBeVisible();
  await o_OglasuPage.setOpstiPodaciOVoziluSection();
  await o_OglasuPage.setTehnickeKarakteristikeVozilaSection();


  const predjeniKilometriLocator = await o_OglasuPage.predjeniKilometri;//provera upisa za kilometre
  const predjeniKilometriValue = await predjeniKilometriLocator.getAttribute('value');
  expect(predjeniKilometriValue).toBe('250000');
  await expect(page.locator('input[placeholder="Unesi cenu (EUR)"]')).toHaveAttribute('value', '35000');//provera da li je cena upisana
  await expect(page.locator('.ql-editor')).toContainText('ABCDEFGabcdefg123456!"#$%&/()=?*');//provera upisa svih karaktera
  await expect(page.locator('input[placeholder="Unesi cenu (EUR)"]')).toHaveAttribute('value', '35000');//provera upisa cene


  const step3CrumbIsActive = await o_OglasivacuPage.step3Element.getAttribute('class');
  expect(step3CrumbIsActive).not.toContain('disabled');

  const imejlOglasivacaIsVisible = await o_OglasivacuPage.imejlOglasivaca;
  await expect(imejlOglasivacaIsVisible).toBeVisible();

  await o_OglasivacuPage.clickSacuvajOglas();
  await expect(async () => {

    const isSuccessMessageVisible = await o_OglasivacuPage.isMessageSuccessDisplayed();
    expect(isSuccessMessageVisible).toBe(true);

  }).toPass()








});











