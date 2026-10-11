import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';


test('login with valid credentials', async ({ page }) => {
  await page.goto('https://www.emra.chat/login');
  const loginPage = new LoginPage(page)
  const email = 'testingemrachat@yopmail.com'
  const password ='tester!23'

  await loginPage.loginAs(email,password)
  await expect(page.getByRole('heading', { name: 'Welcome to Emra! 🎉' })).toBeVisible();
});

test('login with valid email and invalid password', async ({ page }) => {
  await page.goto('https://www.emra.chat/login');

  const loginPage = new LoginPage(page)
  const email = 'testingemrachat@yopmail.com'
  const password ='tester23'

  await loginPage.loginAs(email,password)
  await expect(loginPage.flashMessage).toBeVisible()
});

test('login with invalid email and valid password', async ({ page }) => {
  await page.goto('https://www.emra.chat/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('blablabla@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('tester!23');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByRole('listitem')).toBeVisible();
});

// test('login with empty email and valid password', async ({ page }) => {
//   await page.goto('https://www.emra.chat/login');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('tester!23');
//   await page.getByText('EmailPasswordForgot?Sign In').click();
// });
