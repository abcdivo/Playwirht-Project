import { Locator, Page } from "@playwright/test";

export class RegisterPage{
    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly confirmPasswordField: Locator;
    readonly buttonNext: Locator;
    readonly fullName: Locator;
    readonly phoneNumber: Locator;
    readonly companyName: Locator;
    readonly selectOptionIndustry: Locator;
    readonly selectOptionCompanySize: Locator;
    readonly buttonCreateAccount: Locator;
    //readonly buttonNext2: Locator;

    constructor(page: Page){
        this.page=page
        this.emailField=page.locator('#email')
        this.passwordField=page.getByRole('textbox', { name: 'Password' })
        this.confirmPasswordField=page.getByRole('textbox', { name: 'confirmPassword' })
        this.buttonNext=page.getByRole('button', { name: 'Next' })
        this.fullName=page.getByRole('textbox', { name: 'Full Name' })
        this.phoneNumber=page.getByRole('textbox', { name: 'Phone Number' })
        //this.buttonNext2=page.getByRole('button', { name: 'Next' })
        this.companyName=page.getByRole('textbox', { name: 'Company Name' })
        this.selectOptionIndustry=page.getByLabel('Industry')
        this.selectOptionCompanySize=page.getByLabel('Company Size')
        this.buttonCreateAccount=page.getByRole('button', { name: 'Create Account' })
    }

    async RegisterAs(email:string, password:string, confirmPassword:string, fullName:string, phoneNumber:string, companyName:string,
        selectOptionIndustry:string, selectOptionCompanySize:string) {
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.confirmPasswordField.fill(confirmPassword)
        await this.buttonNext.click()
        await this.fullName.fill(fullName)
        await this.phoneNumber.fill(phoneNumber)
        await this.buttonNext.click()
        await this.companyName.fill(companyName)
        await this.selectOptionIndustry.fill(selectOptionIndustry)
        await this.selectOptionCompanySize.fill(selectOptionCompanySize)
        await this.buttonCreateAccount.click()
    }
}