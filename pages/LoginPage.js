exports.LoginPage=
class LoginPage{

constructor(page){
this.page = page;
this.imejlKorisnickoImeInput ='#gigya-textbox-loginID';
this.passwordInput = '#gigya-textbox-password';
this.eyeIconButton = 'div[id="login-screen"] button[type="submit"]';
this.prijaviSeButton = page.getByRole('button', { name: 'Prijavi se' });
this.msgConfrmLogIn ='#notification_1';
this.msgWrongPassword ='#notification_2';
this.msgImejlPoljeJeObavezno ='//span[@data-bound-to="loginID"][normalize-space()="Ovo polje je obavezno"])[1]';
this.msgLozinkaPoljeJeObavezno ='//span[@data-bound-to="password"][normalize-space()="Ovo polje je obavezno"])[1]';

}

async login(email, password){
await this.page.waitForSelector('#gigya-textbox-loginID');
await this.page.fill('#gigya-textbox-loginID',email);
await this.page.locator(this.passwordInput).fill(password);
await this.prijaviSeButton.click();

 




}













}