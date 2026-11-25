import {test,expect} from "@playwright/test";

test.describe("group1",()=>{
    test("logout button visible" ,async({page}) =>
{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("manojrasetty2005@gmail.com");
    await page.locator("#Password").fill("manoj@012");
    await page.locator(".login-button").click();
    let logout= await page.locator(".ico-logout");
    await expect(logout).toBeVisible();
    await page.waitForTimeout(2000);
})
test("test add ",async({page})=>{
await page.goto(url);
await page.locator(".ico-login").click();
await page.locator("#Email").fill(email);
await page.locator("#Password").fill("pwd");
await page.locator(".login-button").click();   
await page.locator(".product-item").filter({hasText:"Health Book"}).locator(".add-to-cart-button").click();
})
})