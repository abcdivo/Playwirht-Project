import { test, expect } from '@playwright/test';

test('Register with valid credentials', async ({ page }) => {
  await page.goto('https://www.emra.chat/login');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('customerdata02@yopmail.com');
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Bekasi123');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Bekasi123');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Pane A');
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('82156342211');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Company Name' }).click();
  await page.getByRole('textbox', { name: 'Company Name' }).fill('MASI');
  await page.getByLabel('Industry').selectOption('finance');
  await page.getByLabel('Company Size').selectOption('200+');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(page.getByText('Please verify your email')).toBeVisible();
});