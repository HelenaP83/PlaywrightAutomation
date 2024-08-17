exports.IzborKategorijePage=
class IzborKategorijePage{

constructor(page){

this.page = page;
this.step1Element = page.getByRole('button',{name: 'Izbor kategorije'});
this.nastaviButton = page.locator('button', { name: 'Nastavi' });
this.vozilaCategory = page.locator('#page-wrap').getByText('Vozila');
this.subcategoryAutomobili = page.getByText('Automobili', { exact: true });
this.subcategoryPolovniAutomobili = page.getByText('Polovni automobili', { exact: true });
this.nastaviButton = page.getByRole('button', { name: 'Nastavi' });
this.barcodeAppBtnClose = page.locator('section').filter({ hasText: 'Sasomange.rs aplikacija' }).locator('span');

}

async setMenuRucnaKategorija(){
await this.vozilaCategory.click();
await this.page.waitForTimeout(1000);
await this.subcategoryAutomobili.click();
await this.subcategoryPolovniAutomobili.click();
}   

async clickOnBarcodeApp_closeBtn(){
    await this.barcodeAppBtnClose.click();
}
async clickNastaviButton(){
     await this.nastaviButton.click();
}













}
