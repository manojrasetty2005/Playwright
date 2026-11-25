import {test,expect} from "@playwright/test";
let url="https://demowebshop.tricentis.com/";
let email="manojrasetty2005@gmail.com";
let pwd="manoj@012";
test(" test books",async({page})=>{
    await page.goto(url);
    await page.locator(".ico-login").click();
await page.locator("#Email").fill(email);
await page.locator("#Password").fill("pwd");
await page.locator(".login-button").click();
await page.locator(`a[href='/books']`).first().click();
await page.locator(`h2 a[href='/health']`).first().click();
await page.locator("#add-to-cart-button-22").click();
let msg= await page.locator("#bar-notification");
await expect(msg).toContainText("The product has been added to your shopping cart");
})
test("test add ",async({page})=>{
await page.goto(url);
await page.locator(".ico-login").click();
await page.locator("#Email").fill(email);
await page.locator("#Password").fill("pwd");
await page.locator(".login-button").click();   
await page.locator(".product-item").filter({hasText:"Health Book"}).locator(".add-to-cart-button").click();
})