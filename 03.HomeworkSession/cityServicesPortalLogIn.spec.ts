import {test, expect} from  '@playwright/test';

//Navigate to the Login page
test('successful login city services', async ({page}) => {
    await page.goto('http://localhost:5173/');

//Expect to see fill in the email and password fields and click the submit button
await page.locator('input[type="email"]').fill('john@example.com');
await page.locator('input[type="password"]').fill('password123');
await page.locator('button[type="submit"]').click();

//Expect the user to be redirected to the dashboard page  
  await expect(page).toHaveURL(/\/dashboard$/);
});
