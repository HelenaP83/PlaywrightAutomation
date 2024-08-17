exports.HomePage =
class HomePage{

constructor(page){

this.page = page;
this.lnkRegistracija ='a[href="/registracija"]';
this.lnkLUlogujSe ='a[href="/uloguj-se"]';
this.btnDodajOglas ='a[class*="add-btn"]';
this.msgConfirmationSuccess = page.getByRole('heading', { name: 'Uspešna prijava' })
}

async goToHomePage(){
    await this.page.goto('https://sasomange.rs/');
}


async clickLnkUlogujSe(){
await this.page.locator(this.lnkLUlogujSe).click();
}

async clickBtnDodajOglas(){
   await this.page.click('a[class*="add-btn"]');
   
}

async isMessageDisplayed () {
 const message = this.page.getByRole('heading', { name: 'Uspešna prijava' })
 await message.waitFor({ state: 'visible', timeout: 5000 });
return  await message.isVisible()

}

   

}





