export class O_OglasivacuPage {

constructor(page){
this.step3Element = page.getByRole('button',{name: 'O oglašivaču'});
this.informacijeOglasivaca_subtitle = page.getByRole ('p',{name: 'Informacije oglašivača'});
this.imejlOglasivaca = page.getByText('Imejl', { exact: true });
this.sacuvajOglasButton = page.getByRole('button', {name:'Sačuvaj informacije i objavi oglas'});
this.messageSuccess = page.getByRole('heading', { name: 'Čestitamo, tvoj oglas je uspe' });
}

async clickSacuvajOglas(){
 await this.sacuvajOglasButton.click();
}

async getMessageText(){
    const actualMessageText = await this.messageSuccess.textContent();
    return actualMessageText;  // Return the extracted text from message
}

async isMessageSuccessDisplayed() {
    return await this.messageSuccess.isVisible();
}

   
   }


