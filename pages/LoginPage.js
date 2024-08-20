exports.LoginPage =
    class LoginPage {


        constructor(page) {
            this.page = page;
            this.imejlKorisnickoImeInput = '#gigya-textbox-loginID';
            this.passwordInput = '#gigya-textbox-password';
            this.eyeIconButton = 'div[id="login-screen"] button[type="submit"]';
            this.prijaviSeButton = page.getByRole('button', { name: 'Prijavi se' });
            this.msgConfrmLogIn = '#notification_1';
            this.msgError = this.page.locator('#notification_1');
            this.msgImejlPoljeJeObavezno = '//span[@data-bound-to="loginID"][normalize-space()="Ovo polje je obavezno"])[1]';
            this.msgLozinkaPoljeJeObavezno = '//span[@data-bound-to="password"][normalize-space()="Ovo polje je obavezno"])[1]';

        }

        async login(email, password) {
            await this.page.waitForSelector('#gigya-textbox-loginID');
            await this.page.fill('#gigya-textbox-loginID', email);
            await this.page.locator(this.passwordInput).fill(password);
            await this.prijaviSeButton.click();
        }

        async isMessageErrorDisplayed() {
            const message = this.page.locator('#notification_1 ')
            await message.waitFor({ state: 'visible', timeout: 8000 });
            return await message.isVisible()
        }

        async getErrorMessageText() {
            const message = this.page.locator('#notification_1');
            await message.waitFor({ state: 'visible', timeout: 8000 });
            return await message.textContent();


        }













    }