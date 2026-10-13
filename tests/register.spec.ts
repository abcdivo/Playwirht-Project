import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register.page';
import { HomePage } from '../pages/home.page';

test('Register with valid credentials', async ({ page }) => {
  await page.goto('https://www.emra.chat/signup');
  
  const registerPage = new RegisterPage(page)
  const homePage = new HomePage(page)
  const email = 'customerdata11@yopmail.com'
  const password = 'Testing1234'
  const confirmPassword = 'Testing1234'
  const fullName = 'Fikrial Pane A'
  //const country ='Indonesia'
  const phoneNumber = '82143546623'
  const companyName = 'Bank Jawa Barat'
  const industry = 'finance'
  const companySize = '51-200'

  await registerPage.RegisterAs(email,password,confirmPassword,fullName,
    //country,
    phoneNumber,companyName,industry,companySize)

  await expect(page.getByText('Please verify your email')).toBeVisible();
});