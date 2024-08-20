import { setTimeout } from "timers/promises";

export class O_OglasuPage {


    constructor(page) {

        this.page = page;
        this.step2Element = page.getByRole('button', { name: 'O oglasu' })
        this.dodajFotografiju = page.locator('.input-photo-label')

        this.textMarkaAutomobila = page.locator('div[class="narrow half-column"] p[class="field-title"]')
        this.dpmMarkaAutomobila = page.locator('//div[@class="narrow half-column"]//section[@class="single-dropdown"]//div//p[@class="selected-options"]');
        this.optionBmW = page.getByText('BMW')
        this.dpmModelAutomobila = page.locator('//div[@data-attribute-type="dropDownSingleSelectOrFreeText"]//section[@class="single-dropdown"]//div//span[@class="placeholder"][normalize-space()="Odaberi"]')
        this.optionX5 = page.getByText('X5')
        this.dpmGorivo = page.locator('section').filter({ hasText: /^OdaberiBenzinDizelHibridni pogonNema rezultata pretrage$/ }).getByRole('paragraph')
        this.optionGorivo = page.getByText('Benzin')
        this.dpmKaroserija = page.locator('section').filter({ hasText: /^OdaberiDžip\/SUVNema rezultata pretrage$/ }).getByRole('paragraph')
        this.optionSuv = page.getByText('Džip/SUV', { exact: true })
        this.barCodeCloseBtn = page.locator('//span[@class="icon-close absolute right-0 top-0 cursor-pointer p-4"] [1]')
        this.dpmBrojVrata = page.locator('section').filter({ hasText: /^Odaberi4\/5Nema rezultata pretrage$/ }).getByRole('paragraph')
        this.optionVrata = page.getByText('4/5')
        this.dpmGodinaProizvodnje = page.locator('div:nth-child(6) > .single-dropdown > div > .selected-options').first()
        this.optionGodina = page.locator('//span[@class="name"][normalize-space()="2020"]')

        this.dpmTip = page.locator('.full-column > .single-dropdown > div > .selected-options > .dropdown-arrow')
        this.optionTip = page.getByText('4.4 XDRIVEM50I A, 390kW/530KS')
        this.kapacitetBaterije = page.getByPlaceholder('Unesi (kWh)')
        this.predjeniKilometri = page.locator('div').filter({ hasText: /^Pređeni kilometri \(km\)$/ }).getByPlaceholder('Unesi')

        this.menuEkoloskaKategorija = "body > div:nth-child(3) > main:nth-child(4) > astro-island:nth-child(5) > section:nth-child(1) > div:nth-child(3) > section:nth-child(1) > form:nth-child(1) > section:nth-child(2) > section:nth-child(3) > section:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(6) > section:nth-child(2) > div:nth-child(1) > p:nth-child(1)";
        this.euro2 = "#info-about-product > section:nth-child(2) > section.dynamic-configuration > section:nth-child(2) > section > div.section-content-wrapper.two-columns > div:nth-child(6) > section > section > div > ul > li:nth-child(2) > label > span.checkbox-sign.round-checkbox-sign";
        this.menuRegistrovan = "body > div:nth-child(3) > main:nth-child(4) > astro-island:nth-child(5) > section:nth-child(1) > div:nth-child(3) > section:nth-child(1) > form:nth-child(1) > section:nth-child(2) > section:nth-child(3) > section:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(14) > section:nth-child(2) > div:nth-child(1) > p:nth-child(1)";
        this.option2025 = "#info-about-product > section:nth-child(2) > section.dynamic-configuration > section:nth-child(2) > section > div.section-content-wrapper.two-columns > div:nth-child(14) > section > section > div > ul > li:nth-child(2) > label > span.checkbox-sign.round-checkbox-sign";
        this.nazivOglasa = 'input[placeholder="Unesi naziv oglasa"]'
        this.tekstOglasa = '#rich-text-editor > div.ql-editor.ql-blank';
        this.inputCena = 'input[placeholder="Unesi cenu (EUR)"]';
        this.buttonNastavi1 = 'button[class="btn btn--type-primary step-next"]';
    }


    async clickBarCodeCloseBtn() {
        await this.barCodeCloseBtn.click();
    }

async uploadPhoto(){
    await this.dodajFotografiju.setInputFiles('C:\\Users\\Lenovo\\Downloads\\Mercedes_Benz_Logo_11.jpg');
}



    async setOpstiPodaciOVoziluSection() {
        await this.dpmMarkaAutomobila.click();
        await this.optionBmW.click();
        await this.dpmModelAutomobila.click();
        await this.optionX5.click();
        await this.dpmGorivo.click();
        await this.optionGorivo.click();
        await this.dpmKaroserija.click();
        await this.optionSuv.click();
        await this.dpmBrojVrata.click();
        await this.optionVrata.click();
        await this.dpmGodinaProizvodnje.click();
        await this.optionGodina.click();
        await this.dpmTip.click();
        await this.optionTip.click();
    }

    async setTehnickeKarakteristikeVozilaSection() {
        await this.kapacitetBaterije.click();
        await this.kapacitetBaterije.fill('250');
        await this.predjeniKilometri.fill('250000');
        await this.page.locator(this.menuEkoloskaKategorija).click();
        await this.page.locator(this.euro2).click();
        await this.page.locator(this.menuRegistrovan).click();
        await this.page.locator(this.option2025).click();
        await this.page.locator(this.tekstOglasa).type('ABCDEFGabcdefg123456!"#$%&/()=?*');//provera svih karaktera
        await this.page.locator(this.inputCena).type("35000");
        await this.page.locator(this.buttonNastavi1).click({ timeout: 60000 });

    }






}