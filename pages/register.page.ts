import { Locator, Page } from "@playwright/test";

export class RegisterPage{
    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly confirmPasswordField: Locator;
    readonly buttonNext: Locator;
    readonly fullName: Locator;
    //readonly country: Locator;
    readonly phoneNumber: Locator;
    readonly companyName: Locator;
    readonly selectOptionIndustry: Locator;
    readonly selectOptionCompanySize: Locator;
    readonly buttonCreateAccount: Locator;


    constructor(page: Page){
        this.page=page
        this.emailField=page.locator('#email')
        this.passwordField=page.getByRole('textbox', { name: 'Password',exact: true })
        this.confirmPasswordField=page.getByRole('textbox', { name: 'Confirm Password' })
        this.buttonNext=page.getByRole('button', { name: 'Next' })
        this.fullName=page.getByRole('textbox', { name: 'Full Name' })
        //this.country=page.getByRole('combobox', { name: 'Country' })
        this.phoneNumber=page.getByRole('textbox', { name: 'Phone Number' })
        this.companyName=page.getByRole('textbox', { name: 'Company Name' })
        this.selectOptionIndustry=page.getByLabel('Industry')
        this.selectOptionCompanySize=page.getByLabel('Company Size')
        this.buttonCreateAccount=page.getByRole('button', { name: 'Create Account' })
    }

    async RegisterAs(email:string, password:string, confirmPassword:string, fullName:string, 
        //country:string, 
        phoneNumber:string, companyName:string,
        selectOptionIndustry:string, selectOptionCompanySize:string) {
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.confirmPasswordField.fill(confirmPassword)
        await this.buttonNext.click()
        await this.fullName.fill(fullName)
        //await this.country.selectOption(country)
        await this.phoneNumber.fill(phoneNumber)
        await this.buttonNext.click()
        await this.companyName.fill(companyName)
        await this.selectOptionIndustry.selectOption(selectOptionIndustry)
        await this.selectOptionCompanySize.selectOption(selectOptionCompanySize)
        await this.buttonCreateAccount.click()
    }
}