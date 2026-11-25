import {test,expect} from "@playwright/test";
test('login test @sanity',async({page}) =>
{ 
await page.goto("https://demowebshop.tricentis.com/");    
await page.locator(".ico-login").click();
await page.locator("#Email").fill("manojrasetty2005@gmail.com");
await page.locator("#Password").fill("manoj@012");
await page.waitForTimeout(5000);
await page.locator(".login-button").click();

let logout=await page.locator(".ico-logout");
await expect(logout).toHaveText("Log out");

})