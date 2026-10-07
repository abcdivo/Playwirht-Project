import { test, expect } from '@playwright/test';

test('login with valid credentials', async ({ page }) => {
  await page.goto('https://www.emra.chat/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testingemrachat@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('tester!23');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome to Emra! 🎉' })).toBeVisible();
});

test('login with valid email and invalid password', async ({ page }) => {
  await page.goto('https://www.emra.chat/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testingemrachat@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('tester!3');
  await page.getByRole('button', { name: 'Sign In' }).click();
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
